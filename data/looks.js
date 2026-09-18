/* ============================================================
   styledbyira | site content
   This is the ONLY file you need to edit to add new videos and
   products. Save it, refresh the page, done.

   HOW TO ADD A LOOK
   1. Copy one of the objects inside `looks` below and paste it at
      the TOP of the list (newest first).
   2. Give it a unique `id`, a `title`, and the `date` you posted.
   3. `image`: put a photo or screenshot of the outfit in
      /assets/looks/ and reference it, e.g. "assets/looks/my-look.jpg".
      Vertical (4:5 or 9:16) photos look best.
   4. `video`: paste the full link to the TikTok, Instagram Reel,
      and/or YouTube video. Leave out any platform you did not post on.
   5. `products`: one entry per item she is wearing. `url` is your
      Amazon Associates link. Plain amazon.com product links are fine
      too: the site adds your `amazonTag` automatically.

   Categories you can use for products (add your own if you like):
   Dresses, Tops, Bottoms, Sets, Outerwear, Shoes, Bags, Accessories, Jewelry, Beauty
   ============================================================ */

window.SITE = {
  name: "styledbyira",
  headline: "Every outfit from my videos, ready to shop.",
  intro: "Affordable Amazon finds and everyday pieces, linked exactly where you saw them.",
  about: "I share affordable, wearable outfits, mostly from Amazon, on TikTok and Instagram. This page is where every piece lives so you never have to dig through comments for a link.",

  // Put a photo of Ira at /assets/ira.jpg (portrait, at least 900 x 1125). Until then a placeholder shows.
  photo: "assets/ira.jpg",

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

  /* ---------- LOOKS (newest first) ----------
     The looks below are EXAMPLES so you can see how the page works.
     Replace them with your real videos and links. */
  looks: [
    {
      id: "look-006",
      title: "Linen co-ord for brunch",
      date: "2026-09-12",
      image: "https://picsum.photos/seed/styledbyira-look-6/800/1000",
      video: {
        tiktok: "https://www.tiktok.com/@styledbyira/video/7350000000000000006",
        instagram: "https://www.instagram.com/reel/C0000000006/"
      },
      tags: ["brunch", "summer", "neutral"],
      products: [
        { name: "Linen button-up shirt", category: "Tops", price: "$34", url: "https://www.amazon.com/s?k=linen+button+up+shirt+women" },
        { name: "Wide-leg linen trousers", category: "Bottoms", price: "$39", url: "https://www.amazon.com/s?k=wide+leg+linen+pants+women" },
        { name: "Woven leather slides", category: "Shoes", price: "$45", url: "https://www.amazon.com/s?k=woven+leather+slide+sandals+women" },
        { name: "Raffia tote bag", category: "Bags", price: "$52", url: "https://www.amazon.com/s?k=raffia+tote+bag" }
      ]
    },
    {
      id: "look-005",
      title: "Little black slip dress, three ways",
      date: "2026-09-08",
      image: "https://picsum.photos/seed/styledbyira-look-5/800/1000",
      video: {
        tiktok: "https://www.tiktok.com/@styledbyira/video/7350000000000000005",
        youtube: "https://www.youtube.com/shorts/dQw4w9WgXcQ"
      },
      tags: ["night out", "date night", "capsule"],
      products: [
        { name: "Satin midi slip dress", category: "Dresses", price: "$42", url: "https://www.amazon.com/s?k=satin+midi+slip+dress" },
        { name: "Cropped leather jacket", category: "Outerwear", price: "$79", url: "https://www.amazon.com/s?k=cropped+faux+leather+jacket+women" },
        { name: "Strappy block heels", category: "Shoes", price: "$48", url: "https://www.amazon.com/s?k=strappy+block+heel+sandals" },
        { name: "Gold hoop earrings", category: "Jewelry", price: "$18", url: "https://www.amazon.com/s?k=gold+hoop+earrings+chunky" }
      ]
    },
    {
      id: "look-004",
      title: "Airport outfit that still looks put together",
      date: "2026-09-02",
      image: "https://picsum.photos/seed/styledbyira-look-4/800/1000",
      video: {
        instagram: "https://www.instagram.com/reel/C0000000004/"
      },
      tags: ["travel", "comfy", "athleisure"],
      products: [
        { name: "Ribbed matching lounge set", category: "Sets", price: "$36", url: "https://www.amazon.com/s?k=ribbed+two+piece+lounge+set+women" },
        { name: "Oversized trench coat", category: "Outerwear", price: "$68", url: "https://www.amazon.com/s?k=oversized+trench+coat+women" },
        { name: "Chunky white sneakers", category: "Shoes", price: "$59", url: "https://www.amazon.com/s?k=chunky+white+sneakers+women" },
        { name: "Belt bag", category: "Bags", price: "$24", url: "https://www.amazon.com/s?k=belt+bag+women" },
        { name: "Oversized sunglasses", category: "Accessories", price: "$16", url: "https://www.amazon.com/s?k=oversized+sunglasses+women" }
      ]
    },
    {
      id: "look-003",
      title: "Office to dinner in one blazer",
      date: "2026-08-27",
      image: "https://picsum.photos/seed/styledbyira-look-3/800/1000",
      video: {
        tiktok: "https://www.tiktok.com/@styledbyira/video/7350000000000000003",
        instagram: "https://www.instagram.com/reel/C0000000003/"
      },
      tags: ["workwear", "office", "tailored"],
      products: [
        { name: "Oversized structured blazer", category: "Outerwear", price: "$56", url: "https://www.amazon.com/s?k=oversized+blazer+women" },
        { name: "Bodysuit with square neck", category: "Tops", price: "$22", url: "https://www.amazon.com/s?k=square+neck+bodysuit" },
        { name: "High-waist tailored trousers", category: "Bottoms", price: "$41", url: "https://www.amazon.com/s?k=high+waisted+tailored+trousers+women" },
        { name: "Pointed-toe slingbacks", category: "Shoes", price: "$44", url: "https://www.amazon.com/s?k=pointed+toe+slingback+flats" }
      ]
    },
    {
      id: "look-002",
      title: "Denim on denim, but make it soft",
      date: "2026-08-20",
      image: "https://picsum.photos/seed/styledbyira-look-2/800/1000",
      video: {
        tiktok: "https://www.tiktok.com/@styledbyira/video/7350000000000000002"
      },
      tags: ["denim", "casual", "weekend"],
      products: [
        { name: "Light-wash denim jacket", category: "Outerwear", price: "$49", url: "https://www.amazon.com/s?k=light+wash+denim+jacket+women" },
        { name: "White ribbed tank", category: "Tops", price: "$15", url: "https://www.amazon.com/s?k=white+ribbed+tank+top" },
        { name: "Straight-leg jeans", category: "Bottoms", price: "$38", url: "https://www.amazon.com/s?k=straight+leg+jeans+women+high+rise" },
        { name: "Layered gold necklace", category: "Jewelry", price: "$14", url: "https://www.amazon.com/s?k=layered+gold+necklace" }
      ]
    },
    {
      id: "look-001",
      title: "Floral maxi for a summer wedding",
      date: "2026-08-14",
      image: "https://picsum.photos/seed/styledbyira-look-1/800/1000",
      video: {
        tiktok: "https://www.tiktok.com/@styledbyira/video/7350000000000000001",
        instagram: "https://www.instagram.com/reel/C0000000001/"
      },
      tags: ["wedding guest", "summer", "floral"],
      products: [
        { name: "Floral maxi dress with tie straps", category: "Dresses", price: "$46", url: "https://www.amazon.com/s?k=floral+maxi+dress+tie+straps" },
        { name: "Clear block heels", category: "Shoes", price: "$39", url: "https://www.amazon.com/s?k=clear+block+heel+sandals" },
        { name: "Pearl clutch", category: "Bags", price: "$28", url: "https://www.amazon.com/s?k=pearl+clutch+bag" },
        { name: "Pearl drop earrings", category: "Jewelry", price: "$12", url: "https://www.amazon.com/s?k=pearl+drop+earrings" }
      ]
    }
  ]
};
