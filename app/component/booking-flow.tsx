"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import {
  INCLUDED,
  LENGTHS,
  RATE_PER_HOUR,
  TIME_SLOTS,
  formatPrice,
  priceFor,
  type Minutes,
  type Session,
} from "../session/sessionsData";

const STEP_COUNT = 4;
const GENDERS = ["Male", "Female", "Prefer not to say"] as const;

// Dark on mobile, light from md up. Every colour lives in these constants.
const MUTED = "text-white/60 md:text-black/60";
const SOFT = "text-white/80 md:text-black/80";
const CARD = "rounded-3xl border border-[#4D4C4C] md:border-black/20";
const FIELD =
  "mt-2 block w-full border-b border-white/30 bg-transparent py-3 text-lg text-white placeholder:text-white/30 focus:border-white focus:outline-none md:border-black/30 md:text-black md:placeholder:text-black/30 md:focus:border-black";
const FOCUS_RING =
  "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white md:peer-focus-visible:outline-black";

type Booking = {
  name: string;
  age: string;
  gender: string;
  email: string;
  issue: string;
  context: string;
  tried: string;
  date: string;
  time: string;
  minutes: Minutes;
};

type Update = <K extends keyof Booking>(key: K, value: Booking[K]) => void;
type StepProps = { booking: Booking; update: Update };

const emptyBooking: Booking = {
  name: "",
  age: "",
  gender: "",
  email: "",
  issue: "",
  context: "",
  tried: "",
  date: "",
  time: "",
  minutes: 60,
};

const canContinue = (step: number, booking: Booking) => {
  switch (step) {
    case 0:
      return (
        booking.name.trim().length > 1 &&
        /^\S+@\S+\.\S+$/.test(booking.email.trim())
      );
    case 1:
      return booking.issue.trim().length >= 10 && booking.context !== "";
    case 2:
      return booking.date !== "" && booking.time !== "";
    default:
      return true;
  }
};

const stepCopy = (step: number, session: Session) => {
  switch (step) {
    case 0:
      return {
        heading: "One live session, spent on the real issue.",
        intro: [
          "Your consultation is one live video session with Albert, 60 or 120 minutes, whichever you pick on the last step. Everything you share here is read before we start, so the session opens on the real issue instead of the background.",
          "Thank you, and I look forward to helping you move forward.",
        ],
      };
    case 1:
      return {
        heading: session.situation.heading,
        intro: [session.situation.intro, "Just be honest."],
      };
    case 2:
      return {
        heading: "Choose a time that suits you.",
        intro: [
          "Pick a day and a start time. Once payment is confirmed, you'll receive a calendar invite and your video link by email.",
        ],
      };
    default:
      return {
        heading: "Choose your session length.",
        intro: [
          "Sixty minutes is enough for one clear issue. Take two hours if you want to go deeper and leave with a plan for each part.",
        ],
      };
  }
};

