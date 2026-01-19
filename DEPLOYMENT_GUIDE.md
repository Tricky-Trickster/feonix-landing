# Feonix Landing Page - Deployment Guide

Complete guide for deploying the Feonix landing page to an Ubuntu VPS with HTTPS/SSL.

---

## Prerequisites

- Ubuntu VPS (20.04 or later)
- Root or sudo access
- Domain name (feonix.io) with DNS pointing to your server IP
- SSH access to your server

---

## Part 1: Initial Server Setup

### 1.1 Update System
```bash
sudo apt update
sudo apt upgrade -y
```

### 1.2 Install Node.js (v20 LTS)
```bash
# Install Node.js from NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x
```

### 1.3 Install Git
```bash
sudo apt install git -y
git --version
```

### 1.4 Install Nginx
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
```

### 1.5 Configure Firewall
```bash
# Allow SSH, HTTP, and HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

## Part 2: Deploy the Application

### 2.1 Clone Repository
```bash
# Navigate to web root
cd /var/www

# Clone the repository
sudo git clone https://github.com/Tricky-Trickster/feonix-landing.git

# Set ownership
sudo chown -R $USER:$USER /var/www/feonix-landing

# Navigate into directory
cd feonix-landing
```

### 2.2 Install Dependencies
```bash
npm install
```

### 2.3 Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized static files.

---

## Part 3: Configure Nginx

### 3.1 Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/feonix-landing
```

Paste this configuration:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name feonix.io www.feonix.io;
    
    root /var/www/feonix-landing/dist;
    index index.html;
    
    # ACME challenge for Let's Encrypt
    location /.well-known/acme-challenge/ {
        root /var/www/feonix-landing/dist;
        allow all;
    }
    
    # Handle React Router (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

Save and exit (Ctrl+X, Y, Enter).

### 3.2 Enable the Site
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/feonix-landing /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# If test passes, restart Nginx
sudo systemctl restart nginx
```

### 3.3 Verify HTTP Access
```bash
# Check if Nginx is running
sudo systemctl status nginx

# Test from command line
curl -I http://feonix.io
```

Visit `http://feonix.io` in your browser - you should see the landing page.

---

## Part 4: Set Up HTTPS with Let's Encrypt

**IMPORTANT:** Before proceeding, ensure:
1. Your domain DNS A records point to your server IP
2. You can access the site via HTTP
3. No other service is using port 80 or 443

### 4.1 Verify DNS Resolution
```bash
# Check if domain resolves to your server
dig feonix.io +short
dig www.feonix.io +short

# Both should return your server's IP address
```

### 4.2 Stop Conflicting Services
```bash
# Check if anything is using port 80
sudo lsof -i :80

# If Docker is running and using port 80, stop it
docker ps
docker stop $(docker ps -q)

# Ensure Nginx is running
sudo systemctl start nginx
```

### 4.3 Install Certbot
```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 4.4 Create ACME Challenge Directory
```bash
# Create directory for Let's Encrypt challenges
sudo mkdir -p /var/www/feonix-landing/dist/.well-known/acme-challenge

# Set proper permissions
sudo chown -R www-data:www-data /var/www/feonix-landing/dist/.well-known

# Reload Nginx
sudo systemctl reload nginx
```

### 4.5 Obtain SSL Certificate
```bash
# Get certificate for both domains
sudo certbot --nginx -d feonix.io -d www.feonix.io
```

Follow the prompts:
1. Enter your email address
2. Agree to Terms of Service (Y)
3. Choose whether to share email with EFF (Y/N)
4. **Choose option 2: Redirect HTTP to HTTPS** (Recommended)

Certbot will automatically:
- Generate SSL certificates
- Update Nginx configuration
- Set up HTTP → HTTPS redirect
- Configure auto-renewal

### 4.6 Verify HTTPS
```bash
# Test HTTPS
curl -I https://feonix.io

# Check certificate
sudo certbot certificates
```

Visit `https://feonix.io` in your browser - you should see the secure padlock icon.

### 4.7 Test Auto-Renewal
```bash
# Dry run to test renewal
sudo certbot renew --dry-run

# Check renewal timer
sudo systemctl status certbot.timer
```

