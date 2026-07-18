# LB Solar Website V3 — Final Replacement Package

This is a clean, multi-page Next.js replacement project designed for Vercel.

## Included
- Home
- About
- Services
- Projects
- LB Solar AI (Coming Soon)
- Engineering Support Services (`/technical-studies`)
- Career
- Enquiry
- Contact
- Responsive header/mobile menu
- Automatic blurred engineering hero slider
- Blurred project previews for client confidentiality
- SEO metadata
- No testimonials and no client-logo/details section

## Important asset note
A real founder portrait was not available in the supplied workspace. The site therefore uses a professional `USR` placeholder.

To add the founder image:
1. Put the photo at `public/assets/founder/upendra-singh-rathore.jpg`.
2. Replace the `founderPlaceholder` block in `app/about/page.tsx` with a Next/Image component.

## Replace existing V2
1. Back up your existing `lb-solar-next` folder.
2. Copy all files from this V3 folder into `C:\Users\UPENDRA\OneDrive\Desktop\lb-solar-next` and replace existing files.
3. Keep any real public-safe assets you want under `public/assets/`.
4. Run:

```powershell
npm install
npm run build
npm run dev
```

5. Review `http://localhost:3000`.
6. Publish:

```powershell
git add .
git commit -m "Publish LB Solar Website V3"
git push
```

Vercel will redeploy automatically.

## Form status
The enquiry form validates locally and shows a confirmation message, but it does not send email yet. Connect Web3Forms/FormSubmit/CRM before relying on production submissions.
