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
| `assets/hero.jpg` | The photo at the top of the page (portrait, roughly 5:7, at least 900px wide). |
| `assets/looks/` | One vertical 9:16 cover per look (720 x 1280), the same shape as the video. |
| `assets/products/` | Optional square product photos. Products without one show a category icon. |

## Adding a new video

1. Open `data/looks.js`.
2. Copy one of the look objects and paste it at the top of the `looks` list.
3. Fill in:
   - `id`: anything unique, e.g. `look-007`. The page URL `#look-007` opens that look directly, handy for captions.
   - `title`, and optionally `date` (`YYYY-MM-DD`).
   - `image`: path to a 9:16 cover in `assets/looks/`, e.g. `"assets/looks/look-007.jpg"`.
   - `video`: full links to the TikTok, Instagram Reel and/or YouTube video. Leave out any platform she did not post on. The site embeds the video from the link automatically.
   - `products`: one line per item. `url` is the Amazon Associates link. A plain `amazon.com/dp/...` link works too because the site appends your `amazonTag`. Non-Amazon stores work as well; the button label picks up the store name.
4. Save and refresh.

The **All products** directory (grouped by category) and the filter chips build themselves from the looks. A look without a `video` still works: its card opens the photo and the product list, and the play badge appears once a link is added.

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
- The three looks in `data/looks.js` are the outfits from the outfit-swipe video. Their product links are Amazon search links as stand-ins: replace each with the real Associates link, and add the `video` links once the video is posted.
