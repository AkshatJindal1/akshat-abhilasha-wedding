export interface EventDetails {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  dressCode: string;
  description: string;
  mode: 'day' | 'night' | 'sundowner';
  accent: 'turmeric' | 'wine' | 'magenta' | 'sunset';
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
    title: "Akshat & Abhilasha"
  },
  date: "24–25 November 2026",
  venue: {
    name: "Yaan",
    city: "Udaipur",
    state: "Rajasthan",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Yaan+Udaipur"
  },

  features: {
    coupleGallery: false, // flip to true once photos are finalized
    themeSwitcher: false,
    fontSwitcher: false
  },

  images: {
    // hero: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=85&w=1920",
    hero: "images/hero.webp",
    udaipurIntro: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1000"
    ],
    footer: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=85&w=1920"
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
      description: "Turmeric, marigolds, and morning sun — the celebration begins in the courtyard.",
      mode: "day",
      accent: "turmeric",
      // bgImage: "https://images.unsplash.com/photo-1771992224413-f171d19425cf?auto=format&fit=crop&q=85&w=1400",
      bgImage: "images/events/haldi-v2.jpeg",
      emoji: "🌼",
      displayInRsvp: true
    },
    {
      id: "sangeet",
      title: "Sangeet",
      date: "2026-11-24",
      displayDate: "24 Nov 2026",
      time: "6:30 PM",
      dressCode: "Black",
      description: "An evening of music and dancing as both families come together.",
      mode: "night",
      accent: "magenta",
      // bgImage: "https://images.unsplash.com/photo-1717011969223-0217a302ec6f?auto=format&fit=crop&q=85&w=1400",
      bgImage: "images/events/sangeet-v2.png",
      emoji: "🎶",
      displayInRsvp: true
    },
    {
      id: "baraat",
      title: "Baraat",
      date: "2026-11-25",
      displayDate: "25 Nov 2026",
      time: "3:00 PM",
      dressCode: "Traditional",
      description: "Drums, dancing, and the groom's procession arriving in full colour.",
      mode: "day",
      accent: "wine",
      // bgImage: "https://images.unsplash.com/photo-1774437562471-4553f1107410?auto=format&fit=crop&q=85&w=1400",
      bgImage: "images/events/baraat.jpeg",
      emoji: "🥁",
      displayInRsvp: false
    },
    {
      id: "wedding",
      title: "Wedding",
      date: "2026-11-25",
      displayDate: "25 Nov 2026",
      time: "5:00 PM",
      dressCode: "Traditional",
      description: "Vows exchanged as the sun sets over Udaipur — a sundowner ceremony.",
      mode: "sundowner",
      accent: "sunset",
      // bgImage: "https://images.unsplash.com/photo-1771929836785-065bb7635053?auto=format&fit=crop&q=85&w=1400",
      bgImage: "images/events/wedding.jpeg",
      emoji: "💍",
      displayInRsvp: true
    }
  ] as EventDetails[],
  galleryGroups: [
    {
      label: "Where It Began",
      caption: "The early days",
      images: [
        "https://picsum.photos/seed/aa-begin-1/800/1000",
        "https://picsum.photos/seed/aa-begin-2/900/700",
        "https://picsum.photos/seed/aa-begin-3/800/1050",
        "https://picsum.photos/seed/aa-begin-4/700/900"
      ]
    },
    {
      label: "Just Us",
      caption: "Everyday moments",
      images: [
        "https://picsum.photos/seed/aa-us-1/900/1100",
        "https://picsum.photos/seed/aa-us-2/800/900",
        "https://picsum.photos/seed/aa-us-3/700/850",
        "https://picsum.photos/seed/aa-us-4/900/650",
        "https://picsum.photos/seed/aa-us-5/800/1000"
      ]
    },
    {
      label: "On the Road",
      caption: "Trips together",
      images: [
        "https://picsum.photos/seed/aa-road-1/800/1000",
        "https://picsum.photos/seed/aa-road-2/900/1150",
        "https://picsum.photos/seed/aa-road-3/850/650",
        "https://picsum.photos/seed/aa-road-4/750/950"
      ]
    }
  ] as GalleryGroup[]
};
