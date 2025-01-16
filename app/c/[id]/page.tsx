import { notFound } from "next/navigation";
import LandingPageClient from "./pageClient";

export default async function Landing({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const codigo = (await params).id;

  if (!codigo) {
    notFound();
  }

  return <LandingPageClient codigo={codigo} />;
}
