const CARDS = [
  {
    "id": "1",
    "group": "Foundations",
    "title": "Notation & SI units",
    "equations": [
      "E: V/m; B: tesla",
      "D: C/m²; H: A/m",
      "c = 1/√(ε₀μ₀)"
    ],
    "meaning": "Bold quantities in textbooks are vectors. Here E, B, D, H, J, A, r, p and m denote vectors when used in vector equations. ∇· is divergence; ∇× is curl. Partial derivatives hold position fixed.",
    "steps": "Use SI consistently. ρ is volume charge density, σ is surface charge density, λ is line charge density. ε and μ are absolute material parameters.",
    "pitfall": "Do not mix Gaussian and SI formulas. The symbol σ also denotes conductivity when explicitly stated.",
    "prompt": "What are the units of electric flux?"
  },
  {
    "id": "2",
    "group": "Foundations",
    "title": "Vector calculus",
    "equations": [
      "∮ E·da = ∫ (∇·E) dτ",
      "∮ E·dl = ∫ (∇×E)·da",
      "∇×(∇×E) = ∇(∇·E) − ∇²E"
    ],
    "meaning": "Divergence measures local outward flux. Curl measures local circulation. Gauss and Stokes connect differential and integral field laws.",
    "steps": "Choose a closed surface for divergence; an oriented open surface with boundary for curl. The surface normal and boundary direction obey the right-hand rule.",
    "pitfall": "A vanishing divergence does not imply a vanishing field. A curl-free field is globally a gradient only with suitable topology.",
    "prompt": "Why does ∇·B = 0 not imply B = 0?"
  },
  {
    "id": "3",
    "group": "Foundations",
    "title": "Lorentz force",
    "equations": [
      "F = q(E + v×B)",
      "P = F·v = q E·v",
      "r = mv⊥/(|q|B)"
    ],
    "meaning": "Electric fields can change kinetic energy. Magnetic forces bend motion but do no work on a point charge.",
    "steps": "For a uniform magnetic field, split velocity into parallel and perpendicular parts. The parallel part stays constant; the perpendicular part circles.",
    "pitfall": "The radius formula is nonrelativistic. At relativistic speed replace mv⊥ by p⊥.",
    "prompt": "Explain helical motion in a uniform magnetic field."
  },
  {
    "id": "4",
    "group": "Maxwell",
    "title": "Maxwell: microscopic",
    "equations": [
      "∇·E = ρ/ε₀",
      "∇·B = 0",
      "∇×E = −∂B/∂t",
      "∇×B = μ₀J + μ₀ε₀ ∂E/∂t"
    ],
    "meaning": "Charge sources electric flux. Magnetic flux has no sources. Changing B drives circulating E. Current and changing E drive circulating B.",
    "steps": "These equations use total charge and current, including bound sources. Pair them with the Lorentz force and material/source dynamics.",
    "pitfall": "Maxwell equations alone do not specify matter response or boundary and initial data.",
    "prompt": "State the physical meaning of each Maxwell equation."
  },
  {
    "id": "5",
    "group": "Maxwell",
    "title": "Maxwell: integral",
    "equations": [
      "∮ E·da = Qenc/ε₀",
      "∮ B·da = 0",
      "∮ E·dl = −dΦB/dt",
      "∮ B·dl = μ₀Ienc + μ₀ε₀ dΦE/dt"
    ],
    "meaning": "Integral laws connect fields to enclosed sources and changing flux.",
    "steps": "Use a fixed loop and fixed spanning surface for these induction formulas. Choose symmetry before pulling a field outside an integral.",
    "pitfall": "For a moving circuit the emf is ∮(E + vwire×B)·dl; the electric circulation alone is insufficient.",
    "prompt": "Why can Ampère’s loop use either side of a charging capacitor?"
  },
  {
    "id": "6",
    "group": "Maxwell",
    "title": "Charge conservation",
    "equations": [
      "∂ρ/∂t + ∇·J = 0",
      "dQ/dt = −∮ J·da"
    ],
    "meaning": "Charge leaving a volume reduces its charge. This local conservation law follows from Ampère–Maxwell and Gauss.",
    "steps": "Take divergence of Ampère–Maxwell. Use divergence of a curl = 0, then substitute ∇·E = ρ/ε₀.",
    "pitfall": "Dropping displacement current in a time-dependent problem can violate charge conservation.",
    "prompt": "Derive the continuity equation from Maxwell’s equations."
  },
  {
    "id": "7",
    "group": "Maxwell",
    "title": "Fields in matter",
    "equations": [
      "D = ε₀E + P",
      "H = B/μ₀ − M",
      "∇·D = ρfree",
      "∇×H = Jfree + ∂D/∂t"
    ],
    "meaning": "Polarization P describes electric dipole density. Magnetization M describes magnetic dipole density. D and H separate free sources from bound sources.",
    "steps": "For linear isotropic media, D = εE and B = μH. Use constitutive relations only when their assumptions hold.",
    "pitfall": "D is not always parallel to E; ε may be a tensor, frequency dependent or nonlinear.",
    "prompt": "Why does Gauss’s law for D use free charge only?"
  },
  {
    "id": "8",
    "group": "Maxwell",
    "title": "Bound sources",
    "equations": [
      "ρb = −∇·P; σb = P·n̂",
      "Jb = ∇×M + ∂P/∂t",
      "Kb = M×n̂"
    ],
    "meaning": "Spatial variation of polarization creates bound charge. Magnetization and time-changing polarization create bound currents.",
    "steps": "n̂ points outward from the material. Include both volume and surface terms when replacing material response by equivalent sources.",
    "pitfall": "Uniform P can have zero volume charge and nonzero surface charge.",
    "prompt": "Find the bound charges on a uniformly polarized sphere."
  },
  {
    "id": "9",
    "group": "Electrostatics",
    "title": "Coulomb & potential",
    "equations": [
      "E(r) = (1/4πε₀) ∫ ρ(r′) R̂/R² dτ′",
      "V(r) = (1/4πε₀) ∫ ρ(r′)/R dτ′",
      "E = −∇V; R = |r−r′|"
    ],
    "meaning": "In electrostatics the electric field is conservative and potential differences give work per unit charge.",
    "steps": "Choose the source element dq, write source-to-observation displacement, exploit symmetry, integrate, and check far-field behavior.",
    "pitfall": "For an infinite line or plane, V cannot generally be set to zero at infinity. Choose a finite reference.",
    "prompt": "Why is potential often easier to integrate than the field?"
  },
  {
    "id": "10",
    "group": "Electrostatics",
    "title": "Gauss: common symmetries",
    "equations": [
      "Sphere outside: E = Q/(4πε₀r²)",
      "Infinite line: E = λ/(2πε₀r)",
      "Infinite sheet: |E| = |σ|/(2ε₀)"
    ],
    "meaning": "These magnitudes follow only when symmetry fixes direction and makes the field constant on the useful parts of a Gaussian surface.",
    "steps": "Choose sphere, coaxial cylinder or pillbox. Compute enclosed charge at the observation radius, then solve the flux equation.",
    "pitfall": "Gauss’s law always holds, but an arbitrary surface does not make E constant.",
    "prompt": "Find E inside a uniformly charged solid sphere."
  },
  {
    "id": "11",
    "group": "Electrostatics",
    "title": "Poisson & Laplace",
    "equations": [
      "∇²V = −ρ/ε₀",
      "ρ = 0 ⇒ ∇²V = 0"
    ],
    "meaning": "Potential obeys Poisson’s equation in vacuum and Laplace’s equation in charge-free regions. Boundary data selects the solution.",
    "steps": "Identify each region; solve its PDE; match boundary conditions; apply behavior at infinity. Dirichlet data fixes V uniquely. Neumann data fixes it up to a constant with compatibility.",
    "pitfall": "ρ = 0 does not imply V = 0. Distant charges can produce a field in the region.",
    "prompt": "Explain why boundary values can determine an entire electrostatic field."
  },
  {
    "id": "12",
    "group": "Electrostatics",
    "title": "Separation in a sphere",
    "equations": [
      "V(r,θ) = Σₗ [Aₗrˡ + Bₗ/rˡ⁺¹] Pₗ(cosθ)"
    ],
    "meaning": "This is the axisymmetric solution of Laplace’s equation in spherical coordinates, where l = 0,1,2,… .",
    "steps": "Discard B terms in a region containing r = 0 if no singularity exists. Discard growing A terms at infinity when the physical boundary condition requires decay. Expand boundary data in Legendre polynomials.",
    "pitfall": "An imposed uniform field requires a growing l = 1 potential term at infinity; do not discard it blindly.",
    "prompt": "Which term represents a uniform electric field along z?"
  },
  {
    "id": "13",
    "group": "Electrostatics",
    "title": "Method of images",
    "equations": [
      "Image of q at z=a: −q at z=−a",
      "Fz = −q²/(16πε₀a²)"
    ],
    "meaning": "A grounded infinite conducting plane at z = 0 can be replaced mathematically by an image charge when solving the physical region z > 0.",
    "steps": "Construct V using real and image charges. Check V = 0 on the plane and the far boundary. Invoke uniqueness, then evaluate the image field at q.",
    "pitfall": "Images are not physical charges. Energy is half the real charge times its image potential: U = −q²/(16πε₀a).",
    "prompt": "Why is the image method valid only in the selected physical region?"
  },
  {
    "id": "14",
    "group": "Electrostatics",
    "title": "Conductors & capacitance",
    "equations": [
      "Electrostatic conductor: Einside = 0",
      "Eoutside·n̂ = σ/ε₀ (vacuum)",
      "C = Q/ΔV",
      "U = Q²/(2C) = ½C(ΔV)²"
    ],
    "meaning": "An equilibrium conductor is equipotential. Excess charge resides on its surface. Capacitance relates opposite charges on a two-conductor capacitor to potential difference.",
    "steps": "Find E for the geometry, integrate ΔV, then divide Q by ΔV. Parallel plates with negligible edges: C = εA/d.",
    "pitfall": "A conductor in a time-varying field need not have E = 0. A battery can exchange energy during mechanical motion.",
    "prompt": "Why do isolated and battery-connected capacitor problems have different energy changes?"
  },
  {
    "id": "15",
    "group": "Electrostatics",
    "title": "Electric dipoles & multipoles",
    "equations": [
      "p = ∫ r′ρ(r′) dτ′",
      "V ≈ (1/4πε₀)[Q/r + (p·r̂)/r²]",
      "E dip = [3(p·r̂)r̂ − p]/(4πε₀r³)",
      "τ = p×E; U = −p·E"
    ],
    "meaning": "Far from a localized distribution, monopole, dipole and higher terms organize the field in powers of source size divided by distance.",
    "steps": "Compute total Q first. If Q = 0, compute p. Use the first nonzero term for the leading far field.",
    "pitfall": "The dipole approximation requires distance much larger than source size. p depends on origin if Q ≠ 0.",
    "prompt": "Why does a neutral localized source often have an r⁻³ electric field?"
  },
  {
    "id": "16",
    "group": "Interfaces",
    "title": "Boundary conditions",
    "equations": [
      "n̂·(D₂−D₁) = σfree",
      "n̂·(B₂−B₁) = 0",
      "n̂×(E₂−E₁) = 0",
      "n̂×(H₂−H₁) = Kfree"
    ],
    "meaning": "At a stationary ordinary interface, normal D jumps with free surface charge and tangential H jumps with free surface current. Normal B and tangential E are continuous.",
    "steps": "Take n̂ from region 1 into region 2. Derive normal relations with a thin pillbox and tangential relations with a shrinking rectangular loop.",
    "pitfall": "These forms assume nonsingular time-varying fluxes at the interface. Tangential E continuity does not mean normal E is continuous.",
    "prompt": "Derive the normal D condition using a pillbox."
  },
  {
    "id": "17",
    "group": "Magnetostatics",
    "title": "Biot–Savart & Ampère",
    "equations": [
      "B = (μ₀/4π) ∫ J(r′)×R̂/R² dτ′",
      "∮ B·dl = μ₀Ienc",
      "Wire: B = μ₀I/(2πr)",
      "Long solenoid: B ≈ μ₀nI"
    ],
    "meaning": "Steady currents produce magnetic fields. Ampère’s law becomes an easy algebraic solution only with sufficient symmetry.",
    "steps": "Use Biot–Savart for a general loop. For an infinite wire choose a circular Amperian loop; for a long solenoid use a rectangle.",
    "pitfall": "Steady current requires ∇·J = 0. A finite isolated current segment cannot sustain steady current by itself.",
    "prompt": "Why is the field outside an ideal infinite solenoid zero?"
  },
  {
    "id": "18",
    "group": "Magnetostatics",
    "title": "Vector potential",
    "equations": [
      "B = ∇×A",
      "Coulomb gauge: ∇·A = 0",
      "∇²A = −μ₀J (magnetostatics)",
      "A = (μ₀/4π) ∫ J(r′)/R dτ′"
    ],
    "meaning": "The vector potential automatically enforces zero magnetic divergence. Gauge freedom means different A fields may describe the same B.",
    "steps": "In unbounded vacuum with localized steady current, use the integral solution, then curl A. Account for boundary conditions in bounded domains.",
    "pitfall": "A is not unique. The stated Poisson equation assumes the Coulomb gauge and steady sources.",
    "prompt": "How does A change without changing B?"
  },
  {
    "id": "19",
    "group": "Magnetostatics",
    "title": "Magnetic dipole & force",
    "equations": [
      "m = I a n̂ (planar loop)",
      "τ = m×B; U = −m·B",
      "F = ∇(m·B) (fixed m)",
      "B dip = μ₀[3(m·r̂)r̂−m]/(4πr³)"
    ],
    "meaning": "A small current loop behaves as a magnetic dipole. A uniform field can produce torque; a nonuniform field can also produce net force.",
    "steps": "Use the right-hand rule to orient m. Apply the dipole approximation only far from the source and where external B varies slowly across the loop.",
    "pitfall": "The dipole field shown is the exterior field, not the distributional field at the origin.",
    "prompt": "Can a uniform magnetic field exert a net force on a localized closed current loop?"
  },
  {
    "id": "20",
    "group": "Induction",
    "title": "Faraday & Lenz",
    "equations": [
      "ℰ = ∮(E+vwire×B)·dl",
      "ℰ = −dΦB/dt",
      "ΦB = ∫ B·da"
    ],
    "meaning": "Emf is work per unit charge around a circuit. It can arise from a time-varying field or motion through a field. Lenz’s sign opposes the change in linked flux.",
    "steps": "Choose a loop orientation and its right-hand normal. Differentiate the linked flux including geometry changes. For ordinary smoothly moving circuits the flux rule gives total emf.",
    "pitfall": "Induced current opposes the flux change, not necessarily the magnetic field itself. Sliding-contact geometries require careful circuit definition.",
    "prompt": "A loop enters a field region. Which way does its induced current flow?"
  },
  {
    "id": "21",
    "group": "Induction",
    "title": "Inductance",
    "equations": [
      "Flux linkage = LI",
      "ℰself = −L dI/dt",
      "U = ½LI²",
      "ℰ₂ = −M dI₁/dt"
    ],
    "meaning": "Inductance measures flux linkage per current in a linear fixed geometry. Mutual inductance measures coupling between circuits.",
    "steps": "Compute B, flux per turn and total linked flux. In a passive pair, |M| ≤ √(L₁L₂); signs depend on winding orientations.",
    "pitfall": "For N turns, flux linkage is NΦ, not Φ. Nonlinear materials can make L current dependent.",
    "prompt": "Derive L for a long solenoid and its stored energy."
  },
  {
    "id": "22",
    "group": "Energy",
    "title": "Poynting theorem",
    "equations": [
      "u = ½ε₀E² + B²/(2μ₀)",
      "S = E×B/μ₀",
      "∂u/∂t + ∇·S = −J·E"
    ],
    "meaning": "Field energy decreases when it flows out or does work on charges. S gives energy flux; J·E gives power transferred to matter per volume.",
    "steps": "Dot Ampère–Maxwell with E and Faraday with B/μ₀. Subtract and use ∇·(E×B) = B·(∇×E) − E·(∇×B).",
    "pitfall": "In material media, ½(E·D+B·H) requires linear, nondispersive, lossless response for the usual stored-energy interpretation.",
    "prompt": "Where does the energy entering a resistor flow?"
  },
  {
    "id": "23",
    "group": "Energy",
    "title": "Momentum & stress",
    "equations": [
      "g = S/c² = ε₀ E×B",
      "Tᵢⱼ = ε₀(EᵢEⱼ−½δᵢⱼE²) + (BᵢBⱼ−½δᵢⱼB²)/μ₀",
      "Fmatter = ∮ T·n̂ da − d/dt ∫ g dτ"
    ],
    "meaning": "Electromagnetic fields carry momentum. The Maxwell stress tensor accounts for field stresses across a closed surface.",
    "steps": "Use vacuum fields and an outward surface normal. Include the time derivative of field momentum when the fields are not steady.",
    "pitfall": "The vacuum momentum expression should not be applied blindly to macroscopic media; material momentum also matters.",
    "prompt": "Why can light exert pressure although it has no rest mass?"
  },
  {
    "id": "24",
    "group": "Waves",
    "title": "Vacuum wave equation",
    "equations": [
      "∇²E − (1/c²)∂²E/∂t² = 0",
      "∇²B − (1/c²)∂²B/∂t² = 0"
    ],
    "meaning": "In source-free vacuum, changing electric and magnetic fields support propagating electromagnetic waves.",
    "steps": "Curl Faraday; substitute Ampère–Maxwell; use the curl-curl identity and ∇·E = 0. Repeat for B.",
    "pitfall": "This homogeneous form assumes ρ = 0 and J = 0. With sources the equation has driving terms.",
    "prompt": "Derive the electric wave equation step by step."
  },
  {
    "id": "25",
    "group": "Waves",
    "title": "Plane waves",
    "equations": [
      "E = E₀ cos(k·r−ωt+φ)",
      "ω = ck; k·E₀ = k·B₀ = 0",
      "B = k̂×E/c",
      "⟨S⟩ = ½ε₀cE₀² k̂"
    ],
    "meaning": "A vacuum plane wave is transverse. E, B and propagation direction form a right-handed triad. E and B are in phase.",
    "steps": "Apply divergence equations to prove transversality, then Faraday to fix the magnetic amplitude and direction.",
    "pitfall": "E₀ here is peak amplitude; with RMS amplitude the factor ½ is absent. General fields need not satisfy E = cB.",
    "prompt": "What happens to B when the propagation direction reverses?"
  },
  {
    "id": "26",
    "group": "Waves",
    "title": "Polarization",
    "equations": [
      "Eₓ = A cosψ",
      "Eᵧ = B cos(ψ+δ)",
      "ψ = kz−ωt"
    ],
    "meaning": "The tip of the electric vector traces a line, ellipse or circle at a fixed point. Polarization describes this transverse motion.",
    "steps": "δ = 0 or π gives linear polarization. Equal nonzero amplitudes and δ = ±π/2 give circular polarization. Other generic combinations give elliptical polarization.",
    "pitfall": "Right/left circular labels depend on the viewing and phase convention; state the convention before assigning handedness.",
    "prompt": "Which amplitudes and phases make a circularly polarized wave?"
  },
  {
    "id": "27",
    "group": "Waves",
    "title": "Reflection at normal incidence",
    "equations": [
      "Z = √(μ/ε)",
      "rE = (Z₂−Z₁)/(Z₂+Z₁)",
      "tE = 2Z₂/(Z₁+Z₂)",
      "R = |rE|²; T = (Z₁/Z₂)|tE|²"
    ],
    "meaning": "For lossless positive-index media at normal incidence, impedance mismatch reflects part of a wave. rE and tE refer to electric-field amplitudes.",
    "steps": "Enforce tangential E and H continuity with no free surface current. Reverse the H direction for the reflected wave. Check R+T = 1.",
    "pitfall": "T is not generally |tE|² because the transmitted impedance differs. These power formulas assume real positive impedances.",
    "prompt": "Why can tE exceed one without violating energy conservation?"
  },
  {
    "id": "28",
    "group": "Waves",
    "title": "Oblique incidence",
    "equations": [
      "n₁ sinθᵢ = n₂ sinθₜ",
      "θreflected = θᵢ",
      "tanθB = n₂/n₁ (μ₁ = μ₂)",
      "sinθc = n₂/n₁ (n₁ > n₂)"
    ],
    "meaning": "Phase matching along the interface gives Snell’s law. Fresnel amplitudes depend on polarization. Brewster incidence suppresses p-polarized reflection for ordinary lossless nonmagnetic dielectrics.",
    "steps": "Angles are measured from the normal. Resolve fields into s (E perpendicular to incidence plane) and p (E in that plane), then match tangential fields.",
    "pitfall": "The critical angle applies from higher to lower index. Under total internal reflection the second medium has an evanescent field, not zero field.",
    "prompt": "What is the difference between Brewster angle and critical angle?"
  },
  {
    "id": "29",
    "group": "Waves",
    "title": "Conductors & skin depth",
    "equations": [
      "J = σE",
      "∇²E = με ∂²E/∂t² + μσ ∂E/∂t",
      "δ = √[2/(μσω)]"
    ],
    "meaning": "In a good conductor, oscillating fields decay over the skin depth δ. Energy is dissipated through Joule heating.",
    "steps": "For e^(−iωt), use k² = μεω² + iμσω. In the good-conductor limit σ ≫ ωε, k ≈ (1+i)/δ for a wave proportional to e^(ikz).",
    "pitfall": "The skin-depth approximation fails outside the good-conductor regime. Here σ means conductivity, not surface charge.",
    "prompt": "Why does high-frequency current concentrate near a conductor’s surface?"
  },
  {
    "id": "30",
    "group": "Waves",
    "title": "Waveguides & cutoff",
    "equations": [
      "β² = ω²με − kc²",
      "TE: Ez = 0; TM: Hz = 0",
      "Rectangular kc² = (mπ/a)²+(nπ/b)²",
      "ωc = kc/√(με)"
    ],
    "meaning": "Conducting walls enforce boundary conditions that permit discrete transverse modes. Propagation along the guide requires real β.",
    "steps": "For a hollow rectangular perfect-conductor guide, TE has m,n ≥ 0 but not both zero; TM requires m,n ≥ 1. The dominant mode for a > b is TE₁₀.",
    "pitfall": "A simply connected hollow guide has no TEM mode. Below cutoff the mode is evanescent.",
    "prompt": "Why does a hollow waveguide have a minimum propagation frequency?"
  },
  {
    "id": "31",
    "group": "Potentials",
    "title": "Gauge transformations",
    "equations": [
      "B = ∇×A",
      "E = −∇V − ∂A/∂t",
      "A′ = A + ∇χ",
      "V′ = V − ∂χ/∂t"
    ],
    "meaning": "Physical electric and magnetic fields are unchanged by gauge transformations. Potentials are useful but not uniquely determined.",
    "steps": "Substitute the transformed potentials into E and B. The mixed derivatives cancel in E and the curl of a gradient vanishes in B.",
    "pitfall": "E = −∇V alone applies only when the induction term can be omitted.",
    "prompt": "Verify explicitly that a gauge transformation preserves E."
  },
  {
    "id": "32",
    "group": "Potentials",
    "title": "Lorenz gauge & retardation",
    "equations": [
      "∇·A + (1/c²)∂V/∂t = 0",
      "(∇²−c⁻²∂t²)V = −ρ/ε₀",
      "(∇²−c⁻²∂t²)A = −μ₀J",
      "V = (1/4πε₀) ∫ ρ(r′,t−R/c)/R dτ′"
    ],
    "meaning": "In the Lorenz gauge, potentials obey driven wave equations. Retarded solutions encode finite-speed propagation from sources.",
    "steps": "The companion expression is A = (μ₀/4π)∫J(r′,t−R/c)/R dτ′. These select outgoing/causal solutions without additional incoming homogeneous fields.",
    "pitfall": "Lorenz gauge is named after Ludvig Lorenz. Retarded time depends on source-observer separation inside the integral.",
    "prompt": "Why are instantaneous Coulomb potentials insufficient for general time-dependent sources?"
  },
  {
    "id": "33",
    "group": "Radiation",
    "title": "Electric dipole radiation",
    "equations": [
      "Erad = [n̂×(n̂×p̈)]/(4πε₀c²r)",
      "Brad = n̂×Erad/c",
      "P = |p̈|²/(6πε₀c³)"
    ],
    "meaning": "An accelerating dipole produces transverse far-zone fields proportional to 1/r and radiated flux proportional to 1/r². Evaluate p̈ at retarded time t−r/c.",
    "steps": "Use a localized, nonrelativistic electric-dipole source with size much less than a wavelength and observation distance in the radiation zone. Integrate the sin²θ pattern over solid angle.",
    "pitfall": "The total-power formula is instantaneous in retarded source time. For p = p₀cosωt, average P = p₀²ω⁴/(12πε₀c³).",
    "prompt": "Why does dipole radiation vanish along the dipole axis?"
  },
  {
    "id": "34",
    "group": "Radiation",
    "title": "Larmor & radiation pressure",
    "equations": [
      "P = q²a²/(6πε₀c³)",
      "Absorber: pressure = I/c",
      "Perfect reflector: pressure = 2I/c"
    ],
    "meaning": "A nonrelativistic accelerating point charge radiates. Light transfers momentum to surfaces; reflection can transfer twice the incident normal momentum.",
    "steps": "Use the Larmor expression only for v ≪ c. The pressure formulas assume normal incidence in vacuum and ideal complete absorption or reflection.",
    "pitfall": "Constant velocity alone does not cause vacuum radiation from an isolated charge. The relativistic radiation formula is different.",
    "prompt": "Why does reflection double radiation pressure at normal incidence?"
  },
  {
    "id": "35",
    "group": "Relativity",
    "title": "Field transformations",
    "equations": [
      "E′∥ = E∥; B′∥ = B∥",
      "E′⊥ = γ(E⊥ + v×B)",
      "B′⊥ = γ(B⊥ − v×E/c²)",
      "γ = 1/√(1−v²/c²)"
    ],
    "meaning": "Electric and magnetic fields mix under Lorentz boosts. These formulas describe frame S′ moving with velocity v relative to S.",
    "steps": "Split each field parallel and perpendicular to v, apply the transformation, then recombine. Sources and forces must be transformed consistently.",
    "pitfall": "Do not confuse a change of observer with a particle’s velocity inside one fixed frame.",
    "prompt": "Can a purely electric field in one frame have a magnetic component in another?"
  },
  {
    "id": "36",
    "group": "Relativity",
    "title": "Lorentz invariants",
    "equations": [
      "E·B is invariant",
      "E²−c²B² is invariant"
    ],
    "meaning": "These combinations have the same value in every inertial frame. They constrain whether a field can be transformed to a purely electric or purely magnetic one.",
    "steps": "For nonzero fields with E·B = 0: positive E²−c²B² allows a pure-electric frame; negative allows a pure-magnetic frame. A nonzero null field has neither.",
    "pitfall": "A vacuum plane wave has both invariants zero, but its fields cannot be transformed away.",
    "prompt": "Why can no inertial observer see a plane electromagnetic wave at rest?"
  },
  {
    "id": "37",
    "group": "Worked examples",
    "title": "Uniform charged sphere",
    "equations": [
      "r < a: E = ρr/(3ε₀) r̂",
      "r ≥ a: E = Q/(4πε₀r²) r̂",
      "Q = 4πρa³/3"
    ],
    "meaning": "A solid nonconducting sphere of radius a has uniform volume charge density ρ.",
    "steps": "1. Spherical symmetry gives radial E. 2. Inside, Qenc = 4πρr³/3. 3. E(4πr²) = Qenc/ε₀. 4. Outside, enclose all Q. 5. Verify E is continuous at a and zero at the center.",
    "pitfall": "For a conducting sphere in electrostatic equilibrium, interior E is zero instead; charge resides on the surface.",
    "prompt": "Derive the potential inside, taking V(∞) = 0. Answer: Q(3−r²/a²)/(8πε₀a)."
  },
  {
    "id": "38",
    "group": "Worked examples",
    "title": "Charging capacitor",
    "equations": [
      "E ≈ Q/(ε₀πa²)",
      "r < a: B = μ₀Ir/(2πa²)",
      "r > a: B = μ₀I/(2πr)"
    ],
    "meaning": "A circular parallel-plate capacitor of radius a is charged with current I. Neglect fringing and use the quasistatic approximation.",
    "steps": "1. Choose a coaxial circle in the gap. 2. Enclosed electric flux for r < a is Eπr². 3. Use I = dQ/dt. 4. Ampère–Maxwell gives B2πr = μ₀I r²/a². 5. Outside use the full plate flux.",
    "pitfall": "There is no conduction current across an ideal vacuum gap; displacement current accounts for the magnetic circulation.",
    "prompt": "Show that the displacement current through the whole gap equals I."
  },
  {
    "id": "39",
    "group": "Worked examples",
    "title": "Boundary: two dielectrics",
    "equations": [
      "ε₁E₁n = ε₂E₂n",
      "E₁t = E₂t",
      "tanθ₂/tanθ₁ = ε₂/ε₁"
    ],
    "meaning": "Two linear isotropic dielectrics meet with no free surface charge. θ is the angle between E and the normal, not a ray propagation angle.",
    "steps": "1. Split E into normal and tangential components. 2. Apply normal D continuity. 3. Apply tangential E continuity. 4. Divide Et by En to obtain the angle relation.",
    "pitfall": "This is a relation for electrostatic field lines. It is not Snell’s law for propagating waves.",
    "prompt": "If ε₂ > ε₁, do the field lines in medium 2 lean toward or away from the normal?"
  },
  {
    "id": "40",
    "group": "Exam method",
    "title": "How to structure a solution",
    "equations": [
      "Geometry → assumptions → laws",
      "Symmetry → equations → boundaries",
      "Solve → units → limiting cases"
    ],
    "meaning": "A strong exam solution explains why the selected law and approximations apply, then carries out the mathematics.",
    "steps": "Name the regime (static, quasistatic, wave, radiation), coordinate system, material model and sources. Write the governing equations, justify symmetry, impose boundaries and test the result.",
    "pitfall": "A memorized formula without its geometry, regime and boundary conditions can be incorrect even if the algebra is flawless.",
    "prompt": "Can you explain the physical meaning of every term in your final equation?"
  }
];
