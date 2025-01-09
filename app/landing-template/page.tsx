import Image from "next/image";

export default function LandingTemplate() {
  return (
    <main>
      {/* SECTION 1 */}
      <section className="bg-background min-h-screen relative overflow-hidden">
        <div className="absolute bottom-[-120px] left-[-40px] p-4 z-0">
          <Image src="/img/form-1.png" width={300} height={100} alt="Form" />
        </div>
        <div className="absolute top-[-120px] right-[-40px] p-4 z-0">
          <Image src="/img/form-2.png" width={300} height={100} alt="Form" />
        </div>
        <div className="container mx-auto max-w-7xl justify-center items-center flex flex-col text-center min-h-screen z-10 relative">
          <Image src="/img/logo.png" width={300} height={200} alt="Logo" />
          <h1 className="text-8xl font-black text-primary mt-4">
            Natura Wrapped
          </h1>
          <h2 className="text-4xl text-secondary mt-4 font-black">
            ¡Cerramos el 2024 con grandes logros!
          </h2>
          <p className="text-lg mt-4 max-w-4xl text-gray-600">
            Queridx [Nombre] Consultxr Natura Digital, este año fue increíble
            gracias a tu esfuerzo, dedicación y pasión. En este Wrapped CND
            2024, celebramos tus resultados, reconocemos tus avances y te
            preparamos para alcanzar nuevas metas en 2025. ¡Échale un vistazo a
            todo lo que lograste con tu Sitio Natura Digital [Click Aquí] en el
            2024!
          </p>
        </div>
      </section>
    </main>
  );
}