export function BookingFlow({ session }: { session: Session }) {
  const [step, setStep] = useState(0);
  const [booking, setBooking] = useState(emptyBooking);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(step);

  useEffect(() => {
    if (previousStep.current === step) return;
    previousStep.current = step;
    window.scrollTo({ top: 0 });
    headingRef.current?.focus({ preventScroll: true });
  }, [step]);

  const update: Update = (key, value) =>
    setBooking((current) => ({ ...current, [key]: value }));

  const copy = stepCopy(step, session);
  const isLast = step === STEP_COUNT - 1;
  const ready = canContinue(step, booking);

  const pay = async () => {
    setStatus("loading");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session: session.slug, ...booking }),
      });
      if (!response.ok) throw new Error("Checkout failed");
      const { url } = (await response.json()) as { url: string };
      window.location.assign(url);
    } catch {
      setStatus("error");
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!ready || status === "loading") return;
    if (isLast) void pay();
    else setStep(step + 1);
  };

  return (
    <main className="relative md:mt-10 min-h-dvh bg-black text-white md:bg-white md:text-black ">
      <div className="mx-auto flex min-h-dvh max-w-5xl flex-col">
        <header className="px-6 pt-8 lg:pt-12">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold md:text-2xl">
                Set up your consultation call
              </h1>
              <p className={`mt-1 text-sm ${MUTED}`}>
                Step {step + 1} of {STEP_COUNT}
              </p>
            </div>
            <Link
              href="/#session"
              aria-label="Close booking"
              className="text-white/80 transition hover:text-white md:text-black/80 md:hover:text-black"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9.5" />
                <path d="M9 9l6 6M15 9l-6 6" strokeLinecap="round" />
              </svg>
            </Link>
          </div>
          <div
            role="progressbar"
            aria-label="Booking progress"
            aria-valuemin={1}
            aria-valuemax={STEP_COUNT}
            aria-valuenow={step + 1}
            className="mt-5 flex gap-1"
          >
            {Array.from({ length: STEP_COUNT }, (_, index) => (
              <span
                key={index}
                className={`h-0.5 flex-1 transition-colors ${
                  index <= step
                    ? "bg-white md:bg-black"
                    : "bg-white/20 md:bg-black/15"
                }`}
              />
            ))}
          </div>
        </header>

        <form
          onSubmit={onSubmit}
          className="flex flex-1 flex-col lg:grid lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16 lg:px-6"
        >
          <div className="px-6 pt-8 lg:sticky lg:top-8 lg:self-start lg:p-0 lg:pt-10">
            <SessionSummary session={session} />
          </div>

          <div className="flex flex-1 flex-col lg:pt-10">
            <div className="flex-1 px-6 pb-10 pt-10 lg:p-0">
              <h2
                ref={headingRef}
                tabIndex={-1}
                className="text-balance text-3xl font-bold outline-none md:text-4xl"
              >
                {copy.heading}
              </h2>
              <div className={`mt-5 max-w-prose space-y-4 text-lg ${SOFT}`}>
                {copy.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 max-w-xl space-y-8">
                {step === 0 && <StepAboutYou booking={booking} update={update} />}
                {step === 1 && (
                  <StepSituation
                    booking={booking}
                    update={update}
                    session={session}
                  />
                )}
                {step === 2 && <StepTime booking={booking} update={update} />}
                {step === 3 && <StepLength booking={booking} update={update} />}
              </div>
            </div>

            <footer className="sticky bottom-0 border-t border-white/10 bg-[#1e1e1e] px-6 py-8 md:border-black/10 md:bg-neutral-100 lg:bottom-6 lg:mb-8 lg:rounded-3xl lg:border">
              <div className="mx-auto flex max-w-md flex-col gap-3 lg:max-w-none">
                <div className="flex gap-3">
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="rounded-full border border-white/30 px-6 py-4 font-semibold transition hover:bg-white/10 md:border-black/30 md:hover:bg-black/5"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={!ready || status === "loading"}
                    className={`flex-1 rounded-full border py-1.5 text-balance md:py-4 font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${
                      isLast
                        ? "border-white bg-white text-black enabled:hover:bg-white/85 md:border-black md:bg-black md:text-white md:enabled:hover:bg-black/85"
                        : "border-white/60 enabled:hover:bg-white enabled:hover:text-black md:border-black/60 md:enabled:hover:bg-black md:enabled:hover:text-white"
                    }`}
                  >
                    {isLast
                      ? status === "loading"
                        ? "Redirecting…"
                        : `Continue to payment  ${formatPrice(priceFor(booking.minutes))}`
                      : "Continue"}
                  </button>
                </div>
                <p className={`text-center text-xs ${MUTED}`}>
                  {"You'll be taken to secure payment, handled by Stripe."}
                </p>
                {status === "error" && (
                  <p
                    role="alert"
                    className="text-center text-sm text-red-400 md:text-red-600"
                  >
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </footer>
          </div>
        </form>
      </div>
    </main>
  );
}

function SessionSummary({ session }: { session: Session }) {
  return (
    <aside
      aria-label="Session summary"
      className={`${CARD} relative overflow-hidden p-6`}
    >
      <p className={`text-sm ${MUTED}`}>Consultation call</p>
      <p className="mt-1 text-xl font-semibold">{session.title}</p>
      <p className="mt-1 text-sm text-white/70 md:text-black/70">
        {`From ${formatPrice(RATE_PER_HOUR)} · 60 or 120 minutes`}
      </p>
      <p className={`mt-3 text-sm ${MUTED}`}>{session.audience}</p>

      <div className="my-5 border-t border-white/10 md:border-black/10" />

      <p className="font-semibold">Includes</p>
      <ul className="mt-3 space-y-3 pr-10">
        {INCLUDED.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <Image
              src="/check-w.svg"
              width={16}
              height={16}
              alt=""
              className="mt-0.5 shrink-0 md:hidden"
            />
            <Image
              src="/check.svg"
              width={16}
              height={16}
              alt=""
              className="mt-0.5 hidden shrink-0 md:block"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {session.note && (
        <p className="mt-5 text-xs text-white/50 md:text-black/50">
          {session.note}
        </p>
      )}

      <Image
        src="/clover-leaf.svg"
        width={56}
        height={56}
        alt=""
        className="pointer-events-none absolute bottom-3 right-3 opacity-80 md:invert"
      />
    </aside>
  );
}

function StepAboutYou({ booking, update }: StepProps) {
  return (
    <>
      <Field label="Your name">
        <input
          className={FIELD}
          value={booking.name}
          onChange={(event) => update("name", event.target.value)}
          placeholder="e.g. John Doe"
          autoComplete="name"
          required
        />
      </Field>
      <Field label="Age">
        <input
          className={FIELD}
          type="number"
          inputMode="numeric"
          min={0}
          value={booking.age}
          onChange={(event) => update("age", event.target.value)}
          placeholder="e.g. 32"
        />
      </Field>
      <ChipGroup
        legend="Gender"
        name="gender"
        options={GENDERS}
        value={booking.gender}
        onChange={(value) => update("gender", value)}
      />
      <Field label="Email address">
        <input
          className={FIELD}
          type="email"
          value={booking.email}
          onChange={(event) => update("email", event.target.value)}
          placeholder="e.g. your@example.com"
          autoComplete="email"
          required
        />
      </Field>
    </>
  );
}

function StepSituation({
  booking,
  update,
  session,
}: StepProps & { session: Session }) {
  const { situation } = session;

  return (
    <>
      <Field label={situation.issueLabel}>
        <textarea
          className={`${FIELD} field-sizing-content min-h-24 resize-none`}
          value={booking.issue}
          onChange={(event) => update("issue", event.target.value)}
          placeholder={situation.issuePlaceholder}
          required
        />
      </Field>
      <ChipGroup
        legend={situation.contextLabel}
        name="context"
        options={situation.contextOptions}
        value={booking.context}
        onChange={(value) => update("context", value)}
      />
      <Field label="What have you already tried?" optional>
        <textarea
          className={`${FIELD} field-sizing-content min-h-16 resize-none`}
          value={booking.tried}
          onChange={(event) => update("tried", event.target.value)}
          placeholder={situation.triedPlaceholder}
        />
      </Field>
    </>
  );
}

function StepTime({ booking, update }: StepProps) {
  const today = new Date().toLocaleDateString("en-CA");

  return (
    <>
      <Field label="Day">
        <input
          className={`${FIELD} [color-scheme:dark] md:[color-scheme:light]`}
          type="date"
          min={today}
          value={booking.date}
          onChange={(event) => update("date", event.target.value)}
          required
        />
      </Field>
      <ChipGroup
        legend="Start time"
        name="time"
        options={TIME_SLOTS}
        value={booking.time}
        onChange={(value) => update("time", value)}
      />
    </>
  );
}

function StepLength({ booking, update }: StepProps) {
  const day = new Date(`${booking.date}T00:00:00`).toLocaleDateString(
    undefined,
    { weekday: "long", day: "numeric", month: "long" },
  );

  return (
    <>
      <fieldset>
        <legend className="sr-only">Session length</legend>
        <div className="space-y-3">
          {LENGTHS.map(({ minutes, note }) => (
            <label key={minutes} className="block">
              <input
                type="radio"
                name="minutes"
                className="peer sr-only"
                checked={booking.minutes === minutes}
                onChange={() => update("minutes", minutes)}
              />
              <div
                className={`${CARD} flex cursor-pointer items-center justify-between gap-6 p-5 transition peer-checked:border-white peer-checked:bg-white/5 md:peer-checked:border-black md:peer-checked:bg-black/5 ${FOCUS_RING}`}
              >
                <div>
                  <p className="font-semibold">{minutes} minutes</p>
                  <p className={`mt-1 text-sm ${MUTED}`}>{note}</p>
                </div>
                <p className="text-2xl font-extrabold">
                  {formatPrice(priceFor(minutes))}
                </p>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      <dl
        className={`${CARD} divide-y divide-white/10 px-6 md:divide-black/10`}
      >
        <Row term="Name" detail={booking.name} />
        <Row term="Email" detail={booking.email} />
        <Row term="When" detail={`${day} at ${booking.time}`} />
      </dl>
    </>
  );
}

function Row({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="flex justify-between gap-6 py-4">
      <dt className={MUTED}>{term}</dt>
      <dd className="break-words text-right font-medium">{detail}</dd>
    </div>
  );
}

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-base font-semibold">
        {label}
        {optional && (
          <span className="ml-1 font-normal text-white/50 md:text-black/50">
            (optional)
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

function ChipGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-base font-semibold">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="peer sr-only"
            />
            <span
              className={`block cursor-pointer rounded-full bg-white px-4 py-2 text-sm text-black transition peer-checked:bg-accent-pink peer-checked:text-white md:bg-black md:text-white md:peer-checked:bg-accent-pink md:peer-checked:text-white ${FOCUS_RING}`}
            >
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}