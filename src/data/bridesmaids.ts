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
  photos: [Photo, Photo];
  memories: string;
  funnyMoment: string;
  heartfeltLetter: string;
  groupLink: string;
}

/** Replace with the real WhatsApp invite link before sending this out! */
const GROUP_LINK = "https://chat.whatsapp.com/REPLACE_ME";

export const bridesmaids: Bridesmaid[] = [
  {
    id: "amara",
    name: "Amara",
    colorTheme: {
      label: "Coral",
      body: "#f4805c",
      flap: "#ef6a42",
      seal: "#f2cf4b",
      accent: "#e8926f",
      soft: "#fde8de",
    },
    photos: [
      { caption: "You & me, through the years" },
      { caption: "Us, always" },
    ],
    heartfeltLetter:
      "Look at me, getting all married and ISH! You have been there for me over the years through thick and thin.",
    memories:
      "Themed parties, college heart breaks, music festivals, countless adventures... so many laughs, a few tears and some of my absolute favorite memories have been with you.",
    funnyMoment:
      "You've held my hair back when I was drunk, and now I'm asking you to hold my dress up while I pee!",
    groupLink: GROUP_LINK,
  },
  {
    id: "zola",
    name: "Zola",
    colorTheme: {
      label: "Dusty Rose",
      body: "#f6ab9a",
      flap: "#f19180",
      seal: "#b48fd1",
      accent: "#eb9b88",
      soft: "#fdeae5",
    },
    photos: [
      { caption: "Partners in crime since day one" },
      { caption: "That night we never talk about" },
    ],
    heartfeltLetter:
      "It's actually happening — I'm getting MARRIED. And there was never a version of this day that didn't have you standing right beside me.",
    memories:
      "Road trips with terrible playlists, sleepovers that turned into therapy sessions, dancing until our feet gave up... you've been the co-author of my best stories.",
    funnyMoment:
      "You once talked us out of trouble using nothing but confidence and a fake accent. I need that exact energy at my wedding.",
    groupLink: GROUP_LINK,
  },
  {
    id: "kezia",
    name: "Kezia",
    colorTheme: {
      label: "Mustard",
      body: "#e3c33d",
      flap: "#d8b426",
      seal: "#63a898",
      accent: "#d1b243",
      soft: "#faf2d3",
    },
    photos: [
      { caption: "Sunshine, both of us" },
      { caption: "Laughing at nothing, as usual" },
    ],
    heartfeltLetter:
      "Guess who's getting married?! Me!! And I couldn't imagine walking into this new chapter without the person who's cheered me through every single one.",
    memories:
      "Study nights that became gossip nights, birthdays, breakdowns and breakthroughs... you have witnessed every version of me and loved them all.",
    funnyMoment:
      "You laughed so hard at my expense at brunch that a stranger joined in. Bring that laugh — my wedding needs it.",
    groupLink: GROUP_LINK,
  },
  {
    id: "thandeka",
    name: "Thandeka",
    colorTheme: {
      label: "Sage",
      body: "#79ab97",
      flap: "#5f9682",
      seal: "#f28565",
      accent: "#7aa896",
      soft: "#e2efe9",
    },
    photos: [
      { caption: "Calm and chaos, together" },
      { caption: "Golden hour, golden friend" },
    ],
    heartfeltLetter:
      "I'm getting married — and before the dress, the flowers, or the cake, I knew one thing for sure: I need you there, right next to me.",
    memories:
      "You are the calm to my chaos. Every big decision, every scary moment, every celebration — somehow you were always already there.",
    funnyMoment:
      "You once planned my birthday so well I cried, then told everyone 'she always does this'. Do it again, but make it a wedding.",
    groupLink: GROUP_LINK,
  },
  {
    id: "noni",
    name: "Noni",
    colorTheme: {
      label: "Lavender",
      body: "#b085cd",
      flap: "#9c6bbe",
      seal: "#f7a58e",
      accent: "#ab8ac2",
      soft: "#f0e6f7",
    },
    photos: [
      { caption: "Trouble, times two" },
      { caption: "My favorite hype woman" },
    ],
    heartfeltLetter:
      "SURPRISE — I'm getting married! And the only thing missing from the picture in my head is you, in a beautiful dress, ugly-crying next to me.",
    memories:
      "Late-night calls, spontaneous plans, the way you show up before I even finish asking... you've made my whole life feel like a group project I actually enjoy.",
    funnyMoment:
      "You once hyped me up so hard before a date I nearly cancelled it to hang out with you instead. Honestly? Fair.",
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
    heartfeltLetter:
      "The rumors are true — I'm getting married! And I need my most elegant, most dramatic, most beloved friend standing beside me when I do.",
    memories:
      "Dressing up with nowhere to go, long dinners that closed the restaurant, pep talks that fixed my whole life... champagne friendship, always.",
    funnyMoment:
      "You once gave a toast at a dinner party for absolutely no occasion. Consider this your formal booking for the real thing.",
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
    heartfeltLetter:
      "I have news: I'm getting married!! And some moments in life are simply not allowed to happen without you — this is the biggest one yet.",
    memories:
      "Tea that turned into three-hour talks, trips we planned at 2am, the way you remember every little thing I've ever said... you make everything softer and brighter.",
    funnyMoment:
      "You cried at a phone commercial once, so I already know you're going to be a MESS at this wedding. Bring waterproof mascara.",
    groupLink: GROUP_LINK,
  },
];
