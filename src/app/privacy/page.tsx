import LegalPage from "@/components/ui/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Minoqtopus",
  description:
    "How Minoqtopus LLC collects, uses, stores and protects personal information submitted through minoqtopus.com.",
  path: "/privacy",
});

const CONTACT_EMAIL = "minoqtopus.agency@gmail.com";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      highlight="Policy."
      description="What we collect, why we collect it, and the choices you have."
      effective="2026-10-10"
    >
      <p>
        This policy explains how <strong>Minoqtopus LLC</strong> (&ldquo;Minoqtopus&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal information collected through{" "}
        <a href="https://minoqtopus.com">minoqtopus.com</a> and in the course of
        providing our services. Minoqtopus LLC is a limited liability company
        registered in the State of Wyoming, United States.
      </p>

      <h2 id="what-we-collect">Information we collect</h2>

      <h3>Information you give us</h3>
      <p>
        We only collect what you choose to send us through the forms on this
        site.
      </p>
      <ul>
        <li>
          <strong>Project enquiries.</strong> Your name, email address, company
          name, indicative project budget, and the details of your message.
        </li>
        <li>
          <strong>Job applications.</strong> Your name, email address, current
          or most recent employer, current and expected salary, relevant
          performance figures, the reasons you set out in support of your
          application, whether you are seeking full-time or part-time work, and
          the résumé file you upload.
        </li>
      </ul>
      <p>
        You may also contact us directly by email, in which case we hold
        whatever you choose to include in your message.
      </p>

      <h3>Information collected automatically</h3>
      <p>
        We use Vercel Analytics to understand how the site is used. It records
        aggregate measurements such as page views, referring sites, approximate
        country, device type and browser. It does not use cookies, does not
        track you across other websites, and does not build a profile of you as
        an individual.
      </p>
      <p>
        Our hosting provider also keeps standard server logs, which include IP
        addresses, for security and reliability purposes.
      </p>

      <h2 id="how-we-use-it">How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and discuss potential work.</li>
        <li>To assess job applications and contact candidates.</li>
        <li>To provide, support and improve the services you engage us for.</li>
        <li>
          To keep records we are required to keep as a registered US company,
          including for tax and accounting purposes.
        </li>
        <li>To protect the site against abuse, fraud and security incidents.</li>
      </ul>
      <p>
        We do not sell your personal information. We do not share it for
        advertising purposes, and we do not use it to make automated decisions
        that produce legal effects.
      </p>

      <h2 id="legal-bases">Legal bases for processing</h2>
      <p>
        Where the laws of the United Kingdom or the European Economic Area apply
        to you, we rely on the following bases: your consent when you submit a
        form; our legitimate interest in responding to enquiries, recruiting,
        and securing the site; the performance of a contract where we are
        working together; and compliance with legal obligations.
      </p>

      <h2 id="who-we-share-with">Who we share information with</h2>
      <p>
        We use a small number of service providers to run this site. They
        process data on our instructions only.
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> &mdash; stores form submissions and uploaded
          résumés in a database protected by row-level security. Only our
          server, authenticated with a secret key, can read or write these
          records.
        </li>
        <li>
          <strong>Vercel</strong> &mdash; hosts the site and provides the
          analytics described above.
        </li>
      </ul>
      <p>
        We may also disclose information where we are legally required to, or
        where it is necessary to establish, exercise or defend legal claims.
      </p>

      <h2 id="international">International transfers</h2>
      <p>
        Minoqtopus LLC is registered in the United States and our engineering
        team works from Pakistan. Our service providers store data in the United
        States. If you are located elsewhere, your information will be
        transferred to and processed in these countries, which may have
        different data protection laws than your own.
      </p>

      <h2 id="retention">How long we keep it</h2>
      <ul>
        <li>
          <strong>Project enquiries</strong> are kept for up to 24 months from
          our last contact, so that we can pick up conversations that resume
          later.
        </li>
        <li>
          <strong>Job applications and résumés</strong> are kept for up to 12
          months after the role is filled or withdrawn, unless you ask us to
          remove them sooner.
        </li>
        <li>
          <strong>Client records</strong> are kept for as long as we work
          together and afterwards for the period our tax and accounting
          obligations require.
        </li>
      </ul>

      <h2 id="security">Security</h2>
      <p>
        Form submissions are stored in a database with row-level security
        enabled and no public access policies, which means they can only be read
        using a server-side key that is never exposed to your browser. The site
        is served entirely over HTTPS. Administrative access is password
        protected and sessions are signed.
      </p>
      <p>
        No system is perfectly secure. We encourage you not to send sensitive
        information &mdash; such as financial account details or government
        identifiers &mdash; through the forms on this site.
      </p>

      <h2 id="your-rights">Your rights</h2>
      <p>
        Depending on where you live, you may have the right to request a copy of
        the personal information we hold about you, to have it corrected or
        deleted, to object to or restrict how we use it, to withdraw consent, and
        to receive it in a portable format. California residents have the right
        not to receive discriminatory treatment for exercising these rights.
      </p>
      <p>
        To make a request, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond
        within 30 days. We may need to verify your identity before acting on a
        request.
      </p>

      <h2 id="children">Children</h2>
      <p>
        This site is intended for businesses and working professionals. We do
        not knowingly collect information from anyone under 16. If you believe a
        child has sent us personal information, contact us and we will delete it.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        If we change this policy we will update the date at the top of this page.
        Where the change is significant, we will say so clearly rather than
        relying on you to notice.
      </p>

      <h2 id="contact">Contact us</h2>
      <p>
        For any question about this policy or about how we handle your
        information:
      </p>
      <p>
        <strong>Minoqtopus LLC</strong>
        <br />
        30 N Gould St, Ste R
        <br />
        Sheridan, WY 82801
        <br />
        United States
        <br />
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </LegalPage>
  );
}
