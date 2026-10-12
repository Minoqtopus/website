/**
 * The company's public profiles.
 *
 * These double as the `sameAs` entries in the Organization schema, which is
 * how search engines tie the site to the business's other identities. They
 * point at the company pages, not personal profiles, so the entity being
 * described stays Minoqtopus LLC. Upwork and GitHub remain the founder's
 * profiles — those are where the company's actual work history lives.
 */
export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/minoqtopus-llc",
    label: "Minoqtopus on LinkedIn",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/minoqtopusllc",
    label: "Minoqtopus on Instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Minoqtopus/61579647636905/",
    label: "Minoqtopus on Facebook",
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/hafizmuhammadfarooq",
    label: "Minoqtopus on Upwork",
  },
  {
    name: "GitHub",
    href: "https://github.com/hafizmuhammadfarooq786",
    label: "Minoqtopus on GitHub",
  },
] as const;

export const socialUrls = socialLinks.map((link) => link.href);
