export interface ColorTheme {
  /** Human name of the palette, e.g. "Coral" */
  label: string;
  /** Envelope body colour */
  body: string;
  /** Envelope flap (slightly darker) */
  flap: string;
  /** Wax seal colour */
  seal: string;
  /** Accent used for borders / name tags */
  accent: string;
  /** Very pale tint used behind photos */
  soft: string;
}

export interface Photo {
  /** Optional real photo — drop files in /public/photos and reference them here */
  src?: string;
  caption: string;
}

export interface Bridesmaid {
  id: string;
  name: string;
  colorTheme: ColorTheme;
  /** 1–4 photos; odd indexes go to the right column, even to the left */
  photos: Photo[];
  /** Large handwritten opening line. Defaults to "{name}," when omitted. */
  greeting?: string;
  /** The body of the letter, one entry per paragraph */
  paragraphs: string[];
  /** The big question, rendered bold */
  ask: string;
  /** Text on the acceptance button */
  acceptLabel: string;
  groupLink: string;
}

/** Replace with the real WhatsApp invite link before sending this out! */
const GROUP_LINK = "https://chat.whatsapp.com/REPLACE_ME";

const BRIDESMAID_ASK = "WILL YOU BE MY BRIDESMAID ?";
const BRIDESMAID_ACCEPT = "Yes! I'll Be Your Bridesmaid ❤️";

