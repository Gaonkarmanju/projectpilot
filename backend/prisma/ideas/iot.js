module.exports = {
  domain: 'IoT',
  ideas: `
# Smart home and energy
Smart Parking System | I | 8 | Sensors detect free parking slots and a web app shows live availability. | ESP32, Ultrasonic sensors, MQTT, Node.js | Sensor circuit; MQTT data pipeline; Live slot dashboard; Usage history
Home Energy Monitor | A | 10 | Measures appliance power usage and shows daily cost with alerts for unusual consumption. | ESP32, Current sensor, InfluxDB, Grafana | Sensor calibration; Data logging; Cost dashboard; Anomaly alerts
Home Automation with Voice Control | I | 7 | Control lights and fans with a mobile app and voice assistant. | ESP8266, Relay module, MQTT, Flutter | Relay circuit; MQTT control; Mobile app; Voice integration
Smart Door Lock with Face Recognition | A | 9 | A door lock that unlocks for recognised faces and logs every entry. | Raspberry Pi, Pi Camera, OpenCV, Solenoid lock | Face enrolment; Recognition; Lock control; Entry log
Smart Water Tank Level Monitor | B | 5 | Measures water tank level and turns the pump on or off automatically. | ESP8266, Ultrasonic sensor, Relay, Blynk | Level sensing; Pump automation; Mobile alerts; Usage history
Gas Leakage Detection and Alert | B | 4 | Detects LPG leaks, sounds an alarm and sends a phone alert. | Arduino, MQ-6 sensor, GSM module | Sensor reading; Threshold alarm; SMS alert; Exhaust fan control
Smart Street Lighting | I | 6 | Street lights turn on based on darkness and motion to save energy. | Arduino, LDR, PIR sensor, LEDs | Light sensing; Motion-based dimming; Fault detection; Energy savings report
Solar Panel Monitoring System | I | 7 | Monitors solar panel voltage, current and output and detects dust or faults. | ESP32, INA219, ThingSpeak | Power measurement; Cloud logging; Efficiency chart; Cleaning alerts
Smart Plug with Energy Metering | I | 7 | A Wi-Fi plug that measures appliance energy and can be scheduled. | ESP32, HLW8012, MQTT | Energy measurement; Remote switching; Schedules; Usage charts
Automatic Room Light Controller with Visitor Counter | B | 4 | Counts people entering and leaving a room and turns lights off when empty. | Arduino, IR sensors, Relay | Bidirectional counting; Light control; Display; Count log
Smart Mirror | I | 8 | A mirror display that shows time, weather, calendar and news. | Raspberry Pi, MagicMirror, Two-way mirror | Display setup; Modules; Voice or touch control; Custom module
Smart Curtain Controller | B | 5 | Opens and closes curtains based on time, light or phone control. | ESP8266, Stepper motor, LDR | Motor control; Light-based automation; App control; Schedules
Home Security System with Motion Alerts | I | 6 | Detects intruders with PIR sensors and sends camera snapshots to the owner. | Raspberry Pi, PIR sensor, Pi Camera, Telegram Bot API | Motion detection; Image capture; Telegram alerts; Arm and disarm

# Agriculture and environment
Smart Irrigation System | I | 7 | Waters crops automatically based on soil moisture and weather forecast. | ESP32, Soil moisture sensor, Relay, OpenWeather API | Soil sensing; Pump control; Rain-aware scheduling; Water usage report
Greenhouse Climate Controller | I | 8 | Maintains temperature and humidity in a greenhouse with fans and misters. | ESP32, DHT22, Relays, MQTT | Climate sensing; Control logic; Remote dashboard; Alerts
Livestock Health Monitoring Collar | A | 9 | A collar that tracks cattle temperature, activity and location. | ESP32, Accelerometer, GPS, LoRa | Sensor collar; LoRa transmission; Activity analysis; Health alerts
Soil Nutrient Analyser | I | 7 | Measures soil NPK and pH and recommends fertiliser. | Arduino, NPK sensor, pH sensor | Sensor interfacing; Calibration; Recommendation logic; Mobile display
Crop Field Intrusion Alert | B | 5 | Detects animals entering a field and scares them away with sound and light. | Arduino, PIR sensor, Buzzer, GSM module | Motion detection; Deterrent output; SMS alert; Solar power option
Air Quality Monitoring Station | I | 6 | Measures PM2.5, CO2 and gases and publishes data online. | ESP32, PMS5003, MQ-135, ThingSpeak | Sensor setup; Calibration; Cloud dashboard; AQI calculation
Weather Station with Web Dashboard | B | 5 | Measures temperature, humidity, pressure and rainfall and shows them online. | ESP32, BME280, Rain gauge, InfluxDB | Sensor readings; Data logging; Web dashboard; Daily summary
Flood Early Warning System | I | 7 | Measures river water level and sends warnings to nearby villages. | ESP32, Ultrasonic sensor, LoRa, GSM | Level monitoring; Threshold alerts; Long-range transmission; Siren control
Forest Fire Detection Network | A | 8 | A sensor network that detects smoke and heat in forests and reports location. | ESP32, LoRa, Flame sensor, MQ-2 | Sensor nodes; Mesh or star network; Location reporting; Alert dashboard
Smart Dustbin with Fill Level | B | 5 | Bins report their fill level so collection routes can be planned. | ESP8266, Ultrasonic sensor, Firebase | Fill sensing; Cloud updates; Bin map; Collection alerts
Beehive Monitoring System | I | 7 | Monitors hive weight, temperature and sound to track colony health. | ESP32, Load cell, DHT22, Microphone | Weight logging; Climate data; Sound analysis; Beekeeper dashboard
Aquarium Automation | B | 5 | Automates feeding, lighting and water temperature in an aquarium. | Arduino, Servo, DS18B20, Relay | Timed feeder; Light schedule; Temperature control; Status display
Cold Storage Temperature Monitor | B | 5 | Monitors temperature in cold rooms and alerts if it goes out of range. | ESP8266, DS18B20, Telegram Bot API | Temperature logging; Alerts; Daily report; Battery backup

# Health and wearables
Smart Health Monitoring Wearable | A | 9 | Monitors heart rate, SpO2 and temperature and shares readings with a doctor. | ESP32, MAX30102, MLX90614, Firebase | Sensor reading; Data upload; Doctor dashboard; Abnormal value alerts
Fall Detection Device for the Elderly | I | 7 | Detects falls using an accelerometer and calls family members. | ESP32, MPU6050, GSM module | Fall detection algorithm; False alarm handling; SMS and call alert; Battery management
Smart Pill Box | I | 6 | A pill box that reminds patients and records when compartments are opened. | Arduino, RTC, Reed switches, Buzzer | Medicine schedule; Reminders; Open detection; Missed dose alert
Patient Saline Level Monitor | B | 5 | Alerts nurses when a saline bottle is nearly empty. | ESP8266, Load cell, Buzzer | Weight sensing; Threshold alert; Nurse station display; Multiple beds
Smart Walking Stick for the Blind | I | 6 | Detects obstacles and water and guides visually impaired users with vibration and sound. | Arduino, Ultrasonic sensors, Water sensor, Buzzer | Obstacle detection; Water detection; Feedback patterns; Emergency button
Posture Correction Wearable | I | 6 | Detects slouching and vibrates to remind the user to sit straight. | ESP32, MPU6050, Vibration motor | Calibration; Posture detection; Feedback; Daily posture stats
Contactless Temperature and Attendance Kiosk | I | 6 | Measures body temperature and marks attendance with an RFID card. | Arduino, MLX90614, RFID reader | Temperature sensing; RFID attendance; Display; Records export
Baby Monitor with Cry Detection | I | 7 | Detects a baby crying and sends room temperature and alerts to parents. | Raspberry Pi, Microphone, DHT22 | Sound detection; Cry classification; Alerts; Room climate

# Transport and city
Vehicle Tracking System | I | 6 | Tracks vehicle location in real time on a map and stores trip history. | ESP32, GPS module, GSM module, Firebase | GPS reading; Data upload; Live map; Trip history
Accident Detection and Alert for Vehicles | I | 7 | Detects collisions with sensors and sends location to emergency contacts. | Arduino, Accelerometer, GPS, GSM | Impact detection; Location fetch; SMS alerts; Cancel button
Smart Traffic Light with Density Control | I | 7 | Adjusts signal timing based on vehicle density at each lane. | Arduino, IR sensors, LEDs | Density sensing; Adaptive timing; Emergency vehicle override; Simulation comparison
Toll Gate Automation with RFID | B | 5 | Vehicles with RFID tags pass the toll gate automatically and balance is deducted. | Arduino, RFID, Servo motor, Node.js | Tag reading; Balance deduction; Gate control; Transaction log
Smart Helmet for Bikers | I | 7 | Bike starts only when the helmet is worn and the rider is not drunk. | Arduino, Alcohol sensor, RF modules | Helmet detection; Alcohol check; Ignition control; Accident alert
Bus Arrival Display at Bus Stops | I | 7 | Shows expected arrival times of buses at a stop using GPS from buses. | ESP32, GPS, LED matrix, MQTT | Bus GPS units; ETA calculation; Stop display; Central server
Railway Track Crack Detection Robot | A | 9 | A trolley robot that detects cracks on railway tracks and reports location. | Arduino, IR sensors, GPS, GSM | Crack sensing; Movement control; Location reporting; Alert system
EV Charging Station Monitor | I | 7 | Monitors charging sessions, energy delivered and station availability. | ESP32, Energy meter, MQTT, Node.js | Session tracking; Energy logging; Availability API; Billing estimate
Smart Shopping Trolley | I | 7 | Scans products with RFID as they are added and shows a running bill. | Arduino, RFID, LCD, Bluetooth | Product tags; Add and remove detection; Running total; Checkout transfer

# Industry and infrastructure
Industrial Machine Condition Monitoring | A | 9 | Monitors vibration and temperature of motors to predict failures. | ESP32, MPU6050, Thermocouple, InfluxDB | Vibration sensing; FFT analysis; Trend dashboard; Failure alerts
Smart Energy Meter with Billing | I | 8 | Measures household electricity and generates bills online. | Arduino, Energy meter IC, ESP8266 | Energy reading; Cloud logging; Bill generation; Tamper detection
Water Leakage Detection in Pipelines | I | 7 | Detects leaks by comparing flow rates at different points in a pipeline. | ESP32, Flow sensors, MQTT | Flow measurement; Leak logic; Location estimation; Alerts
Bridge Structural Health Monitor | A | 9 | Monitors strain and vibration on a model bridge and detects unusual behaviour. | ESP32, Strain gauge, Accelerometer, LoRa | Sensor installation; Data logging; Anomaly detection; Dashboard
Warehouse Inventory Tracking with RFID | I | 7 | Tracks items entering and leaving a warehouse using RFID gates. | Raspberry Pi, UHF RFID reader, Node.js | Tag registration; Gate reading; Stock updates; Movement history
Smart Manhole Monitoring | I | 6 | Detects manhole overflow, gas and open lids and alerts the municipality. | ESP32, Gas sensor, Water level sensor, GSM | Sensor node; Event detection; Alerts; Location map
Server Room Environment Monitor | B | 5 | Monitors temperature, humidity and power in a server room with alerts. | ESP8266, DHT22, Telegram Bot API | Sensor readings; Thresholds; Alerts; History graph
Smart Classroom Energy Saver | B | 5 | Turns off fans and lights in empty classrooms automatically. | Arduino, PIR sensor, Relays | Occupancy detection; Device control; Manual override; Savings estimate
Noise Level Monitoring for Libraries | B | 4 | Shows a warning light when noise in a library exceeds a limit. | Arduino, Sound sensor, LEDs | Sound measurement; Threshold levels; Visual feedback; Noise log

# Platforms and protocols
IoT Device Management Platform | A | 10 | A platform to register devices, push configuration and view telemetry. | Node.js, MQTT, PostgreSQL, React | Device registry; Telemetry ingestion; Remote configuration; Dashboard
LoRaWAN Sensor Network Demo | A | 9 | Builds a small LoRaWAN network with sensor nodes and a gateway. | LoRa modules, The Things Network, Node-RED | Node setup; Gateway; Data decoding; Dashboard
Over-the-air Firmware Update System | A | 8 | Updates firmware on ESP32 devices remotely with rollback on failure. | ESP32, Arduino OTA, Node.js | Firmware hosting; Version checks; Secure update; Rollback
Edge AI Sound Classifier | A | 8 | Classifies sounds like glass breaking or a dog barking on a microcontroller. | ESP32, TensorFlow Lite Micro, Edge Impulse | Data collection; Model training; On-device inference; Event alerts
Digital Twin of a Room | A | 9 | A 3D model of a room that updates live with real sensor readings. | ESP32, MQTT, Three.js | Sensor network; Data stream; 3D visualisation; History playback
Node-RED Home Dashboard | B | 4 | Builds a home dashboard combining several sensors using Node-RED flows. | Raspberry Pi, Node-RED, MQTT | Sensor integration; Flows; Dashboard; Alerts
Smart Campus IoT Platform | A | 10 | Combines parking, energy and air quality sensors into one campus dashboard. | ESP32, MQTT, InfluxDB, Grafana | Multiple sensor types; Unified ingestion; Campus dashboard; Alerting
`,
};
