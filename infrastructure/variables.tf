# --- variables.tf ---
# This file defines the variables used in our Terraform code for Azure.
# You can customize these values to fit your needs.

# The Azure region to deploy resources in.
variable "location" {
  description = "The Azure region to deploy resources in."
  type        = string
  default     = "eastus"
}

# The name of the Azure Resource Group.
variable "resource_group_name" {
  description = "The name of the Azure Resource Group."
  type        = string
  default     = "saas-app-rg"
}

# The CIDR block for the Virtual Network.
variable "vnet_cidr" {
  description = "The CIDR block for the Virtual Network."
  type        = string
  default     = "10.0.0.0/16"
}

# The CIDR block for the subnet.
variable "subnet_cidr" {
  description = "The CIDR block for the subnet."
  type        = string
  default     = "10.0.1.0/24"
}

# The path to your public SSH key.
variable "ssh_public_key_path" {
  description = "Path to the public SSH key used for the VM."
  type        = string
  default     = "~/.ssh/id_rsa.pub"
}
