module.exports = {
  domain: 'Robotics',
  ideas: `
# Mobile robots
Line Follower Robot with PID | B | 5 | A robot that follows a line smoothly using PID control. | Arduino, IR sensor array, L298N | Sensor calibration; PID tuning; Speed control; Track tests
Obstacle Avoiding Robot | B | 4 | A robot car that detects and avoids obstacles autonomously. | Arduino, Ultrasonic sensor, Servo | Distance sensing; Avoidance logic; Motor control; Demo course
Maze Solving Robot | I | 7 | A micromouse-style robot that explores and solves a maze. | Arduino or STM32, IR sensors, Encoders | Wall sensing; Flood fill algorithm; Odometry; Fast run
Bluetooth Controlled Robot Car | B | 4 | A robot car controlled from a phone app over Bluetooth. | Arduino, HC-05, Android app | Motor driver; Bluetooth commands; Phone controller; Speed control
Voice Controlled Robot | I | 5 | A robot that moves based on spoken commands from a phone. | Arduino, HC-05, Android Speech API | Voice recognition; Command mapping; Movement; Feedback
Autonomous Delivery Robot for Campus | A | 12 | A small robot that navigates corridors to deliver items between rooms. | ROS 2, Raspberry Pi, LiDAR | Mapping with SLAM; Path planning; Obstacle avoidance; Delivery interface
SLAM Robot with LiDAR | A | 10 | Builds a map of an indoor space while tracking its own position. | ROS 2, RPLiDAR, Raspberry Pi | LiDAR integration; SLAM; Map saving; Navigation
Self-balancing Robot | I | 7 | A two-wheeled robot that balances itself using an IMU and PID control. | Arduino, MPU6050, Stepper motors | Sensor fusion; PID control; Tuning; Remote control
Fire Fighting Robot | I | 6 | Detects a flame, moves towards it and sprays water. | Arduino, Flame sensors, Water pump | Flame detection; Navigation; Pump control; Safety cut-off
Surveillance Robot with Live Video | I | 7 | A robot that streams live video and can be driven remotely over Wi-Fi. | Raspberry Pi, Pi Camera, Flask | Video streaming; Web controls; Night vision option; Recording
Floor Cleaning Robot | I | 8 | A robot vacuum prototype with coverage planning and bump sensing. | Arduino, Bump sensors, DC motors | Coverage pattern; Obstacle handling; Suction mechanism; Docking idea
Solar Panel Cleaning Robot | I | 8 | A robot that moves across solar panels and cleans dust automatically. | Arduino, Brush motor, Edge sensors | Panel traversal; Edge detection; Cleaning schedule; Efficiency comparison
Agricultural Seed Sowing Robot | I | 8 | Sows seeds at fixed spacing along rows automatically. | Arduino, Stepper motors, Seed dispenser | Row navigation; Seed metering; Spacing control; Field test
Warehouse Inventory Robot | A | 10 | Scans shelf barcodes while moving along aisles to count stock. | ROS 2, Raspberry Pi, Camera | Aisle navigation; Barcode scanning; Inventory sync; Discrepancy report
Pipe Inspection Robot | A | 9 | A small robot that travels inside pipes and records video for inspection. | Raspberry Pi, Camera, Tracked chassis | Chassis design; Video recording; Distance tracking; Defect tagging
Human Following Robot | I | 7 | A robot that follows a person carrying a tag using ultrasonic or vision tracking. | Arduino or Raspberry Pi, Ultrasonic, Camera | Target tracking; Distance keeping; Obstacle handling; Stop safety
Swarm Robotics Simulation | A | 9 | Simulates many simple robots cooperating to explore or gather items. | Python, Pygame or Webots | Robot behaviours; Communication rules; Emergent tasks; Metrics
Multi-robot Path Planning | A | 9 | Plans collision-free paths for several robots in a shared space. | Python, ROS 2 | Grid environment; Conflict-based search; Simulation; Comparison

# Arms and manipulators
Robotic Arm with Pick and Place | I | 8 | A servo robotic arm that picks objects and places them at target positions. | Arduino, Servo motors, 3D printed parts | Arm assembly; Inverse kinematics; Teach and repeat; Pick and place demo
Colour Sorting Robotic Arm | I | 7 | Sorts objects by colour into bins using a colour sensor or camera. | Arduino, TCS3200, Servo motors | Colour detection; Arm movements; Sorting logic; Throughput count
Gesture Controlled Robotic Arm | I | 7 | Controls a robotic arm by moving a glove with flex sensors. | Arduino, Flex sensors, MPU6050, Servos | Glove sensors; Mapping to joints; Wireless link; Calibration
Vision-guided Robotic Arm | A | 10 | Uses a camera to detect objects and guide an arm to grab them. | Raspberry Pi, OpenCV, Servo arm | Object detection; Camera calibration; Coordinate transform; Grasping
Robotic Arm Simulation in ROS | A | 8 | Simulates a 6-DOF arm with motion planning in ROS. | ROS 2, MoveIt, Gazebo | URDF model; Motion planning; Collision objects; Pick and place
Drawing Robot Plotter | I | 6 | A pen plotter that draws images and text on paper. | Arduino, Stepper motors, GRBL | Mechanics; G-code generation; Image to path; Drawing demo
Chess Playing Robot Arm | A | 10 | A robotic arm that plays physical chess against a person using a camera and engine. | Raspberry Pi, OpenCV, Stockfish, Servo arm | Board recognition; Engine integration; Piece movement; Game flow
Prosthetic Hand Prototype with EMG | A | 10 | A 3D printed hand controlled by muscle signals. | Arduino, EMG sensor, Servos | EMG signal processing; Grip patterns; Hand assembly; User trials
Rubik's Cube Solving Robot | A | 10 | Scans a cube with a camera and solves it with motors. | Raspberry Pi, OpenCV, Stepper motors | Colour scanning; Solver algorithm; Motor sequences; Speed optimisation

# Drones and vehicles
Quadcopter Drone Build | A | 10 | Builds and tunes a quadcopter with stabilised flight. | Flight controller, Betaflight or ArduPilot | Frame and motors; Calibration; PID tuning; Flight tests
Autonomous Drone Waypoint Mission | A | 9 | A drone flies a planned route and captures photos automatically. | ArduPilot, Mission Planner, Python DroneKit | Mission planning; Safety failsafes; Photo capture; Simulation first
Drone for Crop Health Imaging | A | 10 | Captures aerial images and computes crop health index maps. | Drone, Camera, Python, OpenCV | Flight plan; Image stitching; Vegetation index; Field report
Autonomous RC Car with Computer Vision | A | 9 | A model car that follows lanes and stops at signs using a camera. | Raspberry Pi, OpenCV, TensorFlow Lite | Lane following; Sign detection; Control loop; Track tests
Underwater ROV Prototype | A | 10 | A remotely operated underwater vehicle with camera and depth sensor. | Arduino, Thrusters, Pressure sensor | Waterproof housing; Thruster control; Video feed; Depth hold
Drone Simulation for Search and Rescue | A | 9 | Simulates drones searching an area and detecting people. | Gazebo, PX4, Python | Search patterns; Person detection; Multi-drone coordination; Coverage metrics
Autonomous Boat for Water Sampling | A | 10 | A small boat that follows GPS waypoints and collects water quality data. | Arduino, GPS, Water quality sensors | Hull and propulsion; Waypoint navigation; Sensor logging; Data map
Path Planning Algorithms Comparison | I | 6 | Compares A*, RRT and Dijkstra for robot navigation in simulated maps. | Python, Matplotlib | Map generation; Algorithm implementations; Metrics; Visual comparison

# Assistive and service robots
Smart Wheelchair with Joystick and Voice | A | 10 | An electric wheelchair prototype controlled by joystick or voice with obstacle stop. | Arduino, Motor drivers, Ultrasonic sensors | Motor control; Joystick and voice input; Obstacle stop; Safety features
Hospital Medicine Delivery Robot | A | 10 | Delivers medicines between hospital rooms following marked paths. | Arduino or ROS 2, RFID, Line sensors | Route following; Room identification; Secure compartment; Nurse interface
Restaurant Serving Robot | I | 8 | Carries food from the kitchen to tables using line following and table numbers. | Arduino, IR sensors, Keypad | Path network; Table selection; Load tray; Return to base
Companion Robot for Children | A | 9 | A desktop robot that tells stories, plays games and shows expressions. | Raspberry Pi, Servo, Display, Speech APIs | Expressive face; Voice interaction; Games; Parent controls
Receptionist Robot | I | 8 | Greets visitors, answers common questions and guides them to offices. | Raspberry Pi, Speech recognition, Display | Visitor detection; Q&A; Directions; Visitor log
Exoskeleton Elbow Assist Prototype | A | 10 | A wearable device that assists elbow movement for rehabilitation. | Arduino, Servo, Force sensor | Mechanical design; Assist control; Safety limits; Therapy modes
Automatic Plant Watering Robot | B | 5 | A gantry robot that waters plants in pots based on soil moisture. | Arduino, Stepper motors, Soil sensors | Gantry movement; Moisture checks; Watering; Schedule
Robotic Lawn Mower Prototype | I | 8 | Mows within a boundary wire and avoids obstacles. | Arduino, Boundary wire sensor, Motors | Boundary detection; Coverage pattern; Obstacle avoidance; Safety stop
Humanoid Robot Walking Gait | A | 10 | Builds a small biped robot and programs stable walking gaits. | Arduino, Servo motors, IMU | Mechanical build; Gait generation; Balance feedback; Demo
ROS 2 Robot Simulation Starter | I | 6 | Simulates a differential drive robot in Gazebo with teleoperation and sensors. | ROS 2, Gazebo, Python | Robot description; Sensors; Teleoperation; Navigation basics
Robot Arm Digital Twin | A | 9 | Mirrors a physical robot arm in a 3D simulation in real time. | Unity, ROS 2, Arduino | Joint state streaming; 3D model; Sync; Remote control
`,
};
