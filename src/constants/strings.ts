export interface NavItem {
  id: string;
  label: string;
}

// Menu principale con le nuove voci
export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "Chi sono" },
  { id: "projects", label: "Progetti" },
  { id: "contacts", label: "Contatti" },
  { id: "feedback", label: "Feedback" },
];

// Servizi di Elena
export const SERVICES = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Soluzioni visive creative per comunicare il tuo brand in modo efficace",
    icon: "🎨",
  },
  {
    id: "illustrations",
    title: "Illustrazioni",
    description:
      "Arte digitale personalizzata per libri, poster e contenuti digitali",
    icon: "✏️",
  },
  {
    id: "other-projects",
    title: "Altri progetti",
    description:
      "Installazioni artistiche e progetti sperimentali tra analogico e digitale",
    icon: "🚀",
  },
];

// Testimonianze per la sezione feedback
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Marco Rossi",
    role: "Direttore Artistico",
    content:
      "Elena ha trasformato la nostra identità visiva con un approccio fresco e innovativo",
    rating: 5,
  },
  {
    id: 2,
    name: "Giulia Bianchi",
    role: "Editore",
    content:
      "Le illustrazioni di Elena hanno dato vita al nostro ultimo libro in modo straordinario",
    rating: 4,
  },
];
