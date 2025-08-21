<h1> SaaS Escalation and Operations Engineer - Real Work Challenge </h1>

This repository contains the full set of deliverables for the Sparkrock "SaaS Escalation and Operations Engineer" challenge, with an infrastructure and pipeline designed for Microsoft Azure. The goal is to provision, deploy, and monitor a Dockerized web application using Infrastructure as Code (IaC) and an automated CI/CD pipeline.

<h2> Infrastructure Design </h2>

The infrastructure is provisioned using Terraform on Microsoft Azure. It is designed to be simple and robust, consisting of a single Azure Virtual Machine (VM) running the Dockerized application within a dedicated Virtual Network (VNet) and a Resource Group.

<img width="688" height="1024" alt="image" src="https://github.com/user-attachments/assets/ee54f6bd-2d2a-48ef-95b0-6ffbb50aa52d" />

<h2> Deployment Instructions </h2>

Prerequisites:

- An Azure account with a subscription.
- Terraform installed.
- Docker and docker-compose for local testing.
- A GitHub account.
- The Azure CLI installed and authenticated (az login).

<h2> Infrastructure Provisioning: </h2>

- Navigate to the infrastructure directory.
- Run terraform init to initialize the project and download the Azure provider
- Run terraform plan to see the resources that will be created.
- Run terraform apply to provision the Azure infrastructure. This will create the Resource Group, VNet, Subnet, VM, and NSG.

<h2> Local Testing: </h2>

- Navigate to the root directory of the project.
- Run docker-compose up to build and run the application containers locally. The frontend will be accessible at http://localhost.

<h2> CI/CD Pipeline </h2>

The CI/CD pipeline is configured using GitHub Actions and is defined in .github/workflows/deploy.yml. The workflow is triggered automatically on every push to the main branch.

The secrets created for the pipeline. 

<img width="2394" height="1540" alt="image" src="https://github.com/user-attachments/assets/47f347c9-4aa3-4a6a-bbf2-a4cf88c2961c" />

<h3> Pipeline Steps: </h3>

- Azure Login: The workflow authenticates to Azure using a Service Principal's credentials stored as a GitHub secret.
- Build and Push Images: The Dockerfiles for both the frontend and backend are used to build new images. These images are then tagged and pushed to an Azure Container Registry (ACR).
- Deploy via SSH: An SSH connection is established to the Azure VM using a private key stored as a GitHub secret.
- Remote Execution: A script is executed on the Azure VM to pull the newly pushed images from ACR, stop and remove any running containers, and then run the application using a docker-compose command.

<h2> Monitoring and Alerts </h2>

- Monitoring for the Azure VM is configured using Azure Monitor. 
- The Terraform script automatically creates a metric alert that triggers when the Percentage CPU of the VM exceeds 70% over a 5-minute period.
- You can configure this alert to send notifications to email, SMS, or other services via action groups within the Azure portal.
