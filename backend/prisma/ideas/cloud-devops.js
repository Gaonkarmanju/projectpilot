module.exports = {
  domain: 'Cloud/DevOps',
  ideas: `
# CI/CD and automation
CI/CD Pipeline for a Microservice App | A | 9 | Containerise a small microservice app and automate testing and deployment on every push. | Docker, GitHub Actions, Kubernetes, Node.js | Two or three microservices; Dockerfiles and compose; Automated test pipeline; Deployment with monitoring
Serverless URL Shortener | I | 5 | Shorten links and track click analytics using serverless functions and a managed database. | AWS Lambda, DynamoDB, React | Short link creation; Redirect function; Click analytics; Custom aliases
GitOps Deployment with Argo CD | A | 8 | Deploys apps to Kubernetes automatically from a Git repository using GitOps. | Kubernetes, Argo CD, Helm, GitHub Actions | Cluster setup; Helm charts; Argo CD sync; Rollback demo
Self-hosted CI Runner Platform | A | 9 | A minimal CI system that runs build jobs in containers when code is pushed. | Go or Node.js, Docker, Webhooks | Webhook receiver; Job queue; Container execution; Build logs UI
Preview Environments for Pull Requests | A | 8 | Spins up a temporary environment for every pull request and tears it down on merge. | GitHub Actions, Docker, Kubernetes, Traefik | PR triggers; Dynamic namespaces; Unique URLs; Automatic cleanup
Infrastructure as Code for a Web App | I | 7 | Provisions networking, compute and a database for a web app with Terraform. | Terraform, AWS, GitHub Actions | Modules; Remote state; Plan and apply pipeline; Cost estimate
Automated Database Backup System | I | 5 | Schedules database backups to cloud storage with retention and restore tests. | Bash, Cron, PostgreSQL, S3-compatible storage | Backup scripts; Encryption; Retention policy; Restore verification
Release Notes Generator | B | 4 | Generates release notes from commit messages and merged pull requests. | Node.js, GitHub API | Commit parsing; Conventional commit grouping; Markdown output; GitHub Action
Code Quality Gate Pipeline | I | 5 | Adds linting, tests, coverage and static analysis checks that block bad merges. | GitHub Actions, SonarQube, ESLint | Pipeline stages; Coverage thresholds; Quality reports; Branch protection
Blue-Green Deployment Demo | I | 6 | Demonstrates zero-downtime releases by switching traffic between two environments. | Docker, Nginx, Bash | Two environments; Health checks; Traffic switch; Rollback
Canary Release with Feature Flags | A | 8 | Rolls out a feature to a small percentage of users and monitors errors before full release. | Node.js, Unleash, Prometheus | Feature flag service; Percentage rollout; Error monitoring; Automatic rollback
Ansible Server Provisioning Toolkit | I | 6 | Automates setting up web servers with users, firewall, Nginx and SSL. | Ansible, Linux, Nginx, Certbot | Playbooks and roles; Inventory; Idempotent runs; Documentation
ChatOps Bot for Deployments | I | 6 | A Slack or Discord bot that shows build status and triggers deployments. | Node.js, Slack API, GitHub Actions | Bot commands; Build status; Deploy trigger with approval; Audit log

# Containers and orchestration
Kubernetes Cluster on Raspberry Pis | A | 9 | Builds a small Kubernetes cluster on Raspberry Pis and deploys sample apps. | Raspberry Pi, K3s, Helm | Cluster setup; Networking; App deployment; Monitoring
Container Orchestrator from Scratch | A | 10 | A simplified orchestrator that schedules containers across machines and restarts failed ones. | Go, Docker API | Node agents; Scheduler; Health checks; CLI
Docker Image Size Optimiser | I | 5 | Analyses Dockerfiles and suggests changes to shrink image size. | Python, Docker | Layer analysis; Rule-based suggestions; Before and after comparison; Report
Kubernetes Autoscaling Demo | I | 6 | Shows horizontal pod autoscaling under load with metrics. | Kubernetes, Prometheus, k6 | Sample app; HPA configuration; Load testing; Scaling graphs
Kubernetes Cost Dashboard | A | 8 | Estimates cost per namespace and team from resource usage. | Kubernetes, Prometheus, Grafana | Resource metrics; Cost model; Dashboards; Idle resource report
Service Mesh Observability Demo | A | 9 | Adds a service mesh to microservices for traffic control and tracing. | Kubernetes, Istio, Jaeger | Mesh installation; Traffic routing; Distributed tracing; mTLS
Container Security Scanner Pipeline | I | 6 | Scans container images for vulnerabilities before they are deployed. | Trivy, GitHub Actions, Docker | Image scanning; Severity thresholds; Pipeline gate; Reports
Local Development Environment with Dev Containers | B | 4 | Packages a project's development environment so new contributors start in minutes. | Docker, Dev Containers, VS Code | Dev container config; Database services; Seed data; Onboarding guide
Multi-container App with Docker Compose | B | 4 | Containerises a full-stack app with database, cache and reverse proxy. | Docker Compose, Nginx, PostgreSQL, Redis | Service definitions; Networking; Volumes; Environment configs

# Monitoring and reliability
Monitoring Stack with Prometheus and Grafana | I | 6 | Collects metrics from servers and apps and builds dashboards with alerts. | Prometheus, Grafana, Node Exporter | Exporters; Dashboards; Alert rules; Notification channels
Centralised Logging Platform | I | 7 | Ships logs from many services to one place with search and dashboards. | Loki, Promtail, Grafana | Log shipping; Labels; Queries; Dashboards
Distributed Tracing for Microservices | A | 8 | Traces requests across services to find slow calls. | OpenTelemetry, Jaeger, Node.js | Instrumentation; Trace collection; Latency analysis; Dashboard
Status Page Service | I | 6 | A public status page that shows service health and incident history. | Next.js, PostgreSQL | Health checks; Incident posts; Uptime history; Subscriber notifications
Chaos Engineering Experiments | A | 8 | Injects failures into a microservice system to test resilience. | Kubernetes, Chaos Mesh, Grafana | Experiment design; Pod and network faults; Observability; Findings report
Load Testing Framework and Report | I | 5 | Load tests a web app and produces a performance report with bottlenecks. | k6, Grafana, InfluxDB | Test scripts; Ramp-up scenarios; Metrics collection; Report
Incident Management Tool | I | 7 | Tracks incidents, on-call rotations and post-mortems. | Next.js, PostgreSQL, Slack API | Incident creation; On-call schedule; Timeline; Post-mortem template
Alert Noise Reduction System | A | 8 | Groups and deduplicates alerts and learns which alerts are usually ignored. | Python, Alertmanager, PostgreSQL | Alert ingestion; Grouping rules; Deduplication; Ignore-rate analysis
SLO Tracking Dashboard | I | 6 | Defines service level objectives and tracks error budgets. | Prometheus, Grafana | SLI definitions; Error budget calculation; Burn rate alerts; Dashboard

# Cloud applications
Serverless Image Resizer | B | 5 | Resizes uploaded images automatically using a cloud function. | AWS Lambda, S3, Node.js | Upload trigger; Resize function; Multiple sizes; CDN delivery
Serverless Contact Form Backend | B | 3 | Handles website contact form submissions with spam filtering and email delivery. | Cloudflare Workers, Email API | Form endpoint; Spam check; Email delivery; Rate limiting
Multi-tenant SaaS Starter | A | 10 | A starter app with tenant isolation, billing plans and admin tools. | Next.js, PostgreSQL, Stripe test mode | Tenant model; Row-level isolation; Plans and billing; Admin console
Cloud File Storage like Dropbox | A | 10 | Upload, sync, share and version files across devices. | Node.js, S3-compatible storage, PostgreSQL, React | Chunked upload; Versioning; Sharing links; Desktop sync client
Video Transcoding Pipeline | A | 8 | Converts uploaded videos into multiple resolutions for streaming. | FFmpeg, Queue, S3-compatible storage, Node.js | Upload handling; Job queue; Transcoding workers; HLS playback
Event-driven Order Processing System | A | 9 | Processes orders with services communicating through events and queues. | Node.js, RabbitMQ, PostgreSQL | Order, payment and inventory services; Event bus; Retry and dead letters; Saga pattern
API Gateway with Rate Limiting | I | 7 | A gateway that routes requests, checks API keys and enforces rate limits. | Node.js, Redis | Routing; API key auth; Token bucket rate limiting; Usage metrics
Serverless Scheduled Reports | B | 4 | Sends weekly reports from a database to email on a schedule. | AWS Lambda, EventBridge, PostgreSQL | Scheduled trigger; Query and format; Email sending; Error alerts
Static Website Hosting with CDN and CI | B | 3 | Hosts a static site on object storage behind a CDN with automatic deploys. | GitHub Actions, S3 or Cloudflare Pages | Build pipeline; Hosting; Custom domain and TLS; Cache invalidation
Cloud Cost Optimiser | I | 7 | Finds idle and oversized resources in a cloud account and estimates savings. | Python, AWS SDK, Streamlit | Resource inventory; Usage metrics; Recommendations; Savings estimate
Multi-cloud Deployment Comparison | A | 8 | Deploys the same app on two cloud providers and compares cost, latency and effort. | Terraform, AWS, GCP | Equivalent infrastructure; Benchmarking; Cost analysis; Report
Job Scheduler Service | I | 7 | A service to schedule HTTP jobs with retries, history and a dashboard. | Node.js, Redis, BullMQ, React | Job definitions; Cron scheduling; Retries; Run history
Feature Flag Service | I | 6 | A self-hosted service to turn features on and off per user group. | Node.js, PostgreSQL, React | Flag management UI; Targeting rules; SDK; Audit log
Secrets Management Demo | I | 6 | Stores application secrets securely and injects them at runtime. | HashiCorp Vault, Docker, Node.js | Vault setup; Dynamic secrets; App integration; Rotation
Edge Functions for Personalisation | I | 5 | Uses edge functions to personalise content by location without slowing pages. | Cloudflare Workers, Next.js | Geolocation; Edge logic; Caching; Performance comparison
Webhook Relay Service | I | 6 | Receives webhooks, stores them and forwards them reliably with retries. | Node.js, PostgreSQL, Redis | Endpoint creation; Persistence; Retry with backoff; Replay UI
Disaster Recovery Plan Simulation | A | 8 | Designs and tests a disaster recovery setup with database replication and failover. | PostgreSQL, Docker, Terraform | Replication; Failover script; Recovery time measurement; Runbook
Internal Developer Portal | A | 9 | A portal listing services, owners, docs and deploy status for a team. | Backstage, Kubernetes, GitHub | Service catalogue; Templates; Docs integration; Deploy status
`,
};
