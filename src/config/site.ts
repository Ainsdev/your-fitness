export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "YourFitness",
  description: "Encuentra tu entrenador personal y logra tus objetivos.",
  mainNav: [
    {
      title: "Tu Tienda",
      href: "/features/store",
      description:
        "Usa el nombre de tu tienda, antes que alguien mas lo haga.",
    },{
      title: "Premium",
      href: "/features/premium",
      description:
        "Vende distinto y mas. Conoce las ventajas de ser premium.",
    },
    {
      title: "Como funciona",
      href: "/features/how",
      description:
        "Conoce como vender en YourMarket.",
    },
    {
      title: "Precios",
      href: "/features/pricing",
      description:
        "Es gratis, pero si quieres mas, tenemos planes para ti.",
    },
    {
      title: "Red de clientes",
      href: "/features/clients",
      description: "Conoce a tus clientes y vende mas.",
    },
    {
      title: "Seguridad",
      href: "/features/security",
      description:
        "Dale seguridad a tus clientes. Evita fraudes y estafas.",
    },
  ],
  links: {
    signup: "/signup",
  },
}
