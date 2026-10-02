module.exports = {
  domain: 'Web',
  ideas: `
# Campus and college life
College Event Management Portal | B | 6 | A portal where clubs post events and students register, get reminders and download certificates. | Next.js, Node.js, PostgreSQL | Event listing and search; Student registration; Admin dashboard for clubs; Certificate generation
Hostel Complaint Tracker | B | 5 | Students raise hostel complaints, wardens assign and resolve them, and everyone sees the status. | React, Express, MongoDB | Complaint submission with photos; Status tracking; Warden assignment; Monthly reports
Online Library Management System | B | 6 | Manage books, issues, returns and fines, with a student view to search and reserve books. | Spring Boot, MySQL, Thymeleaf | Book catalogue; Issue and return; Fine calculation; Reservation queue
Real-time Collaborative Code Editor | A | 10 | Multiple users edit the same code file live, see each other's cursors and run code in a sandbox. | Next.js, Socket.IO, Node.js, Docker | Shared rooms; Live sync with conflict handling; Code execution sandbox; Chat inside rooms
Placement Preparation Tracker | I | 7 | Track coding practice, aptitude scores and company applications in one place with streaks and analytics. | Next.js, Node.js, PostgreSQL, Chart.js | Daily practice log; Company application tracker; Progress analytics; Reminders
Online Examination System | I | 7 | Faculty create timed MCQ and descriptive tests, students attempt them online and get instant results for objective questions. | React, Node.js, PostgreSQL | Question bank; Timed test engine; Auto-grading for MCQs; Result analytics
Faculty Feedback System | B | 4 | Anonymous course feedback forms for students with aggregated reports for the department head. | PHP, MySQL, Bootstrap | Feedback form builder; Anonymous submission; Per-course reports; Export to PDF
Timetable Generator for Colleges | A | 9 | Generates clash-free timetables from subjects, faculty availability and rooms using constraint solving. | Python, Django, PostgreSQL, OR-Tools | Input of constraints; Constraint-based scheduler; Manual adjustment UI; Faculty and room views
Alumni Networking Portal | I | 7 | Connects current students with alumni for mentorship, referrals and career advice. | Next.js, Node.js, PostgreSQL | Alumni profiles; Mentorship requests; Job referral board; Messaging
Canteen Pre-order System | B | 5 | Students order food from the college canteen in advance and pick it up without waiting in queue. | React, Firebase | Menu management; Order and pickup time; Order status for kitchen; Daily sales report
Project Allotment Portal | B | 5 | Students submit project preferences and guides, and the department allots projects fairly. | Django, PostgreSQL | Guide and topic listing; Preference submission; Allotment algorithm; Allotment report
Internship Diary and Logbook | B | 4 | Students record daily internship work and guides review and approve the log weekly. | Flask, SQLite, Bootstrap | Daily entries; Weekly guide approval; Attendance summary; PDF logbook export
Research Paper Repository | I | 6 | A searchable archive of faculty and student publications with citation export. | Django, PostgreSQL, Elasticsearch | Paper upload with metadata; Full-text search; BibTeX export; Author pages
College Bus Tracking Web App | I | 7 | Shows live location of college buses and estimated arrival at each stop. | React, Node.js, Socket.IO, Leaflet | Driver location sharing; Live map; Stop ETA estimation; Route management
Lab Equipment Booking System | B | 5 | Students and researchers book lab equipment slots and admins track usage and maintenance. | Laravel, MySQL | Equipment catalogue; Slot booking calendar; Approval workflow; Usage and maintenance log
Scholarship Finder Portal | B | 5 | Lists government and private scholarships and matches them to a student's profile and eligibility. | Next.js, PostgreSQL | Scholarship database; Eligibility filters; Deadline reminders; Saved scholarships
Student Club Management System | B | 5 | Clubs manage members, meetings, budgets and announcements in one place. | React, Express, MongoDB | Membership requests; Meeting minutes; Budget tracking; Announcements
Online Voting System for Student Elections | I | 6 | Secure college elections with verified voters, one vote per student and live result counting after close. | Node.js, PostgreSQL, React | Voter verification; Candidate nominations; One-time ballot; Result dashboard
Question Paper Generator | I | 6 | Builds balanced question papers from a tagged question bank based on marks, units and difficulty. | Django, PostgreSQL | Question tagging; Blueprint rules; Paper generation; Print-ready export
Peer Notes Sharing Platform | B | 5 | Students upload and rate class notes by subject and semester. | Next.js, Supabase | Notes upload; Subject and semester filters; Ratings and comments; Reporting of bad uploads
Assignment Plagiarism Checker Portal | I | 7 | Faculty upload assignments and the system highlights similar submissions across the class. | Python, Flask, scikit-learn | Bulk submission upload; Text similarity scoring; Side-by-side comparison; Similarity report
Mess Menu and Feedback App | B | 4 | Publishes the weekly hostel mess menu and collects meal ratings so the committee can improve food. | React, Firebase | Weekly menu; Meal ratings; Complaint section; Monthly summary

# Business and commerce
Local Grocery Store E-commerce | I | 8 | An online store for a neighbourhood grocery shop with inventory, delivery slots and order tracking. | Next.js, Node.js, PostgreSQL, Razorpay test mode | Product catalogue; Cart and checkout; Delivery slot booking; Admin inventory
Restaurant Table Reservation System | B | 5 | Customers book tables online and restaurant staff manage seating and walk-ins. | React, Express, MySQL | Table layout; Booking with time slots; Staff dashboard; SMS or email confirmation
Salon Appointment Booking | B | 5 | Customers pick a service, stylist and time slot, and the salon manages its schedule. | Vue.js, Firebase | Service catalogue; Stylist availability; Booking and cancellation; Reminders
Small Business Invoice Generator | B | 4 | Create, send and track GST invoices for small businesses with payment status. | React, Node.js, MongoDB | Customer list; GST invoice builder; PDF export; Payment status tracking
Inventory Management for Small Shops | I | 7 | Tracks stock, purchases and sales with low-stock alerts and supplier records. | Django, PostgreSQL, Chart.js | Product and stock records; Purchase and sale entries; Low-stock alerts; Sales reports
Freelancer Marketplace | A | 10 | Clients post jobs, freelancers bid, and payments are held until work is approved. | Next.js, Node.js, PostgreSQL, Stripe test mode | Job posting and bidding; Profiles and portfolios; Escrow-style milestones; Reviews and ratings
Second-hand Book Exchange | B | 5 | Students list used textbooks for sale or swap within their college. | React, Express, MongoDB | Book listings; Search by course; Chat with seller; Mark as sold
Rental Property Listing Portal | I | 7 | Landlords list rooms and flats, tenants filter by area, rent and amenities and contact owners. | Next.js, PostgreSQL, Leaflet | Property listings with photos; Map search; Filters; Enquiry form
Event Ticket Booking Platform | I | 8 | Organisers create events with seat categories and users book tickets with QR codes for entry. | React, Node.js, PostgreSQL | Event creation; Seat categories; QR ticket generation; Entry scanning page
Car Rental Management System | I | 7 | Manages a fleet of rental cars, bookings, pricing and returns. | Spring Boot, MySQL, React | Fleet management; Booking calendar; Pricing by duration; Return and damage check
Job Portal for Freshers | I | 7 | A job board focused on entry-level roles with resume upload and application tracking. | Django, PostgreSQL | Job listings; Resume upload; Application status; Employer dashboard
Hotel Management System | I | 8 | Handles room booking, check-in, check-out, housekeeping and billing for a small hotel. | Java, Spring Boot, MySQL | Room inventory; Reservations; Check-in and billing; Housekeeping status
Gym Membership Management | B | 5 | Tracks members, plans, payments and attendance for a gym. | Laravel, MySQL | Membership plans; Payment reminders; Attendance check-in; Trainer assignment
Online Auction Platform | A | 9 | Users list items and bid in real time with automatic bid closing and winner notification. | Next.js, Socket.IO, Redis, PostgreSQL | Item listing; Real-time bidding; Auto-close timer; Winner notification
Product Price Tracker | I | 6 | Tracks product prices across online stores and alerts users when a price drops. | Python, FastAPI, PostgreSQL, React | Product URL tracking; Scheduled price scraping; Price history chart; Drop alerts
Food Donation Platform | B | 6 | Restaurants and households post surplus food and NGOs claim and collect it. | React, Node.js, MongoDB | Donation posts; Pickup claiming; Location-based listing; Donation history
Customer Support Ticketing System | I | 7 | Customers raise tickets, agents are assigned automatically and SLAs are tracked. | Next.js, Node.js, PostgreSQL | Ticket creation; Auto-assignment; SLA timers; Agent performance report
Crowdfunding Platform for Student Projects | I | 8 | Students create campaigns for project funding and supporters pledge with progress tracking. | React, Node.js, PostgreSQL | Campaign pages; Pledge tracking; Updates feed; Goal progress bar
Recipe Sharing Website | B | 5 | Users post recipes with ingredients and steps, and others search, save and rate them. | Next.js, Supabase | Recipe editor; Ingredient search; Ratings; Collections
Personal Finance Tracker | B | 5 | Track income, expenses and budgets by category with monthly charts. | React, Firebase, Chart.js | Transaction entry; Categories and budgets; Monthly charts; CSV export

# Health and public services
Hospital Appointment System | I | 7 | Patients book doctor appointments, doctors manage their schedule and records are kept per visit. | Django, PostgreSQL | Doctor schedules; Appointment booking; Visit notes; Prescription printout
Blood Bank Management System | B | 6 | Tracks donors, blood stock by group and requests from hospitals. | PHP, MySQL | Donor registration; Stock by blood group; Request handling; Donation camp records
Pharmacy Stock and Expiry Tracker | B | 5 | Tracks medicine stock and warns before batches expire. | Flask, SQLite | Medicine batches; Expiry alerts; Sales entries; Reorder list
Vaccination Reminder Portal | B | 4 | Parents record their child's vaccinations and get reminders for upcoming doses. | React, Firebase | Child profiles; Vaccination schedule; Reminders; Printable record
Village Grievance Portal | B | 6 | Citizens report local issues like water or roads and officials track resolution. | Next.js, PostgreSQL, Leaflet | Issue reporting with location; Department routing; Status tracking; Public dashboard
Disaster Relief Coordination Portal | I | 8 | Connects people needing help during floods or disasters with volunteers and relief camps. | React, Node.js, MongoDB, Leaflet | Help requests on map; Volunteer registration; Camp resource tracking; Request matching
Ambulance Booking Web App | I | 7 | Users request the nearest available ambulance and track its arrival. | React, Node.js, Socket.IO, Leaflet | Ambulance registration; Nearest-unit matching; Live tracking; Hospital notification
Telemedicine Consultation Platform | A | 10 | Patients have video consultations with doctors and receive digital prescriptions. | Next.js, WebRTC, Node.js, PostgreSQL | Doctor directory; Slot booking; Video calling; Digital prescription
Mental Health Peer Support Forum | I | 6 | An anonymous forum with moderation where students share and support each other. | Next.js, PostgreSQL | Anonymous posts; Moderation queue; Helpline resources; Content warnings
Pet Adoption Portal | B | 5 | Shelters list animals for adoption and users apply to adopt. | React, Express, MongoDB | Animal listings; Adoption applications; Shelter dashboard; Success stories

# Productivity and developer tools
Kanban Task Board | B | 5 | A Trello-style board with drag-and-drop cards, lists and team members. | React, Node.js, PostgreSQL | Boards and lists; Drag-and-drop cards; Assignees and due dates; Activity log
Markdown Notes App with Sync | I | 6 | Write Markdown notes with live preview, tags and full-text search, synced across devices. | Next.js, Supabase | Markdown editor; Live preview; Tags and search; Sync across devices
URL Bookmark Manager with Tags | B | 4 | Save, tag and search bookmarks with automatic page title and preview fetching. | React, Express, MongoDB | Bookmark saving; Auto-fetch title and preview; Tags; Search
Online Whiteboard | A | 9 | A shared whiteboard where multiple users draw, add shapes and sticky notes in real time. | React, Canvas API, Socket.IO, Node.js | Drawing tools; Real-time sync; Sticky notes; Export as image
Pastebin with Syntax Highlighting | B | 4 | Share code snippets with syntax highlighting, expiry times and private links. | Next.js, PostgreSQL | Snippet creation; Language highlighting; Expiry; Private links
API Documentation Generator | I | 7 | Reads an OpenAPI spec and produces an interactive documentation site with try-it-out requests. | React, Node.js | Spec parsing; Endpoint pages; Try-it-out console; Search
Website Uptime Monitor | I | 6 | Checks websites at intervals and alerts the owner when a site goes down. | Node.js, PostgreSQL, React | Monitor setup; Scheduled checks; Downtime alerts; Uptime history
Form Builder with Analytics | I | 7 | Build custom forms with drag-and-drop fields, share them and analyse responses. | React, Node.js, PostgreSQL, Chart.js | Drag-and-drop builder; Shareable links; Response storage; Response charts
Personal Portfolio Site Builder | B | 5 | Students fill a form and get a hosted portfolio site from a template. | Next.js, Supabase | Profile form; Template selection; Project gallery; Custom subdomain
Habit Tracker with Streaks | B | 4 | Track daily habits, view streaks and get gentle reminders. | React, Firebase | Habit creation; Daily check-ins; Streak calendar; Reminders
Meeting Scheduler with Availability Polls | I | 6 | Participants mark free slots and the tool finds the best meeting time. | Next.js, PostgreSQL | Poll creation; Availability grid; Best-slot suggestion; Calendar export
Code Snippet Search Engine | A | 9 | Indexes code from public repositories and lets users search by function, language and keyword. | Python, Elasticsearch, React | Repository crawler; Code indexing; Search with filters; Result highlighting
Online Compiler for Multiple Languages | A | 9 | Write and run code in several languages in the browser with safe sandboxed execution. | React, Node.js, Docker | Code editor; Language selection; Sandboxed execution; Time and memory limits
Resume Builder | B | 4 | Students build an ATS-friendly resume from templates and export it as PDF. | React, Node.js | Section-based editor; Templates; Live preview; PDF export
Static Site Generator | I | 6 | Converts Markdown files into a fast static website with themes and RSS. | Node.js | Markdown parsing; Templates and themes; RSS feed; Build command
Browser-based Spreadsheet | A | 10 | A spreadsheet app with formulas, cell references and CSV import and export. | React, TypeScript | Grid rendering; Formula parser; Dependency recalculation; CSV import and export

# Social, media and learning
Discussion Forum for Developers | I | 7 | A Q&A forum where users ask programming questions, answer and vote. | Django, PostgreSQL | Questions and answers; Voting; Tags; Reputation points
Blogging Platform with Comments | B | 5 | Users write and publish blog posts with a rich text editor and comments. | Next.js, PostgreSQL | Rich text editor; Publishing; Comments; Author profiles
Online Learning Management System | A | 10 | Instructors create courses with videos and quizzes and students track their progress. | Next.js, Node.js, PostgreSQL | Course builder; Video lessons; Quizzes; Progress tracking
Coding Contest Platform | A | 10 | Host programming contests with problem sets, automatic judging and a live leaderboard. | React, Node.js, Docker, PostgreSQL | Problem setting; Code judging; Live leaderboard; Contest timer
Flashcard Learning App with Spaced Repetition | I | 6 | Create flashcard decks and review them on a spaced repetition schedule. | React, Node.js, PostgreSQL | Deck creation; SM-2 scheduling; Review sessions; Progress stats
Language Exchange Platform | I | 7 | Matches learners who want to practise each other's languages and lets them chat. | Next.js, Socket.IO, PostgreSQL | Language profiles; Partner matching; Real-time chat; Session feedback
Podcast Hosting Website | I | 7 | Creators upload episodes, the site generates an RSS feed and tracks listens. | Next.js, Node.js, S3-compatible storage | Episode upload; RSS feed; Web player; Listen analytics
Photo Gallery with Albums | B | 4 | Upload, organise and share photos in albums with thumbnails. | React, Cloudinary, Node.js | Image upload; Albums; Thumbnails; Share links
Movie Review and Watchlist Site | B | 5 | Users search movies, write reviews and maintain a watchlist. | React, TMDB API, Firebase | Movie search; Reviews and ratings; Watchlist; Recommendations by genre
Volunteer Management Platform for NGOs | I | 6 | NGOs post volunteering opportunities and track volunteer hours. | Django, PostgreSQL | Opportunity listings; Sign-ups; Hours logging; Certificates
Local News Aggregator | I | 6 | Collects local news from RSS feeds and groups stories by topic. | Python, Flask, PostgreSQL | RSS fetching; Topic grouping; Search; Daily digest email
Quiz Platform for Teachers | B | 5 | Teachers create live quizzes and students join with a code and answer on their phones. | React, Socket.IO, Node.js | Quiz creation; Join with code; Live question flow; Leaderboard
Online Debate Platform | I | 6 | Structured debates with timed rounds, arguments for and against, and audience voting. | Next.js, Socket.IO, PostgreSQL | Debate rooms; Timed rounds; Argument threads; Audience voting
Travel Itinerary Planner | I | 7 | Plan trips day by day with places, bookings and a shared map for travel companions. | Next.js, PostgreSQL, Leaflet | Trip creation; Day-wise plan; Map view; Share with companions
Farmers Market Web Portal | I | 7 | Farmers list produce and buyers order directly without middlemen. | React, Node.js, PostgreSQL | Produce listings; Orders; Farmer profiles; Price trends
Society Maintenance Management | B | 5 | Apartment societies manage maintenance bills, complaints and notices. | Laravel, MySQL | Flat records; Maintenance billing; Complaints; Notice board
`,
};
