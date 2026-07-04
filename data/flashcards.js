// AWS Cloud Practitioner (CLF-C02) Flashcard Bank
// Content is based on official AWS documentation and the AWS CLF-C02 exam guide.

const FLASHCARD_CATEGORIES = [
  { id: "cloud-concepts", name: "Cloud Concepts & Benefits", icon: "☁️" },
  { id: "security", name: "Security & Compliance", icon: "🔒" },
  { id: "compute", name: "Compute", icon: "🖥️" },
  { id: "storage", name: "Storage", icon: "🗄️" },
  { id: "databases", name: "Databases", icon: "🛢️" },
  { id: "networking", name: "Networking & Content Delivery", icon: "🌐" },
  { id: "management", name: "Management & Governance", icon: "📊" },
  { id: "billing", name: "Billing & Pricing", icon: "💰" },
  { id: "support", name: "Support & Resources", icon: "🛟" },
  { id: "aiml-analytics", name: "AI/ML & Analytics", icon: "🤖" },
  { id: "integration", name: "App Integration & Dev Tools", icon: "🔗" }
];

const FLASHCARDS = [
  // ===================== Cloud Concepts & Benefits =====================
  {
    category: "cloud-concepts",
    front: "What is cloud computing?",
    back: "The on-demand delivery of IT resources (compute, storage, databases, etc.) over the internet with pay-as-you-go pricing. You access technology services as needed instead of buying and maintaining physical data centers and servers."
  },
  {
    category: "cloud-concepts",
    front: "What are the six advantages of cloud computing?",
    back: "1) Trade fixed (capital) expense for variable expense. 2) Benefit from massive economies of scale. 3) Stop guessing capacity. 4) Increase speed and agility. 5) Stop spending money running and maintaining data centers. 6) Go global in minutes."
  },
  {
    category: "cloud-concepts",
    front: "What are the three cloud computing service models?",
    back: "IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service). They differ in how much of the technology stack you manage versus the provider."
  },
  {
    category: "cloud-concepts",
    front: "What is IaaS (Infrastructure as a Service)?",
    back: "Provides basic building blocks for cloud IT: networking, computers (virtual or dedicated), and data storage. Gives the highest level of flexibility and management control. Example: Amazon EC2."
  },
  {
    category: "cloud-concepts",
    front: "What is PaaS (Platform as a Service)?",
    back: "Removes the need to manage underlying infrastructure (hardware, operating systems) so you can focus on deploying and managing applications. Example: AWS Elastic Beanstalk."
  },
  {
    category: "cloud-concepts",
    front: "What is SaaS (Software as a Service)?",
    back: "A completed software product that the provider runs and manages; you only think about how you will use the software. Examples: web-based email, Amazon Chime."
  },
  {
    category: "cloud-concepts",
    front: "What are the three cloud deployment models?",
    back: "1) Cloud (fully on the cloud). 2) On-premises / private cloud (virtualization in your own data center). 3) Hybrid (cloud resources connected to on-premises infrastructure, e.g., via AWS Direct Connect)."
  },
  {
    category: "cloud-concepts",
    front: "What is elasticity?",
    back: "The ability to automatically acquire resources when demand increases and release them when demand decreases, so you only pay for what you use. Example: EC2 Auto Scaling."
  },
  {
    category: "cloud-concepts",
    front: "What is the difference between vertical and horizontal scaling?",
    back: "Vertical scaling (scaling up) increases the power of a single instance (bigger instance type). Horizontal scaling (scaling out) adds more instances to handle demand. Horizontal scaling is preferred for high availability."
  },
  {
    category: "cloud-concepts",
    front: "What is agility in the context of the AWS Cloud?",
    back: "The ability to rapidly provision resources (in minutes), experiment cheaply, and innovate faster. Agility lowers the cost and risk of trying new ideas."
  },
  {
    category: "cloud-concepts",
    front: "What is the difference between high availability and fault tolerance?",
    back: "High availability: the system stays operational with minimal downtime by minimizing single points of failure. Fault tolerance: a stricter goal — the system continues operating even when components fail, typically via full redundancy across multiple Availability Zones."
  },
  {
    category: "cloud-concepts",
    front: "What are the six pillars of the AWS Well-Architected Framework?",
    back: "1) Operational Excellence, 2) Security, 3) Reliability, 4) Performance Efficiency, 5) Cost Optimization, 6) Sustainability."
  },
  {
    category: "cloud-concepts",
    front: "What is an AWS Region?",
    back: "A physical geographic location in the world containing multiple, isolated Availability Zones. Regions are isolated from each other, and data does not leave a Region unless you explicitly move it."
  },
  {
    category: "cloud-concepts",
    front: "What is an Availability Zone (AZ)?",
    back: "One or more discrete data centers with redundant power, networking, and connectivity within a Region. AZs are physically separated but connected with low-latency links. Deploying across multiple AZs provides high availability."
  },
  {
    category: "cloud-concepts",
    front: "What is an edge location?",
    back: "A site used by Amazon CloudFront and Route 53 to cache content and answer DNS queries closer to users, reducing latency. There are many more edge locations than Regions."
  },
  {
    category: "cloud-concepts",
    front: "What factors should you consider when choosing an AWS Region?",
    back: "1) Compliance with data governance and legal requirements, 2) Proximity to customers (latency), 3) Available services and features within the Region, 4) Pricing (varies by Region)."
  },
  {
    category: "cloud-concepts",
    front: "What is the AWS Cloud Adoption Framework (AWS CAF)?",
    back: "Guidance to help organizations plan their migration to the cloud. It organizes advice into six perspectives: Business, People, Governance (business capabilities) and Platform, Security, Operations (technical capabilities)."
  },
  {
    category: "cloud-concepts",
    front: "What are the 6 R's (common migration strategies)?",
    back: "Rehost (lift-and-shift), Replatform (lift-tinker-and-shift), Refactor/Re-architect, Repurchase (move to SaaS), Retain (keep as-is for now), Retire (decommission)."
  },
  {
    category: "cloud-concepts",
    front: "What is Total Cost of Ownership (TCO) and how does the cloud reduce it?",
    back: "TCO is the full cost of running infrastructure: hardware, software, facilities, power, and staff. The cloud reduces TCO by removing upfront capital expense and shifting costs to pay-as-you-go operational expense with economies of scale."
  },

  // ===================== Security & Compliance =====================
  {
    category: "security",
    front: "What is the AWS Shared Responsibility Model?",
    back: "AWS is responsible for security OF the cloud (hardware, software, networking, and facilities that run AWS services). The customer is responsible for security IN the cloud (their data, IAM configuration, OS patching on EC2, network/firewall settings, encryption)."
  },
  {
    category: "security",
    front: "In the Shared Responsibility Model, name customer responsibilities.",
    back: "Customer data, IAM (users, roles, permissions), guest operating system patches and updates on EC2, security group / firewall configuration, client- and server-side encryption, and network traffic protection."
  },
  {
    category: "security",
    front: "In the Shared Responsibility Model, name AWS responsibilities.",
    back: "Physical security of data centers, hardware and infrastructure maintenance, host operating system and virtualization layer, network infrastructure, and patching of managed services like RDS or DynamoDB infrastructure."
  },
  {
    category: "security",
    front: "What is AWS IAM?",
    back: "AWS Identity and Access Management — a free, global service to securely control access to AWS resources. It manages authentication (who can sign in) and authorization (what they can do) using users, groups, roles, and policies."
  },
  {
    category: "security",
    front: "What is the difference between an IAM user and an IAM role?",
    back: "An IAM user has permanent long-term credentials and represents a person or application. An IAM role provides temporary credentials and is assumed by trusted entities (users, applications, or AWS services like EC2) — no passwords or access keys are stored with a role."
  },
  {
    category: "security",
    front: "What is an IAM policy?",
    back: "A JSON document that defines permissions — which actions are allowed or denied on which resources. Policies can be attached to users, groups, or roles. An explicit Deny always overrides an Allow."
  },
  {
    category: "security",
    front: "What is the principle of least privilege?",
    back: "Granting only the minimum permissions needed to perform a task — no more. It's an IAM best practice that limits the blast radius if credentials are compromised."
  },
  {
    category: "security",
    front: "What are AWS root user best practices?",
    back: "Enable MFA on the root user, do not use the root user for everyday tasks, do not create root access keys, and instead create IAM users/roles with appropriate permissions. Only the root user can perform certain tasks like changing the account support plan or closing the account."
  },
  {
    category: "security",
    front: "What is MFA (Multi-Factor Authentication)?",
    back: "An extra layer of security requiring a second form of authentication (e.g., a code from a device or app) in addition to a password. AWS recommends enabling MFA for the root user and all IAM users."
  },
  {
    category: "security",
    front: "What is AWS Organizations, and what are SCPs?",
    back: "AWS Organizations centrally manages multiple AWS accounts, provides consolidated billing, and groups accounts into organizational units (OUs). Service Control Policies (SCPs) set the maximum permissions available to accounts or OUs — they restrict but never grant permissions."
  },
  {
    category: "security",
    front: "What is Amazon GuardDuty?",
    back: "An intelligent threat detection service that continuously monitors for malicious activity and unauthorized behavior by analyzing VPC Flow Logs, DNS logs, and CloudTrail events using machine learning."
  },
  {
    category: "security",
    front: "What are AWS Shield and AWS Shield Advanced?",
    back: "Services that protect against DDoS attacks. Shield Standard is free and automatic for all AWS customers. Shield Advanced is a paid service with enhanced protections, 24/7 access to the Shield Response Team, and cost protection."
  },
  {
    category: "security",
    front: "What is AWS WAF?",
    back: "A web application firewall that protects web applications from common exploits like SQL injection and cross-site scripting (XSS). It works with CloudFront, Application Load Balancer, and API Gateway using configurable web ACL rules."
  },
  {
    category: "security",
    front: "What is Amazon Inspector?",
    back: "An automated vulnerability management service that continually scans workloads (EC2 instances, container images in ECR, and Lambda functions) for software vulnerabilities and unintended network exposure."
  },
  {
    category: "security",
    front: "What is AWS KMS?",
    back: "AWS Key Management Service — creates and manages cryptographic keys used to encrypt data at rest and in transit across integrated AWS services. Supports customer managed keys and AWS managed keys."
  },
  {
    category: "security",
    front: "What is AWS CloudHSM?",
    back: "A cloud-based hardware security module (HSM) that lets you generate and manage your own encryption keys on dedicated, single-tenant hardware that meets FIPS 140-2 Level 3 requirements."
  },
  {
    category: "security",
    front: "What is AWS Artifact?",
    back: "A free self-service portal for on-demand access to AWS compliance reports (e.g., SOC, PCI, ISO) and select online agreements (e.g., Business Associate Addendum for HIPAA)."
  },
  {
    category: "security",
    front: "What is Amazon Macie?",
    back: "A data security service that uses machine learning and pattern matching to discover and protect sensitive data (such as personally identifiable information, PII) stored in Amazon S3."
  },
  {
    category: "security",
    front: "What is AWS Secrets Manager?",
    back: "A service to store, rotate, and retrieve secrets (database credentials, API keys) securely. It supports automatic rotation of credentials for supported services like RDS."
  },
  {
    category: "security",
    front: "What is the difference between a security group and a network ACL?",
    back: "Security group: instance-level virtual firewall; stateful (return traffic automatically allowed); supports allow rules only. Network ACL: subnet-level firewall; stateless (return traffic must be explicitly allowed); supports both allow and deny rules."
  },
  {
    category: "security",
    front: "What is AWS Security Hub?",
    back: "A service that provides a comprehensive view of your security posture by aggregating, organizing, and prioritizing security findings from services like GuardDuty, Inspector, and Macie, and checking against security best-practice standards."
  },
  {
    category: "security",
    front: "What is Amazon Cognito?",
    back: "A service that adds sign-up, sign-in, and access control (authentication and authorization) to web and mobile applications. Supports social identity providers and enterprise federation."
  },
  {
    category: "security",
    front: "What is AWS Certificate Manager (ACM)?",
    back: "A service to provision, manage, and deploy public and private SSL/TLS certificates for use with AWS services (like ELB and CloudFront). Public certificates via ACM are free."
  },

  // ===================== Compute =====================
  {
    category: "compute",
    front: "What is Amazon EC2?",
    back: "Elastic Compute Cloud — resizable virtual servers (instances) in the cloud. You choose the OS, instance type, storage, and networking, and you manage the guest OS. The core IaaS compute service."
  },
  {
    category: "compute",
    front: "Name the main EC2 instance type families.",
    back: "General purpose (balanced), Compute optimized (high-performance processors, e.g., batch/gaming), Memory optimized (large in-memory datasets), Storage optimized (high sequential read/write, e.g., data warehousing), and Accelerated computing (GPUs/hardware accelerators)."
  },
  {
    category: "compute",
    front: "What are the EC2 purchasing options?",
    back: "On-Demand (pay by the second/hour, no commitment), Savings Plans (commit to $/hour for 1 or 3 years), Reserved Instances (1 or 3 year commitment for steady workloads), Spot Instances (up to 90% discount, can be interrupted), Dedicated Hosts (physical server dedicated to you), Dedicated Instances (hardware not shared with other accounts)."
  },
  {
    category: "compute",
    front: "When should you use Spot Instances?",
    back: "For fault-tolerant, flexible, or stateless workloads that can handle interruption (batch processing, data analysis, CI/CD). Spot offers up to 90% discount but AWS can reclaim the capacity with a two-minute warning."
  },
  {
    category: "compute",
    front: "What is AWS Lambda?",
    back: "A serverless compute service that runs code in response to events without provisioning servers. You pay only for compute time consumed (per request and per millisecond of execution). Maximum execution time is 15 minutes."
  },
  {
    category: "compute",
    front: "What are Amazon ECS and Amazon EKS?",
    back: "Both are container orchestration services. ECS (Elastic Container Service) is AWS's own orchestrator for Docker containers. EKS (Elastic Kubernetes Service) runs managed Kubernetes. Both can run on EC2 or serverless with AWS Fargate."
  },
  {
    category: "compute",
    front: "What is AWS Fargate?",
    back: "A serverless compute engine for containers that works with both ECS and EKS. You don't provision or manage servers — you pay for the vCPU and memory your containers use."
  },
  {
    category: "compute",
    front: "What is AWS Elastic Beanstalk?",
    back: "A PaaS service that deploys and scales web applications automatically. You upload code, and Beanstalk handles capacity provisioning, load balancing, auto scaling, and health monitoring — while you retain full control of the underlying resources."
  },
  {
    category: "compute",
    front: "What is Amazon EC2 Auto Scaling?",
    back: "A service that automatically adds or removes EC2 instances based on demand or a schedule to maintain availability and optimize costs. You define minimum, maximum, and desired capacity in an Auto Scaling group."
  },
  {
    category: "compute",
    front: "What is Elastic Load Balancing (ELB), and what are the load balancer types?",
    back: "ELB automatically distributes incoming traffic across multiple targets (e.g., EC2 instances) in one or more AZs. Types: Application Load Balancer (HTTP/HTTPS, layer 7), Network Load Balancer (TCP/UDP, layer 4, ultra-high performance), and Gateway Load Balancer (third-party virtual appliances)."
  },
  {
    category: "compute",
    front: "What is Amazon Lightsail?",
    back: "An easy-to-use service offering virtual private servers, storage, databases, and networking with simple, predictable monthly pricing. Ideal for simple web apps, websites, and users new to the cloud."
  },
  {
    category: "compute",
    front: "What is AWS Outposts?",
    back: "Fully managed AWS infrastructure (racks/servers) deployed in your own on-premises data center for a consistent hybrid experience — running AWS services locally with connection back to an AWS Region."
  },
  {
    category: "compute",
    front: "What is AWS Batch?",
    back: "A fully managed service to run batch computing jobs at any scale. It dynamically provisions the optimal quantity and type of compute resources based on job requirements."
  },
  {
    category: "compute",
    front: "What is an Amazon Machine Image (AMI)?",
    back: "A template containing the software configuration (OS, application server, applications) used to launch EC2 instances. AMIs can be AWS-provided, from the Marketplace, or custom-built, and can be copied across Regions."
  },

  // ===================== Storage =====================
  {
    category: "storage",
    front: "What is Amazon S3?",
    back: "Simple Storage Service — object storage with virtually unlimited capacity. Data is stored as objects in buckets. Bucket names are globally unique; a single object can be up to 5 TB. Designed for 99.999999999% (11 nines) durability."
  },
  {
    category: "storage",
    front: "Name the main Amazon S3 storage classes.",
    back: "S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, S3 One Zone-IA, S3 Glacier Instant Retrieval, S3 Glacier Flexible Retrieval, S3 Glacier Deep Archive, and S3 Express One Zone."
  },
  {
    category: "storage",
    front: "When would you use S3 Standard-IA vs S3 One Zone-IA?",
    back: "Both are for infrequently accessed data needing rapid retrieval. Standard-IA stores data redundantly across 3+ AZs. One Zone-IA stores data in a single AZ at ~20% lower cost — use it for re-creatable, non-critical data."
  },
  {
    category: "storage",
    front: "What is S3 Intelligent-Tiering?",
    back: "A storage class that automatically moves objects between access tiers based on changing access patterns, optimizing cost without performance impact or operational overhead. Ideal when access patterns are unknown or unpredictable."
  },
  {
    category: "storage",
    front: "What are the S3 Glacier storage classes used for?",
    back: "Archival storage at very low cost. Glacier Instant Retrieval: millisecond access for rarely accessed data. Glacier Flexible Retrieval: minutes to hours retrieval. Glacier Deep Archive: lowest cost, retrieval within 12–48 hours; for long-term retention (7–10+ years)."
  },
  {
    category: "storage",
    front: "What is an S3 lifecycle policy?",
    back: "A rule set that automatically transitions objects to cheaper storage classes or expires (deletes) them after a defined time — e.g., move to Standard-IA after 30 days and to Glacier after 90 days."
  },
  {
    category: "storage",
    front: "What is S3 Versioning?",
    back: "A bucket-level feature that keeps multiple versions of an object, protecting against accidental deletion or overwrite. Deleting a versioned object adds a delete marker rather than removing the data."
  },
  {
    category: "storage",
    front: "What is Amazon EBS?",
    back: "Elastic Block Store — persistent block-level storage volumes for EC2 instances. A volume exists in a single AZ and persists independently of the instance's life (unlike instance store). Think of it as a virtual hard drive."
  },
  {
    category: "storage",
    front: "What are EBS snapshots?",
    back: "Incremental point-in-time backups of EBS volumes stored in S3. Only blocks changed since the last snapshot are saved. Snapshots can be copied across Regions and used to create new volumes."
  },
  {
    category: "storage",
    front: "What is EC2 instance store?",
    back: "Temporary (ephemeral) block storage physically attached to the host machine. Data is lost when the instance is stopped, hibernated, or terminated. Good for buffers, caches, and temporary data."
  },
  {
    category: "storage",
    front: "What is Amazon EFS?",
    back: "Elastic File System — a fully managed, elastic NFS file system for Linux workloads that can be mounted by thousands of EC2 instances concurrently across multiple AZs. It grows and shrinks automatically."
  },
  {
    category: "storage",
    front: "What is Amazon FSx?",
    back: "Fully managed third-party file systems: FSx for Windows File Server (native Windows/SMB file shares with Active Directory integration) and FSx for Lustre (high-performance computing workloads), among others."
  },
  {
    category: "storage",
    front: "What is AWS Storage Gateway?",
    back: "A hybrid storage service connecting on-premises environments to AWS storage. Types: S3 File Gateway, FSx File Gateway, Volume Gateway, and Tape Gateway — commonly used to extend or back up on-premises storage to the cloud."
  },
  {
    category: "storage",
    front: "What is the AWS Snow Family?",
    back: "Physical devices for migrating large amounts of data into and out of AWS when network transfer is impractical (e.g., AWS Snowball Edge, which offers petabyte-scale transfer plus local compute for edge locations with limited connectivity)."
  },
  {
    category: "storage",
    front: "What is AWS Backup?",
    back: "A fully managed, centralized backup service that automates and manages backups across AWS services (EBS, RDS, DynamoDB, EFS, etc.) using backup plans and policies."
  },

  // ===================== Databases =====================
  {
    category: "databases",
    front: "What is Amazon RDS?",
    back: "Relational Database Service — a managed relational database service that handles provisioning, patching, backups, and recovery. Supported engines: MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, and Amazon Aurora (plus Db2)."
  },
  {
    category: "databases",
    front: "What is Amazon Aurora?",
    back: "An AWS-built, MySQL- and PostgreSQL-compatible relational database offering up to 5x MySQL / 3x PostgreSQL performance. Storage automatically replicates six copies across three AZs. Aurora Serverless scales capacity automatically."
  },
  {
    category: "databases",
    front: "What is the difference between RDS Multi-AZ and read replicas?",
    back: "Multi-AZ: synchronous replication to a standby in another AZ for high availability and automatic failover (standby is not readable). Read replicas: asynchronous replication to readable copies that scale read traffic; can be in other Regions."
  },
  {
    category: "databases",
    front: "What is Amazon DynamoDB?",
    back: "A fully managed, serverless NoSQL key-value and document database with single-digit millisecond performance at any scale. Data is automatically replicated across multiple AZs. Supports global tables for multi-Region replication."
  },
  {
    category: "databases",
    front: "What is Amazon ElastiCache?",
    back: "A fully managed in-memory caching service supporting Redis and Memcached engines. It improves application performance by caching frequently accessed data, reducing load on databases."
  },
  {
    category: "databases",
    front: "What is Amazon Redshift?",
    back: "A fully managed, petabyte-scale data warehouse for analytics (OLAP). It runs complex analytical SQL queries against large datasets and integrates with BI tools. Redshift Serverless removes cluster management."
  },
  {
    category: "databases",
    front: "What is the difference between OLTP and OLAP?",
    back: "OLTP (Online Transaction Processing): frequent, small read/write transactions — use RDS/Aurora/DynamoDB. OLAP (Online Analytical Processing): complex analytical queries over large datasets — use Amazon Redshift."
  },
  {
    category: "databases",
    front: "What is Amazon Neptune?",
    back: "A fully managed graph database service for highly connected datasets — such as social networks, recommendation engines, fraud detection, and knowledge graphs."
  },
  {
    category: "databases",
    front: "What is Amazon DocumentDB?",
    back: "A fully managed document database service with MongoDB compatibility, designed for JSON document workloads at scale."
  },
  {
    category: "databases",
    front: "What is AWS Database Migration Service (DMS)?",
    back: "A service to migrate databases to AWS with minimal downtime; the source database remains operational during migration. Supports homogeneous (e.g., MySQL→MySQL) and heterogeneous (e.g., Oracle→Aurora, with Schema Conversion Tool) migrations."
  },
  {
    category: "databases",
    front: "When would you choose DynamoDB over RDS?",
    back: "Choose DynamoDB for massive scale, serverless operation, simple key-value access patterns, and single-digit millisecond latency. Choose RDS when you need complex SQL queries, joins, and a traditional relational schema."
  },
  {
    category: "databases",
    front: "What is Amazon MemoryDB / Amazon Keyspaces / Amazon Timestream?",
    back: "MemoryDB: Redis-compatible, durable in-memory database. Keyspaces: managed Apache Cassandra-compatible database. Timestream: fast, serverless time-series database for IoT and operational metrics."
  },

  // ===================== Networking & Content Delivery =====================
  {
    category: "networking",
    front: "What is Amazon VPC?",
    back: "Virtual Private Cloud — a logically isolated section of the AWS Cloud where you define your own virtual network: IP address ranges, subnets, route tables, and gateways."
  },
  {
    category: "networking",
    front: "What is the difference between a public and a private subnet?",
    back: "A public subnet has a route to an Internet Gateway, so resources with public IPs can communicate with the internet. A private subnet has no direct internet route — resources reach the internet only through a NAT Gateway (outbound-only)."
  },
  {
    category: "networking",
    front: "What are an Internet Gateway and a NAT Gateway?",
    back: "Internet Gateway (IGW): allows two-way communication between a VPC and the internet. NAT Gateway: allows instances in private subnets to initiate outbound internet connections (e.g., for updates) while blocking inbound connections from the internet."
  },
  {
    category: "networking",
    front: "What is Amazon Route 53?",
    back: "A highly available and scalable DNS web service. It routes users to applications via routing policies (simple, weighted, latency-based, failover, geolocation) and also offers domain registration and health checks."
  },
  {
    category: "networking",
    front: "What is Amazon CloudFront?",
    back: "A content delivery network (CDN) that securely delivers content with low latency by caching it at edge locations worldwide. It integrates with Shield and WAF for security."
  },
  {
    category: "networking",
    front: "What is AWS Direct Connect?",
    back: "A dedicated, private physical network connection between your on-premises data center and AWS. It provides consistent network performance and reduced bandwidth costs compared to internet-based connections — but takes weeks/months to provision."
  },
  {
    category: "networking",
    front: "What is AWS Site-to-Site VPN?",
    back: "An encrypted IPsec connection over the public internet between your on-premises network and your VPC (via a virtual private gateway). Quicker and cheaper to set up than Direct Connect, but performance depends on the internet."
  },
  {
    category: "networking",
    front: "What is VPC peering?",
    back: "A one-to-one networking connection between two VPCs enabling private traffic routing between them. Peering is not transitive — each pair of VPCs needs its own peering connection."
  },
  {
    category: "networking",
    front: "What is AWS Transit Gateway?",
    back: "A network transit hub that connects many VPCs and on-premises networks through a single central gateway — a hub-and-spoke model that avoids complex meshes of VPC peering connections."
  },
  {
    category: "networking",
    front: "What is AWS Global Accelerator?",
    back: "A networking service that improves availability and performance of applications by routing user traffic over the AWS global network via static anycast IP addresses. Unlike CloudFront, it does not cache content — it optimizes the network path."
  },
  {
    category: "networking",
    front: "What is Amazon API Gateway?",
    back: "A fully managed service to create, publish, secure, and monitor APIs at any scale. Commonly the front door for serverless applications backed by Lambda. Handles throttling, authorization, and versioning."
  },
  {
    category: "networking",
    front: "What is AWS PrivateLink (VPC endpoints)?",
    back: "Provides private connectivity from your VPC to AWS services (or partner services) without traversing the public internet — traffic stays on the AWS network via interface or gateway endpoints."
  },

  // ===================== Management & Governance =====================
  {
    category: "management",
    front: "What is Amazon CloudWatch?",
    back: "A monitoring and observability service that collects metrics, logs, and events from AWS resources and applications. Supports dashboards, alarms (which can trigger actions like Auto Scaling or SNS notifications), and log analysis."
  },
  {
    category: "management",
    front: "What is AWS CloudTrail?",
    back: "A service that records API calls and account activity across your AWS account — who did what, when, and from where. Used for governance, compliance, and auditing. Think 'audit trail'."
  },
  {
    category: "management",
    front: "What is the difference between CloudWatch and CloudTrail?",
    back: "CloudWatch monitors performance and operational health (metrics, logs, alarms). CloudTrail records API activity and user actions for auditing. CloudWatch = 'how are my resources doing'; CloudTrail = 'who did what'."
  },
  {
    category: "management",
    front: "What is AWS Config?",
    back: "A service that continuously assesses, audits, and records the configuration of your AWS resources over time, and evaluates them against desired configurations (Config rules) for compliance."
  },
  {
    category: "management",
    front: "What is AWS Trusted Advisor?",
    back: "A tool that inspects your AWS environment and gives real-time best-practice recommendations across six categories: cost optimization, performance, security, fault tolerance, service limits, and operational excellence. Full checks require a Business, Enterprise On-Ramp, or Enterprise support plan."
  },
  {
    category: "management",
    front: "What is AWS CloudFormation?",
    back: "An Infrastructure as Code (IaC) service that provisions AWS resources from declarative templates (JSON/YAML). Templates can be versioned and reused to deploy identical stacks across accounts and Regions."
  },
  {
    category: "management",
    front: "What is AWS Systems Manager?",
    back: "A unified interface to view and manage AWS resources at scale — run commands across fleets of instances, patch operating systems (Patch Manager), store configuration values (Parameter Store), and open secure shell sessions (Session Manager) without SSH keys."
  },
  {
    category: "management",
    front: "What is AWS Control Tower?",
    back: "A service to set up and govern a secure, multi-account AWS environment (landing zone) based on best practices, with guardrails, using AWS Organizations under the hood."
  },
  {
    category: "management",
    front: "What is AWS Service Catalog?",
    back: "A service that lets organizations create and manage catalogs of approved IT products (servers, databases, software) that end users can deploy in a self-service, governed way."
  },
  {
    category: "management",
    front: "What is the AWS Health Dashboard?",
    back: "Shows the status of AWS services. The public Service Health view shows general service status by Region; your Account Health view shows personalized alerts and remediation guidance for events affecting your specific resources."
  },
  {
    category: "management",
    front: "What is the AWS Well-Architected Tool?",
    back: "A free self-service tool in the console that reviews your workloads against the six pillars of the Well-Architected Framework and provides improvement recommendations."
  },
  {
    category: "management",
    front: "What is AWS Compute Optimizer?",
    back: "A service that uses machine learning to analyze resource utilization and recommend optimal AWS compute resources (EC2 instance types, Auto Scaling groups, EBS volumes, Lambda memory) to reduce cost and improve performance."
  },
  {
    category: "management",
    front: "What are the ways to interact with AWS services?",
    back: "1) AWS Management Console (web UI), 2) AWS CLI (command line), 3) AWS SDKs (programmatic access from code), plus higher-level tools like CloudFormation and the CDK — all of them call the same AWS APIs."
  },

  // ===================== Billing & Pricing =====================
  {
    category: "billing",
    front: "What are the fundamental AWS pricing principles?",
    back: "Pay-as-you-go (pay only for what you use), save when you commit (Savings Plans / Reserved Instances), and pay less by using more (volume-based tiered discounts, e.g., S3)."
  },
  {
    category: "billing",
    front: "What are the three types of AWS Free Tier offers?",
    back: "1) Always Free (e.g., 1M Lambda requests/month, 25 GB DynamoDB), 2) 12 Months Free from sign-up (e.g., 750 hrs/month t2.micro/t3.micro EC2), 3) Short-term Trials (e.g., 30-day trials of specific services)."
  },
  {
    category: "billing",
    front: "What is AWS Cost Explorer?",
    back: "A tool to visualize, understand, and analyze your AWS costs and usage over time (up to 12+ months of history), with filtering/grouping by service, account, or tag, plus usage forecasts."
  },
  {
    category: "billing",
    front: "What is AWS Budgets?",
    back: "A service to set custom cost and usage budgets and receive alerts (e.g., email/SNS) when actual or forecasted costs exceed thresholds. Supports cost, usage, RI/Savings Plans utilization and coverage budgets."
  },
  {
    category: "billing",
    front: "What is the AWS Cost and Usage Report (CUR)?",
    back: "The most comprehensive and granular source of AWS cost and usage data — line items per service, per hour/day — delivered to an S3 bucket for detailed analysis (e.g., with Athena or QuickSight)."
  },
  {
    category: "billing",
    front: "What is consolidated billing in AWS Organizations?",
    back: "One bill for all accounts in an organization. Usage across accounts is combined so you reach volume discount tiers faster, and unused Reserved Instances/Savings Plans discounts can be shared across accounts. It's free to use."
  },
  {
    category: "billing",
    front: "What is the AWS Pricing Calculator?",
    back: "A free web-based tool to estimate the monthly cost of AWS services for your architecture before you build it, and to compare configuration options."
  },
  {
    category: "billing",
    front: "What are cost allocation tags?",
    back: "Key-value labels attached to resources that, once activated in the Billing console, let you track and break down AWS costs by project, team, environment, or any dimension in Cost Explorer and the CUR."
  },
  {
    category: "billing",
    front: "What are Savings Plans?",
    back: "Flexible pricing models offering up to 72% savings in exchange for committing to a consistent amount of usage ($/hour) for 1 or 3 years. Compute Savings Plans apply across EC2 (any Region/family), Fargate, and Lambda."
  },
  {
    category: "billing",
    front: "How does AWS charge for data transfer?",
    back: "Inbound data transfer to AWS is generally free. Outbound data transfer to the internet is charged per GB. Data transfer between AZs or Regions also incurs charges; traffic within the same AZ (via private IP) is typically free."
  },
  {
    category: "billing",
    front: "What is the AWS Marketplace?",
    back: "A curated digital catalog of third-party software, data, and services (e.g., AMIs, SaaS) that run on AWS. Charges appear on your AWS bill, and offerings often support flexible pricing (hourly, monthly, annual, BYOL)."
  },
  {
    category: "billing",
    front: "Which EC2 pricing option suits a steady-state workload running 24/7 for 3 years?",
    back: "Reserved Instances or Savings Plans with a 3-year term (All Upfront gives the biggest discount). On-Demand is for short/unpredictable workloads; Spot is for interruptible workloads."
  },

  // ===================== Support & Resources =====================
  {
    category: "support",
    front: "Name the AWS Support plans.",
    back: "Basic (free), Developer, Business, Enterprise On-Ramp, and Enterprise."
  },
  {
    category: "support",
    front: "What does the Basic (free) support plan include?",
    back: "24/7 customer service for account and billing questions, documentation, whitepapers, support forums, AWS re:Post, the AWS Health Dashboard, and a limited set of Trusted Advisor core checks. No technical support cases."
  },
  {
    category: "support",
    front: "What does the Developer support plan include?",
    back: "Everything in Basic plus business-hours email access to Cloud Support Associates, general guidance response < 24 hours, and impaired system response < 12 hours. Best for testing and development."
  },
  {
    category: "support",
    front: "What does the Business support plan include?",
    back: "24/7 phone, email, and chat access to Cloud Support Engineers; full set of Trusted Advisor checks; production system impaired < 4 hours; production system down < 1 hour; infrastructure event management (for a fee)."
  },
  {
    category: "support",
    front: "What does the Enterprise support plan include?",
    back: "Everything in Business plus a designated Technical Account Manager (TAM), Concierge Support Team for billing/account questions, infrastructure event management included, and business-critical system down response < 15 minutes."
  },
  {
    category: "support",
    front: "What is Enterprise On-Ramp support?",
    back: "A tier between Business and Enterprise: 24/7 support, a pool of Technical Account Managers (not designated), business-critical system down response < 30 minutes, and annual architectural/operational reviews."
  },
  {
    category: "support",
    front: "What is a Technical Account Manager (TAM)?",
    back: "A designated AWS expert included with Enterprise Support who provides proactive guidance, architectural reviews, and ongoing advocacy — your primary point of contact at AWS."
  },
  {
    category: "support",
    front: "What is the AWS Partner Network (APN)?",
    back: "AWS's global community of partners: Consulting Partners (help design, build, and manage workloads) and Technology Partners (provide software/hardware solutions that integrate with AWS)."
  },
  {
    category: "support",
    front: "What is AWS Professional Services?",
    back: "A global team of AWS experts that works alongside your team and APN partners to help enterprises achieve business outcomes and accelerate cloud adoption."
  },
  {
    category: "support",
    front: "What are AWS re:Post and the AWS Knowledge Center?",
    back: "re:Post is AWS's community-driven Q&A service (replacing the old forums). The Knowledge Center contains answers to the most frequently asked support questions. Both are free resources."
  },
  {
    category: "support",
    front: "What is AWS Managed Services (AMS)?",
    back: "A service where AWS operates your AWS infrastructure on your behalf — providing routine operations like patching, backup, monitoring, and incident response, following AWS best practices."
  },
  {
    category: "support",
    front: "What is AWS IQ?",
    back: "A marketplace-style service that connects customers with AWS-certified third-party experts for on-demand project work, with integrated billing through AWS."
  },

  // ===================== AI/ML & Analytics =====================
  {
    category: "aiml-analytics",
    front: "What is Amazon SageMaker?",
    back: "A fully managed service to build, train, and deploy machine learning models at scale — covering the complete ML workflow from data labeling to hosted model endpoints."
  },
  {
    category: "aiml-analytics",
    front: "What is Amazon Rekognition?",
    back: "A computer vision service that analyzes images and videos: object and scene detection, facial analysis and comparison, text in images, and content moderation."
  },
  {
    category: "aiml-analytics",
    front: "What are Amazon Polly and Amazon Transcribe?",
    back: "Polly converts text to lifelike speech (text-to-speech). Transcribe converts speech to text (automatic speech recognition). They are complements of each other."
  },
  {
    category: "aiml-analytics",
    front: "What are Amazon Translate, Comprehend, and Lex?",
    back: "Translate: neural machine language translation. Comprehend: natural language processing to extract sentiment, entities, and key phrases from text. Lex: builds conversational chatbots (voice and text) — the technology behind Alexa."
  },
  {
    category: "aiml-analytics",
    front: "What is Amazon Kendra?",
    back: "An intelligent enterprise search service powered by machine learning that lets users search across different content repositories using natural language."
  },
  {
    category: "aiml-analytics",
    front: "What is Amazon Bedrock?",
    back: "A fully managed service that provides access to foundation models (generative AI) from Amazon and leading AI companies through a single API, for building generative AI applications."
  },
  {
    category: "aiml-analytics",
    front: "What is Amazon Athena?",
    back: "A serverless, interactive query service to analyze data directly in Amazon S3 using standard SQL. You pay per query based on data scanned — no infrastructure to manage."
  },
  {
    category: "aiml-analytics",
    front: "What is AWS Glue?",
    back: "A serverless data integration (ETL — extract, transform, load) service that discovers, prepares, and combines data for analytics and machine learning, including a central Data Catalog."
  },
  {
    category: "aiml-analytics",
    front: "What is Amazon Kinesis?",
    back: "A family of services for collecting, processing, and analyzing real-time streaming data — such as clickstreams, IoT telemetry, and logs (Kinesis Data Streams, Data Firehose)."
  },
  {
    category: "aiml-analytics",
    front: "What is Amazon EMR?",
    back: "A managed big data platform for running open-source frameworks like Apache Spark, Hadoop, and Presto to process vast amounts of data."
  },
  {
    category: "aiml-analytics",
    front: "What is Amazon QuickSight?",
    back: "A serverless business intelligence (BI) service to create interactive dashboards and visualizations from your data, with ML-powered insights and natural-language querying (Q)."
  },
  {
    category: "aiml-analytics",
    front: "What is Amazon OpenSearch Service?",
    back: "A managed service to deploy and run OpenSearch clusters for log analytics, full-text search, and real-time application monitoring."
  },

  // ===================== App Integration & Dev Tools =====================
  {
    category: "integration",
    front: "What is Amazon SQS?",
    back: "Simple Queue Service — a fully managed message queuing service that decouples application components. Producers send messages to a queue; consumers poll and process them. Standard queues offer at-least-once delivery; FIFO queues guarantee order and exactly-once processing."
  },
  {
    category: "integration",
    front: "What is Amazon SNS?",
    back: "Simple Notification Service — a fully managed publish/subscribe (pub/sub) messaging service. A message published to a topic fans out to many subscribers: email, SMS, mobile push, SQS queues, Lambda functions, and HTTP endpoints."
  },
  {
    category: "integration",
    front: "What is the difference between SQS and SNS?",
    back: "SQS is a pull-based queue: one consumer processes each message; used to decouple and buffer work. SNS is push-based pub/sub: one published message is delivered to many subscribers simultaneously."
  },
  {
    category: "integration",
    front: "What is Amazon EventBridge?",
    back: "A serverless event bus that connects applications using events from AWS services, your own apps, and SaaS providers, routing them to targets based on rules. It's the evolution of CloudWatch Events and supports scheduled rules."
  },
  {
    category: "integration",
    front: "What is AWS Step Functions?",
    back: "A serverless orchestration service that coordinates multiple AWS services (like Lambda) into visual workflows (state machines) with built-in error handling, retries, and branching."
  },
  {
    category: "integration",
    front: "What are the AWS Code* developer services?",
    back: "CodeCommit (managed Git repositories), CodeBuild (build and test code), CodeDeploy (automate deployments), and CodePipeline (CI/CD orchestration connecting the stages)."
  },
  {
    category: "integration",
    front: "What is AWS CDK (Cloud Development Kit)?",
    back: "An open-source framework to define cloud infrastructure using familiar programming languages (TypeScript, Python, Java, etc.), which synthesizes into CloudFormation templates."
  },
  {
    category: "integration",
    front: "What is AWS Amplify?",
    back: "A set of tools and services to build, deploy, and host full-stack web and mobile applications quickly, with features like authentication, APIs, and hosting out of the box."
  },
  {
    category: "integration",
    front: "What is AWS CloudShell?",
    back: "A free, browser-based shell available in the AWS Management Console, pre-authenticated with your console credentials and pre-loaded with the AWS CLI and common tools."
  },
  {
    category: "integration",
    front: "What is AWS X-Ray?",
    back: "A service that traces requests as they travel through distributed applications and microservices, helping developers analyze performance bottlenecks and debug errors."
  }
];
