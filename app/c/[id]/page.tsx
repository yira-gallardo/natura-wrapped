import LandingPageClient from "./pageClient";

export default async function Landing({ params }: { params: { id: string } }) {
  const codigo = params.id;

  return <LandingPageClient codigo={codigo} />;
}
