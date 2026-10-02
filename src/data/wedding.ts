export interface EventDetails {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  dressCode: string;
  description: string;
  mode: "day" | "night" | "sundowner";
  accent: "turmeric" | "wine" | "magenta" | "sunset";
  bgImage: string;
  emoji: string;
  displayInRsvp: boolean;
}

export interface GalleryGroup {
  label: string;
  caption: string;
  images: string[];
}

export const weddingConfig = {
  couple: {
    groom: "Akshat",
    bride: "Abhilasha",
    title: "Akshat & Abhilasha",
  },
  date: "24–25 November 2026",
  venue: {
    name: "Yaan",
    city: "Udaipur",
    state: "Rajasthan",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Yaan+Udaipur",
  },

  features: {
    coupleGallery: false, // flip to true once photos are finalized
    themeSwitcher: false,
    fontSwitcher: false,
  },

  images: {
    hero: "images/hero.webp",
    udaipurIntro: [
      "images/udaipur-1.jpeg",
      "images/udaipur-2.jpeg",
    ],
    footer: "images/footer.jpeg",
  },
  // Flat, chronological list — each card carries its own date now.
  events: [
    {
      id: "haldi",
      title: "Haldi",
      date: "2026-11-24",
      displayDate: "24 Nov 2026",
      time: "11:30 AM",
      dressCode: "Colourful",
      description:
        "Turmeric, marigolds, and morning sun — the celebration begins in the courtyard.",
      mode: "day",
      accent: "turmeric",
      bgImage: "images/events/haldi-v2.jpeg",
      emoji: "🌼",
      displayInRsvp: true,
    },
    {
      id: "sangeet",
      title: "Sangeet",
      date: "2026-11-24",
      displayDate: "24 Nov 2026",
      time: "6:30 PM",
      dressCode: "Black",
      description:
        "An evening of music and dancing as both families come together.",
      mode: "night",
      accent: "magenta",
      bgImage: "images/events/sangeet-v2.png",
      emoji: "🎶",
      displayInRsvp: true,
    },
    {
      id: "bhaat",
      title: "Bhaat / Mayra",
      date: "2026-11-25",
      displayDate: "25 Nov 2026",
      time: "9:00 AM",
      dressCode: "Bandhani / Traditional",
      description:
        "A tender, family-first morning as the maternal side arrives with blessings and gifts for the big day ahead.",
      mode: "day",
      accent: "turmeric",
      bgImage: "images/events/mayra.png",
      emoji: "🎁",
      displayInRsvp: true,
    },
    {
      id: "baraat",
      title: "Baraat",
      date: "2026-11-25",
      displayDate: "25 Nov 2026",
      time: "3:00 PM",
      dressCode: "Traditional",
      description:
        "Drums, dancing, and the groom's procession arriving in full colour.",
      mode: "day",
      accent: "wine",
      bgImage: "images/events/baraat.jpeg",
      emoji: "🥁",
      displayInRsvp: false,
    },
    {
      id: "wedding",
      title: "Wedding",
      date: "2026-11-25",
      displayDate: "25 Nov 2026",
      time: "5:00 PM",
      dressCode: "Traditional",
      description:
        "Vows exchanged as the sun sets over Udaipur — a sundowner ceremony.",
      mode: "sundowner",
      accent: "sunset",
      bgImage: "images/events/wedding.jpeg",
      emoji: "💍",
      displayInRsvp: true,
    },
  ] as EventDetails[],
  galleryGroups: [
    {
      label: "Where It Began",
      caption: "The early days",
      images: [
        "https://picsum.photos/seed/aa-begin-1/800/1000",
        "https://picsum.photos/seed/aa-begin-2/900/700",
        "https://picsum.photos/seed/aa-begin-3/800/1050",
        "https://picsum.photos/seed/aa-begin-4/700/900",
      ],
    },
    {
      label: "Just Us",
      caption: "Everyday moments",
      images: [
        "https://picsum.photos/seed/aa-us-1/900/1100",
        "https://picsum.photos/seed/aa-us-2/800/900",
        "https://picsum.photos/seed/aa-us-3/700/850",
        "https://picsum.photos/seed/aa-us-4/900/650",
        "https://picsum.photos/seed/aa-us-5/800/1000",
      ],
    },
    {
      label: "On the Road",
      caption: "Trips together",
      images: [
        "https://picsum.photos/seed/aa-road-1/800/1000",
        "https://picsum.photos/seed/aa-road-2/900/1150",
        "https://picsum.photos/seed/aa-road-3/850/650",
        "https://picsum.photos/seed/aa-road-4/750/950",
      ],
    },
  ] as GalleryGroup[],
};
