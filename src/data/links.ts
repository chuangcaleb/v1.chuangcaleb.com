interface Link {
  label: string;
  ariaLabel?: string;
  href: string;
  icon?: string;
}

const LINKS = {
  LINKEDIN: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chuangcaleb/",
    ariaLabel: "LinkedIn profile of Chuang Caleb",
    icon: "mdi:linkedin",
  },
  GITHUB: {
    label: "GitHub",
    href: "https://github.com/chuangcaleb",
    ariaLabel: "GitHub profile of Chuang Caleb",
    icon: "mdi:github",
  },
  RESUME: {
    label: "CV/Résumé",
    href: "https://docs.google.com/document/d/1qohsYe0w-Mq5yqIdNaHPuOHvs2lYvnGySULgR2Baqwk/edit?usp=sharing",
    ariaLabel: "CV/Résumé of Chuang Caleb",
    icon: "mdi:card-account-details-star",
  },
  EMAIL: {
    label: "Email",
    href: "balechuang@gmail.com",
    ariaLabel: "Email address of Chuang Caleb",
    icon: "mdi:email-outline",
  },
} as const satisfies { [s: string]: Link };

export default LINKS;
