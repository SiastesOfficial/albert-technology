import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BookingFlow } from "@/app/component/booking-flow";
import { findSession, sessions } from "../sessionsData";
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return sessions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const session = findSession((await params).slug);
  if (!session) return {};

  return {
    title: `${session.title} · Book a session`,
    description: session.summary,
  };
}

export default async function SessionPage({ params }: Props) {
  const session = findSession((await params).slug);
  if (!session) notFound();

  return <BookingFlow session={session} />;
}