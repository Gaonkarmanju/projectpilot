module.exports = {
  domain: 'Mobile',
  ideas: `
# Campus
Expense Splitter for Roommates | B | 6 | An app to add shared expenses, split them fairly and settle balances between roommates. | Flutter, Firebase | Groups and members; Add and split expenses; Balance summary; Settle up history
Campus Lost and Found App | B | 5 | Students post lost or found items with photos and location, and get matched automatically. | React Native, Node.js, MongoDB | Post item with photo; Search and filters; Match notifications; Claim verification
Offline-first Attendance App | I | 8 | Teachers mark attendance offline and it syncs later; students see their attendance percentage. | Flutter, SQLite, Node.js | Class and student setup; Offline marking; Background sync; Shortage alerts
Campus Navigation App | I | 7 | Indoor and outdoor directions to classrooms, labs and offices on a large campus. | Flutter, Google Maps SDK, Firebase | Campus map; Building and room search; Turn-by-turn route; Points of interest
Student Timetable and Reminder App | B | 4 | Students enter their weekly timetable and get reminders before each class. | Kotlin, Room | Timetable entry; Class reminders; Today view; Widget for home screen
QR Code Attendance App | B | 5 | Faculty display a rotating QR code and students scan it to mark attendance. | Flutter, Firebase | Rotating QR generation; Scan to mark; Duplicate prevention; Attendance export
Bunk Manager | B | 3 | Tracks attendance per subject and tells students how many classes they can safely miss. | Kotlin, Room | Subject setup; Present and absent marking; Safe bunk calculator; Low attendance warning
CGPA Calculator and Planner | B | 3 | Calculates SGPA and CGPA and shows the grades needed to reach a target. | Flutter | Semester and subject entry; Credit-weighted calculation; Target planner; History chart
Campus Ride Sharing App | I | 7 | Students share auto or cab rides to the same destination and split the fare. | React Native, Firebase, Google Maps SDK | Ride posting; Join requests; In-app chat; Fare split
Library Book Scanner App | B | 5 | Scan a book's barcode to check availability in the college library and reserve it. | Flutter, Node.js, MySQL | Barcode scanning; Availability check; Reservation; Due date reminders
Hostel Gate Pass App | B | 5 | Students request outing passes, wardens approve, and guards verify at the gate. | Flutter, Firebase | Pass request; Warden approval; QR verification at gate; Out and in log

# Health and wellbeing
Medicine Reminder App | B | 4 | Reminds users to take medicines on time and tracks missed doses. | Kotlin, Room, WorkManager | Medicine schedule; Notifications; Dose log; Refill reminder
Period and Cycle Tracker | B | 5 | A private cycle tracker with predictions stored only on the device. | Flutter, SQLite | Cycle logging; Prediction; Symptom notes; Local-only privacy
Calorie and Water Intake Tracker | B | 5 | Log meals and water, and track daily calories against a goal. | React Native, SQLite | Food logging; Calorie goal; Water reminders; Weekly charts
Sleep Tracker Using Phone Sensors | I | 7 | Estimates sleep duration and quality from phone movement and noise overnight. | Kotlin, Android Sensors API | Sensor recording; Sleep phase estimate; Morning summary; Trends
Step Counter and Fitness Challenges | I | 6 | Counts steps and lets friends join weekly step challenges. | Flutter, Firebase, Health Connect | Step counting; Friend challenges; Leaderboard; Badges
Meditation and Breathing App | B | 4 | Guided breathing exercises with timers and session history. | Flutter | Breathing patterns; Animated guide; Session timer; History
First Aid Guide Offline App | B | 4 | Step-by-step offline first aid instructions with emergency calling. | React Native | Offline guides; Search; Emergency call button; Illustrations
Blood Donor Finder App | B | 5 | Find nearby registered blood donors by blood group during emergencies. | Flutter, Firebase, Google Maps SDK | Donor registration; Search by group and distance; Request broadcast; Donation history
Elderly Care Companion App | I | 7 | Medicine reminders, fall-alert button and daily check-ins shared with family members. | Flutter, Firebase | Reminders; SOS button; Daily check-in; Family dashboard
Diet Planner for Diabetics | I | 6 | Suggests meal plans based on glycaemic index and logs blood sugar readings. | React Native, Node.js, MongoDB | Food database with GI; Meal planning; Sugar log; Doctor report export
Posture Reminder App | B | 3 | Periodic reminders and stretches to improve posture during long study sessions. | Kotlin | Reminder schedule; Stretch library; Streaks; Quiet hours

# Safety and community
Women Safety SOS App | I | 6 | Sends location and an alert to trusted contacts with one tap or a shake gesture. | Kotlin, Firebase, Google Maps SDK | Trusted contacts; Shake-to-alert; Live location sharing; Nearby police stations
Road Accident Reporting App | I | 6 | Users report accidents with photos and location so authorities can respond faster. | Flutter, Firebase | Report with photo; Auto location; Authority dashboard; Status updates
Pothole Reporting App | B | 5 | Citizens photograph potholes and the app maps them for the municipality. | React Native, Node.js, PostgreSQL | Photo and location capture; Map of reports; Upvotes; Status tracking
Neighbourhood Help Exchange | B | 5 | Neighbours post small requests and offers like borrowing tools or tutoring. | Flutter, Firebase | Requests and offers; Location radius; Chat; Reputation
Child Location Tracker | I | 7 | Parents see their child's location and get alerts when they leave a safe zone. | Kotlin, Firebase, Google Maps SDK | Location sharing; Geofence safe zones; Alerts; Location history
Emergency Contacts and Helpline App | B | 3 | One-tap access to national and local helplines grouped by category. | Flutter | Helpline directory; Favourites; Call and SMS; Offline use
Public Toilet Finder | B | 4 | Shows nearby public toilets with cleanliness ratings from users. | React Native, Firebase, Google Maps SDK | Map of toilets; Ratings; Add new location; Accessibility info

# Money and shopping
Personal Budget App with SMS Parsing | I | 7 | Reads bank SMS messages on the device to log expenses automatically by category. | Kotlin, Room | SMS parsing; Auto categorisation; Monthly budget; Spending charts
Shopping List with Shared Lists | B | 4 | Family members share and update shopping lists in real time. | Flutter, Firebase | Lists and items; Real-time sharing; Check off items; Frequent items
Receipt Scanner and Expense Logger | I | 6 | Scan paper receipts and extract the total and date with OCR. | Flutter, Google ML Kit, SQLite | Camera capture; OCR extraction; Expense list; Export to CSV
Kirana Store Billing App | B | 5 | A simple billing and stock app for small shops that works offline. | Flutter, SQLite | Product list; Quick billing; Stock update; Daily sales
Subscription Tracker | B | 4 | Tracks recurring subscriptions and warns before renewal dates. | React Native, SQLite | Subscription entry; Renewal reminders; Monthly total; Category view
Group Trip Expense App | B | 5 | Log shared costs during a trip and settle up at the end. | Flutter, Firebase | Trip groups; Expenses in multiple currencies; Balances; Settlement plan
Coupon and Loyalty Card Wallet | B | 4 | Store loyalty cards and coupons with barcode display at checkout. | Kotlin, Room, ML Kit | Card scanning; Barcode display; Expiry reminders; Categories

# Learning and productivity
Vocabulary Builder App | B | 4 | Learn new English words daily with quizzes and spaced repetition. | Flutter, SQLite | Word of the day; Quizzes; Spaced repetition; Progress stats
Offline Dictionary App | B | 4 | A fast offline dictionary with search suggestions and favourites. | Kotlin, Room | Bundled dictionary; Prefix search; Favourites; Recent searches
Pomodoro Focus Timer | B | 3 | A focus timer with breaks, session stats and app blocking reminders. | Flutter | Pomodoro timer; Break reminders; Daily stats; Custom durations
Kids Learning App for Alphabets and Numbers | B | 5 | Interactive games that teach young children letters, numbers and sounds. | Flutter | Tracing activities; Audio pronunciation; Mini quizzes; Parent progress view
Sign Language Learning App | I | 7 | Teaches basic Indian Sign Language with videos and practice quizzes. | Flutter, Firebase | Lesson videos; Practice quizzes; Progress tracking; Offline download
Coding Practice App | I | 6 | Daily programming puzzles with an in-app code runner for simple languages. | React Native, Node.js | Daily problems; Code editor; Remote execution; Streaks
Voice Notes with Transcription | I | 6 | Record voice notes and get searchable text transcripts. | Kotlin, Android SpeechRecognizer, Room | Audio recording; Transcription; Search; Tags
Document Scanner App | I | 6 | Scan documents with edge detection, crop and save as PDF. | Kotlin, OpenCV, CameraX | Edge detection; Perspective crop; Filters; PDF export
Reading Tracker for Books | B | 4 | Track books read, reading time and set yearly reading goals. | Flutter, SQLite | Book search; Reading sessions; Yearly goal; Notes and quotes

# Local services and travel
Home Services Booking App | I | 8 | Book electricians, plumbers and cleaners and track the job. | Flutter, Node.js, PostgreSQL | Service catalogue; Provider matching; Booking and tracking; Ratings
Parking Spot Finder | I | 6 | Shows nearby parking spots and lets users save where they parked. | React Native, Google Maps SDK | Nearby parking; Save parked location; Parking timer; Navigation back to car
Bus Pass and Route App for City Transport | I | 7 | City bus routes, timings and a digital pass. | Flutter, Firebase | Route search; Timings; Digital pass; Favourite routes
Tourist Guide App with Offline Maps | I | 7 | Offline guide to a city's attractions with audio descriptions. | Flutter, Mapbox, SQLite | Attraction list; Offline map; Audio guide; Itinerary builder
Fuel Price and Mileage Tracker | B | 4 | Log fuel fills and calculate mileage and monthly fuel cost. | Kotlin, Room | Fill-up logging; Mileage calculation; Cost charts; Service reminders
Laundry Pickup App | B | 5 | Book laundry pickups and track order status for a local laundry service. | Flutter, Firebase | Pickup booking; Item count; Status updates; Payment record
Doctor Appointment App for Clinics | I | 6 | Patients book tokens at local clinics and see live queue status. | Flutter, Firebase | Clinic listing; Token booking; Live queue; Notifications
Weather App with Farming Advice | B | 5 | Local weather forecasts with simple advice for farmers like when to spray or irrigate. | Flutter, OpenWeather API | Forecast; Crop-specific tips; Rain alerts; Local language support
Mandi Price App for Farmers | B | 5 | Shows daily crop prices at nearby markets from open government data. | React Native, Node.js | Market price feed; Crop filters; Price trend chart; Nearby markets

# Media and social
Music Player with Playlists | B | 4 | A local music player with playlists, shuffle and a sleep timer. | Kotlin, ExoPlayer | Library scan; Playlists; Playback controls; Sleep timer
Podcast Player App | I | 6 | Subscribe to podcasts by RSS, download episodes and resume playback. | Flutter, SQLite | RSS subscriptions; Episode download; Resume position; Playback speed
Photo Journal App | B | 4 | A daily photo journal with captions, mood and a calendar view. | Flutter, SQLite | Daily entry; Mood tracking; Calendar view; Backup
Event Photo Sharing App | I | 6 | Guests at an event upload photos to a shared album using a code. | React Native, Firebase Storage | Event codes; Shared album; Upload from gallery; Download all
Anonymous Confession Wall for College | B | 5 | A moderated anonymous posting app for a college community. | Flutter, Firebase | Anonymous posts; Moderation; Reactions; Report abuse
Chat App with End-to-End Encryption | A | 10 | A messaging app that encrypts messages on the device using the Signal protocol ideas. | Kotlin, Node.js, WebSocket, libsodium | Key exchange; Encrypted messages; Delivery receipts; Group chat
Local Sports Team Finder | B | 5 | Find people nearby to play cricket, football or badminton. | Flutter, Firebase | Game posts; Join requests; Location filter; Team chat
Video Calling App | A | 9 | One-to-one and small group video calls using WebRTC. | Flutter, WebRTC, Node.js | Signalling server; One-to-one calls; Group calls; Mute and camera toggle
Walkie Talkie over Wi-Fi Direct | A | 8 | Push-to-talk voice chat between nearby phones without internet. | Kotlin, Wi-Fi Direct, AudioRecord | Peer discovery; Push-to-talk; Audio streaming; Group channel

# Accessibility and utilities
Color Identifier for Colour-blind Users | I | 5 | Point the camera at an object and the app speaks the colour name. | Kotlin, CameraX | Camera colour sampling; Colour naming; Text-to-speech; Saved colours
Currency Note Recognition for the Visually Impaired | A | 8 | Recognises Indian currency notes from the camera and announces the value. | Flutter, TensorFlow Lite | Dataset of notes; On-device model; Voice output; Works offline
Text Reader for Low Vision | I | 6 | Reads printed text aloud from a camera image. | Kotlin, ML Kit, TextToSpeech | Camera capture; OCR; Read aloud; Adjustable speed
Battery Health Monitor | B | 4 | Tracks charging habits and battery temperature with health tips. | Kotlin | Battery stats; Charging history; Temperature alerts; Tips
Offline File Sharing App | I | 7 | Share files between nearby phones over Wi-Fi Direct without internet. | Kotlin, Wi-Fi Direct | Device discovery; File transfer; Progress display; Transfer history
Password Manager App | A | 8 | Stores passwords encrypted on the device with a master password and biometric unlock. | Kotlin, Android Keystore, Room | Encrypted vault; Biometric unlock; Password generator; Autofill service
Unit Converter and Calculator | B | 3 | Converts units across categories and includes a scientific calculator. | Flutter | Unit categories; Scientific calculator; History; Favourites
Habit-based Screen Time Limiter | I | 6 | Shows app usage and helps set daily limits for distracting apps. | Kotlin, UsageStatsManager | Usage stats; App limits; Focus mode; Weekly report
`,
};
