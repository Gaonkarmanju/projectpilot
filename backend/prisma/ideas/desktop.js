module.exports = {
  domain: 'Desktop Apps',
  ideas: `
# Productivity and utilities
Clipboard Manager | B | 4 | Keeps a searchable history of copied text and images. | Electron, JavaScript | Clipboard monitoring; History list; Search; Pin favourites
File Organiser by Type and Date | B | 3 | Automatically sorts files in a folder into subfolders by type and date. | Python, Tkinter | Folder selection; Sorting rules; Preview; Undo
Duplicate File Finder | B | 4 | Finds duplicate files by content hash and helps remove them safely. | Python, PyQt | Folder scan; Hash comparison; Results view; Move to recycle bin
Screen Recorder with Annotations | I | 6 | Records the screen with webcam overlay and drawing annotations. | Electron, FFmpeg | Screen capture; Webcam overlay; Annotations; Export
Screenshot Tool with OCR | I | 5 | Takes screenshots and extracts text from them. | Python, PyQt, Tesseract | Region capture; OCR; Copy text; History
Personal Time Tracker | B | 5 | Tracks time spent on applications and projects automatically. | Electron, SQLite | Active window tracking; Project tagging; Reports; Idle detection
Desktop Notes with Reminders | B | 4 | Sticky notes on the desktop with reminders and colours. | C#, WPF | Sticky notes; Reminders; Colours; Persistence
PDF Toolkit | I | 6 | Merge, split, compress and convert PDFs offline. | Python, PyQt, PyPDF | Merge and split; Compression; Image to PDF; Page reorder
Batch Image Resizer and Watermarker | B | 4 | Resizes and watermarks many images at once. | Python, Tkinter, Pillow | Folder input; Resize options; Watermark; Output format
Markdown Editor with Live Preview | I | 5 | A desktop Markdown editor with preview, themes and export to PDF. | Electron, React | Editor; Live preview; Themes; PDF export
Password Generator and Vault | I | 6 | Generates strong passwords and stores them in an encrypted local vault. | Python, PyQt, cryptography | Generator; Encrypted storage; Master password; Auto-lock
Text Expander Tool | I | 5 | Expands short abbreviations into full text snippets while typing. | Python, keyboard library | Snippet library; Keystroke detection; Variables like date; Settings UI
Focus Mode Website Blocker | B | 4 | Blocks distracting websites during study sessions. | Python, Tkinter | Block list; Timer sessions; Hosts file management; Statistics
Offline Dictionary and Thesaurus | B | 4 | Look up words, synonyms and examples offline. | Java, JavaFX, SQLite | Word database; Search; Synonyms; Favourites
Desktop Music Player with Visualiser | I | 6 | A music player with playlists and an audio spectrum visualiser. | Python, PyQt, Pygame | Library; Playlists; Playback; Spectrum visualiser

# Business and office
Billing and Inventory Desktop App for Shops | I | 7 | An offline billing app with barcode scanning, stock and GST reports. | Java, JavaFX, SQLite | Product master; Barcode billing; Stock updates; GST reports
School Management Desktop Application | I | 8 | Manages students, fees, attendance and marks for a small school. | C#, WinForms, SQL Server | Student records; Fee collection; Attendance; Report cards
Payroll Management System | I | 7 | Calculates salaries with deductions and generates payslips. | Java, JavaFX, MySQL | Employee records; Salary rules; Payslip generation; Monthly reports
Clinic Management Software | I | 7 | Manages patients, appointments and prescriptions for a small clinic. | C#, WPF, SQLite | Patient records; Appointments; Prescriptions; Billing
Library Management Desktop App | B | 5 | Manages books, members, issues and fines offline. | Java, Swing, SQLite | Catalogue; Members; Issue and return; Fine calculation
Exam Result Processing System | B | 5 | Imports marks and generates grade sheets and statistics. | Python, PyQt, Pandas | Marks import; Grade rules; Mark sheets; Class statistics
Point of Sale for Restaurants | I | 7 | Takes table orders, sends kitchen tickets and prints bills. | C#, WPF, SQLite | Table orders; Kitchen tickets; Bill printing; Daily sales
Attendance System with Webcam Face Recognition | I | 7 | A desktop app that marks attendance from a webcam. | Python, PyQt, OpenCV | Face enrolment; Recognition; Attendance export; Settings
Certificate Generator in Bulk | B | 3 | Generates personalised certificates from a template and a spreadsheet. | Python, Tkinter, Pillow | Template positioning; Spreadsheet import; Bulk generation; Email option
Visitor Management System | B | 4 | Records visitors with photo, purpose and time in and out. | Java, JavaFX, SQLite | Visitor entry; Photo capture; Badge print; Reports

# Developer and learning tools
SQL Query Builder GUI | I | 6 | Build SQL queries visually and see results without writing SQL. | Python, PyQt, SQLite | Table browser; Visual joins and filters; Generated SQL; Results grid
API Testing Client like Postman | I | 7 | Send HTTP requests, save collections and view formatted responses. | Electron, React | Request builder; Collections; Environment variables; Response viewer
Git GUI Client | A | 8 | A graphical Git client for commits, branches and history. | Electron, React, isomorphic-git | Repository view; Staging; Branch graph; Diff viewer
Log File Viewer with Filters | I | 5 | Opens large log files quickly with filtering and highlighting. | C# or Rust | Streaming file reading; Filters; Highlighting; Tail mode
JSON and YAML Formatter Tool | B | 3 | Validates, formats and converts between JSON and YAML. | Electron, JavaScript | Validation; Formatting; Conversion; Tree view
Regex Tester Desktop App | B | 4 | Test regular expressions with match highlighting and explanations. | Python, PyQt | Pattern input; Match highlighting; Groups; Explanations
Code Snippet Manager | B | 4 | Stores and searches code snippets with tags and syntax highlighting. | Electron, SQLite | Snippet editor; Tags; Search; Syntax highlighting
Graph Algorithms Visualiser Desktop App | I | 6 | Draw graphs and watch BFS, DFS, Dijkstra and MST algorithms run. | Java, JavaFX | Graph editor; Algorithm animations; Step controls; Explanations
Typing Tutor | B | 4 | Lessons and tests to learn touch typing with accuracy stats. | Python, Tkinter | Lessons; Speed tests; Mistake analysis; Progress chart
Mathematical Expression Plotter | I | 5 | Plots functions, derivatives and integrals from typed expressions. | Python, PyQt, SymPy, Matplotlib | Expression parsing; Plotting; Derivatives; Export
Circuit Diagram Editor | I | 7 | Draw electrical circuit diagrams with a component library and export. | Java, JavaFX | Component library; Wiring; Labels; Export to image

# Media and accessibility
Video to Audio Converter and Trimmer | B | 4 | Converts videos to audio and trims clips. | Python, Tkinter, FFmpeg | File input; Format conversion; Trimming; Batch mode
Subtitle Editor | I | 5 | Edit and sync subtitles with video preview. | Python, PyQt, VLC | Video preview; Subtitle timeline; Sync tools; Export SRT
Screen Reader Helper for Documents | I | 6 | Reads documents aloud with highlighting for users with reading difficulties. | Python, PyQt, pyttsx3 | Document loading; Text-to-speech; Word highlighting; Speed and voice
Eye Strain Reminder App | B | 3 | Reminds users to follow the 20-20-20 rule and adjusts screen warmth. | Python, Tkinter | Break reminders; Exercise prompts; Night mode; Statistics
Photo Collage Maker | B | 4 | Arrange photos into collage layouts and export. | Python, PyQt, Pillow | Layout templates; Drag and drop; Borders and text; Export
Desktop Weather Widget | B | 3 | A small desktop widget showing current weather and forecast. | Python, PyQt, OpenWeather API | Location setting; Current weather; Forecast; Auto refresh
Voice Typing for Regional Languages | I | 6 | Dictate text in regional languages into any application. | Python, Speech recognition API | Language selection; Dictation; Text insertion; Punctuation commands
`,
};
