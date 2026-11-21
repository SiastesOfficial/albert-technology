import type { Metadata } from "next";
import Link from "next/link";
import {
  LEGAL,
  LegalPage,
  Mail,
  type LegalSection,
} from "../legal/legal";




export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that apply when you book a session or buy from this website.",
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <p>
        This website is operated by {LEGAL.owner} (“we”, “us”, “our”). You can
        reach us at <Mail />.
      </p>
    ),
  },
  {
    id: "what-we-offer",
    title: "What we offer",
    body: (
      <>
        <p>
          We offer paid one-to-one consultation sessions by live video, lasting
          60 or 120 minutes. Sessions cover topics such as:
        </p>
        <ul>
          <li>Starting and growing a business</li>
          <li>Trading, as an institution or a retail trader</li>
          <li>Balancing life and business</li>
          <li>Where to invest</li>
        </ul>
        <p>
          We may also offer courses and other digital products. Where we do,
          any extra terms shown at the time of purchase apply as well.
        </p>
      </>
    ),
  },
  {
    id: "not-advice",
    title: "Guidance, not regulated advice",
    body: (
      <>
        <p>
          Sessions provide educational guidance based on professional
          experience. They are not regulated financial, investment, legal, tax
          or accounting advice, and nothing we say is a personal recommendation
          to buy or sell any financial product.
        </p>
        <p>
          Investing and trading carry risk, including the loss of money you
          invest. Past performance does not guarantee future results. We do not
          guarantee any outcome, income or profit. The decisions you make are
          your own, and you should consult a licensed professional for advice
          specific to your situation.
        </p>
      </>
    ),
  },
  {
    id: "booking-and-payment",
    title: "Booking and payment",
    body: (
      <>
        <p>
          You book by completing the booking form, choosing a day, a start time
          and a session length, and paying. The price is shown in US dollars
          before you pay.
        </p>
        <p>
          Payments are handled by Stripe. We never see or store your full card
          details. Your booking is confirmed once payment succeeds, and we will
          email you a calendar invite and your video link.
        </p>
      </>
    ),
  },
  {
    id: "rescheduling-and-refunds",
    title: "Rescheduling and refunds",
    body: (
      <>
        <ul>
          <li>
            You can reschedule or cancel at no cost with at least 24 hours’
            notice. We will offer a new time or a full refund.
          </li>
          <li>
            With less than 24 hours’ notice, or if you do not attend, the
            session fee is not refunded unless we agree otherwise.
          </li>
          <li>
            If we need to cancel or move a session, we will offer you a new
            time or a full refund.
          </li>
          <li>
            Sessions end at the scheduled time, even if you join late.
          </li>
        </ul>
        <p>
          Refunds go back to your original payment method. Nothing in this
          section affects any statutory rights you have, including any right to
          cancel a distance contract.
        </p>
      </>
    ),
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities",
    body: (
      <>
        <p>By booking a session, you agree to:</p>
        <ul>
          <li>Be 18 or over</li>
          <li>Give accurate information in the booking form</li>
          <li>Join from a suitable place with a working connection</li>
          <li>Treat us respectfully</li>
          <li>
            Not record or share the session without our written permission
          </li>
        </ul>
        <p>We will not record a session without telling you first.</p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <p>
        What you share in the booking form and in your session is used to
        prepare for and deliver your session. We treat it as confidential and
        handle it as described in our{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    ),
  },
  {
    id: "our-content",
    title: "Our content",
    body: (
      <p>
        The website, including its text, design and materials, belongs to us or
        is used with permission. You may view it for personal use. Please do not
        copy or republish it without our permission. Materials we share with
        you in sessions are for your personal use only.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limits on our liability",
    body: (
      <>
        <p>
          To the fullest extent the law allows, we are not liable for indirect
          or consequential loss, loss of profit, or losses that result from
          decisions you make after a session. Our total liability for any claim
          relating to a session is limited to the amount you paid for it.
        </p>
        <p>
          Nothing in these terms limits liability that cannot be limited by law,
          including liability for fraud, or for death or personal injury caused
          by negligence.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of {LEGAL.governingLaw}, and its
        courts have jurisdiction, unless your local consumer law gives you the
        right to bring a claim in your own courts.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. The version in force when
        you book applies to that booking. Changes for later bookings are posted
        here with a new effective date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these terms? Email <Mail />.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms apply when you use this website or book a session, course or product through it. By booking or buying, you agree to them. Please read them before you pay."
      sections={sections}
    />
  );
}