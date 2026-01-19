# Feonix Landing Page

Modern, responsive landing page for Feonix - showcasing Feonix-Insight and RespondIQ products.

## Features

- 🎨 Dark theme with blue/purple gradient branding
- 📱 Fully responsive design
- ⚡ Built with React + TypeScript + Vite
- 🎯 Tailwind CSS for styling
- 🧭 React Router for navigation
- 📧 Contact form with email integration

## Pages

- **Home** - Hero section, product overview, features, CTA
- **Products** - Detailed information about Feonix-Insight and RespondIQ
- **About** - Company mission, vision, values, and technology
- **Contact** - Contact form and information

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Ubuntu VPS with Nginx

1. Build the project:
```bash
npm run build
```

2. Copy the `dist` folder to your server:
```bash
scp -r dist/* user@your-server:/var/www/feonix
```

3. Configure Nginx:
```nginx
server {
    listen 80;
    server_name feonix.ai www.feonix.ai;
    root /var/www/feonix;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. Enable SSL with Let's Encrypt:
```bash
sudo certbot --nginx -d feonix.ai -d www.feonix.ai
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Logo
The logo is defined in `src/components/FeonixLogo.tsx` as an SVG component.

### Content
Update the placeholder content in:
- `src/pages/Home.tsx`
- `src/pages/Products.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`

## Contact

For inquiries: info@feonix.ai
