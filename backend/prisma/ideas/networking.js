module.exports = {
  domain: 'Networking',
  ideas: `
# Protocols and servers
HTTP Server from Scratch | I | 6 | A multi-threaded HTTP/1.1 server that serves static files and handles keep-alive. | C or Go | Socket handling; Request parsing; Static file serving; Concurrency
DNS Resolver Implementation | I | 6 | A recursive DNS resolver that queries root, TLD and authoritative servers. | Python or Go | DNS message format; Recursive resolution; Caching; CLI
Chat Server with Custom Protocol | B | 5 | A TCP chat server with rooms, nicknames and private messages using a custom protocol. | Java or Python | Protocol design; Multi-client server; Rooms; Client application
FTP Client and Server | I | 6 | Implements a subset of FTP for uploading and downloading files. | Python | Control and data connections; Commands; Authentication; Transfer progress
Reliable Transfer over UDP | A | 8 | Implements reliable, ordered delivery on top of UDP with sliding windows. | C or Python | Packet format; Acknowledgements; Retransmission; Congestion control experiments
Reverse Proxy and Load Balancer | I | 7 | Forwards requests to backend servers with round robin and health checks. | Go | Proxying; Balancing strategies; Health checks; Metrics
VPN Prototype with TUN Devices | A | 9 | Tunnels traffic between two machines with encryption using TUN interfaces. | Go or C, Linux TUN | TUN setup; Encapsulation; Encryption; Routing
Email Server Implementation | A | 9 | A basic SMTP and IMAP server for a small domain. | Python or Go | SMTP receiving; Mailbox storage; IMAP access; Spam checks
WebSocket Server from Scratch | I | 6 | Implements the WebSocket handshake and framing without libraries. | Node.js or Python | Handshake; Frame parsing; Broadcast; Ping and pong
HTTP/2 Multiplexing Demonstration | A | 8 | Compares HTTP/1.1 and HTTP/2 page loads and demonstrates multiplexing. | Go, Nginx, Browser DevTools | Server setup; Test pages; Measurements; Report
Simple Network Time Protocol Client | B | 4 | Synchronises time with NTP servers and measures offset and delay. | Python | NTP packet; Offset calculation; Multiple servers; Accuracy report
Mini TCP/IP Stack | A | 12 | A user-space TCP/IP stack handling ARP, IP, ICMP and basic TCP. | C, Linux TAP | Ethernet and ARP; IP and ICMP; TCP state machine; Ping and HTTP test

# Tools and monitoring
Network Packet Sniffer | I | 5 | Captures packets and decodes Ethernet, IP, TCP and UDP headers. | Python, Scapy or raw sockets | Packet capture; Protocol decoding; Filters; Statistics
Network Topology Mapper | I | 6 | Discovers devices on your own network and draws a topology map. | Python, Nmap, D3.js | Host discovery; Device fingerprinting; Topology graph; Inventory export
Bandwidth Usage Monitor | I | 6 | Shows which devices and applications use the most bandwidth on a home network. | Python, Raspberry Pi, Grafana | Traffic capture; Per-device accounting; Dashboards; Alerts
Internet Speed Test Web App | B | 5 | Measures download speed, upload speed and latency from the browser. | Node.js, JavaScript | Test server; Measurement logic; Results history; Comparison chart
Traceroute Visualiser | B | 4 | Runs traceroute and shows the route on a world map. | Python, Folium | Traceroute execution; IP geolocation; Map plotting; Latency per hop
Wi-Fi Heatmap Generator | I | 6 | Measures Wi-Fi signal strength around a building and creates a coverage heatmap. | Python, Android, Matplotlib | Signal sampling; Floor plan mapping; Heatmap; Access point suggestions
Network Latency Monitor | B | 4 | Pings a list of hosts periodically and shows latency and packet loss. | Python, Grafana | Scheduled pings; Storage; Dashboard; Alerts
SNMP Network Monitoring Dashboard | I | 7 | Polls routers and switches with SNMP and shows interface usage. | Python, SNMP, Grafana | Device polling; Interface counters; Dashboards; Thresholds
Firewall Rule Analyser | I | 6 | Finds redundant, shadowed and risky rules in firewall configurations. | Python | Rule parsing; Conflict detection; Risk flags; Report
Captive Portal for Campus Wi-Fi | I | 7 | A login portal for guest Wi-Fi with time-limited access. | Raspberry Pi, Nginx, iptables, Flask | Portal page; Session tokens; Time limits; Usage logs
Home Network Ad Blocker | B | 4 | Blocks ads and trackers for all devices on a network at the DNS level. | Raspberry Pi, Pi-hole | Installation; Blocklists; Dashboard; Allow lists
Network Configuration Backup Tool | I | 5 | Backs up router and switch configurations and shows changes over time. | Python, Netmiko, Git | Device connection; Config download; Version history; Diff view

# Simulation and SDN
Routing Algorithm Simulator | I | 5 | Simulates distance-vector and link-state routing with link failures. | Python, NetworkX | Topology builder; Routing algorithms; Failure events; Convergence visualisation
Software-defined Network Controller App | A | 8 | Writes an SDN controller app for load balancing and firewalling. | Mininet, Ryu, Python | Topology; Flow rules; Load balancing; Firewall policies
TCP Congestion Control Comparison | A | 8 | Compares Reno, Cubic and BBR under different network conditions. | ns-3 or Mininet, Python | Experiment setup; Condition variations; Throughput and latency measurement; Report
Campus Network Design Project | I | 6 | Designs a campus network with VLANs, routing and redundancy in a simulator. | Cisco Packet Tracer | Requirements; VLAN design; Routing configuration; Redundancy tests
VANET Simulation for Vehicle Communication | A | 9 | Simulates vehicle-to-vehicle messaging for collision warnings. | SUMO, OMNeT++, Veins | Road scenario; Message protocol; Delivery metrics; Analysis
Wireless Sensor Network Energy Study | A | 8 | Compares routing protocols for energy efficiency in sensor networks. | Python or ns-3 | Network simulation; LEACH and variants; Lifetime metrics; Report
Network Emulator for Bad Connections | I | 6 | Emulates slow, lossy networks to test how apps behave. | Linux tc, Python, Web UI | Delay and loss profiles; Per-app rules; Presets; Test reports
Mesh Network for Disaster Areas | A | 9 | Builds a phone-to-phone mesh for messaging without cellular networks. | Android, Wi-Fi Direct, Bluetooth | Peer discovery; Message relay; Store and forward; Emergency broadcast
5G Network Slicing Simulation | A | 9 | Simulates network slices for different service types and their resource sharing. | Python, ns-3 | Slice models; Resource allocation; QoS metrics; Report
IPv6 Transition Lab | I | 6 | Demonstrates dual stack, tunnelling and NAT64 in a lab setup. | GNS3, Linux | Lab topology; Transition mechanisms; Connectivity tests; Documentation

# Applications over networks
Video Streaming Server with Adaptive Bitrate | A | 9 | Streams video with HLS and switches quality based on bandwidth. | Node.js, FFmpeg, hls.js | Transcoding ladder; Manifest generation; Player; Bandwidth tests
LAN Messenger for Offices | B | 5 | A messenger that works on a local network without internet. | Java, Sockets, JavaFX | Peer discovery; Chat; File transfer; Group chat
Remote Desktop Application | A | 10 | View and control a remote computer's screen over the network. | Python or C#, Sockets | Screen capture; Compression; Input forwarding; Authentication
Network File Synchronisation Tool | I | 7 | Keeps a folder in sync between computers on a network, like rsync. | Go | Change detection; Delta transfer; Conflict handling; CLI
Multiplayer Game Networking Library | A | 8 | A library for client-server game networking with interpolation. | C# or TypeScript | Client-server model; State snapshots; Interpolation; Lag simulation
Peer-to-peer Video Call in the Browser | I | 7 | Two users video chat directly with WebRTC using a small signalling server. | WebRTC, Node.js, Socket.IO | Signalling; Peer connection; TURN fallback; Screen sharing
Internet Radio Streaming Server | I | 6 | Streams live audio to many listeners over HTTP. | Node.js, FFmpeg | Audio input; Stream mounts; Listener stats; Web player
Content Delivery Network Simulation | A | 8 | Simulates edge caches and measures latency improvement for users in different regions. | Python, Docker | Origin and edges; Cache policies; Request routing; Latency report
Offline-first Data Sync Protocol | A | 9 | Syncs data between a mobile app and server after being offline. | TypeScript, SQLite, Node.js | Change tracking; Conflict resolution; Sync API; Tests
Smart Campus Wi-Fi Analytics | I | 7 | Analyses anonymised Wi-Fi connection logs to show crowd levels in buildings. | Python, Pandas, Grafana | Log anonymisation; Occupancy estimation; Dashboards; Busy time predictions
Secure Messaging over Bluetooth | I | 7 | Sends encrypted messages between nearby phones using Bluetooth Low Energy. | Kotlin, BLE | Device pairing; Encryption; Message exchange; Offline queue
`,
};