Certificates auto-renew every 90 days.

---

## Part 5: Final Nginx Configuration (After SSL)

After Certbot runs, your config will look like this:

```nginx
# HTTP - Redirect to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name feonix.io www.feonix.io;
    
    return 301 https://$server_name$request_uri;
}

# HTTPS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name feonix.io www.feonix.io;
    
    # SSL certificates (managed by Certbot)
    ssl_certificate /etc/letsencrypt/live/feonix.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/feonix.io/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    root /var/www/feonix-landing/dist;
    index index.html;
    
    # Handle React Router (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

---

## Part 6: Deployment Script for Updates

Create a deployment script for easy updates:

```bash
nano ~/deploy-feonix.sh
```

Add this content:

```bash
#!/bin/bash

echo "🚀 Deploying Feonix Landing Page..."

# Navigate to project directory
cd /var/www/feonix-landing

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

# Install dependencies (if package.json changed)
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🔨 Building for production..."
npm run build

# Reload Nginx
echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌐 Visit: https://feonix.io"
```

Make it executable:

```bash
chmod +x ~/deploy-feonix.sh
```

### Usage
```bash
# Run deployment script
~/deploy-feonix.sh
```

---

## Part 7: Troubleshooting

### Issue: Port 80 Already in Use
```bash
# Find what's using port 80
sudo lsof -i :80

# If it's Docker
docker stop $(docker ps -q)

# If it's Apache
sudo systemctl stop apache2
sudo systemctl disable apache2

# Restart Nginx
sudo systemctl restart nginx
```

### Issue: Certbot Fails with 404
```bash
# Ensure DNS points to your server
dig feonix.io +short

# Check Nginx is serving the site
curl -I http://feonix.io

# Verify ACME directory exists
ls -la /var/www/feonix-landing/dist/.well-known/

# Try standalone mode (stops Nginx temporarily)
sudo systemctl stop nginx
sudo certbot certonly --standalone -d feonix.io -d www.feonix.io
sudo systemctl start nginx
```

### Issue: Nginx Configuration Error
```bash
# Test configuration
sudo nginx -t

# Check error logs
sudo tail -f /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

### Issue: Site Not Updating
```bash
# Clear browser cache or use incognito mode
# Or force reload: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

# Check if build was successful
ls -la /var/www/feonix-landing/dist/

# Verify Nginx is serving from correct directory
sudo nginx -T | grep root
```

---

## Part 8: Monitoring & Maintenance

### Check Nginx Status
```bash
sudo systemctl status nginx
```

### View Nginx Logs
```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

### Check SSL Certificate Expiry
```bash
sudo certbot certificates
```

### Manual Certificate Renewal
```bash
sudo certbot renew
sudo systemctl reload nginx
```

### Restart Services
```bash
# Restart Nginx
sudo systemctl restart nginx

# Reload Nginx (no downtime)
sudo systemctl reload nginx
```

---

## Part 9: Security Best Practices

### 9.1 Keep System Updated
```bash
# Regular updates
sudo apt update && sudo apt upgrade -y
```

### 9.2 Configure Fail2Ban (Optional)
```bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 9.3 Set Up Automatic Security Updates
```bash
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

---

## Quick Reference Commands

```bash
# Deploy updates
~/deploy-feonix.sh

# Check site status
curl -I https://feonix.io

# View logs
sudo tail -f /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx

# Renew SSL
sudo certbot renew

# Check SSL expiry
sudo certbot certificates
```

---

## Summary

Your site is now:
- ✅ Deployed at `/var/www/feonix-landing`
- ✅ Accessible via `https://feonix.io` and `https://www.feonix.io`
- ✅ HTTP automatically redirects to HTTPS
- ✅ SSL certificate auto-renews every 90 days
- ✅ Optimized with gzip compression and caching
- ✅ Ready for production use

**Note:** If you have feonix.ai forwarding to feonix.io, the SSL certificate is for feonix.io. The .ai domain will forward users to the secure .io site.

**Support:** For issues, check the troubleshooting section or review logs.
