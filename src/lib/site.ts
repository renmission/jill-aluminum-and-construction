export const site = {
  name: "JILL Aluminum and Construction Services",
  short: "JILL",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jillaluminum.com",
  phoneDisplay: "0917 888 9589",
  phoneTel: "+639178889589",
  email: "joenel.macmac@gmail.com",
  messenger: "https://m.me/106090282024923",
  facebook: "https://www.facebook.com/jillglassandaluminumsupply.ph",
  reviews: "https://www.facebook.com/jillglassandaluminumsupply.ph/reviews",
  address: {
    street: "Sitio 2 Sahingan, Brgy. Balete",
    city: "Batangas City",
    region: "Batangas",
    postal: "4200",
    country: "PH",
  },
  maps: "https://www.google.com/maps/search/?api=1&query=Sahingan+Balete+Batangas+City",
};

export type Photo = { src: string; alt: string; w: number; h: number };

export const photos = {
  kitchenGreyCounter: { src: "/work/kitchen-grey-counter.jpg", alt: "Grey aluminum kitchen cabinets with a breakfast counter and pendant lights", w: 1492, h: 2048 },
  kitchenWhiteGloss: { src: "/work/kitchen-white-gloss.jpg", alt: "White gloss aluminum kitchen cabinets with a built-in microwave nook", w: 1536, h: 1536 },
  kitchenWhiteSink: { src: "/work/kitchen-white-sink.jpg", alt: "Full-wall white aluminum kitchen with open shelf over the sink", w: 1153, h: 1153 },
  kitchenGreyPullout: { src: "/work/kitchen-grey-pullout.jpg", alt: "Light grey kitchen cabinets with pull-out dish rack and tall pantry beside the fridge", w: 1200, h: 1200 },
  kitchenWhitePullout: { src: "/work/kitchen-white-pullout.jpg", alt: "White kitchen cabinets shown open with pull-out wire baskets", w: 1600, h: 1403 },
  wardrobeWhite: { src: "/work/wardrobe-white.jpg", alt: "Four-door white gloss aluminum wardrobe", w: 1192, h: 1600 },
  wardrobeWoodgrain: { src: "/work/wardrobe-woodgrain.jpg", alt: "Floor-to-ceiling wardrobe wall in woodgrain finish", w: 1536, h: 1536 },
  vanityGrey: { src: "/work/vanity-grey.jpg", alt: "Grey bedroom vanity with mirror, overhead cabinets and a tall wardrobe", w: 1536, h: 1536 },
} satisfies Record<string, Photo>;

export type Service = {
  slug: string;
  name: string;
  group: "rooms" | "openings";
  line: string;
  body: string;
  options: string[];
  photos: Photo[];
};

export const services: Service[] = [
  {
    slug: "kitchen-cabinet",
    name: "Kitchen cabinets",
    group: "rooms",
    line: "Upper and lower cabinets, counters and pull-out racks, built to your wall.",
    body: "We measure your kitchen wall by wall, then build upper and lower cabinets around your sink, range hood and appliances. Add pull-out dish racks, open shelves, a microwave nook or a breakfast counter.",
    options: ["Gloss white, grey or woodgrain panels", "Pull-out wire baskets and dish racks", "Open shelving and appliance nooks", "Breakfast counters and islands"],
    photos: [photos.kitchenGreyCounter, photos.kitchenWhiteGloss, photos.kitchenWhiteSink, photos.kitchenGreyPullout, photos.kitchenWhitePullout],
  },
  {
    slug: "pantry",
    name: "Pantry cabinets",
    group: "rooms",
    line: "Tall storage for food, cookware and cleaning supplies.",
    body: "A floor-to-ceiling pantry keeps dry goods off the counter and away from pests. We size shelves to what you actually store, from rice sacks to small spice jars.",
    options: ["Full-height or counter-height", "Adjustable shelves", "Glass or solid doors", "Matches your kitchen finish"],
    photos: [photos.kitchenGreyPullout],
  },
  {
    slug: "dresser",
    name: "Dressers and wardrobes",
    group: "rooms",
    line: "Wardrobes, vanities and dressers for the bedroom.",
    body: "Swing-door wardrobes, full-wall closets and vanity sets with mirrors and drawers. Aluminum frames stay straight in humid rooms where wood swells and sticks.",
    options: ["Two to six door wardrobes", "Vanity with mirror and drawers", "Gloss, matte or woodgrain finish", "Hanging rods and shelf layouts to order"],
    photos: [photos.wardrobeWhite, photos.vanityGrey, photos.wardrobeWoodgrain],
  },
  {
    slug: "shoe-cabinet",
    name: "Shoe cabinets",
    group: "rooms",
    line: "Slim, ventilated shoe storage for the entryway.",
    body: "A shoe cabinet sized to your doorway, with angled or flat shelves and ventilation so shoes dry out instead of smelling.",
    options: ["Slim or full-depth", "Angled or flat shelves", "Ventilated panels", "Bench-top option"],
    photos: [],
  },
  {
    slug: "window",
    name: "Windows",
    group: "openings",
    line: "Fixed, awning and casement windows in aluminum frames.",
    body: "New windows or replacements for old wooden jalousies. Aluminum frames don't rot or need repainting, and seal better against rain.",
    options: ["Awning, casement or fixed", "Clear, tinted or frosted glass", "Silver, champagne, bronze or black frames", "Grills and screens on request"],
    photos: [],
  },
  {
    slug: "sliding-window",
    name: "Sliding windows",
    group: "openings",
    line: "Two- and three-panel sliders that open wide for airflow.",
    body: "Sliding windows open without swinging into the room, so they suit narrow spaces and walls behind furniture. Choose two or three panels and add a screen panel to keep mosquitoes out.",
    options: ["Two or three panels", "Optional insect screen", "Clear, tinted or frosted glass", "Locks on every sash"],
    photos: [],
  },
  {
    slug: "sliding-door",
    name: "Sliding doors",
    group: "openings",
    line: "Glass sliding doors for patios, balconies and storefronts.",
    body: "Full-height glass doors that let light in and slide out of the way. Good for garden and balcony openings, room dividers and small shopfronts.",
    options: ["Two or four panels", "Tempered glass", "Heavy-duty rollers and locks", "Matching screen door"],
    photos: [],
  },
  {
    slug: "screen-door",
    name: "Screen doors",
    group: "openings",
    line: "Insect screens that keep air moving and mosquitoes out.",
    body: "Swing or sliding screen doors fitted to your existing doorway, so you can leave the main door open without letting insects in.",
    options: ["Swing or sliding", "Fiberglass or stainless mesh", "Self-closing hinges", "Fits existing frames"],
    photos: [],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
