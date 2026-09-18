# styledbyira | Shop the Look

A one-page "shop the look" site for the @styledbyira TikTok and Instagram channels.
Every video Ira posts becomes a card. Tapping a card plays the video and lists each
piece she is wearing with a buy button (Amazon Associates links, or any other store).

No build step, no framework. Plain HTML, CSS and JavaScript, so it can be hosted anywhere for free.

## Files

| File | What it is |
|---|---|
| `data/looks.js` | **The only file you edit day to day.** Socials, Amazon tag, and every look + product. |
| `index.html` | Page structure. |
| `styles.css` | Design (light and dark mode follow the phone's setting). |
| `app.js` | Renders the page from the data file, handles filters, search and the video modal. |
| `assets/ira.jpg` | Her portrait for the top of the page (add this file, portrait orientation, at least 900 x 1125). |
| `assets/looks/` | Outfit photos or video screenshots, one per look. |

## Adding a new video

1. Open `data/looks.js`.
2. Copy one of the look objects and paste it at the top of the `looks` list.
3. Fill in:
   - `id`: anything unique, e.g. `look-007`. The page URL `#look-007` opens that look directly, handy for captions.
   - `title` and `date` (`YYYY-MM-DD`).
   - `image`: path to a photo in `assets/looks/`, e.g. `"assets/looks/look-007.jpg"`.
   - `video`: full links to the TikTok, Instagram Reel and/or YouTube video. Leave out any platform she did not post on. The site embeds the video from the link automatically.
   - `products`: one line per item. `url` is the Amazon Associates link. A plain `amazon.com/dp/...` link works too because the site appends your `amazonTag`. Non-Amazon stores work as well; the button label picks up the store name.
4. Save and refresh.

The **All products** section and the category filter chips build themselves from the looks.

## Socials

Edit the `socials` list in `data/looks.js`. Supported ids with built-in icons:
`instagram`, `tiktok`, `youtube`, `x`, `pinterest`, `amazon`, `snapchat`, `threads`, `facebook`, `email`, `website`.
Delete a line to hide that button.

## Preview locally

Open `index.html` directly in a browser, or from this folder run:

```bash
python -m http.server 8080
```

then visit http://localhost:8080.

## Publish for free

- **Netlify Drop**: drag this folder onto https://app.netlify.com/drop.
- **GitHub Pages**: push the folder to a repo, enable Pages on the main branch.
- **Cloudflare Pages / Vercel**: import the folder as a static site, no build command.

Point a custom domain (e.g. styledbyira.com) at the host and put that URL in the TikTok and Instagram bios.

## Deploy to Cloudflare (custom domain)

The repo includes `wrangler.jsonc` and `build.mjs`. The build copies only the public site files into `dist/` and Cloudflare serves that folder.

1. Sign in once: `npx wrangler login` (opens a browser, click Allow).
2. In `wrangler.jsonc`, add your domain. It must already be a site (zone) on the same Cloudflare account:
   `"routes": [{ "pattern": "yourdomain.com", "custom_domain": true }]`
3. Deploy: `npx wrangler deploy`. Cloudflare creates the DNS record and certificate for the domain automatically.

Run step 3 again after any content change.

## Notes

- The disclosure at the bottom of the page is required by Amazon Associates. Keep it.
- Instagram embeds require the post to be public. TikTok embeds work for public videos.
- The sample looks in `data/looks.js` use placeholder photos and made-up video ids so you can see the layout. Replace them with real ones.
