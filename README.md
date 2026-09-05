# Zelela Trading PLC Website

Next.js + TypeScript consulting website with responsive design, consultant carousel, service pages and a real SMTP contact form.

## Install
npm install
cp .env.example .env.local
npm run dev

## Email
Configure SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD, MAIL_FROM and MAIL_TO. For Gmail use an App Password, not the normal account password.

## Production
npm run build
npm start

Put Nginx/HTTPS in front of the Node process on a Linux server. Never commit `.env.local`.

## Content
Consultants and services are maintained in `data/site.ts`. Replace the supplied cropped images in `public/images/consultants/` with higher-resolution originals when available.
