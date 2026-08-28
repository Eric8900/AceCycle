export type Award = {
  amount: string
  label: string
  title: string
  recipient: string
  meta: string
  description: string
  link: string
  image: string
  imageAlt: string
  accent: string
}

export const awards: Award[] = [
  {
    amount: '$5,000',
    label: 'Scholarship award',
    title: 'Champion Scholars Award',
    recipient: 'Co-founder Nishant Gadde',
    meta: 'Jordan High School · Katy, Texas',
    description:
      'Recognized for turning a passion for sustainability into action: identifying the scale of tennis-ball waste and helping build AceCycle to keep used balls out of landfills.',
    link: 'https://championenergyservices.com/scholarships/2025-champion-scholars-scholarship-winners',
    image: '/award-champion-scholars.png',
    imageAlt: 'Champion Scholars announcement naming Nishant Gadde as the $5,000 award recipient',
    accent: 'Champion Energy Services',
  },
  {
    amount: '$750',
    label: 'Honorable mention',
    title: 'Texas High School Ideas Challenge',
    recipient: 'Solace by AceCycle',
    meta: 'McFerrin Center for Entrepreneurship · Texas A&M University · 2025',
    description:
      "AceCycle's Solace concept earned an honorable mention in the statewide ideas challenge. The award was sponsored by Homer Gonzalez ’78.",
    link: 'https://mcferrin.tamu.edu/texas-high-school-ideas-challenge-awards-13000/',
    image: '/award-mcferrin-2025.png',
    imageAlt: "McFerrin Center's 2025 awards page listing Solace by AceCycle as a $750 honorable mention",
    accent: 'McFerrin Center for Entrepreneurship',
  },
]
