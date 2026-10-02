module.exports = {
  domain: 'Cloud/DevOps',
  ideas: `
# Platforms and operations
Serverless Chat Application | I | 6 | A real-time chat app built only with managed serverless services. | AWS API Gateway WebSockets, Lambda, DynamoDB | WebSocket connections; Message storage; Rooms; Cost analysis
Kubernetes Operator for a Database | A | 10 | A custom operator that installs, backs up and upgrades a database automatically. | Go, Kubebuilder, Kubernetes | Custom resources; Reconcile loop; Backups; Upgrades
Cloud Lab Environment Provisioner for Colleges | A | 9 | Gives each student a temporary cloud lab environment that is cleaned up after class. | Terraform, Kubernetes, Next.js | Lab templates; Per-student namespaces; Time limits; Cost reports
Self-hosted Git Platform Setup | I | 6 | Sets up a self-hosted Git server with CI and backups for a college. | Gitea, Docker, Woodpecker CI | Installation; User management; CI pipelines; Backups
Policy as Code for Cloud Resources | A | 8 | Blocks non-compliant infrastructure changes automatically using policy rules. | Open Policy Agent, Terraform, GitHub Actions | Policy writing; Plan evaluation; Pipeline gate; Reports
Serverless Data Pipeline for IoT | A | 8 | Ingests IoT sensor data and processes it with serverless functions. | AWS IoT Core, Lambda, Timestream | Device simulation; Ingestion rules; Processing; Dashboards
Log Anomaly Alerting with ML | A | 8 | Learns normal log patterns and alerts on unusual spikes. | Python, Elasticsearch, Prometheus | Log aggregation; Baseline model; Alerting; Tuning
Ephemeral Database Branches for Testing | A | 8 | Creates a copy of the database for each test run and destroys it afterwards. | PostgreSQL, Docker, GitHub Actions | Snapshot creation; Per-run databases; Cleanup; Speed comparison
Multi-region Active-passive Deployment | A | 9 | Runs an app in two regions with automatic failover. | Terraform, AWS, Route 53 | Infrastructure in two regions; Data replication; Health-based DNS failover; Failover test
Container Registry with Vulnerability Reports | I | 6 | A private container registry that scans images and shows reports. | Harbor, Docker | Registry setup; Scanning; Access control; Retention policies
Static Analysis Bot for Pull Requests | I | 6 | A bot that runs linters on pull requests and comments with results. | Node.js, GitHub Apps API | Webhook handling; Linter runs; PR comments; Configuration file
Docker-based Online Judge Workers | A | 8 | Scalable workers that compile and run submitted code safely in containers. | Docker, Redis, Go | Job queue; Sandboxed execution; Resource limits; Autoscaling
Cloud-native Photo Sharing App | I | 7 | A photo sharing app built with managed storage, auth and functions. | Firebase, Cloud Functions, React | Auth; Uploads; Thumbnail functions; Sharing
Infrastructure Drift Detector | I | 6 | Detects when real cloud resources differ from their Terraform definitions. | Terraform, Python, GitHub Actions | Scheduled plans; Drift reports; Notifications; Remediation guide
Kubernetes Dashboard for Students | I | 7 | A simplified dashboard for students to view and manage their own deployments. | React, Kubernetes API, Node.js | Namespace view; Pod logs; Restart and scale; Resource usage
Automated SSL Certificate Manager | I | 5 | Issues and renews TLS certificates for many domains automatically. | Certbot, Nginx, Bash | Domain list; Issuance; Renewal; Expiry alerts
Serverless Machine Learning Inference API | I | 6 | Deploys a trained model behind a serverless API with autoscaling. | AWS Lambda or Cloud Run, Python, Docker | Model packaging; API endpoint; Cold start measurement; Load test
Hybrid Cloud Backup for Small Offices | I | 6 | Backs up office files to a local NAS and the cloud with versioning. | Restic, Rclone, Bash | Backup schedules; Encryption; Versioning; Restore drills
Event Sourcing Banking Demo | A | 9 | A demo bank ledger built with event sourcing and projections. | Node.js, Kafka, PostgreSQL | Event store; Projections; Replays; Consistency checks
Platform Usage and Cost Reports for Teams | I | 6 | Breaks down cloud spending by team using resource tags. | Python, Cloud billing export, Metabase | Tagging policy; Billing data import; Team reports; Budget alerts
Self-healing Web Service Demo | I | 6 | Shows automatic restarts, health checks and autoscaling keeping an app online. | Docker Swarm or Kubernetes, Prometheus | Health probes; Failure injection; Recovery measurement; Report
Zero-trust Access Proxy | A | 9 | Puts internal apps behind an identity-aware proxy instead of a VPN. | Pomerium or OAuth2 Proxy, Kubernetes | Identity provider; Access policies; Internal apps; Audit logs
Website Performance Budget Checker | B | 4 | Fails a build when page size or load time exceeds a budget. | Lighthouse CI, GitHub Actions | Budget configuration; Automated audits; Pipeline gate; Trend reports
Distributed Cron with Kubernetes CronJobs | I | 5 | Moves scheduled server scripts to Kubernetes CronJobs with monitoring. | Kubernetes, Prometheus | Job definitions; Concurrency policies; Failure alerts; History
Cloud Exam Portal That Scales | A | 9 | An exam portal designed to handle thousands of students logging in at once. | Next.js, Redis, PostgreSQL, Kubernetes | Load-tested architecture; Caching; Autoscaling; Post-exam report
`,
};
