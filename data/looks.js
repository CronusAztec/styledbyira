/* ============================================================
   styledbyira | site content
   This is the ONLY file you need to edit to add new videos and
   products. Save it, refresh the page, done.

   HOW TO ADD A LOOK
   1. Copy one of the objects inside `looks` below and paste it at
      the TOP of the list (newest first).
   2. Give it a unique `id`, a `title`, and the `date` you posted.
   3. `image`: put the video cover or an outfit photo in /assets/looks/
      and reference it, e.g. "assets/looks/my-look.jpg".
      Use vertical 9:16 images (720 x 1280), the same shape as the video.
   4. `video`: paste the full link to the TikTok, Instagram Reel,
      and/or YouTube video. Leave out any platform you did not post on.
   5. `products`: one entry per item she is wearing. `url` is your
      Amazon Associates link. Plain amazon.com product links are fine
      too: the site adds your `amazonTag` automatically.
      Optional per product: `price` (e.g. "$42") and `image`
      (a square photo in /assets/products/).
   `date`, `video`, `tags` and `price` are all optional.

   Categories you can use for products (add your own if you like):
   Dresses, Tops, Bottoms, Sets, Outerwear, Shoes, Bags, Accessories, Jewelry, Beauty
   ============================================================ */

window.SITE = {
  name: "styledbyira",
  headline: "Every outfit from my videos, ready to shop.",
  intro: "Affordable Amazon finds and everyday pieces, linked exactly where you saw them.",
  about: "I share affordable, wearable outfits, mostly from Amazon, on TikTok and Instagram. This page is where every piece lives so you never have to dig through comments for a link.",

  // Photo at the top of the page (portrait, roughly 5:7, at least 900px wide).
  photo: "assets/hero.jpg",

  // Your Amazon Associates tracking ID. Added to any amazon.com link that does not already have one.
  amazonTag: "styledbyira-20",

  // Social buttons. Delete a line to hide that button. Order here = order on the page.
  socials: [
    { id: "instagram", label: "Instagram", url: "https://www.instagram.com/styledbyira" },
    { id: "tiktok",    label: "TikTok",    url: "https://www.tiktok.com/@styledbyira" },
    { id: "youtube",   label: "YouTube",   url: "https://www.youtube.com/@styledbyira" },
    { id: "x",         label: "X",         url: "https://x.com/styledbyira" },
    { id: "pinterest", label: "Pinterest", url: "https://www.pinterest.com/styledbyira" },
    { id: "amazon",    label: "Amazon storefront", url: "https://www.amazon.com/shop/styledbyira" },
    { id: "email",     label: "Email",     url: "mailto:hello@styledbyira.com" }
  ],

  // Filter chips appear in this order. Only categories that have products are shown.
  categories: ["Dresses", "Tops", "Bottoms", "Sets", "Outerwear", "Shoes", "Bags", "Accessories", "Jewelry"],

  /* ---------- LOOKS (first in the list shows first) ----------
     These three are the outfits from the outfit-swipe video. The product links are
     Amazon SEARCH links as stand-ins: swap each `url` for the real Associates link,
     and add the `video` links once the video is posted. */
  looks: [
    {
      id: "black-maxi-dress",
      title: "Black maxi dress for a night out",
      image: "assets/looks/black-maxi-dress.jpg",
      // video: { tiktok: "https://www.tiktok.com/@styledbyira/video/...", instagram: "https://www.instagram.com/reel/.../" },
      tags: ["night out", "date night", "evening", "black"],
      products: [
        { name: "Ruched square-neck maxi dress", category: "Dresses", image: "assets/products/black-maxi-dress.jpg", url: "https://www.amazon.com/s?k=black+ruched+square+neck+maxi+dress" },
        { name: "Strappy ankle-strap heels", category: "Shoes", image: "assets/products/strappy-heels.jpg", url: "https://www.amazon.com/s?k=black+strappy+ankle+strap+heels" },
        { name: "Lace envelope clutch with chain", category: "Bags", image: "assets/products/lace-clutch.jpg", url: "https://www.amazon.com/s?k=black+lace+envelope+clutch+chain" },
        { name: "Chain choker necklace", category: "Jewelry", url: "https://www.amazon.com/s?k=chain+choker+necklace+women" }
      ]
    },
    {
      id: "plaid-skirt",
      title: "Plaid skirt with a fitted black top",
      image: "assets/looks/plaid-skirt.jpg",
      tags: ["fall", "preppy", "plaid", "casual"],
      products: [
        { name: "Ribbed long-sleeve fitted top", category: "Tops", url: "https://www.amazon.com/s?k=black+ribbed+long+sleeve+fitted+top+women" },
        { name: "Plaid tie-waist skirt", category: "Bottoms", url: "https://www.amazon.com/s?k=plaid+tie+waist+skirt+women" },
        { name: "Platform ankle-strap sandals", category: "Shoes", url: "https://www.amazon.com/s?k=black+platform+ankle+strap+sandals" },
        { name: "Layered pendant necklace", category: "Jewelry", url: "https://www.amazon.com/s?k=layered+pendant+necklace+gold" }
      ]
    },
    {
      id: "brown-ribbed-dress",
      title: "Brown ribbed midi dress with boots",
      image: "assets/looks/brown-ribbed-dress.jpg",
      tags: ["fall", "knit", "cozy", "brown"],
      products: [
        { name: "Ribbed knit midi dress", category: "Dresses", url: "https://www.amazon.com/s?k=brown+ribbed+knit+midi+dress+long+sleeve" },
        { name: "Chunky ankle boots", category: "Shoes", url: "https://www.amazon.com/s?k=black+chunky+ankle+boots+women" },
        { name: "Black shoulder bag", category: "Bags", url: "https://www.amazon.com/s?k=black+shoulder+bag+women" }
      ]
    }
  ]
};
