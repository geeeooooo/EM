// Run: npm ci && npm run render:math
const fs=require('fs'),path=require('path'),vm=require('vm');
const {mathjax}=require('mathjax-full/js/mathjax.js');
const {TeX}=require('mathjax-full/js/input/tex.js');
const {SVG}=require('mathjax-full/js/output/svg.js');
const {liteAdaptor}=require('mathjax-full/js/adaptors/liteAdaptor.js');
const {RegisterHTMLHandler}=require('mathjax-full/js/handlers/html.js');
const {AllPackages}=require('mathjax-full/js/input/tex/AllPackages.js');
const root=path.resolve(__dirname,'..'),adaptor=liteAdaptor();RegisterHTMLHandler(adaptor);
const doc=mathjax.document('',{InputJax:new TeX({packages:AllPackages}),OutputJax:new SVG({fontCache:'none'})});
const equations=require('./equations.json'),ctx={};vm.runInNewContext(fs.readFileSync(path.join(root,'public/content.js'),'utf8')+';this.cards=CARDS',ctx);
fs.mkdirSync(path.join(root,'public/math'),{recursive:true});const index={},assets=[];let count=0;
for(const card of ctx.cards){
 if(card.id==='40')continue;
 if(equations[card.id]?.length!==card.equations.length)throw Error('Equation count mismatch '+card.id);
 index[card.id]=equations[card.id].map((tex,i)=>{
 const markup=adaptor.outerHTML(doc.convert(tex,{display:true}));
 if(/data-mjx-error|merror/.test(markup))throw Error('Invalid TeX '+card.id+': '+tex);
 let svg=markup.match(/<svg[\s\S]*<\/svg>/)[0].replace(/style="([^"]*)"/, 'style="color:#eaf2ef;$1"');
 const box=svg.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
 const file=`math/${card.id}-${i}.svg`;fs.writeFileSync(path.join(root,'public',file),svg);assets.push('./'+file);count++;
 return {src:file,width:box[2]/1000,height:box[3]/1000};
 });
}
fs.writeFileSync(path.join(root,'public/math-index.js'),'const MATH_IMAGES = '+JSON.stringify(index)+';\n');
const sw=path.join(root,'public/sw.js');let source=fs.readFileSync(sw,'utf8');source=source.replace(/const ASSETS=.*?;/,'const ASSETS='+JSON.stringify(['./','./index.html','./style.css','./app.js','./content.js','./math-index.js','./icon.svg',...assets])+';');fs.writeFileSync(sw,source);
console.log(`Rendered ${count} equations across ${Object.keys(index).length} cards.`);
