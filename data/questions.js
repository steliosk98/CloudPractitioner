// AWS Cloud Practitioner (CLF-C02) Practice Exam Question Bank
// Questions are written to align with the official CLF-C02 exam guide domains
// and are based on official AWS documentation.
//
// Domains and official exam weighting:
//   d1 - Cloud Concepts (24%)
//   d2 - Security and Compliance (30%)
//   d3 - Cloud Technology and Services (34%)
//   d4 - Billing, Pricing, and Support (12%)

const EXAM_DOMAINS = {
  d1: { name: "Cloud Concepts", weight: 24 },
  d2: { name: "Security and Compliance", weight: 30 },
  d3: { name: "Cloud Technology and Services", weight: 34 },
  d4: { name: "Billing, Pricing, and Support", weight: 12 }
};

const EXAM_CONFIG = {
  totalQuestions: 65,
  durationMinutes: 90,
  passingPercent: 70, // approximates the 700/1000 scaled passing score
  // Number of questions drawn per domain (matches official weighting)
  distribution: { d1: 16, d2: 19, d3: 22, d4: 8 }
};

const QUESTION_BANK = [
  // ============================================================
  // Domain 1: Cloud Concepts
  // ============================================================
  {
    domain: "d1",
    question: "Which of the following is a benefit of moving to the AWS Cloud in terms of capital expenditure?",
    options: [
      "Trading fixed expense for variable expense",
      "Trading variable expense for fixed expense",
      "Eliminating all operational expenses",
      "Guaranteeing a fixed monthly bill"
    ],
    correct: [0],
    explanation: "One of the six advantages of cloud computing is trading fixed (capital) expense for variable expense — you pay only for the resources you consume instead of investing in data centers up front."
  },
  {
    domain: "d1",
    question: "A company wants to be able to deploy its application to users in a new country within days. Which advantage of cloud computing does this describe?",
    options: [
      "Go global in minutes",
      "Massive economies of scale",
      "Stop guessing capacity",
      "Trade fixed expense for variable expense"
    ],
    correct: [0],
    explanation: "With AWS's global infrastructure of Regions, you can deploy applications to multiple geographic locations with a few clicks — 'go global in minutes'."
  },
  {
    domain: "d1",
    question: "Which cloud computing model gives the customer the MOST control over the operating system and installed software?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Function as a Service (FaaS)"
    ],
    correct: [0],
    explanation: "IaaS (e.g., Amazon EC2) provides the highest level of flexibility and management control — the customer manages the OS, middleware, and applications."
  },
  {
    domain: "d1",
    question: "A company runs some workloads in its own data center and connects other workloads running on AWS to it. Which cloud deployment model is this?",
    options: [
      "Hybrid cloud",
      "Public cloud",
      "Private cloud",
      "Multi-cloud"
    ],
    correct: [0],
    explanation: "A hybrid deployment connects cloud-based resources with on-premises infrastructure, often used to extend existing infrastructure into the cloud."
  },
  {
    domain: "d1",
    question: "What does 'elasticity' mean in the context of the AWS Cloud?",
    options: [
      "Automatically acquiring resources when demand rises and releasing them when demand drops",
      "Running applications in multiple Regions simultaneously",
      "Encrypting data automatically at rest and in transit",
      "Reserving capacity for one or three years at a discount"
    ],
    correct: [0],
    explanation: "Elasticity is the ability to scale resources up or down automatically in response to demand so you pay only for what you actually need."
  },
  {
    domain: "d1",
    question: "Which component of the AWS global infrastructure consists of one or more discrete data centers with redundant power and networking?",
    options: [
      "Availability Zone",
      "Region",
      "Edge location",
      "Local Zone"
    ],
    correct: [0],
    explanation: "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity. A Region contains multiple isolated AZs."
  },
  {
    domain: "d1",
    question: "Which factors should a company consider when selecting an AWS Region for its workloads? (Select TWO.)",
    options: [
      "Compliance with data governance and legal requirements",
      "Proximity to customers to reduce latency",
      "The Region with the most edge locations inside it",
      "Whether the Region supports IAM",
      "The color coding of the Region on the AWS map"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "The four main factors for choosing a Region are: compliance/legal requirements, proximity to customers (latency), available services within the Region, and pricing. IAM is a global service available everywhere."
  },
  {
    domain: "d1",
    question: "Deploying an application across multiple Availability Zones primarily achieves which goal?",
    options: [
      "High availability",
      "Lower data transfer costs",
      "Reduced IAM complexity",
      "Automatic code deployment"
    ],
    correct: [0],
    explanation: "Availability Zones are physically separated and isolated from each other. Running an application in multiple AZs protects it from single-data-center failures — the primary way to achieve high availability in a Region."
  },
  {
    domain: "d1",
    question: "Which pillar of the AWS Well-Architected Framework focuses on the ability of a workload to recover from failures and meet demand?",
    options: [
      "Reliability",
      "Performance efficiency",
      "Operational excellence",
      "Cost optimization"
    ],
    correct: [0],
    explanation: "The Reliability pillar covers the ability of a workload to perform its intended function correctly and consistently, and to recover from failures."
  },
  {
    domain: "d1",
    question: "Which pillar of the AWS Well-Architected Framework focuses on minimizing the environmental impact of running cloud workloads?",
    options: [
      "Sustainability",
      "Cost optimization",
      "Reliability",
      "Security"
    ],
    correct: [0],
    explanation: "Sustainability, added as the sixth pillar in 2021, focuses on reducing the energy consumption and environmental impact of cloud workloads."
  },
  {
    domain: "d1",
    question: "A company wants to migrate its on-premises application to AWS with no code changes, moving virtual machines as-is. Which migration strategy is this?",
    options: [
      "Rehost (lift and shift)",
      "Refactor",
      "Repurchase",
      "Retire"
    ],
    correct: [0],
    explanation: "Rehosting ('lift and shift') moves applications to the cloud without changes. It is the fastest strategy and common for large legacy migrations."
  },
  {
    domain: "d1",
    question: "Which perspectives are part of the AWS Cloud Adoption Framework (AWS CAF)? (Select TWO.)",
    options: [
      "Business",
      "Security",
      "Marketing",
      "Procurement",
      "Legal"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "The AWS CAF has six perspectives: Business, People, and Governance (business capabilities), plus Platform, Security, and Operations (technical capabilities)."
  },
  {
    domain: "d1",
    question: "What is a benefit of the AWS Cloud's massive economies of scale?",
    options: [
      "Lower pay-as-you-go prices resulting from aggregated customer usage",
      "Unlimited free tier usage for large customers",
      "Guaranteed 100% uptime for all services",
      "Free data transfer between all Regions"
    ],
    correct: [0],
    explanation: "Because hundreds of thousands of customers aggregate usage in the cloud, AWS achieves higher economies of scale, which translates into lower pay-as-you-go prices."
  },
  {
    domain: "d1",
    question: "A startup does not know how much traffic its new application will receive. Which cloud advantage MOST directly addresses this problem?",
    options: [
      "Stop guessing capacity",
      "Go global in minutes",
      "Trade fixed expense for variable expense",
      "Increased data durability"
    ],
    correct: [0],
    explanation: "In the cloud you can scale up and down as needed, eliminating the need to guess infrastructure capacity ahead of time and avoiding both idle resources and capacity shortfalls."
  },
  {
    domain: "d1",
    question: "Which statement BEST describes the difference between scalability and elasticity?",
    options: [
      "Scalability is the ability to grow to handle increased load; elasticity is automatically scaling out and in as demand changes",
      "Scalability applies only to storage; elasticity applies only to compute",
      "Elasticity requires manual intervention; scalability is automatic",
      "They are identical concepts in AWS"
    ],
    correct: [0],
    explanation: "Scalability is a design property — the system can handle growth. Elasticity is the dynamic, often automatic, matching of resources to current demand (scale out AND back in)."
  },
  {
    domain: "d1",
    question: "Which AWS service or feature lets you run AWS infrastructure and services in your own on-premises data center for a hybrid experience?",
    options: [
      "AWS Outposts",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Snowball Edge"
    ],
    correct: [0],
    explanation: "AWS Outposts delivers fully managed AWS infrastructure and services to on-premises locations for a consistent hybrid cloud experience."
  },
  {
    domain: "d1",
    question: "Which statement about AWS Regions is TRUE?",
    options: [
      "Data stored in a Region does not leave that Region unless the customer explicitly moves it",
      "All AWS Regions have identical service availability",
      "Every Region contains exactly two Availability Zones",
      "Regions are automatically replicated to each other"
    ],
    correct: [0],
    explanation: "Regions are isolated from one another, and AWS does not move customer data out of a Region unless the customer chooses to do so — important for data residency and compliance."
  },
  {
    domain: "d1",
    question: "A company wants to reduce the operational burden of managing databases, including patching and backups, but keep using SQL. What is the BEST approach?",
    options: [
      "Use a managed service such as Amazon RDS",
      "Run the database on Amazon EC2 instances",
      "Move all data to Amazon S3",
      "Continue running the database on-premises"
    ],
    correct: [0],
    explanation: "Using managed services shifts undifferentiated heavy lifting (patching, backups, failover) to AWS. Amazon RDS provides managed relational databases; running databases on EC2 leaves those tasks to the customer."
  },
  {
    domain: "d1",
    question: "Which of the following is a design principle of the AWS Well-Architected Framework?",
    options: [
      "Test systems at production scale and automate with experimentation in mind",
      "Always choose the largest instance size available",
      "Consolidate all workloads into a single Availability Zone",
      "Avoid making architectural changes after go-live"
    ],
    correct: [0],
    explanation: "Well-Architected general design principles include: stop guessing capacity, test at production scale, automate experimentation, allow architectures to evolve, and use data to drive decisions."
  },
  {
    domain: "d1",
    question: "What is the AWS Well-Architected Tool used for?",
    options: [
      "Reviewing workloads against AWS best practices and identifying improvements",
      "Automatically fixing security vulnerabilities in code",
      "Estimating monthly AWS costs before deployment",
      "Provisioning infrastructure from templates"
    ],
    correct: [0],
    explanation: "The free AWS Well-Architected Tool guides you through reviewing a workload against the six pillars and produces improvement plans. Pricing estimates come from the AWS Pricing Calculator; provisioning from CloudFormation."
  },
  {
    domain: "d1",
    question: "Which scenario is the BEST fit for using a serverless architecture?",
    options: [
      "An event-driven workload with unpredictable, intermittent traffic",
      "A licensed application that must run on a specific dedicated physical server",
      "A legacy application requiring a custom kernel module",
      "A GPU-based training job that runs continuously for weeks"
    ],
    correct: [0],
    explanation: "Serverless services like AWS Lambda are ideal for event-driven, intermittent workloads — you pay per request with no idle cost and no servers to manage."
  },
  {
    domain: "d1",
    question: "What is a benefit of decoupling application components in the AWS Cloud (for example, with queues)?",
    options: [
      "Component failures are isolated, so one failing component does not cascade to others",
      "It eliminates the need for security controls between components",
      "It guarantees zero latency between components",
      "It reduces the number of AWS services required"
    ],
    correct: [0],
    explanation: "Loose coupling (e.g., with Amazon SQS between tiers) isolates failures and lets components scale independently — a core reliability best practice."
  },
  {
    domain: "d1",
    question: "Which AWS offering helps organizations build a business case and guidance for cloud transformation across people, process, and technology?",
    options: [
      "AWS Cloud Adoption Framework (AWS CAF)",
      "AWS Well-Architected Framework",
      "AWS Trusted Advisor",
      "AWS Service Catalog"
    ],
    correct: [0],
    explanation: "The AWS CAF leverages AWS experience to help organizations plan and execute digital transformation through six perspectives. The Well-Architected Framework focuses on workload architecture, not organizational adoption."
  },
  {
    domain: "d1",
    question: "A company must keep certain customer data within its national borders due to regulations. How does AWS support this requirement?",
    options: [
      "The company can choose the Region where data is stored, and AWS will not move it elsewhere",
      "AWS automatically detects data residency laws and moves data accordingly",
      "Data residency can only be achieved with on-premises servers",
      "AWS stores all customer data in the United States"
    ],
    correct: [0],
    explanation: "Customers choose the Region(s) in which their content is stored. AWS does not move or replicate customer content outside of the chosen Region(s) except as the customer directs."
  },

  // ============================================================
  // Domain 2: Security and Compliance
  // ============================================================
  {
    domain: "d2",
    question: "According to the AWS Shared Responsibility Model, which task is the responsibility of AWS?",
    options: [
      "Maintaining the physical security of data centers",
      "Patching the guest operating system on EC2 instances",
      "Configuring security groups",
      "Managing IAM user permissions"
    ],
    correct: [0],
    explanation: "AWS is responsible for security OF the cloud: physical facilities, hardware, network infrastructure, and the virtualization layer. Guest OS patching, security groups, and IAM are customer responsibilities."
  },
  {
    domain: "d2",
    question: "According to the AWS Shared Responsibility Model, which tasks are the responsibility of the customer? (Select TWO.)",
    options: [
      "Encrypting data stored in Amazon S3",
      "Managing IAM users and their permissions",
      "Replacing failed hard drives in AWS data centers",
      "Patching the hypervisor that runs EC2 instances",
      "Maintaining physical network cabling"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "Customers are responsible for security IN the cloud: their data (including encryption choices) and access management. Physical hardware and the hypervisor are AWS's responsibility."
  },
  {
    domain: "d2",
    question: "For Amazon RDS, which responsibility belongs to the CUSTOMER under the Shared Responsibility Model?",
    options: [
      "Managing database user accounts and network access rules",
      "Patching the database engine software",
      "Maintaining the underlying host hardware",
      "Installing the operating system on the database host"
    ],
    correct: [0],
    explanation: "For managed services like RDS, AWS handles the OS, database engine patching, and hardware. The customer still manages their data, database users, IAM, and network controls (security groups)."
  },
  {
    domain: "d2",
    question: "Which AWS service is used to create and manage users, groups, roles, and permissions?",
    options: [
      "AWS IAM",
      "Amazon Cognito",
      "AWS KMS",
      "AWS Directory Service"
    ],
    correct: [0],
    explanation: "AWS Identity and Access Management (IAM) manages authentication and authorization for AWS resources with users, groups, roles, and policies. It is free and global."
  },
  {
    domain: "d2",
    question: "What is the BEST way to grant an application running on an EC2 instance permission to access an S3 bucket?",
    options: [
      "Attach an IAM role to the EC2 instance",
      "Store the root user access keys on the instance",
      "Create an IAM user and hard-code its access keys in the application",
      "Make the S3 bucket public"
    ],
    correct: [0],
    explanation: "IAM roles provide temporary, automatically rotated credentials to AWS services. Hard-coding access keys or using root credentials is a serious security anti-pattern."
  },
  {
    domain: "d2",
    question: "Which IAM best practices should a company follow? (Select TWO.)",
    options: [
      "Enable multi-factor authentication (MFA) for privileged users",
      "Grant least privilege — only the permissions required to do a task",
      "Share one IAM user among the whole team for simplicity",
      "Use the root user for daily administrative work",
      "Embed access keys directly in application source code"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "IAM best practices include enabling MFA and granting least privilege. Sharing credentials, daily root usage, and hard-coded keys are all anti-patterns."
  },
  {
    domain: "d2",
    question: "Which tasks can ONLY be performed by the AWS account root user?",
    options: [
      "Changing the AWS Support plan and closing the AWS account",
      "Creating IAM users",
      "Launching EC2 instances",
      "Creating S3 buckets"
    ],
    correct: [0],
    explanation: "Certain tasks require root credentials, including closing the account and changing the support plan. Everyday tasks like creating users, instances, and buckets should be done with IAM identities."
  },
  {
    domain: "d2",
    question: "In an IAM policy evaluation, what happens when one policy allows an action and another policy explicitly denies it?",
    options: [
      "The explicit deny overrides the allow, and the action is denied",
      "The allow wins because it was attached first",
      "The most recently attached policy wins",
      "AWS asks the user to choose"
    ],
    correct: [0],
    explanation: "An explicit Deny in any applicable policy always overrides any Allow. By default all requests are implicitly denied until an Allow applies."
  },
  {
    domain: "d2",
    question: "Which AWS service provides on-demand downloads of AWS security and compliance reports, such as SOC and PCI reports?",
    options: [
      "AWS Artifact",
      "AWS Audit Manager",
      "Amazon Inspector",
      "AWS CloudTrail"
    ],
    correct: [0],
    explanation: "AWS Artifact is the free self-service portal for AWS compliance reports and select agreements. It's the go-to answer for 'download compliance reports'."
  },
  {
    domain: "d2",
    question: "Which service continuously monitors AWS accounts and workloads for malicious activity using machine learning on VPC Flow Logs, DNS logs, and CloudTrail events?",
    options: [
      "Amazon GuardDuty",
      "AWS WAF",
      "Amazon Macie",
      "AWS Shield"
    ],
    correct: [0],
    explanation: "Amazon GuardDuty is the intelligent threat detection service. WAF filters web traffic, Macie finds sensitive data in S3, and Shield protects against DDoS."
  },
  {
    domain: "d2",
    question: "A company needs to discover and protect personally identifiable information (PII) stored in Amazon S3. Which service should it use?",
    options: [
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS Shield",
      "AWS Config"
    ],
    correct: [0],
    explanation: "Amazon Macie uses machine learning and pattern matching to discover sensitive data such as PII in Amazon S3."
  },
  {
    domain: "d2",
    question: "Which AWS service protects web applications from common exploits such as SQL injection and cross-site scripting?",
    options: [
      "AWS WAF",
      "AWS Shield Standard",
      "Amazon Inspector",
      "AWS Firewall Manager"
    ],
    correct: [0],
    explanation: "AWS WAF is a web application firewall that filters malicious web requests like SQL injection and XSS. Shield protects against DDoS attacks specifically."
  },
  {
    domain: "d2",
    question: "Which AWS service provides protection against Distributed Denial of Service (DDoS) attacks and is automatically enabled for all AWS customers at no extra cost?",
    options: [
      "AWS Shield Standard",
      "AWS Shield Advanced",
      "AWS WAF",
      "Amazon GuardDuty"
    ],
    correct: [0],
    explanation: "AWS Shield Standard provides automatic protection against the most common DDoS attacks at no additional charge. Shield Advanced is the paid tier with enhanced protections and the Shield Response Team."
  },
  {
    domain: "d2",
    question: "Which service automatically scans EC2 instances, container images, and Lambda functions for software vulnerabilities and unintended network exposure?",
    options: [
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Trusted Advisor",
      "AWS Artifact"
    ],
    correct: [0],
    explanation: "Amazon Inspector is the automated vulnerability management service for compute workloads (EC2, ECR container images, Lambda)."
  },
  {
    domain: "d2",
    question: "A company wants to centrally manage encryption keys used to encrypt data across many AWS services. Which service should it use?",
    options: [
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS Certificate Manager",
      "Amazon Cognito"
    ],
    correct: [0],
    explanation: "AWS Key Management Service (KMS) creates and controls cryptographic keys and integrates with most AWS services for encryption at rest."
  },
  {
    domain: "d2",
    question: "Which service is designed to securely store, rotate, and retrieve database credentials and API keys?",
    options: [
      "AWS Secrets Manager",
      "AWS KMS",
      "AWS Artifact",
      "Amazon Macie"
    ],
    correct: [0],
    explanation: "AWS Secrets Manager stores secrets and supports automatic rotation of credentials (e.g., for Amazon RDS). KMS manages encryption keys, not application secrets."
  },
  {
    domain: "d2",
    question: "What is the function of a security group in Amazon VPC?",
    options: [
      "It acts as a stateful virtual firewall controlling traffic at the instance level",
      "It acts as a stateless firewall controlling traffic at the subnet level",
      "It encrypts all traffic entering the VPC",
      "It records all API calls made within the VPC"
    ],
    correct: [0],
    explanation: "Security groups are stateful, instance-level firewalls that support allow rules only. Network ACLs are the stateless, subnet-level firewalls."
  },
  {
    domain: "d2",
    question: "Which statements about network ACLs are TRUE? (Select TWO.)",
    options: [
      "They operate at the subnet level",
      "They support both allow and deny rules",
      "They are stateful",
      "They can only be applied to EC2 instances",
      "They automatically allow return traffic"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "Network ACLs work at the subnet boundary and support explicit allow and deny rules. They are stateless — return traffic must be explicitly allowed — unlike stateful security groups."
  },
  {
    domain: "d2",
    question: "Which AWS Organizations feature lets administrators restrict the maximum permissions available to member accounts?",
    options: [
      "Service control policies (SCPs)",
      "IAM identity-based policies",
      "Consolidated billing",
      "Cost allocation tags"
    ],
    correct: [0],
    explanation: "SCPs define permission guardrails for accounts and OUs in an organization. They limit what IAM identities in member accounts can do, but never grant permissions by themselves."
  },
  {
    domain: "d2",
    question: "Which service records API calls made in an AWS account, including the identity of the caller, the time, and the source IP address?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Config",
      "VPC Flow Logs"
    ],
    correct: [0],
    explanation: "AWS CloudTrail provides the audit trail of who did what and when via API activity logging. CloudWatch monitors metrics/logs; Config tracks resource configuration changes."
  },
  {
    domain: "d2",
    question: "A security team needs to track how resource configurations change over time and check them against compliance rules. Which service should they use?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "Amazon Inspector",
      "AWS Systems Manager"
    ],
    correct: [0],
    explanation: "AWS Config records resource configuration history and evaluates resources against desired configurations using Config rules."
  },
  {
    domain: "d2",
    question: "Which service aggregates security findings from GuardDuty, Inspector, Macie, and other tools into a single, prioritized view?",
    options: [
      "AWS Security Hub",
      "AWS Control Tower",
      "Amazon Detective",
      "AWS Artifact"
    ],
    correct: [0],
    explanation: "AWS Security Hub is the cloud security posture management service that aggregates and prioritizes findings across AWS security services and runs automated best-practice checks."
  },
  {
    domain: "d2",
    question: "A company wants to add user sign-up and sign-in to its mobile application, including support for social identity providers. Which service should it use?",
    options: [
      "Amazon Cognito",
      "AWS IAM",
      "AWS Directory Service",
      "AWS IAM Identity Center"
    ],
    correct: [0],
    explanation: "Amazon Cognito provides authentication, authorization, and user management for web and mobile apps, including federation with social identity providers. IAM controls access to AWS resources, not app end-users."
  },
  {
    domain: "d2",
    question: "What is the purpose of Multi-Factor Authentication (MFA)?",
    options: [
      "It adds a second layer of authentication beyond a password",
      "It encrypts data at rest in S3",
      "It replaces the need for IAM policies",
      "It rotates access keys automatically"
    ],
    correct: [0],
    explanation: "MFA requires a second factor (e.g., a one-time code from a device) in addition to the password, dramatically reducing the risk of compromised credentials."
  },
  {
    domain: "d2",
    question: "Which AWS service provisions free public SSL/TLS certificates for use with Elastic Load Balancing and Amazon CloudFront?",
    options: [
      "AWS Certificate Manager (ACM)",
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS CloudHSM"
    ],
    correct: [0],
    explanation: "ACM provisions, manages, and renews SSL/TLS certificates; public certificates used with integrated services are free."
  },
  {
    domain: "d2",
    question: "A company requires dedicated, single-tenant hardware for managing its encryption keys to meet FIPS 140-2 Level 3 requirements. Which service should it use?",
    options: [
      "AWS CloudHSM",
      "AWS KMS with AWS managed keys",
      "AWS Secrets Manager",
      "Amazon Macie"
    ],
    correct: [0],
    explanation: "AWS CloudHSM provides dedicated hardware security modules under the customer's exclusive control, validated to FIPS 140-2 Level 3."
  },
  {
    domain: "d2",
    question: "Where can a customer find AWS's certifications and accreditations such as ISO 27001 and details of which services are in scope?",
    options: [
      "AWS Artifact and the AWS compliance website",
      "The AWS Personal Health Dashboard",
      "Amazon CloudWatch",
      "The EC2 console"
    ],
    correct: [0],
    explanation: "AWS Artifact provides on-demand compliance reports, and the AWS compliance program pages list certifications and services in scope."
  },
  {
    domain: "d2",
    question: "Under the Shared Responsibility Model, which security control is ALWAYS shared between AWS and the customer?",
    options: [
      "Patch management",
      "Physical data center access",
      "Choice of encryption algorithms for customer data",
      "Hypervisor maintenance"
    ],
    correct: [0],
    explanation: "AWS documents patch management (and configuration management, awareness & training) as shared controls: AWS patches the infrastructure, while customers patch their guest OS and applications."
  },
  {
    domain: "d2",
    question: "A developer needs temporary AWS credentials for a short-term task. Which mechanism provides this securely?",
    options: [
      "Assuming an IAM role via AWS STS",
      "Creating a new root access key",
      "Sharing another developer's access keys",
      "Disabling MFA temporarily"
    ],
    correct: [0],
    explanation: "IAM roles, brokered by AWS Security Token Service (STS), issue temporary security credentials that expire automatically — the secure alternative to long-lived keys."
  },
  {
    domain: "d2",
    question: "Which AWS service helps you centrally set up and govern a secure multi-account environment with preconfigured guardrails?",
    options: [
      "AWS Control Tower",
      "AWS Config",
      "Amazon Cognito",
      "AWS Firewall Manager"
    ],
    correct: [0],
    explanation: "AWS Control Tower automates the setup of a landing zone — a best-practice, multi-account AWS environment — with preventive and detective guardrails, built on AWS Organizations."
  },
  {
    domain: "d2",
    question: "What is the recommended first step to protect a newly created AWS account?",
    options: [
      "Enable MFA on the root user and create IAM identities for daily work",
      "Create root user access keys for programmatic access",
      "Disable CloudTrail to reduce costs",
      "Open all security group ports for easier testing"
    ],
    correct: [0],
    explanation: "Securing the root user (strong password + MFA, no access keys) and switching to IAM identities for everyday tasks are the first security steps in any new account."
  },
  {
    domain: "d2",
    question: "Which service can a company use to encrypt data at rest in Amazon EBS volumes?",
    options: [
      "AWS KMS",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Shield"
    ],
    correct: [0],
    explanation: "EBS encryption uses AWS KMS keys to encrypt volumes and snapshots at rest, transparently to the instance."
  },
  {
    domain: "d2",
    question: "What does AWS IAM Identity Center (successor to AWS SSO) provide?",
    options: [
      "Centralized single sign-on access to multiple AWS accounts and business applications",
      "Encryption key management",
      "DDoS protection for web applications",
      "Automatic OS patching for EC2"
    ],
    correct: [0],
    explanation: "IAM Identity Center provides workforce single sign-on to AWS accounts (via Organizations) and SAML-enabled applications from one place, with a single identity source."
  },
  {
    domain: "d2",
    question: "Penetration testing on your own EC2 instances for approved services is…",
    options: [
      "Allowed without prior approval for services on AWS's permitted list",
      "Never allowed under any circumstances",
      "Allowed only with a signed contract from AWS Legal",
      "Only allowed for Enterprise Support customers"
    ],
    correct: [0],
    explanation: "AWS permits security testing of a documented list of services (including EC2, RDS, CloudFront, and others) without prior approval, as long as customers follow the AWS penetration testing policy. Attacks like DoS simulation remain prohibited."
  },

  // ============================================================
  // Domain 3: Cloud Technology and Services
  // ============================================================
  {
    domain: "d3",
    question: "Which AWS service provides resizable virtual servers in the cloud?",
    options: [
      "Amazon EC2",
      "Amazon S3",
      "AWS Lambda",
      "Amazon Lightsail CDN"
    ],
    correct: [0],
    explanation: "Amazon EC2 (Elastic Compute Cloud) provides secure, resizable compute capacity in the form of virtual server instances."
  },
  {
    domain: "d3",
    question: "A workload can tolerate interruptions and needs the lowest possible EC2 compute cost. Which purchasing option should be used?",
    options: [
      "Spot Instances",
      "On-Demand Instances",
      "Reserved Instances",
      "Dedicated Hosts"
    ],
    correct: [0],
    explanation: "Spot Instances use spare EC2 capacity at up to 90% discount but can be interrupted with a two-minute notice — ideal for fault-tolerant, flexible workloads."
  },
  {
    domain: "d3",
    question: "A company has a steady, predictable workload that will run continuously for the next three years. Which EC2 pricing options provide the LARGEST savings? (Select TWO.)",
    options: [
      "Reserved Instances with a 3-year term",
      "Compute Savings Plans with a 3-year commitment",
      "On-Demand Instances",
      "Spot Instances",
      "Dedicated Hosts on demand"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "For steady-state, long-running workloads, 3-year Reserved Instances or Savings Plans (especially All Upfront) deliver the deepest discounts. Spot is cheap but interruptible; On-Demand is the most expensive for continuous use."
  },
  {
    domain: "d3",
    question: "Which AWS service lets you run code without provisioning or managing servers, charging only for compute time consumed?",
    options: [
      "AWS Lambda",
      "Amazon EC2",
      "Amazon ECS on EC2",
      "AWS Elastic Beanstalk"
    ],
    correct: [0],
    explanation: "AWS Lambda is the serverless, event-driven compute service — you pay per request and per millisecond of execution, with no servers to manage."
  },
  {
    domain: "d3",
    question: "Which service provides a serverless compute engine for containers, removing the need to manage EC2 instances for ECS or EKS clusters?",
    options: [
      "AWS Fargate",
      "Amazon ECR",
      "AWS Batch",
      "Amazon Lightsail"
    ],
    correct: [0],
    explanation: "AWS Fargate runs containers for ECS and EKS without server management — you specify CPU and memory and pay for what the containers use."
  },
  {
    domain: "d3",
    question: "A developer wants to upload code and have AWS automatically handle capacity provisioning, load balancing, scaling, and health monitoring. Which service does this?",
    options: [
      "AWS Elastic Beanstalk",
      "AWS CloudFormation",
      "Amazon EC2 Auto Scaling",
      "AWS CodeDeploy"
    ],
    correct: [0],
    explanation: "Elastic Beanstalk is the PaaS offering: deploy code and it manages the infrastructure details, while you keep full control over the underlying resources."
  },
  {
    domain: "d3",
    question: "Which service automatically distributes incoming application traffic across multiple EC2 instances in multiple Availability Zones?",
    options: [
      "Elastic Load Balancing",
      "Amazon Route 53",
      "AWS Global Accelerator",
      "Amazon CloudFront"
    ],
    correct: [0],
    explanation: "Elastic Load Balancing distributes traffic across healthy targets in one or more AZs. Route 53 is DNS; CloudFront is a CDN."
  },
  {
    domain: "d3",
    question: "Which AWS storage service is object storage designed for 99.999999999% (11 nines) of durability?",
    options: [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "EC2 instance store"
    ],
    correct: [0],
    explanation: "Amazon S3 stores objects redundantly across multiple devices in multiple AZs and is designed for 11 nines of durability."
  },
  {
    domain: "d3",
    question: "A company needs to archive data for 10 years at the lowest possible storage cost, with retrieval times of up to 12–48 hours being acceptable. Which storage class is BEST?",
    options: [
      "S3 Glacier Deep Archive",
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Intelligent-Tiering"
    ],
    correct: [0],
    explanation: "S3 Glacier Deep Archive is the lowest-cost storage class, designed for long-term retention with retrieval within 12–48 hours."
  },
  {
    domain: "d3",
    question: "Which S3 storage class automatically moves objects between access tiers based on changing access patterns, with no retrieval fees?",
    options: [
      "S3 Intelligent-Tiering",
      "S3 Standard-IA",
      "S3 One Zone-IA",
      "S3 Glacier Flexible Retrieval"
    ],
    correct: [0],
    explanation: "S3 Intelligent-Tiering optimizes costs automatically when access patterns are unknown or change over time, for a small monthly monitoring fee and no retrieval charges."
  },
  {
    domain: "d3",
    question: "Which storage service provides persistent block-level storage volumes for use with a single EC2 instance?",
    options: [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "AWS Storage Gateway"
    ],
    correct: [0],
    explanation: "Amazon EBS provides block storage volumes that attach to EC2 instances within the same Availability Zone — like a virtual hard drive."
  },
  {
    domain: "d3",
    question: "Multiple Linux EC2 instances across several Availability Zones must share the same file system simultaneously. Which service should be used?",
    options: [
      "Amazon EFS",
      "Amazon EBS",
      "EC2 instance store",
      "S3 Glacier"
    ],
    correct: [0],
    explanation: "Amazon EFS is a shared, elastic NFS file system that thousands of instances across AZs can mount concurrently. EBS attaches to instances in a single AZ."
  },
  {
    domain: "d3",
    question: "A company needs a managed Windows-native shared file system with SMB protocol and Active Directory integration. Which service fits?",
    options: [
      "Amazon FSx for Windows File Server",
      "Amazon EFS",
      "Amazon S3",
      "AWS Snowball"
    ],
    correct: [0],
    explanation: "FSx for Windows File Server provides fully managed Windows file shares with SMB and AD integration. EFS is for Linux/NFS workloads."
  },
  {
    domain: "d3",
    question: "A company with limited network bandwidth must migrate 500 TB of data to AWS within weeks. What is the MOST practical option?",
    options: [
      "Order AWS Snowball Edge devices",
      "Upload over the internet with the AWS CLI",
      "Use AWS Direct Connect after waiting for provisioning",
      "Email the data to AWS Support"
    ],
    correct: [0],
    explanation: "The AWS Snow Family provides physical devices for petabyte-scale offline data transfer when network transfer would take too long or be too costly."
  },
  {
    domain: "d3",
    question: "Which AWS service is a managed relational database supporting engines such as MySQL, PostgreSQL, Oracle, and SQL Server?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon ElastiCache"
    ],
    correct: [0],
    explanation: "Amazon RDS is the managed relational database service handling provisioning, patching, backups, and recovery for popular engines."
  },
  {
    domain: "d3",
    question: "What does enabling Multi-AZ on an Amazon RDS instance provide?",
    options: [
      "Synchronous replication to a standby instance in another AZ with automatic failover",
      "Improved read performance through readable replicas",
      "Automatic cross-Region disaster recovery",
      "Reduced storage costs"
    ],
    correct: [0],
    explanation: "RDS Multi-AZ maintains a synchronous standby in a different AZ for high availability and automatic failover. It is not for scaling reads — that's what read replicas do."
  },
  {
    domain: "d3",
    question: "Which fully managed, serverless NoSQL database delivers single-digit millisecond performance at any scale?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS for MySQL",
      "Amazon Redshift",
      "Amazon Neptune"
    ],
    correct: [0],
    explanation: "Amazon DynamoDB is the serverless key-value/document NoSQL database with consistent single-digit millisecond latency and automatic multi-AZ replication."
  },
  {
    domain: "d3",
    question: "Which AWS service should a company use for a petabyte-scale data warehouse to run complex analytical SQL queries?",
    options: [
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon ElastiCache"
    ],
    correct: [0],
    explanation: "Amazon Redshift is the managed data warehouse service optimized for OLAP — complex analytics on large datasets."
  },
  {
    domain: "d3",
    question: "An application needs an in-memory cache to reduce database read load. Which service should be used?",
    options: [
      "Amazon ElastiCache",
      "Amazon Redshift",
      "AWS Storage Gateway",
      "Amazon Neptune"
    ],
    correct: [0],
    explanation: "Amazon ElastiCache provides managed Redis or Memcached in-memory caching to improve read performance and reduce database load."
  },
  {
    domain: "d3",
    question: "Which service enables a company to migrate an on-premises Oracle database to Amazon Aurora with minimal downtime?",
    options: [
      "AWS Database Migration Service (DMS)",
      "AWS DataSync",
      "AWS Snowball",
      "AWS Backup"
    ],
    correct: [0],
    explanation: "AWS DMS migrates databases with the source remaining operational, and supports heterogeneous migrations (with the Schema Conversion Tool) such as Oracle to Aurora."
  },
  {
    domain: "d3",
    question: "What is an Amazon VPC?",
    options: [
      "A logically isolated virtual network in the AWS Cloud that you define",
      "A physical rack of servers dedicated to one customer",
      "A DNS service for routing users to applications",
      "A private fiber connection to AWS"
    ],
    correct: [0],
    explanation: "Amazon VPC lets you provision an isolated section of the AWS Cloud and control IP ranges, subnets, route tables, and gateways."
  },
  {
    domain: "d3",
    question: "Instances in a private subnet need to download software updates from the internet, but must not accept inbound connections from the internet. What should be used?",
    options: [
      "A NAT gateway",
      "An internet gateway attached directly to the private subnet",
      "VPC peering",
      "AWS Direct Connect"
    ],
    correct: [0],
    explanation: "A NAT gateway allows outbound-only internet access for instances in private subnets — inbound connections from the internet are not possible."
  },
  {
    domain: "d3",
    question: "Which AWS service provides Domain Name System (DNS) services and domain registration?",
    options: [
      "Amazon Route 53",
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "Amazon API Gateway"
    ],
    correct: [0],
    explanation: "Amazon Route 53 is the highly available DNS service, supporting domain registration, health checks, and multiple routing policies."
  },
  {
    domain: "d3",
    question: "Which service reduces latency by caching content at AWS edge locations around the world?",
    options: [
      "Amazon CloudFront",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon VPC"
    ],
    correct: [0],
    explanation: "Amazon CloudFront is the content delivery network (CDN) that caches content at edge locations close to users."
  },
  {
    domain: "d3",
    question: "A company requires a dedicated private network connection from its data center to AWS that does not traverse the public internet. Which service meets this need?",
    options: [
      "AWS Direct Connect",
      "AWS Site-to-Site VPN",
      "Amazon CloudFront",
      "VPC peering"
    ],
    correct: [0],
    explanation: "AWS Direct Connect is a dedicated physical connection that bypasses the public internet for consistent performance. Site-to-Site VPN is encrypted but goes over the internet."
  },
  {
    domain: "d3",
    question: "A company needs to connect dozens of VPCs and its on-premises network through a single central hub. Which service simplifies this topology?",
    options: [
      "AWS Transit Gateway",
      "VPC peering between every pair of VPCs",
      "An internet gateway per VPC",
      "AWS Global Accelerator"
    ],
    correct: [0],
    explanation: "AWS Transit Gateway acts as a hub connecting many VPCs and on-premises networks, avoiding the complexity of a full mesh of VPC peering connections."
  },
  {
    domain: "d3",
    question: "Which service monitors AWS resources and applications by collecting metrics and logs, and can trigger alarms?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "AWS X-Ray"
    ],
    correct: [0],
    explanation: "Amazon CloudWatch is the monitoring and observability service — metrics, logs, dashboards, and alarms that can trigger automated actions."
  },
  {
    domain: "d3",
    question: "Which service lets you model and provision AWS resources using declarative JSON or YAML templates (Infrastructure as Code)?",
    options: [
      "AWS CloudFormation",
      "AWS Systems Manager",
      "AWS Elastic Beanstalk",
      "AWS CodePipeline"
    ],
    correct: [0],
    explanation: "AWS CloudFormation provisions resources from templates, enabling repeatable, version-controlled infrastructure deployments."
  },
  {
    domain: "d3",
    question: "A company wants to decouple a web tier from a processing tier so that messages are stored until the processing tier can handle them. Which service should be used?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "AWS Step Functions",
      "Amazon Kinesis Data Firehose"
    ],
    correct: [0],
    explanation: "Amazon SQS is a message queue that buffers and stores messages until consumers process them — the classic way to decouple tiers."
  },
  {
    domain: "d3",
    question: "Which service sends notifications to multiple subscribers — such as email addresses, SMS, and Lambda functions — using a publish/subscribe model?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon MQ",
      "AWS Batch"
    ],
    correct: [0],
    explanation: "Amazon SNS is the pub/sub messaging service: one message published to a topic fans out to all subscribers."
  },
  {
    domain: "d3",
    question: "Which service allows you to run SQL queries directly against data stored in Amazon S3 without managing any infrastructure?",
    options: [
      "Amazon Athena",
      "Amazon RDS",
      "Amazon EMR",
      "AWS Glue DataBrew"
    ],
    correct: [0],
    explanation: "Amazon Athena is the serverless, interactive query service for analyzing S3 data with standard SQL, billed per query."
  },
  {
    domain: "d3",
    question: "Which AWS service helps developers build, train, and deploy machine learning models?",
    options: [
      "Amazon SageMaker",
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Polly"
    ],
    correct: [0],
    explanation: "Amazon SageMaker is the fully managed ML platform for the entire model lifecycle. Rekognition, Comprehend, and Polly are pre-trained AI services for specific tasks."
  },
  {
    domain: "d3",
    question: "Which AI service should a company use to add image and video analysis, such as detecting objects and faces?",
    options: [
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Transcribe",
      "Amazon Lex"
    ],
    correct: [0],
    explanation: "Amazon Rekognition analyzes images and videos for objects, scenes, faces, text, and inappropriate content. Textract extracts text from documents; Transcribe converts speech to text; Lex builds chatbots."
  },
  {
    domain: "d3",
    question: "Which pair of services would a company use to convert text into lifelike speech and to convert recorded speech into text?",
    options: [
      "Amazon Polly and Amazon Transcribe",
      "Amazon Translate and Amazon Comprehend",
      "Amazon Lex and Amazon Kendra",
      "Amazon Rekognition and Amazon Textract"
    ],
    correct: [0],
    explanation: "Polly performs text-to-speech; Transcribe performs speech-to-text. Translate is language translation; Comprehend is NLP analysis."
  },
  {
    domain: "d3",
    question: "Which service provides access to foundation models from Amazon and third-party providers through a single API for building generative AI applications?",
    options: [
      "Amazon Bedrock",
      "Amazon SageMaker Ground Truth",
      "AWS DeepRacer",
      "Amazon Kendra"
    ],
    correct: [0],
    explanation: "Amazon Bedrock is the fully managed service for building generative AI applications with foundation models via a single API."
  },
  {
    domain: "d3",
    question: "Which service orchestrates multiple AWS services into serverless visual workflows with built-in error handling and retries?",
    options: [
      "AWS Step Functions",
      "Amazon SQS",
      "AWS CodePipeline",
      "Amazon EventBridge"
    ],
    correct: [0],
    explanation: "AWS Step Functions coordinates distributed applications as state machines with visual workflows, retries, and branching logic."
  },
  {
    domain: "d3",
    question: "A company wants to collect, process, and analyze streaming clickstream data in real time. Which service is designed for this?",
    options: [
      "Amazon Kinesis",
      "Amazon Athena",
      "AWS Glue",
      "Amazon QuickSight"
    ],
    correct: [0],
    explanation: "Amazon Kinesis ingests and processes real-time streaming data such as clickstreams, logs, and IoT telemetry."
  },
  {
    domain: "d3",
    question: "Which service creates interactive business intelligence dashboards from data with ML-powered insights?",
    options: [
      "Amazon QuickSight",
      "Amazon Athena",
      "AWS Glue",
      "Amazon Redshift"
    ],
    correct: [0],
    explanation: "Amazon QuickSight is the serverless BI service for building interactive dashboards and visualizations."
  },
  {
    domain: "d3",
    question: "Which AWS service provides a fully managed extract, transform, and load (ETL) capability for preparing data for analytics?",
    options: [
      "AWS Glue",
      "Amazon Kinesis",
      "AWS Data Exchange",
      "Amazon MQ"
    ],
    correct: [0],
    explanation: "AWS Glue is the serverless data integration/ETL service with a central Data Catalog for discovering and preparing data."
  },
  {
    domain: "d3",
    question: "Which services can be used to automate application deployments in a CI/CD pipeline on AWS? (Select TWO.)",
    options: [
      "AWS CodePipeline",
      "AWS CodeDeploy",
      "AWS Artifact",
      "Amazon Aurora",
      "AWS Shield"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "CodePipeline orchestrates the CI/CD stages, and CodeDeploy automates deployments to EC2, Lambda, and on-premises servers. AWS Artifact is for compliance reports."
  },
  {
    domain: "d3",
    question: "What are the primary ways to programmatically access and manage AWS services? (Select TWO.)",
    options: [
      "AWS Command Line Interface (CLI)",
      "AWS Software Development Kits (SDKs)",
      "Fax requests to AWS Support",
      "Remote Desktop to the AWS hypervisor",
      "Physical access to AWS data centers"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "The AWS CLI and SDKs (plus the Management Console for interactive use) call the AWS APIs — the supported ways to manage AWS services."
  },
  {
    domain: "d3",
    question: "Which service lets you run commands on, patch, and manage a fleet of EC2 instances and on-premises servers at scale?",
    options: [
      "AWS Systems Manager",
      "AWS CloudFormation",
      "Amazon Inspector",
      "AWS Trusted Advisor"
    ],
    correct: [0],
    explanation: "AWS Systems Manager provides operational tools — Run Command, Patch Manager, Session Manager, Parameter Store — to manage servers at scale without SSH."
  },
  {
    domain: "d3",
    question: "Which service improves global application performance by routing traffic over the AWS global network using static anycast IP addresses, without caching content?",
    options: [
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "Amazon Route 53",
      "AWS Transit Gateway"
    ],
    correct: [0],
    explanation: "Global Accelerator optimizes the network path to applications via the AWS backbone and static IPs. CloudFront, by contrast, caches content at edge locations."
  },
  {
    domain: "d3",
    question: "Which service is used to create, publish, and manage APIs as a 'front door' for serverless applications backed by Lambda?",
    options: [
      "Amazon API Gateway",
      "Elastic Load Balancing",
      "AWS Direct Connect",
      "Amazon Connect"
    ],
    correct: [0],
    explanation: "Amazon API Gateway creates and manages REST, HTTP, and WebSocket APIs, commonly fronting Lambda functions in serverless architectures."
  },
  {
    domain: "d3",
    question: "An EC2 instance needs temporary, high-speed scratch storage where data loss on instance stop is acceptable. Which storage is appropriate?",
    options: [
      "EC2 instance store",
      "Amazon EBS gp3 volume",
      "Amazon EFS",
      "S3 Standard"
    ],
    correct: [0],
    explanation: "Instance store is ephemeral storage physically attached to the host — very fast, but data is lost when the instance stops or terminates. Ideal for caches and temporary data."
  },
  {
    domain: "d3",
    question: "Which service provides simple virtual private servers with bundled, predictable monthly pricing, aimed at simple web applications?",
    options: [
      "Amazon Lightsail",
      "Amazon EC2 with Savings Plans",
      "AWS Fargate",
      "AWS Outposts"
    ],
    correct: [0],
    explanation: "Amazon Lightsail bundles a VPS, storage, and networking at a fixed monthly price — designed for simple workloads and newcomers to AWS."
  },
  {
    domain: "d3",
    question: "What is an AWS Local Zone?",
    options: [
      "An extension of a Region that places compute and storage closer to large population centers for single-digit millisecond latency",
      "A private section of an Availability Zone",
      "A CloudFront cache in a customer's data center",
      "A special Region reserved for government workloads"
    ],
    correct: [0],
    explanation: "Local Zones extend Regions closer to major metros for latency-sensitive applications like gaming and media. (Government workloads use AWS GovCloud.)"
  },
  {
    domain: "d3",
    question: "Which serverless event bus routes events between AWS services, custom applications, and SaaS providers based on rules?",
    options: [
      "Amazon EventBridge",
      "Amazon SQS",
      "AWS Step Functions",
      "Amazon MQ"
    ],
    correct: [0],
    explanation: "Amazon EventBridge connects event sources to targets using rules, enabling event-driven architectures; it also supports scheduled (cron-like) rules."
  },

  // ============================================================
  // Domain 4: Billing, Pricing, and Support
  // ============================================================
  {
    domain: "d4",
    question: "Which AWS tool lets you visualize and analyze your historical AWS costs and usage, and forecast future spend?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Artifact"
    ],
    correct: [0],
    explanation: "Cost Explorer visualizes historical cost and usage with filtering and grouping, and produces forecasts. Budgets is for alerts; the Pricing Calculator estimates future architectures."
  },
  {
    domain: "d4",
    question: "A company wants to receive an alert when its forecasted monthly AWS spend exceeds $10,000. Which tool should it use?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Cost and Usage Report",
      "AWS Trusted Advisor"
    ],
    correct: [0],
    explanation: "AWS Budgets sends alerts when actual or forecasted cost or usage exceeds a defined threshold."
  },
  {
    domain: "d4",
    question: "Which tool should a company use to estimate the monthly cost of a planned AWS architecture BEFORE deploying it?",
    options: [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Compute Optimizer"
    ],
    correct: [0],
    explanation: "The AWS Pricing Calculator estimates costs for planned workloads. Cost Explorer analyzes existing/historical spend."
  },
  {
    domain: "d4",
    question: "What is a benefit of consolidated billing in AWS Organizations?",
    options: [
      "Combined usage across accounts can reach volume discount tiers faster",
      "It grants all member accounts administrator access to each other",
      "It removes the need to pay for data transfer",
      "It automatically enables Enterprise Support in all accounts"
    ],
    correct: [0],
    explanation: "Consolidated billing produces one bill, aggregates usage for volume pricing tiers, allows sharing of RI/Savings Plans discounts, and is free."
  },
  {
    domain: "d4",
    question: "Which types of AWS Free Tier offers exist? (Select TWO.)",
    options: [
      "Always Free offers",
      "12 Months Free offers",
      "Lifetime unlimited usage offers",
      "Pay-in-advance discount offers",
      "Hardware rental offers"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "The Free Tier includes Always Free (e.g., 1M Lambda requests/month), 12 Months Free from sign-up (e.g., 750 hours/month of t2/t3.micro), and short-term Trials."
  },
  {
    domain: "d4",
    question: "Which AWS Support plan is the LOWEST tier that provides 24/7 phone, email, and chat access to Cloud Support Engineers?",
    options: [
      "Business",
      "Developer",
      "Basic",
      "Enterprise"
    ],
    correct: [0],
    explanation: "Business Support is the lowest tier with 24/7 phone/chat/email technical support and the full set of Trusted Advisor checks. Developer provides business-hours email only."
  },
  {
    domain: "d4",
    question: "Which AWS Support plan includes a designated Technical Account Manager (TAM)?",
    options: [
      "Enterprise",
      "Business",
      "Developer",
      "Enterprise On-Ramp"
    ],
    correct: [0],
    explanation: "Only Enterprise Support includes a designated TAM. Enterprise On-Ramp provides access to a pool of TAMs, not a designated one."
  },
  {
    domain: "d4",
    question: "A production system is down for a company on the Business Support plan. What is the response time target for this case?",
    options: [
      "Less than 1 hour",
      "Less than 15 minutes",
      "Less than 12 hours",
      "Less than 24 hours"
    ],
    correct: [0],
    explanation: "Business Support targets < 1 hour response for production system down. The < 15 minute target for business-critical system down requires Enterprise Support."
  },
  {
    domain: "d4",
    question: "Which service inspects your AWS environment and makes recommendations in categories including cost optimization, security, fault tolerance, and service limits?",
    options: [
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS Config",
      "AWS Health Dashboard"
    ],
    correct: [0],
    explanation: "Trusted Advisor provides best-practice checks across cost optimization, performance, security, fault tolerance, service limits, and operational excellence."
  },
  {
    domain: "d4",
    question: "Which AWS resource provides personalized alerts and remediation guidance when AWS events might affect your account's resources?",
    options: [
      "AWS Health Dashboard (account health view)",
      "The public AWS Service Health page",
      "Amazon CloudWatch",
      "AWS Cost Explorer"
    ],
    correct: [0],
    explanation: "The AWS Health Dashboard's account view (formerly Personal Health Dashboard) gives personalized notifications about events affecting your specific resources."
  },
  {
    domain: "d4",
    question: "How can a company break down its AWS bill by project, department, or environment?",
    options: [
      "Activate cost allocation tags and use them in Cost Explorer",
      "Open a support case each month",
      "Create separate credit cards for each project",
      "Use AWS Artifact reports"
    ],
    correct: [0],
    explanation: "Cost allocation tags (user-defined and AWS-generated), once activated in the Billing console, let you categorize and track costs by any business dimension."
  },
  {
    domain: "d4",
    question: "Which pricing model applies to Compute Savings Plans?",
    options: [
      "Commit to a consistent amount of compute usage ($/hour) for a 1- or 3-year term in exchange for lower prices",
      "Pay a fixed monthly fee for unlimited compute",
      "Bid on unused capacity that can be interrupted",
      "Pay only for storage, with compute free"
    ],
    correct: [0],
    explanation: "Savings Plans offer up to 72% savings for committing to a consistent $/hour of usage over 1 or 3 years; Compute Savings Plans apply flexibly across EC2, Fargate, and Lambda."
  },
  {
    domain: "d4",
    question: "Which statement about AWS data transfer pricing is generally TRUE?",
    options: [
      "Data transferred IN to AWS from the internet is free; data transferred OUT to the internet is charged",
      "All data transfer in and out of AWS is always free",
      "Inbound data transfer is charged; outbound is free",
      "Data transfer between Availability Zones is always free"
    ],
    correct: [0],
    explanation: "Inbound transfer from the internet is generally free; outbound transfer to the internet is charged per GB, and inter-AZ/inter-Region transfer also incurs charges."
  },
  {
    domain: "d4",
    question: "Where can a company subscribe to third-party software solutions, such as pre-configured AMIs and SaaS products, with charges appearing on its AWS bill?",
    options: [
      "AWS Marketplace",
      "AWS Artifact",
      "AWS re:Post",
      "AWS Service Catalog"
    ],
    correct: [0],
    explanation: "AWS Marketplace is the curated digital catalog of third-party software and services billed through AWS. Service Catalog manages a company's own internal approved products."
  },
  {
    domain: "d4",
    question: "Which report provides the MOST detailed, line-item level data about AWS costs and usage?",
    options: [
      "AWS Cost and Usage Report (CUR)",
      "AWS Budgets summary emails",
      "The monthly PDF invoice",
      "Trusted Advisor cost checks"
    ],
    correct: [0],
    explanation: "The Cost and Usage Report is the most comprehensive and granular billing dataset, delivered to S3 for analysis with tools like Athena or QuickSight."
  },
  {
    domain: "d4",
    question: "Which AWS support resources are available for FREE to all AWS customers? (Select TWO.)",
    options: [
      "AWS documentation, whitepapers, and re:Post community",
      "24/7 customer service for account and billing questions",
      "A designated Technical Account Manager",
      "15-minute response to business-critical cases",
      "Full set of Trusted Advisor checks"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "Basic (free) support includes documentation, forums/re:Post, the Health Dashboard, core Trusted Advisor checks, and 24/7 customer service for account/billing issues. TAMs and full Trusted Advisor checks need paid plans."
  },
  {
    domain: "d4",
    question: "A company needs help designing and building a solution on AWS but lacks internal expertise. Which options can provide hands-on help? (Select TWO.)",
    options: [
      "AWS Professional Services",
      "AWS Partner Network (APN) Consulting Partners",
      "AWS Artifact",
      "The AWS Pricing Calculator",
      "The AWS Health Dashboard"
    ],
    correct: [0, 1],
    multi: true,
    explanation: "AWS Professional Services and APN Consulting Partners provide expert hands-on assistance for designing, architecting, and building on AWS."
  },
  {
    domain: "d4",
    question: "What is AWS Compute Optimizer used for?",
    options: [
      "Recommending optimal instance types and sizes based on utilization data to reduce cost and improve performance",
      "Automatically purchasing Reserved Instances",
      "Blocking overly expensive services",
      "Consolidating multiple AWS bills"
    ],
    correct: [0],
    explanation: "Compute Optimizer analyzes utilization metrics with machine learning and recommends right-sized EC2 instances, Auto Scaling groups, EBS volumes, and Lambda memory settings."
  }
];
