module.exports = {
  domain: 'Embedded',
  ideas: `
# Microcontroller projects
Digital Clock with Alarm and Temperature | B | 3 | A clock with alarms and room temperature on an LCD using a real-time clock module. | Arduino, DS3231 RTC, LCD | Time keeping; Alarm settings; Temperature display; Button menu
RFID Based Door Access Control | B | 5 | Opens a door lock only for registered RFID cards and logs entries. | Arduino, RC522 RFID, Solenoid lock | Card enrolment; Access check; Entry log; Admin card
Password Based Door Lock with Keypad | B | 4 | A keypad door lock with lockout after wrong attempts. | Arduino, Keypad, Servo, LCD | PIN entry; Lockout; Change password; Buzzer alerts
Automatic Railway Gate Control | B | 5 | Closes the level crossing gate automatically when a train approaches. | Arduino, IR sensors, Servo motor | Train detection; Gate control; Warning lights; Fail-safe logic
Electronic Voting Machine Prototype | I | 6 | A microcontroller-based voting machine with ballot and control units. | Arduino, Push buttons, LCD, EEPROM | Ballot unit; Control unit; Vote storage; Result display
Digital Notice Board with Wi-Fi | B | 5 | Update messages on an LED display from a web page. | ESP8266, LED matrix | Web form; Message storage; Scrolling display; Schedules
Smart Energy Saving Fan Controller | B | 4 | Adjusts fan speed automatically based on room temperature. | Arduino, LM35, TRIAC | Temperature sensing; Speed control; Display; Manual override
Heart Rate Monitor with OLED Display | B | 4 | Measures pulse and shows heart rate graph on an OLED screen. | Arduino, Pulse sensor, OLED | Signal processing; BPM calculation; Graph display; Abnormal alerts
Weighing Scale with Price Calculation | B | 5 | A digital scale that calculates price from weight and rate. | Arduino, Load cell, HX711, Keypad | Calibration; Weight reading; Price entry; Receipt printing
Ultrasonic Radar Display | B | 4 | A rotating ultrasonic sensor that shows objects on a radar screen. | Arduino, Servo, Ultrasonic sensor, Processing | Sweep control; Distance capture; Radar visualisation; Range settings
Morse Code Translator Device | B | 3 | Translates text to Morse light and sound and decodes button input. | Arduino, LED, Buzzer | Encoding; Decoding; Speed setting; Display
Automatic Hand Sanitiser Dispenser | B | 3 | Dispenses sanitiser when a hand is detected without touch. | Arduino, IR sensor, Pump | Hand detection; Pump timing; Refill alert; Usage counter
Smart Dustbin Lid Opener | B | 3 | Opens the bin lid automatically when someone approaches. | Arduino, Ultrasonic sensor, Servo | Proximity detection; Lid control; Fill indicator; Power saving
Wireless Doorbell with Visitor Photo | I | 5 | A doorbell that captures a photo and sends it to the owner's phone. | ESP32-CAM, Telegram Bot API | Button trigger; Photo capture; Telegram message; Deep sleep
Data Logger with SD Card | B | 4 | Logs sensor readings with timestamps to an SD card for later analysis. | Arduino, SD card module, RTC | Sensor reading; Timestamped logging; File rotation; Analysis script
Infrared Remote Universal Controller | I | 5 | Learns IR codes from remotes and replays them from a phone. | ESP8266, IR receiver and LED | Code learning; Code library; Web control; Schedules
Smart Alarm Clock that Opens Curtains | I | 6 | Opens curtains gradually at alarm time for natural wake-up. | ESP32, Stepper motor, RTC | Alarm schedule; Motor control; Phone app; Snooze
LED Cube Animation | I | 5 | An 8x8x8 LED cube with programmable animations. | Arduino, Shift registers, LEDs | Cube construction; Multiplexing; Animation patterns; Music sync

# RTOS and low-level
FreeRTOS Multi-task Sensor Hub | I | 7 | Reads several sensors in separate RTOS tasks with queues and priorities. | ESP32, FreeRTOS | Task design; Queues and semaphores; Priority handling; Timing analysis
Bare-metal LED and UART Driver | I | 6 | Writes register-level drivers for GPIO and UART without libraries. | STM32, C, Datasheets | Register configuration; GPIO driver; UART driver; Interrupts
Bootloader for Microcontroller Firmware Updates | A | 9 | A custom bootloader that updates firmware over UART with integrity checks. | STM32, C | Memory layout; Firmware transfer; CRC verification; Fallback image
CAN Bus Vehicle Data Logger | A | 8 | Reads and logs CAN bus messages from a vehicle or simulator. | STM32 or ESP32, MCP2515 CAN module | CAN interface; Message decoding; Logging; Visualisation
Low-power Sensor Node | I | 7 | A battery sensor node that runs for months using deep sleep. | ESP32 or nRF52, LoRa | Power profiling; Deep sleep; Data transmission; Battery estimate
Embedded Web Server for Device Configuration | I | 5 | A device hosts its own web page to configure Wi-Fi and settings. | ESP32, SPIFFS | Access point mode; Config page; Storage; Reboot into station mode
USB HID Macro Keyboard | I | 5 | A programmable keypad that sends shortcuts and macros to a computer. | Arduino Pro Micro, Mechanical switches | Key matrix; HID reports; Macro configuration; Rotary encoder
Digital Oscilloscope with Microcontroller | A | 8 | A simple oscilloscope that samples signals and displays waveforms. | STM32, ADC, TFT display | High-speed sampling; Triggering; Waveform display; Measurements
Function Generator | I | 6 | Generates sine, square and triangle waves with adjustable frequency. | Arduino, DAC or AD9833 | Waveform generation; Frequency control; Display; Output stage
Embedded Linux Weather Kiosk | I | 6 | A Raspberry Pi kiosk that boots straight into a weather display. | Raspberry Pi, Linux, Python | Auto-start; Display UI; Sensor and API data; Remote updates
Firmware Unit Testing Framework | A | 8 | Sets up unit testing and hardware-in-the-loop tests for microcontroller code. | C, Unity Test, PlatformIO | Test structure; Mocks for hardware; CI pipeline; Coverage
TinyML Keyword Spotting | A | 8 | Detects spoken keywords like on and off on a microcontroller. | Arduino Nano 33 BLE, TensorFlow Lite Micro | Audio dataset; Model training; Deployment; Device control
TinyML Gesture Recognition with IMU | I | 7 | Recognises hand gestures from accelerometer data on a microcontroller. | Arduino Nano 33 BLE, Edge Impulse | Data collection; Model training; On-device inference; Gesture actions

# Applied embedded systems
Automated Toll Plaza with Number Plate Camera | A | 9 | Combines a camera and microcontroller to log vehicles and open the boom barrier. | Raspberry Pi, Camera, OpenCV, Servo | Plate capture; Recognition; Barrier control; Records
Smart Energy Meter with Prepaid Recharge | I | 7 | A prepaid electricity meter that cuts supply when balance runs out. | Arduino, Energy meter IC, GSM | Energy measurement; Balance deduction; Recharge by SMS; Relay control
Vehicle Black Box Recorder | I | 7 | Records speed, location and impact data before an accident. | Arduino, GPS, Accelerometer, SD card | Data logging; Crash detection; Circular buffer; Data extraction
Smart Ration Distribution System | I | 7 | Dispenses ration grains to RFID-verified card holders and updates records. | Arduino, RFID, Load cell, GSM | Card verification; Quantity dispensing; Records update; SMS confirmation
Automatic Irrigation Using Soil and Rain Sensors | B | 4 | Waters plants only when soil is dry and it is not raining. | Arduino, Soil moisture sensor, Rain sensor | Sensor reading; Pump logic; Indicator display; Manual override
Railway Platform Announcement System | B | 5 | Automated train arrival announcements and display at a model station. | Arduino, MP3 module, LED display | Train detection; Audio playback; Display updates; Schedule
Smart Medicine Vending Machine | A | 9 | Dispenses over-the-counter medicines after payment and prescription check. | Arduino, Motors, Keypad, QR scanner | Product slots; Selection; Prescription check; Stock tracking
Automatic Car Parking Billing System | I | 6 | Calculates parking fees using entry and exit RFID scans. | Arduino, RFID, LCD | Entry and exit logging; Duration billing; Display; Records
Industrial Conveyor Object Counter | B | 4 | Counts and sorts objects on a conveyor belt by size. | Arduino, IR sensors, Servo | Object detection; Counting; Sorting gate; Display
Smart Agriculture Drone Sprayer Controller | A | 9 | A controller that sprays pesticide only over detected plant areas. | Raspberry Pi, Camera, Pump | Plant detection; Spray control; Flow measurement; Coverage log
Wearable Fitness Band | A | 9 | A wrist band that counts steps, measures heart rate and syncs to a phone. | nRF52 or ESP32, MAX30102, BLE | Sensor reading; Step algorithm; BLE sync; Battery optimisation
Smart Glove for Sign to Speech | A | 9 | A glove with flex sensors that converts hand signs to spoken words. | Arduino, Flex sensors, Speaker | Sensor glove; Gesture classification; Speech output; Calibration
Smart Bicycle Dashboard | I | 6 | Shows speed, distance and navigation arrows on a handlebar display. | ESP32, Hall sensor, OLED, BLE | Speed measurement; Trip stats; Phone navigation link; Lights
Earthquake Detector and Alarm | B | 5 | Detects ground vibration and sounds an alarm. | Arduino, Accelerometer, Buzzer | Vibration sensing; Threshold calibration; Alarm; Event log
`,
};
