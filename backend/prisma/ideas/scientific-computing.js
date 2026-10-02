module.exports = {
  domain: 'Scientific Computing',
  ideas: `
# Simulation
Epidemic Spread Simulator | I | 6 | Simulates disease spread with SIR and SEIR models and shows the effect of interventions. | Python, NumPy, Plotly | SIR and SEIR models; Parameter controls; Intervention scenarios; Interactive charts
Traffic Flow Simulation | I | 7 | Simulates cars on roads and intersections to study congestion. | Python, Pygame or SimPy | Road network; Car-following model; Signal timing; Congestion metrics
N-body Gravity Simulation | I | 6 | Simulates planets and stars under gravity with different integration methods. | Python or C++, OpenGL | Force calculation; Integrators; Energy conservation check; Visualisation
Fluid Simulation in 2D | A | 9 | Simulates smoke or water in 2D using a grid-based solver. | C++ or JavaScript, WebGL | Navier-Stokes solver; Advection and diffusion; Interaction; Rendering
Cellular Automata Explorer | B | 4 | Explores Conway's Game of Life and other cellular automata rules. | JavaScript, Canvas | Grid simulation; Rule editor; Patterns library; Speed control
Forest Fire Spread Model | I | 6 | Models how fire spreads across terrain with wind and moisture. | Python, NumPy, Matplotlib | Terrain grid; Spread rules; Wind effects; Scenario comparison
Queueing System Simulator for Banks and Hospitals | I | 5 | Simulates customer queues to find the right number of counters. | Python, SimPy | Arrival and service distributions; Counter configurations; Wait time stats; Recommendations
Crowd Evacuation Simulation | A | 8 | Simulates people evacuating a building to find bottlenecks. | Python, Mesa | Agent model; Floor plans; Exit choice; Bottleneck analysis
Predator-Prey Ecosystem Simulation | B | 5 | Simulates predator and prey populations with Lotka-Volterra and agent models. | Python, Matplotlib | Differential equations; Agent-based version; Comparison; Parameter sliders
Projectile Motion Lab | B | 3 | An interactive simulation of projectile motion with air resistance. | JavaScript, p5.js | Launch controls; Air resistance; Trajectory plots; Data export
Heat Conduction Simulation | I | 6 | Solves the heat equation on a plate and visualises temperature over time. | Python, NumPy, Matplotlib | Finite difference method; Boundary conditions; Animation; Stability analysis
Electric Circuit Simulator | I | 7 | Solves DC and transient circuits with resistors, capacitors and inductors. | Python, NumPy | Netlist input; Nodal analysis; Transient simulation; Plots
Pendulum and Chaos Visualiser | B | 4 | Shows simple and double pendulum motion and sensitivity to initial conditions. | JavaScript, Canvas | Equations of motion; Numerical integration; Trails; Comparison mode
Solar System Orbit Simulator | I | 5 | Simulates planetary orbits using real orbital data. | Python, Astropy, Matplotlib | Orbital elements; Simulation; 3D plot; Date selection
Water Distribution Network Simulation | A | 8 | Models pressure and flow in a town's water pipe network. | Python, WNTR | Network model; Demand patterns; Leak scenarios; Pressure maps
Monte Carlo Estimation Lab | B | 3 | Demonstrates Monte Carlo methods for estimating pi, integrals and probabilities. | Python, NumPy, Streamlit | Sampling experiments; Convergence plots; Error analysis; Interactive controls

# Numerical methods and maths
Numerical Methods Toolkit | B | 5 | Implements root finding, interpolation and numerical integration with step-by-step output. | Python, NumPy, Streamlit | Bisection and Newton methods; Interpolation; Integration; Error tables
Linear Algebra Visualiser | B | 5 | Visualises matrix transformations, eigenvectors and projections. | JavaScript, Three.js | 2D and 3D transformations; Eigenvectors; Projections; Lessons
Symbolic Calculator | I | 6 | Solves equations, simplifies expressions and shows steps. | Python, SymPy, Flask | Expression input; Simplification; Equation solving; Step display
Fourier Transform Explorer | I | 5 | Shows how signals are built from sine waves with interactive FFT. | Python, NumPy, Plotly | Signal generator; FFT; Filtering; Reconstruction
Optimisation Algorithms Visualiser | I | 5 | Compares gradient descent, momentum and Adam on test functions. | Python, Matplotlib | Test functions; Optimiser implementations; Path animation; Convergence comparison
Graph Theory Problem Solver | I | 6 | Solves shortest path, colouring and matching problems with visual output. | Python, NetworkX, Streamlit | Graph input; Algorithms; Visual results; Complexity notes
Statistical Distribution Explorer | B | 3 | Interactive plots of common probability distributions and their parameters. | Python, Streamlit, SciPy | Distribution list; Parameter sliders; PDF and CDF plots; Sampling
Differential Equation Solver with Plots | I | 6 | Solves ODEs numerically and plots solutions and phase portraits. | Python, SciPy, Matplotlib | Equation input; Solver methods; Phase portraits; Comparison with exact solutions
Sparse Matrix Library | A | 8 | Implements sparse matrix formats and operations with benchmarks. | C++ | CSR and COO formats; Multiplication; Solvers; Benchmarks
Parallel Matrix Multiplication Study | A | 8 | Compares serial, multi-threaded and GPU matrix multiplication performance. | C++, OpenMP, CUDA | Implementations; Benchmarks; Scaling analysis; Report

# High-performance and quantum computing
GPU Image Processing with CUDA | A | 8 | Speeds up image filters with CUDA and compares with CPU versions. | C++, CUDA | Kernel implementations; Memory optimisation; Benchmarks; Report
Parallel Sorting with MPI | A | 8 | Implements distributed sorting across multiple processes with MPI. | C, MPI | Sample sort; Communication patterns; Scaling tests; Report
OpenMP Performance Study | I | 6 | Parallelises numerical loops and studies speed-up and overheads. | C, OpenMP | Baseline code; Parallel versions; Scheduling options; Speed-up charts
Quantum Circuit Simulator | A | 9 | Simulates small quantum circuits with gates and measurement. | Python, NumPy | State vectors; Gate matrices; Measurement; Circuit drawing
Quantum Algorithms Demonstrations | A | 8 | Implements Deutsch-Jozsa, Grover and teleportation on a quantum SDK. | Python, Qiskit | Circuit design; Simulation; Real hardware run if available; Explanations
Quantum Key Distribution Simulation | I | 6 | Simulates the BB84 protocol including an eavesdropper. | Python, Qiskit | Protocol steps; Eavesdropper detection; Error rates; Visual explanation

# Science applications
Protein Structure Viewer | I | 6 | Loads protein structures from PDB files and displays them in 3D. | JavaScript, Three.js or NGL | PDB parsing; 3D rendering; Colour schemes; Measurements
DNA Sequence Analysis Toolkit | B | 5 | Finds GC content, motifs and translations for DNA sequences. | Python, Biopython, Streamlit | FASTA input; Sequence statistics; Motif search; Translation
Sequence Alignment Visualiser | I | 6 | Implements Needleman-Wunsch and Smith-Waterman alignment with the scoring matrix shown. | Python, Streamlit | Scoring options; Dynamic programming table; Traceback; Alignment output
Molecular Dynamics Mini Simulation | A | 9 | Simulates simple molecules with Lennard-Jones forces. | Python or C++, NumPy | Force field; Integrator; Temperature control; Visualisation
Seismic Data Visualisation | I | 6 | Visualises earthquake data from public catalogues on maps and timelines. | Python, ObsPy, Folium | Data download; Event maps; Magnitude statistics; Timeline
Telescope Image Processing Pipeline | I | 6 | Stacks and enhances astrophotography images to reduce noise. | Python, Astropy, OpenCV | Image alignment; Stacking; Noise reduction; Before and after
Exoplanet Transit Detection | A | 8 | Searches telescope light curves for planets passing in front of stars. | Python, Lightkurve, NumPy | Light curve download; Detrending; Transit search; Candidate report
Climate Model Data Explorer | I | 6 | Explores climate projection datasets for a region with simple charts. | Python, xarray, Plotly | NetCDF loading; Regional selection; Scenario comparison; Charts
`,
};
