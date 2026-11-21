import type { Metadata } from "next";
import {
  LEGAL,
  LegalPage,
  Mail,
  type LegalSection,
} from "@/app/legal/legal";





export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What personal information we collect, why we collect it, and the choices you have.",
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <p>
        {LEGAL.owner} is the controller of the personal information described
        in this policy. You can reach us at <Mail />.
      </p>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <ul>
        <li>
          <strong>Booking details:</strong> your name, your email address, and,
          if you choose to share them, your age and gender.
        </li>
        <li>
          <strong>Your situation:</strong> what you write in the booking form
          about your issue, how long it has been going on, and what you have
          already tried.
        </li>
        <li>
          <strong>Scheduling:</strong> the day, time and length of the session
          you choose.
        </li>
        <li>
          <strong>Payment:</strong> Stripe processes your payment. We receive
          confirmation and basic transaction details, not your full card
          number.
        </li>
        <li>
          <strong>Messages:</strong> anything you send us directly.
        </li>
        <li>
          <strong>Technical data:</strong> basic information such as your
          device, browser and the pages you visit, collected through cookies or
          similar technologies where we use them.
        </li>
      </ul>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use it",
    body: (
      <>
        <ul>
          <li>To deliver the session you booked</li>
          <li>To send confirmations, reminders and your video link</li>
          <li>To read your answers beforehand, so we can prepare</li>
          <li>To process payments and refunds, and keep records</li>
          <li>To reply to your messages</li>
          <li>To keep the website secure and to improve it</li>
          <li>To meet our legal obligations</li>
        </ul>
        <p>
          Where data protection law such as the UK or EU GDPR applies, we rely
          on: performing our contract with you (your booking), our legitimate
          interests (running, securing and improving the site), legal
          obligations (such as accounting), and your consent where we ask for
          it. You can withdraw consent at any time. We send marketing emails
          only if you ask for them.
        </p>
      </>
    ),
  },
  {
    id: "sensitive-information",
    title: "What you choose to share",
    body: (
      <p>
        You may describe personal or financial circumstances in your booking.
        Share only what you are comfortable with. We use it only to prepare for
        and deliver your session, and never for advertising.
      </p>
    ),
  },
  {
    id: "who-we-share-with",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We share personal information only with service providers who help us
          run the service, under appropriate terms. These include providers for
          payment processing (Stripe), website hosting, email, scheduling and
          video conferencing.
        </p>
        <p>
          We may disclose information where the law requires it. We do not sell
          your personal information.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International transfers",
    body: (
      <p>
        Our providers may process information in countries other than your own,
        including the United States. Where the law requires it, we use
        safeguards such as standard contractual clauses.
      </p>
    ),
  },
  {
    id: "how-long-we-keep-it",
    title: "How long we keep it",
    body: (
      <p>
        We keep personal information only as long as we need it for the purposes
        above. Booking and payment records are kept for as long as tax and
        accounting law requires. You can ask us to delete your booking answers
        sooner, subject to those legal obligations.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to access,
          correct or delete your information, to restrict or object to how we
          use it, to receive a copy in a portable format, and to withdraw
          consent.
        </p>
        <p>
          To use any of these rights, email <Mail />. We will respond within the
          time the law requires. You can also complain to your local data
          protection authority, such as the Information Commissioner’s Office
          in the UK.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We use reasonable technical and organizational measures to protect your
        information. No system is completely secure, so we cannot guarantee
        absolute security.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Our services are for people aged 18 and over. We do not knowingly
        collect information from children. If you believe a child has given us
        information, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        We use only the cookies and similar technologies needed to run the site
        and, where we use them, to understand how it is used. You can control
        cookies in your browser settings.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. We will post the new
        version here with a new effective date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about your privacy? Email <Mail />.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what personal information we collect when you visit this site or book a session, why we collect it, and the choices you have. We collect only what we need, and we do not sell it."
      sections={sections}
    />
  );
}