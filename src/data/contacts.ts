export const ownerPhone = "+549111144373492";

export const contacts = [
  {
    icon: "👤",
    name: "Lisandro",
    description: "Propietario del departamento. Para consultas sobre tu estadía.",
    actions: [
      {
        label: "WhatsApp",
        href: "https://wa.me/549111144373492",
        primary: true
      },
      {
        label: "Llamar",
        href: "tel:+549111144373492"
      }
    ]
  },
  {
    icon: "🛎️",
    name: "Recepción / Conserjería",
    description: "Consultas relacionadas con el edificio y servicios comunes.",
    placeholder: "Número a confirmar"
  },
  {
    icon: "🏢",
    name: "Administración",
    description: "Consultas administrativas relacionadas con el edificio.",
    placeholder: "Número a confirmar"
  }
];

export const emergencies = [
  { icon: "🚨", name: "Emergencias", number: "911" },
  { icon: "🚑", name: "Emergencias médicas", number: "107" },
  { icon: "🚒", name: "Bomberos", number: "100" },
  { icon: "🛡️", name: "Defensa Civil", number: "103" }
];
