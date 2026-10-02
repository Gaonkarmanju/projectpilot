module.exports = {
  domain: 'Game Dev',
  ideas: `
# Educational games
Typing Speed Game | B | 3 | A game where falling words must be typed before they hit the ground, with increasing speed. | JavaScript, HTML Canvas | Word spawning; Typing detection; Levels; High scores
Math Practice Game for Kids | B | 4 | Arcade-style arithmetic challenges that adapt to the child's level. | Unity, C# | Question generator; Adaptive difficulty; Rewards; Parent report
Coding Puzzle Game | I | 7 | Players solve levels by arranging command blocks to guide a robot. | Godot, GDScript | Block-based commands; Level design; Execution animation; Level editor
Chemistry Lab Simulation Game | I | 7 | Mix virtual chemicals safely and observe reactions to learn concepts. | Unity, C# | Reaction rules; Lab equipment; Experiments; Quiz mode
History Quiz Adventure | B | 5 | An adventure where players travel through eras by answering history questions. | Phaser, JavaScript | Era maps; Question bank; Progression; Achievements
Geography Map Guessing Game | B | 4 | Guess countries, capitals and states on an interactive map. | JavaScript, Leaflet | Map interaction; Question modes; Scoring; Timed rounds
Physics Puzzle Game | I | 6 | Solve puzzles using gravity, levers and ropes with a physics engine. | Unity, C#, Box2D | Physics objects; Puzzle levels; Star rating; Level select
Data Structures Visual Game | I | 6 | Teaches stacks, queues and trees through interactive challenges. | React, Canvas | Visual structures; Operation challenges; Hints; Progress tracking
Sorting Algorithm Race Game | B | 4 | Players predict which sorting algorithm finishes first and watch them race. | JavaScript, HTML Canvas | Algorithm animations; Predictions; Step mode; Explanations
Financial Literacy Life Simulator | I | 7 | Players manage salary, savings, loans and spending choices over a simulated life. | Unity, C# | Monthly decisions; Random life events; Financial reports; Endings
Language Learning RPG | A | 9 | A role-playing game where talking to characters in a foreign language advances the story. | Unity, C#, Speech recognition | Dialogue system; Vocabulary progression; Quests; Pronunciation checks
Traffic Rules Learning Game | B | 5 | Drive through a town and learn traffic rules by following signs. | Unity, C# | Town map; Rule violations; Penalties and feedback; Licence test mode
Cybersecurity Escape Room | I | 6 | Solve security puzzles like decoding ciphers and spotting phishing to escape. | Godot, GDScript | Puzzle rooms; Hints; Timer; Learning summary

# Arcade and casual
2D Platformer Game | B | 6 | A side-scrolling platformer with enemies, collectibles and several levels. | Godot, GDScript | Player movement; Enemies; Level design; Checkpoints
Endless Runner Mobile Game | B | 5 | A runner game with obstacles, power-ups and increasing speed. | Unity, C# | Procedural obstacles; Power-ups; Score system; Mobile controls
Tower Defense Game | I | 7 | Place towers along a path to stop waves of enemies. | Unity, C# | Path following enemies; Tower types; Upgrades; Wave system
Match-3 Puzzle Game | I | 6 | A gem-matching puzzle with combos, special pieces and level goals. | Phaser, JavaScript | Board logic; Match detection; Cascades; Level goals
Snake Game with Multiplayer | I | 6 | Classic snake with online multiplayer arenas. | JavaScript, Socket.IO, Node.js | Game loop; Server-authoritative state; Rooms; Leaderboard
Flappy Bird Clone with AI Player | I | 5 | A Flappy Bird style game plus an AI that learns to play using neuroevolution. | JavaScript, p5.js | Game mechanics; Neural network; Genetic algorithm; Training visualisation
Breakout Game with Level Editor | B | 5 | A brick-breaking game where players can design and share levels. | JavaScript, HTML Canvas | Ball physics; Brick types; Level editor; Share codes
Space Shooter Game | B | 5 | A top-down space shooter with enemy waves and boss fights. | Pygame | Player ship; Enemy patterns; Boss fight; Score and lives
Pac-Man Style Maze Game with Smart Ghosts | I | 6 | A maze game where ghosts use different pathfinding strategies. | Python, Pygame | Maze rendering; A* pathfinding; Ghost behaviours; Levels
Tetris Clone | B | 4 | A Tetris clone with ghost piece, hold and scoring. | JavaScript, HTML Canvas | Piece rotation; Line clearing; Hold and preview; Scoring
UNO-style Multiplayer Card Game | I | 6 | An online card game with colour and number matching, action cards and private rooms. | Node.js, Socket.IO, React | Deck and dealing; Turn rules and action cards; Private rooms; Reconnection
Ludo Online Multiplayer | I | 7 | Play Ludo with friends online in private rooms. | Node.js, Socket.IO, React | Board logic; Dice and moves; Rooms; Reconnection
Chess Game with Online Play | I | 8 | Play chess online with move validation, clocks and game history. | React, chess.js, Socket.IO | Board UI; Move validation; Clocks; PGN export
Carrom Board Game | I | 7 | A physics-based carrom game with single player and local multiplayer. | Unity, C# | Striker physics; Pocket detection; Rules; AI opponent
Word Puzzle Game like Wordle | B | 3 | A daily word guessing game with statistics and sharing. | React | Word list; Guess feedback; Statistics; Share result
Sudoku Game with Hint System | B | 4 | Generates Sudoku puzzles of different difficulty with hints and notes. | JavaScript | Puzzle generator; Validation; Notes mode; Hint logic
Minesweeper with Solver | B | 4 | Classic Minesweeper with a solver that shows the next safe move. | Python, Pygame | Board generation; Flagging; Solver logic; Difficulty levels
Rhythm Game | I | 7 | Hit notes in time with music, with beat detection for custom songs. | Unity, C# | Beat map; Hit timing; Scoring; Beat detection for uploads
Idle Clicker Game | B | 4 | An incremental clicker game with upgrades and offline progress. | JavaScript | Currency loop; Upgrades; Offline earnings; Save system
Kabaddi Arcade Game | I | 7 | An arcade-style kabaddi game with raid and defend mechanics. | Unity, C# | Player controls; Raid logic; AI defenders; Match scoring

# Bigger and technical games
3D First-person Exploration Game | A | 9 | Explore a 3D environment, solve environmental puzzles and uncover a story. | Unity, C# | 3D level design; First-person controller; Puzzles; Narrative triggers
Procedural Dungeon Generator Game | A | 8 | A roguelike game with procedurally generated dungeons and loot. | Godot, GDScript | Dungeon generation algorithms; Combat; Loot system; Permadeath
Open-world Village Simulation | A | 10 | A small village where NPCs follow daily routines and react to the player. | Unity, C# | NPC schedules; Behaviour trees; Day-night cycle; Interactions
Multiplayer Battle Arena | A | 10 | A small online arena game with client prediction and lag compensation. | Unity, Mirror Networking | Networking model; Client prediction; Matchmaking; Abilities
Racing Game with AI Drivers | A | 8 | A racing game with car physics and AI opponents that follow racing lines. | Unity, C# | Vehicle physics; Track design; AI drivers; Lap timing
Strategy Game with Fog of War | A | 9 | A turn-based strategy game with resource management and an AI opponent. | Godot, GDScript | Hex map; Units and resources; Fog of war; AI opponent
Horror Puzzle Game | I | 8 | An atmospheric puzzle game focused on sound and lighting. | Unity, C# | Lighting design; Spatial audio; Puzzles; Enemy AI
Farming Simulation Game | I | 8 | Plant, grow and sell crops with seasons and weather. | Godot, GDScript | Crop growth system; Seasons; Market; Save and load
City Builder Game | A | 10 | Build a city with zones, roads, traffic and a budget. | Unity, C# | Zoning; Road network; Traffic simulation; Budget
Game Engine from Scratch | A | 12 | A small 2D game engine with rendering, input, physics and an entity system. | C++, SDL2 | Rendering loop; Entity-component system; Collision; Sample game
Voxel World Builder | A | 10 | A Minecraft-like voxel world with terrain generation and block building. | C++, OpenGL | Chunk system; Perlin noise terrain; Block placement; Lighting
Ray Tracer | A | 8 | Renders realistic images with reflections and shadows using ray tracing. | C++ | Ray-sphere intersection; Materials; Shadows and reflections; Anti-aliasing
Physics Engine for 2D Games | A | 9 | Implements rigid body physics with collision detection and response. | C++ or Rust | Shapes and collisions; Impulse resolution; Constraints; Demo scenes
Pathfinding Visualiser | B | 4 | Visualises A*, Dijkstra and BFS on a grid with walls. | JavaScript, React | Grid editor; Algorithm animations; Step mode; Comparison
Game AI with Behaviour Trees | I | 7 | Implements enemy AI using behaviour trees with patrol, chase and flee. | Unity, C# | Behaviour tree framework; Enemy behaviours; Debug view; Demo level

# Tools and platforms
Game Leaderboard and Achievements Service | I | 6 | A backend service that games can use for leaderboards, achievements and saves. | Node.js, PostgreSQL, Redis | Score API; Leaderboards; Achievements; Cloud saves
Level Editor for a 2D Game | I | 7 | A visual editor to design levels, place objects and export them. | Godot, GDScript | Tile painting; Object placement; Export format; Test play
Game Analytics Dashboard | I | 6 | Tracks player sessions, drop-off points and level difficulty. | Node.js, ClickHouse, Grafana | Event SDK; Ingestion; Funnels; Heatmaps
Online Game Lobby and Matchmaking | A | 8 | Players join a lobby and get matched by skill rating. | Node.js, Socket.IO, Redis | Lobby; Skill rating; Matching queue; Room creation
Multiplayer Quiz Game Show | I | 6 | A game-show style quiz where players answer on phones and scores show on a big screen. | React, Socket.IO, Node.js | Host screen; Player phones; Timers; Leaderboard
Browser-based Game Jam Platform | I | 7 | Host game jams with submissions, ratings and results. | Next.js, PostgreSQL | Jam creation; Game uploads; Rating; Results
Sprite Animation Tool | I | 6 | Create sprite animations from frames and export sprite sheets. | Electron, JavaScript | Frame import; Timeline; Preview; Sprite sheet export
Dialogue Editor for Story Games | I | 6 | A node-based editor to write branching dialogue and export it for games. | React, React Flow | Node graph; Conditions and variables; Preview; JSON export
Accessible Game Controls Toolkit | I | 6 | A Unity toolkit adding remappable controls, subtitles and colour-blind modes. | Unity, C# | Control remapping; Subtitles; Colour filters; Demo game
Board Game Rules Engine | I | 7 | A rules engine to define turn-based board games in configuration files. | TypeScript | Game definition format; Turn engine; Validation; Sample games
Serious Game for Disaster Preparedness | I | 7 | Teaches what to do in an earthquake or flood through scenarios. | Unity, C# | Scenarios; Decision points; Feedback; Score
Fitness Exergame with Webcam | I | 7 | A game controlled by body movements using pose detection. | JavaScript, MediaPipe, Phaser | Pose input; Game mechanics; Calorie estimate; Levels
Chess Puzzle Trainer | B | 5 | Daily chess puzzles with ratings and themes. | React, chess.js | Puzzle database; Move checking; Puzzle rating; Themes
`,
};
