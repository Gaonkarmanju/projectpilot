module.exports = {
  domain: 'Systems',
  ideas: `
# Operating systems
Unix Shell Implementation | I | 6 | A command-line shell with pipes, redirection, background jobs and history. | C, POSIX | Command parsing; Pipes and redirection; Job control; History and built-ins
CPU Scheduling Simulator | B | 4 | Simulates FCFS, SJF, round robin and priority scheduling with Gantt charts. | Python or Java, Matplotlib | Process input; Scheduling algorithms; Gantt chart; Metrics comparison
Memory Allocator | A | 8 | A malloc and free implementation with free lists and fragmentation statistics. | C | Heap management; Free list strategies; Coalescing; Benchmarks
Page Replacement Algorithm Visualiser | B | 4 | Visualises FIFO, LRU and optimal page replacement with page fault counts. | JavaScript, React | Reference string input; Algorithm steps; Fault counts; Comparison
Disk Scheduling Simulator | B | 4 | Compares FCFS, SSTF, SCAN and LOOK disk scheduling with seek charts. | Python, Matplotlib | Request queue; Algorithms; Seek time charts; Report
Deadlock Detection and Banker's Algorithm Tool | B | 4 | Detects deadlocks and checks safe states with the Banker's algorithm. | Java, JavaFX | Resource input; Safety algorithm; Deadlock detection; Visual explanation
Toy Operating System Kernel | A | 14 | A small kernel that boots, handles interrupts, manages memory and runs simple processes. | C, x86 Assembly, QEMU | Bootloader; Interrupt handling; Paging; Process switching
File System Implementation | A | 10 | A simple file system with inodes, directories and a FUSE interface. | C, FUSE | Disk layout; Inodes and blocks; Directory operations; FUSE mount
Process Monitor like htop | I | 6 | Shows running processes, CPU and memory usage in a terminal UI. | C or Rust, /proc filesystem | Process listing; Resource stats; Sorting and filtering; Kill process
Thread Pool Library | I | 5 | A reusable thread pool with a task queue and graceful shutdown. | C++, POSIX threads | Task queue; Worker threads; Futures; Benchmarks
Producer-Consumer Visualiser | B | 3 | Visualises synchronisation with semaphores and mutexes in classic problems. | Java, JavaFX | Producer-consumer; Readers-writers; Dining philosophers; Step controls
Container Runtime from Scratch | A | 9 | Runs processes in isolated namespaces with cgroups, like a mini Docker. | Go, Linux namespaces, cgroups | Namespace isolation; Root filesystem; Resource limits; CLI
Linux Kernel Module for Device Info | A | 8 | A loadable kernel module that exposes device statistics through /proc. | C, Linux kernel | Module loading; Proc entries; Data collection; Safe unloading

# Compilers and languages
Compiler for a Small Language | A | 12 | Compiles a simple C-like language to assembly or bytecode. | C++ or Rust | Lexer; Parser and AST; Type checking; Code generation
Interpreter for a Scripting Language | A | 10 | A tree-walking interpreter with variables, functions and closures. | Java or Python | Lexer and parser; Environments; Functions and closures; REPL
Regular Expression Engine | I | 6 | Implements a regex engine using Thompson's NFA construction. | Python or C++ | Regex parsing; NFA construction; Matching; Benchmarks against backtracking
Lexical Analyser Generator | I | 6 | Generates a lexer from token definitions. | Python | Token specification; NFA to DFA; Code generation; Tests
Parser Visualiser for Grammars | I | 6 | Shows LL(1) and LR parse tables and step-by-step parsing for a grammar. | JavaScript, React | Grammar input; FIRST and FOLLOW sets; Parse tables; Step animation
Bytecode Virtual Machine | A | 9 | A stack-based virtual machine with a garbage collector. | C | Instruction set; Execution loop; Mark-and-sweep GC; Assembler
Domain-specific Language for Timetables | I | 7 | A small language to describe timetable rules that compiles to constraints. | Python, Lark | Grammar design; Parser; Constraint generation; Error messages
Code Formatter | I | 6 | Formats source code of a language consistently using its syntax tree. | Python, Tree-sitter | Parsing; Formatting rules; Configuration; CLI
Programming Language for Indian Languages | A | 10 | A beginner-friendly language with keywords in Hindi or another regional language. | Python | Keyword design; Interpreter; Error messages in the language; Online playground
Static Type Checker for a Subset of Python | A | 9 | Infers and checks types in simple Python programs. | Python, AST | Type inference; Error reporting; Annotations; Test suite
Automata Simulator | B | 5 | Draw and simulate DFA, NFA and Turing machines. | JavaScript, Canvas | State diagram editor; Input simulation; NFA to DFA conversion; Examples

# Databases and storage
Key-Value Store with Persistence | I | 7 | A Redis-like key-value server with persistence and a network protocol. | Go or C++ | In-memory store; TCP protocol; Snapshots and append-only log; Expiry
Mini Relational Database | A | 12 | A tiny SQL database with a parser, B-tree storage and simple queries. | C or Rust | SQL parsing; B-tree pages; Query execution; Transactions basics
LSM-tree Storage Engine | A | 10 | A storage engine with memtables, SSTables and compaction. | Rust or Go | Write path; SSTables; Compaction; Benchmarks
Database Query Optimiser Visualiser | I | 6 | Explains SQL query plans visually and suggests indexes. | React, PostgreSQL EXPLAIN | Plan parsing; Tree visualisation; Cost hotspots; Index suggestions
Time-series Database | A | 10 | Stores and queries metrics efficiently with compression and downsampling. | Go | Ingestion API; Compression; Range queries; Downsampling
Full-text Search Engine | A | 9 | Indexes documents with an inverted index and ranks results with BM25. | Go or Java | Tokenisation; Inverted index; BM25 ranking; Query API
SQL Learning Playground | B | 5 | Students practise SQL queries on sample databases with instant feedback. | React, SQLite WASM | Sample databases; Query editor; Expected result checks; Lessons
ER Diagram to SQL Generator | I | 5 | Draw an ER diagram and generate normalised SQL tables. | React, React Flow | Diagram editor; Relationship handling; SQL generation; Normalisation hints
Database Normalisation Tool | I | 5 | Finds functional dependencies and decomposes tables into 3NF and BCNF. | Python, Flask | Dependency input; Closure computation; Decomposition; Step explanation
Cache Simulator | I | 5 | Simulates CPU cache configurations and reports hit rates. | C++ or Python | Cache parameters; Replacement policies; Trace input; Hit rate charts

# Distributed systems
Distributed Key-Value Store with Raft | A | 12 | A replicated key-value store that stays consistent using the Raft consensus algorithm. | Go | Leader election; Log replication; Snapshotting; Fault testing
MapReduce Framework | A | 10 | A small MapReduce framework that distributes word count style jobs over workers. | Go or Python | Master and workers; Task scheduling; Fault tolerance; Example jobs
Distributed File Storage System | A | 12 | Splits files into chunks stored across nodes with replication. | Go | Chunking; Metadata server; Replication; Failure recovery
Consistent Hashing Load Balancer | I | 6 | Distributes requests across servers using consistent hashing. | Go or Node.js | Hash ring; Virtual nodes; Health checks; Rebalancing demo
Distributed Rate Limiter | I | 6 | Enforces rate limits across multiple API servers. | Node.js, Redis | Token bucket; Sliding window; Multiple instances; Benchmarks
Message Queue from Scratch | A | 9 | A persistent message queue with topics, consumer groups and acknowledgements. | Go | Topic storage; Consumer groups; Acknowledgements; Retention
Distributed Task Scheduler | A | 9 | Schedules cron jobs across a cluster so each runs exactly once. | Go, etcd | Leader election; Job distribution; Failure handling; Dashboard
Gossip Protocol Simulator | I | 6 | Simulates gossip-based membership and failure detection in a cluster. | Python, SimPy | Node simulation; Gossip rounds; Failure detection; Visualisation
Vector Clock Visualiser | I | 5 | Visualises message passing and causality with Lamport and vector clocks. | JavaScript, D3.js | Process timelines; Clock updates; Causality checks; Scenarios
Peer-to-peer File Sharing | A | 9 | A BitTorrent-like client that shares file pieces among peers. | Python or Go | Tracker; Piece exchange; Integrity checks; Download progress
Distributed Web Crawler | A | 9 | Crawls the web politely with multiple workers and a shared frontier. | Python, Redis, Scrapy | URL frontier; Politeness rules; Duplicate detection; Storage
CRDT-based Collaborative Editor | A | 10 | A text editor that merges concurrent edits without conflicts using CRDTs. | TypeScript, Yjs, WebSocket | CRDT data structure; Sync protocol; Offline edits; Cursor presence

# Performance and tools
Version Control System Clone | A | 9 | A simplified Git with commits, branches and merges. | Python or Go | Object storage; Commits and trees; Branches; Three-way merge
Build System Like Make | I | 6 | A build tool that runs tasks based on dependencies and file changes. | Python or Go | Dependency graph; Change detection; Parallel builds; Config format
Profiler for Python Programs | I | 6 | Profiles function call times and shows a flame graph. | Python, sys.setprofile | Call tracing; Timing aggregation; Flame graph; CLI
Memory Leak Detector | A | 8 | Detects memory leaks in C programs by tracking allocations. | C, LD_PRELOAD | Allocation interception; Leak report; Stack traces; Tests
Benchmarking Suite for Sorting Algorithms | B | 3 | Measures performance of sorting algorithms on different input sizes and patterns. | C++, Python, Matplotlib | Algorithm implementations; Input generators; Timing harness; Charts
Garbage Collector Comparison | A | 8 | Implements and compares reference counting, mark-sweep and copying collectors. | C | GC implementations; Test programs; Pause and throughput measurements; Report
Terminal Text Editor | I | 7 | A Vim-like text editor in the terminal with syntax highlighting and search. | C or Rust | Raw terminal mode; Buffer management; Search; Syntax highlighting
Code Plagiarism Detector Using AST | I | 6 | Detects similar programs even when variables are renamed. | Python, AST, Tree-sitter | AST normalisation; Similarity scoring; Pair report; Batch mode
Logic Gate Circuit Simulator | B | 5 | Drag and drop logic gates, connect them and simulate outputs. | JavaScript, Canvas | Gate library; Wiring; Simulation; Truth table generation
8-bit CPU Emulator | A | 9 | Emulates a simple CPU like the CHIP-8 and runs classic games. | C++ or Rust, SDL2 | Instruction decoding; Memory and registers; Display and input; Game ROMs
`,
};
