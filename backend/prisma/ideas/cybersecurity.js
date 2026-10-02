module.exports = {
  domain: 'Cybersecurity',
  ideas: `
# Detection and defence
Phishing URL Detector Extension | I | 7 | A browser extension that warns users before they open a likely phishing link. | JavaScript, Chrome Extension API, Python, Flask | URL feature extraction; Classification model; Extension warning UI; Report false positives
Password Strength and Breach Checker | B | 4 | Checks password strength and whether it appeared in known breaches using k-anonymity, without sending the password. | React, Node.js | Strength scoring; Breach check with hashed prefix; Improvement tips; Privacy explanation page
Network Intrusion Detection with ML | A | 9 | Detects attacks in network traffic using machine learning trained on a public dataset. | Python, scikit-learn, CICIDS2017, Zeek | Feature extraction; Model training; Live traffic testing; Alert dashboard
Host-based Intrusion Detection System | A | 9 | Monitors file changes, logins and processes on a Linux machine and raises alerts. | Python, inotify, SQLite | File integrity monitoring; Login monitoring; Process anomalies; Alert log
Phishing Email Detector | I | 6 | Classifies emails as phishing using header, link and text features. | Python, scikit-learn, Flask | Email parsing; Feature extraction; Classifier; Explanation of red flags
Malware Detection Using Static Analysis | A | 9 | Classifies Windows executables as malicious or benign from PE header features. | Python, pefile, LightGBM, EMBER dataset | Feature extraction; Model training; Evaluation; Upload and scan UI
Android Malware Detection from Permissions | I | 7 | Flags suspicious Android apps from requested permissions and API calls. | Python, Androguard, scikit-learn | APK analysis; Feature vectors; Classifier; Report per app
Ransomware Behaviour Detector | A | 9 | Detects ransomware-like behaviour such as mass file encryption in a sandbox. | Python, Watchdog, Entropy analysis | File activity monitoring; Entropy checks; Process kill switch; Sandbox testing
Honeypot for SSH Attacks | I | 6 | Runs a fake SSH server that records attacker commands and source IPs. | Python, Cowrie, Elasticsearch, Kibana | Honeypot setup; Log collection; Attack dashboards; Threat report
DDoS Detection in Software-Defined Networks | A | 9 | Detects DDoS traffic in an SDN using flow statistics and ML. | Mininet, Ryu controller, Python, scikit-learn | SDN topology; Flow collection; Detection model; Mitigation rules
Web Application Firewall | A | 9 | A reverse proxy that blocks SQL injection, XSS and other common attacks. | Go or Node.js, Regex rules, Redis | Request inspection; Rule engine; Rate limiting; Attack logs
SIEM Lite for Small Organisations | A | 10 | Collects logs from servers, correlates events and raises security alerts. | Elasticsearch, Logstash, Kibana, Python | Log collection; Correlation rules; Alert dashboard; Incident notes
Fake Profile Detection on Social Media | I | 7 | Detects fake or bot accounts using profile and activity features. | Python, scikit-learn | Dataset; Feature engineering; Classifier; Explanation view
Credit Card Skimmer Detection App | I | 6 | Scans for suspicious Bluetooth devices near ATMs and fuel pumps. | Kotlin, Bluetooth LE API | Device scanning; Known skimmer signatures; Warnings; Report location
Insider Threat Detection from Activity Logs | A | 9 | Finds unusual employee behaviour such as mass downloads using anomaly detection. | Python, Pandas, Isolation Forest | Log dataset; User baselines; Anomaly scoring; Investigation view
DNS Tunnelling Detection | A | 8 | Detects data exfiltration hidden in DNS queries. | Python, Scapy, scikit-learn | DNS capture; Entropy and length features; Classifier; Alerts

# Testing and auditing tools
Web Vulnerability Scanner | A | 9 | Scans a web application you own for SQL injection, XSS and misconfigurations. | Python, Requests, BeautifulSoup | Crawler; Injection tests; Header checks; Report generation
Port Scanner with Service Detection | B | 4 | Scans hosts on your own network for open ports and identifies running services. | Python, Socket, Threading | TCP connect scan; Banner grabbing; Multi-threading; Report
Subdomain Enumeration Tool | I | 5 | Finds subdomains of a domain you are authorised to test using DNS and certificate logs. | Python, crt.sh API, DNS resolver | Certificate transparency search; Wordlist brute force; Live host check; Export
Security Header Checker | B | 3 | Checks a website's HTTP security headers and gives a grade with fixes. | Node.js, React | Header fetching; Rules and grading; Fix suggestions; Shareable report
SSL/TLS Configuration Auditor | I | 5 | Checks a server's TLS versions, ciphers and certificate validity. | Python, OpenSSL | Protocol checks; Cipher analysis; Certificate expiry; Grade report
Linux Security Hardening Auditor | I | 6 | Audits a Linux server against common hardening benchmarks and suggests fixes. | Bash, Python | SSH config checks; Permission checks; Firewall checks; Scored report
Cloud Misconfiguration Scanner | A | 8 | Scans a cloud account you own for public buckets, open ports and weak IAM policies. | Python, AWS SDK (boto3) | Bucket checks; Security group checks; IAM analysis; Findings report
Dependency Vulnerability Checker | I | 6 | Scans project dependencies against vulnerability databases and suggests safe versions. | Node.js, OSV API | Manifest parsing; Vulnerability lookup; Severity ranking; Upgrade suggestions
Secret Leak Scanner for Git Repositories | I | 6 | Finds API keys and passwords accidentally committed in a repository's history. | Python, GitPython, Regex | History traversal; Pattern and entropy detection; False positive filtering; Report
Static Code Analyser for Security Bugs | A | 9 | Finds insecure patterns in Python code like eval and SQL string building. | Python, AST module | AST parsing; Rule definitions; Taint tracking basics; Report with line numbers
Fuzzer for Command-line Programs | A | 8 | Generates mutated inputs to find crashes in programs. | Python, Subprocess | Seed corpus; Mutation strategies; Crash detection; Crash triage
Wi-Fi Security Auditor for Home Networks | I | 6 | Checks your own home Wi-Fi for weak encryption, default passwords and open services. | Python, Scapy, Nmap | Network discovery; Encryption check; Device inventory; Recommendations
Vulnerable Web App for Training | I | 7 | A deliberately vulnerable web app with lessons for students to practise safely. | Node.js, Express, SQLite, Docker | Vulnerability modules; Hints and lessons; Score tracking; Reset button
Capture the Flag Platform | I | 8 | Host CTF competitions with challenges, flag submission and a scoreboard. | Django, PostgreSQL, Docker | Challenge management; Flag checking; Scoreboard; Team accounts

# Cryptography and privacy
File Encryption Tool | B | 4 | Encrypts and decrypts files with a password using AES. | Python, cryptography library | Key derivation; AES-GCM encryption; Drag-and-drop UI; Integrity check
Secure Chat with End-to-End Encryption | A | 9 | A web chat where messages are encrypted in the browser before sending. | React, Web Crypto API, Node.js, WebSocket | Key generation; Key exchange; Encrypted messaging; Safety number verification
Steganography Tool | B | 4 | Hides secret messages inside images and extracts them. | Python, Pillow | LSB embedding; Password protection; Extraction; Capacity calculator
Digital Signature Verification Portal | I | 6 | Signs documents with private keys and verifies signatures online. | Node.js, OpenSSL, React | Key pair generation; Document signing; Verification; Certificate display
Visual Cryptography for Secure Images | I | 5 | Splits an image into shares that reveal the secret only when combined. | Python, Pillow | Share generation; Overlay reconstruction; Colour support; Demo UI
Password Manager Web App | A | 9 | A zero-knowledge password manager where the server never sees plain passwords. | React, Web Crypto API, Node.js, PostgreSQL | Client-side encryption; Vault sync; Password generator; Breach check
Secure File Sharing with Expiring Links | I | 7 | Upload files encrypted in the browser and share links that expire after one download. | Next.js, Web Crypto API, S3-compatible storage | Client-side encryption; Expiring links; Download limits; Audit log
Two-factor Authentication Service | I | 6 | Adds TOTP-based two-factor authentication to a sample login system. | Node.js, otplib, React | TOTP setup with QR; Verification; Backup codes; Recovery flow
Privacy Policy Analyser | I | 6 | Reads a website's privacy policy and highlights data collection and sharing practices. | Python, NLP, Chrome Extension API | Policy fetching; Clause classification; Risk summary; Extension popup
Browser Tracker Blocker Extension | I | 6 | Blocks third-party trackers and shows which companies track you on each site. | JavaScript, Chrome Extension API | Blocklists; Request blocking; Per-site report; Allow list
Personal Data Exposure Checker | I | 6 | Shows users which of their personal details are publicly visible on their own social profiles. | Python, Flask | Self-search with consent; Exposure categories; Risk score; Privacy tips
Homomorphic Encryption Demo | A | 9 | Demonstrates computing on encrypted data, such as summing encrypted salaries. | Python, Microsoft SEAL or TenSEAL | Encryption scheme setup; Encrypted computation; Performance study; Explainer UI
Secure Voting with Cryptography | A | 10 | An e-voting prototype using homomorphic tallying so individual votes stay secret. | Python, Paillier cryptosystem, Flask | Voter registration; Encrypted ballots; Homomorphic tally; Verification

# Authentication and access
Role-based Access Control System | I | 6 | A reusable RBAC module with roles, permissions and an admin UI. | Node.js, PostgreSQL, React | Role and permission model; Middleware; Admin UI; Audit log
Single Sign-On with OAuth 2.0 and OpenID Connect | A | 8 | Builds an identity provider so several demo apps share one login. | Node.js, Keycloak or oidc-provider | Identity provider setup; Client apps; Token validation; Logout across apps
Passwordless Login with Magic Links | I | 5 | Users log in through a one-time link sent to their email. | Next.js, Node.js, PostgreSQL | Token generation; Email sending; Expiry and single use; Session management
Keystroke Dynamics Authentication | A | 8 | Verifies users by their typing rhythm in addition to their password. | JavaScript, Python, scikit-learn | Timing capture; Feature extraction; User model; Verification accuracy
Graphical Password Authentication | I | 6 | Users authenticate by clicking points on an image instead of typing a password. | React, Node.js | Image selection; Click-point capture; Tolerance matching; Security analysis
Biometric Attendance with Fingerprint | I | 6 | Records attendance with a fingerprint sensor linked to a web portal. | Arduino, R307 fingerprint sensor, Node.js | Fingerprint enrolment; Matching; Attendance upload; Reports
Login Anomaly Detection | I | 6 | Flags suspicious logins based on location, device and time. | Node.js, PostgreSQL, GeoIP | Login logging; Risk scoring; Alerts; User confirmation flow
CAPTCHA Alternative Using Behaviour | A | 8 | Distinguishes humans from bots using mouse and typing behaviour. | JavaScript, Python, scikit-learn | Behaviour capture; Feature engineering; Bot classifier; Integration demo

# Forensics and awareness
Digital Forensics Toolkit for Disk Images | A | 9 | Extracts deleted files, timelines and metadata from disk images. | Python, The Sleuth Kit, Autopsy | Image mounting; File carving; Timeline creation; Report
Image Metadata Forensics Tool | B | 4 | Extracts EXIF data and detects editing traces in images. | Python, Pillow, ExifTool | EXIF extraction; GPS mapping; Edit detection; Report
Email Header Analyser | B | 4 | Traces an email's route and checks SPF, DKIM and DMARC results. | Python, Flask | Header parsing; Hop visualisation; Authentication checks; Spoofing warning
Log Analyser for Web Server Attacks | I | 5 | Finds attack patterns like brute force and scanning in web server logs. | Python, Pandas | Log parsing; Attack signatures; IP statistics; Report
Network Packet Analyser | I | 6 | Captures packets and shows protocol breakdown and suspicious traffic. | Python, Scapy, Flask | Packet capture; Protocol decoding; Statistics; Suspicious pattern flags
Security Awareness Training Platform | B | 6 | Short lessons and simulated phishing quizzes for employees or students. | Next.js, PostgreSQL | Lesson modules; Phishing quizzes; Scores; Certificates
Cyber Incident Reporting Portal | B | 5 | Students and staff report suspected security incidents and IT tracks them. | Django, PostgreSQL | Report form; Triage workflow; Status updates; Statistics
Threat Intelligence Feed Aggregator | I | 7 | Aggregates public threat feeds and lets analysts search indicators. | Python, MISP, Elasticsearch | Feed ingestion; Deduplication; Indicator search; Enrichment
Bug Bounty Program Manager | I | 7 | Organisations publish scope, researchers submit reports and triage is tracked. | Next.js, PostgreSQL | Program scope pages; Report submission; Triage workflow; Rewards tracking
Cybersecurity Quiz Game | B | 4 | A game that teaches security concepts through scenarios and quizzes. | React, Firebase | Scenario questions; Scoring; Explanations; Leaderboard
`,
};