export const bridesmaids: Bridesmaid[] = [
  {
    id: "ellie",
    name: "Ellie",
    colorTheme: {
      label: "Coral",
      body: "#f4805c",
      flap: "#ef6a42",
      seal: "#f2cf4b",
      accent: "#e8926f",
      soft: "#fde8de",
    },
    photos: [
      { src: "/photos/ellie-1.jpg", caption: "Twins, in every sense" },
      { src: "/photos/ellie-2.jpg", caption: "Disco balls & silly faces" },
      { src: "/photos/ellie-3.jpg", caption: "Sunshine with my moonlight" },
      { src: "/photos/ellie-4.jpg", caption: "Us, being us. Always." },
    ],
    greeting: "Kukuruku,",
    paragraphs: [
      "I got you good, didn't I?",
      "My dearest sister, you are one of God's reminders to me that truly a friend sticks closer than a brother. You are my twin, my sister, my buddy in every sense of the word.",
      "I cherish the friendship we share - it is a balm to my soul. I cherish the love we share - it is like water on thirsty ground. I cherish you, my sister. You are light. My beautiful, beautiful moonlight.",
      "It brings me great joy to share one of the most important days of my life with you. We've seen so many important days, so many important moments, and I cannot imagine this one without you. But not just without you as a guest, or a bridesmaid but as one of my maids of honor.",
    ],
    ask: "So Ellie, would you do me the honor of being one of my maids of honor?",
    acceptLabel: "Yes! I'll Be Your Maid of Honor ❤️",
    groupLink: GROUP_LINK,
  },
  {
    id: "inimfon",
    name: "Inimfon",
    colorTheme: {
      label: "Dusty Rose",
      body: "#f6ab9a",
      flap: "#f19180",
      seal: "#b48fd1",
      accent: "#eb9b88",
      soft: "#fdeae5",
    },
    photos: [
      { src: "/photos/inimfon-1.jpg", caption: "All smiles, always" },
      { src: "/photos/inimfon-2.jpg", caption: "Team Bride, obviously" },
      { src: "/photos/inimfon-3.jpg", caption: "Super Eagles, super us" },
    ],
    greeting: "Summers Day,",
    paragraphs: [
      "My dearest sister,",
      "We've shared our lives with each other since JSS2. From that crazy form teacher (I still don't remember her name), to taking taxis together at ₦400, then ₦700 - how the times have changed - to dating brothers, to prom!",
      "Inimfon, we've watched each other grow through tough times and easy ones, but you've stayed consistent through it all.",
      "Thank you. Thank you for being a true friend. I never have to think twice about whether you love me or care for me. Thank you for being my safe space.",
      "As I enter this new phase of my life, I cannot imagine doing it alone.",
    ],
    ask: "So just like I once asked if I could join your journey and follow the same taxi home, I'd like to ask now if you'd join my own journey, as one of my maids of honor?",
    acceptLabel: "Yes! I'll Be Your Maid of Honor ❤️",
    groupLink: GROUP_LINK,
  },
  {
    id: "amimichi",
    name: "Amimichi",
    colorTheme: {
      label: "Mustard",
      body: "#e3c33d",
      flap: "#d8b426",
      seal: "#63a898",
      accent: "#d1b243",
      soft: "#faf2d3",
    },
    photos: [
      { src: "/photos/amimichi-1.jpg", caption: "Golden hour, golden girl" },
      { src: "/photos/amimichi-2.jpg", caption: "Cheers to us, always" },
    ],
    greeting: "My Mimi.",
    paragraphs: [
      "You came into my life at a point when I thought I had everything I needed…friends, sisters, all of it. You know how people say “I didn't know I was starving until I tasted you”? Well, that's my story. I didn't know the depths of sisterhood I hadn't tasted until I met you - a sister who would pray for me.",
      "Your sisterhood is invaluable to me, Mimi. Invaluable.",
      "As I enter this new season of my life, I would like nothing more than to enter it with you standing right by my side - in laughter, in swag and of course, in prayer.",
    ],
    ask: "Would you be my bridesmaid?",
    acceptLabel: BRIDESMAID_ACCEPT,
    groupLink: GROUP_LINK,
  },
  {
    id: "ayanzy",
    name: "Ayanzy",
    colorTheme: {
      label: "Sage",
      body: "#79ab97",
      flap: "#5f9682",
      seal: "#f28565",
      accent: "#7aa896",
      soft: "#e2efe9",
    },
    photos: [
      { src: "/photos/ayanzy-1.jpg", caption: "Par-tea time, always" },
      { src: "/photos/ayanzy-2.jpg", caption: "Caught in our natural state" },
      { src: "/photos/ayanzy-3.jpg", caption: "Festive, together" },
      { src: "/photos/ayanzy-4.jpg", caption: "Cut from the same cloth" },
    ],
    greeting: "My sister!",
    paragraphs: [
      "In every single sense of the word - MY sister!",
      "Gosh, Ayanfe. I cherish you. I CHERISH you. Our friendship - how we can go from laughing, to crying, to promising each other we'll pray for each other and never quite getting to it. Looking out for each other, planning how to be better, how to travel more, make more money. My sister, we are cut from the same cloth.",
      "We've shared so many moments together, but as I enter this new season of my life, I cannot imagine entering it without you -",
    ],
    ask: "So would you do me the honor of walking beside me, standing with me, as my bridesmaid?",
    acceptLabel: BRIDESMAID_ACCEPT,
    groupLink: GROUP_LINK,
  },
  {
    id: "zotam",
    name: "Zotam",
    colorTheme: {
      label: "Lavender",
      body: "#b085cd",
      flap: "#9c6bbe",
      seal: "#f7a58e",
      accent: "#ab8ac2",
      soft: "#f0e6f7",
    },
    photos: [
      { src: "/photos/zotam-1.jpg", caption: "A whole work of art" },
      { src: "/photos/zotam-2.jpg", caption: "Standing tall, always" },
    ],
    greeting: "My Chi.",
    paragraphs: [
      "I bless the Lord time and again for the friendship we share. Your friendship is like honey to my soul — a bolster for me, a friendship that says I'm holding tight and I won't let you go. Thank you for being safety for me, and for finding me as safety for yourself.",
      "We've laughed, cried, and insisted on God's word together. You, my sister, are a TRUE friend.",
    ],
    ask: "As I enter this new season, would you do me the honor of entering it with me, as my bridesmaid?",
    acceptLabel: BRIDESMAID_ACCEPT,
    groupLink: GROUP_LINK,
  },
  {
    id: "lebo",
    name: "Lebo",
    colorTheme: {
      label: "Champagne",
      body: "#f5cf9a",
      flap: "#efbf7c",
      seal: "#63a898",
      accent: "#e5c08a",
      soft: "#fcf1df",
    },
    photos: [
      { caption: "Classy, mostly" },
      { caption: "Proof we clean up nicely" },
    ],
    paragraphs: [
      "The rumors are true — I'm getting married! And I need my most elegant, most dramatic, most beloved friend standing beside me when I do.",
      "Dressing up with nowhere to go, long dinners that closed the restaurant, pep talks that fixed my whole life... champagne friendship, always.",
      "You once gave a toast at a dinner party for absolutely no occasion. Consider this your formal booking for the real thing.",
    ],
    ask: BRIDESMAID_ASK,
    acceptLabel: BRIDESMAID_ACCEPT,
    groupLink: GROUP_LINK,
  },
  {
    id: "priya",
    name: "Priya",
    colorTheme: {
      label: "Seafoam Peach",
      body: "#f8d0ac",
      flap: "#f4bf8d",
      seal: "#b48fd1",
      accent: "#edc59d",
      soft: "#fdf0e2",
    },
    photos: [
      { caption: "Softest friend, strongest heart" },
      { caption: "Every adventure, better with you" },
    ],
    paragraphs: [
      "I have news: I'm getting married!! And some moments in life are simply not allowed to happen without you — this is the biggest one yet.",
      "Tea that turned into three-hour talks, trips we planned at 2am, the way you remember every little thing I've ever said... you make everything softer and brighter.",
      "You cried at a phone commercial once, so I already know you're going to be a MESS at this wedding. Bring waterproof mascara.",
    ],
    ask: BRIDESMAID_ASK,
    acceptLabel: BRIDESMAID_ACCEPT,
    groupLink: GROUP_LINK,
  },
];
