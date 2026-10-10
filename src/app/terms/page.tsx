import LegalPage from "@/components/ui/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of Service | Minoqtopus",
  description:
    "The terms that govern use of minoqtopus.com and the software development services provided by Minoqtopus LLC.",
  path: "/terms",
});

const CONTACT_EMAIL = "minoqtopus.agency@gmail.com";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of"
      highlight="Service."
      description="The terms that apply to this website and to the work we do together."
      effective="2026-10-10"
    >
      <p>
        These terms govern your use of <a href="https://minoqtopus.com">minoqtopus.com</a>{" "}
        and, where applicable, the services provided by{" "}
        <strong>Minoqtopus LLC</strong>, a limited liability company registered
        in the State of Wyoming, United States. By using this site you agree to
        them.
      </p>

      <h2 id="services">Our services</h2>
      <p>
        We provide custom software development and IT consulting services,
        including web and mobile applications, SaaS products, API integrations
        and AI integration work.
      </p>
      <p>
        This website describes what we do. It is not an offer to contract. Work
        begins only once both parties sign a separate written agreement &mdash; a
        proposal, statement of work or services agreement &mdash; which sets out
        the scope, deliverables, timeline and price for that engagement.
      </p>

      <h2 id="precedence">Which terms apply</h2>
      <p>
        Where you have signed a separate agreement with us and it conflicts with
        anything on this page, <strong>that agreement takes precedence</strong>.
        These terms cover your use of the website and fill any gaps the
        agreement does not address.
      </p>

      <h2 id="enquiries">Enquiries and quotes</h2>
      <p>
        Submitting the contact form does not create a contract or reserve
        capacity. Any estimate, timeline or price we discuss before a signed
        agreement is indicative and may change once the scope is defined.
      </p>

      <h2 id="your-obligations">Your responsibilities</h2>
      <p>If we work together, you agree to:</p>
      <ul>
        <li>
          Provide the materials, access and decisions we need, within the
          timeframes agreed. Delays on your side move delivery dates accordingly.
        </li>
        <li>
          Confirm that anything you supply &mdash; content, data, designs, code or
          credentials &mdash; is yours to supply, and does not infringe anyone
          else&rsquo;s rights.
        </li>
        <li>Pay invoices according to the schedule in the signed agreement.</li>
      </ul>

      <h2 id="ip">Intellectual property</h2>
      <h3>Work we produce for you</h3>
      <p>
        On full payment, ownership of the deliverables created specifically for
        your project transfers to you, unless the signed agreement says
        otherwise.
      </p>
      <h3>What we keep</h3>
      <p>
        We retain ownership of our pre-existing tools, libraries, frameworks and
        general know-how, and of anything we develop independently of your
        project. Where these are embedded in a deliverable, you receive a
        perpetual, non-exclusive licence to use them as part of that deliverable.
      </p>
      <h3>Third-party components</h3>
      <p>
        Projects commonly include open-source or commercially licensed
        components. These remain subject to their own licences, which we will
        identify on request.
      </p>
      <h3>This website</h3>
      <p>
        The content, design, code and branding of this site belong to Minoqtopus
        LLC. The Minoqtopus name and logo may not be used without our written
        permission.
      </p>

      <h2 id="confidentiality">Confidentiality</h2>
      <p>
        Each party will keep the other&rsquo;s non-public information
        confidential and use it only for the purposes of the engagement. This
        does not apply to information that is already public, that the receiving
        party already held, or that must be disclosed by law.
      </p>
      <p>
        Unless you ask us not to, we may describe the general nature of our work
        for you in our portfolio. We will not disclose confidential details,
        figures or materials without your agreement.
      </p>

      <h2 id="payment">Fees and payment</h2>
      <p>
        Fees, currency, schedule and any late-payment terms are set out in the
        signed agreement. Unless stated otherwise, fees exclude applicable taxes
        and third-party costs such as hosting, domains and software licences.
      </p>
      <p>
        We may pause work on materially overdue invoices after giving you notice.
      </p>

      <h2 id="warranty">Warranties and disclaimers</h2>
      <p>
        We will perform our services with reasonable skill and care, in a manner
        consistent with professional practice in our industry.
      </p>
      <p>
        Beyond that, this website and its content are provided{" "}
        <strong>&ldquo;as is&rdquo;</strong>. We do not warrant that the site
        will be uninterrupted or error-free, that any particular business
        outcome will follow from our work, or that software will be entirely
        free of defects. Any figures, case studies or timelines shown on this
        site describe past or illustrative work and are not a promise of
        comparable results.
      </p>

      <h2 id="liability">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, neither party is liable for
        indirect, incidental, special or consequential losses, or for lost
        profits, revenue, data or business opportunity, arising out of the
        engagement.
      </p>
      <p>
        Our total aggregate liability in connection with an engagement is limited
        to the fees you paid us for that engagement in the twelve months before
        the claim arose.
      </p>
      <p>
        Nothing in these terms excludes liability that cannot lawfully be
        excluded, including for fraud, wilful misconduct, or death or personal
        injury caused by negligence.
      </p>

      <h2 id="termination">Termination</h2>
      <p>
        Either party may end an engagement in accordance with the notice
        provisions of the signed agreement. On termination you remain liable for
        work completed and costs committed up to that date, and we will hand over
        the deliverables covered by payments received.
      </p>
      <p>
        We may suspend or end access to this website at any time, for any user,
        where use is unlawful or abusive.
      </p>

      <h2 id="acceptable-use">Acceptable use of this site</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Submit false information, or another person&rsquo;s information without
          their permission.
        </li>
        <li>
          Use the forms to send unsolicited commercial messages or malicious
          content.
        </li>
        <li>
          Attempt to gain unauthorised access to the site, its administrative
          areas or its underlying systems.
        </li>
        <li>
          Scrape, overload or interfere with the normal operation of the site.
        </li>
      </ul>

      <h2 id="privacy">Privacy</h2>
      <p>
        Our <a href="/privacy">Privacy Policy</a> explains how we handle personal
        information and forms part of these terms.
      </p>

      <h2 id="governing-law">Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Wyoming, United
        States, without regard to its conflict of law rules. The courts of
        Wyoming have exclusive jurisdiction, except that either party may seek
        injunctive relief in any court of competent jurisdiction to protect its
        intellectual property or confidential information.
      </p>

      <h2 id="general">General</h2>
      <p>
        If any provision is found unenforceable, the rest remains in effect.
        Failure to enforce a provision is not a waiver of it. Neither party may
        assign the agreement without the other&rsquo;s consent, except to a
        successor of substantially all its business.
      </p>

      <h2 id="changes">Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The date at the top of this
        page shows when they last changed. Changes apply to use of the site from
        the date they are posted, and do not alter the terms of an agreement
        already signed.
      </p>

      <h2 id="contact">Contact us</h2>
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
