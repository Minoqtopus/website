export const socialLinks = [
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/hafizmuhammadfarooq",
    label: "Upwork profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hafizmuhammadfarooq/",
    label: "LinkedIn profile",
  },
  {
    name: "GitHub",
    href: "https://github.com/hafizmuhammadfarooq786",
    label: "GitHub profile",
  },
] as const;

export const socialUrls = socialLinks.map((link) => link.href);
