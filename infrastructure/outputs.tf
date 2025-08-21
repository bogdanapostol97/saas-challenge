# --- outputs.tf ---
# This file defines the output values that Terraform will display after a successful apply.

# The public IP address of the Azure VM.
output "public_ip" {
  description = "The public IP address of the Azure VM."
  value       = azurerm_public_ip.public_ip.ip_address
}
