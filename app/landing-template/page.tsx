import Image from "next/image";
import React from "react";

interface DigitalPresenceProps {
  clientsReached?: number; // Total number of clients reached :)
}
export default function DigitalPresence({
  clientsReached = 0,
}: DigitalPresenceProps) {
  const topProducts = [
    {
      name: "Crema Hidratante Premium",
      sales: 1500,
      image: "/img/img-1.jpg",
      subtitle: "Tu producto más vendido",
    },
    {
      name: "Serum Facial Revitalizante",
      sales: 1200,
      image: "/img/img-1.jpg",
      subtitle: "El favorito de tus clientes",
    },
    {
      name: "Mascarilla de Arcilla",
      sales: 1000,
      image: "/img/img-1.jpg",
      subtitle: "Un éxito constante",
    },
    {
      name: "Mascarilla de Arcilla",
      sales: 1000,
      image: "/img/img-1.jpg",
      subtitle: "Un éxito constante",
    },
    {
      name: "Mascarilla de Arcilla",
      sales: 1000,
      image: "/img/img-1.jpg",
      subtitle: "Un éxito constante",
    },
  ];

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
      {/* SECTION 2 */}
      <div className="w-full bg-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-4">
            Tus logros hablan por sí solos
          </h2>
          <p className="text-xl text-center text-white/90 mb-12">
            Este año, rompiste barreras y alcanzaste nuevas alturas.
          </p>

          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4 text-[#E963D2]">
              Ventas totales alcanzadas
            </h3>
            <p className="text-6xl font-bold text-[#E963D2] mb-4">$X,XXX MXN</p>
          </div>

          <div className="bg-[#F5B6E8] p-8 rounded-xl shadow-lg text-center">
            <p className="text-2xl italic text-gray-800">
              Tus resultados son el reflejo de tu compromiso. ¡Sigue brillando!
            </p>
          </div>
        </div>
      </div>
      {/* SECTION 3 */}
      <section className="min-h-screen w-full bg-gradient-to-r from-[#E065B2] to-[#F87C7C] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-9xl font-black text-white md:text-6xl">
              Tus mejores momentos en 2024
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/90">
              Estos fueron los meses donde brillaste al máximo y alcanzaste tus
              mejores resultados.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            {/* Card 1 */}
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-white">Mes 1</h2>
              <p className="mb-2 text-6xl text-highlight font-black">
                Ventas totales: $XX,XXX MXN
              </p>
              <p className="text-xl italic text-white/80 ">
                ¡Este mes marcaste la diferencia con tu dedicación y entusiasmo!
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-white">Mes 2</h2>
              <p className="mb-2 text-6xl text-highlight font-black">
                Ventas totales: $XX,XXX MXN
              </p>
              <p className="text-xl italic text-white/80">
                Tus logros nos inspiran a seguir construyendo grandes historias.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-white">Mes 3</h2>
              <p className="mb-2 text-6xl text-highlight font-black">
                Ventas totales: $XX,XXX MXN
              </p>
              <p className=" italic text-white/80 text-xl">
                Un mes donde todo fue posible gracias a tu esfuerzo.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold px-4 py-6 rounded-lg">
              Cada mes fue una oportunidad para crecer, y tú lo aprovechaste al
              máximo. ¡Vamos por más meses memorables en 2025!
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 4 */}
      <section className="w-full bg-accent text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-4">
            ¡Tus números hablan de éxito!
          </h2>
          <p className="text-xl text-center text-white/90 mb-12">
            Este año, tu esfuerzo y dedicación llevaron nuestros productos a más
            hogares que nunca.
          </p>

          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4 text-[#F35866]">
              Total de productos vendidos
            </h3>
            <p className="text-6xl font-bold text-[#F35866] mb-4">$X,XXX</p>
          </div>

          <div className="bg-[#FFC2C7] p-8 rounded-xl shadow-lg mb-12">
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">
              Reconocimiento:
            </h4>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start">
                <span className="text-[#F35866] mr-2">•</span>
                <span>
                  Cada producto representa una historia de bienestar que
                  compartiste.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#F35866] mr-2">•</span>
                <span>
                  Eres parte de los momentos especiales de miles de personas.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FFC2C7] p-8 rounded-xl shadow-lg text-center">
            <p className="text-2xl italic text-gray-800">
              Tus ventas reflejan tu pasión y compromiso. En 2025, ¡estamos
              listos para llevar aún más bienestar a los hogares de la mano del
              mundo digital contigo!
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 5 */}
      <section className="min-h-screen w-full bg-highlight text-gray-800">
        <div className="max-w-6xl mx-auto p-8">
          <h2 className="text-7xl font-bold text-center mb-4 text-gray-900">
            Tus estrellas favoritas
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Estos fueron los productos que hicieron historia en tu negocio este
            año.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="bg-pink-100 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-4 text-pink-700">
                  Top {index + 1} Producto
                </h3>
                <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-800">
                  {product.name}
                </h4>
                <p className="text-pink-700">{product.subtitle}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {product.sales} unidades vendidas
                </p>
              </div>
            ))}
          </div>
          <p className="text-2xl text-center mt-12 italic text-gray-600">
            "Con cada producto vendido, dejaste huella en el corazón de tus
            clientas."
          </p>
        </div>
      </section>
      {/* SECTION 6 */}
      <section className="w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 text-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-4 text-white">
            Conectando con el mundo desde tu sitio Natura Digital
          </h2>
          <p className="text-xl text-center text-white mb-12">
            Este año, tus esfuerzos en el mundo digital marcaron la diferencia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-100 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-pink-700">
                Clientes alcanzados
              </h3>
              <p className="text-5xl font-bold text-gray-800 mb-4"></p>
              <p className="text-gray-600">
                Cada cliente representa una conexión auténtica, creada a través
                de tu compromiso y visión.
              </p>
            </div>

            <div className="bg-pink-100 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-pink-700">
                Tu impacto digital
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>
                    Tu sitio digital fue una puerta al éxito, llevando bienestar
                    y belleza a más personas.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>
                    Eres un ejemplo de cómo aprovechar el mundo digital para
                    transformar vidas.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-pink-100 p-8 rounded-xl shadow-md text-center">
            <p className="text-2xl italic text-gray-800">
              En 2025, sigamos construyendo conexiones que impulsen tu negocio
              al siguiente nivel. ¡El futuro digital es tuyo!
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 7*/}
      <div className="w-full bg-[#B060E3] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-4">
            El esfuerzo tiene sus recompensas
          </h2>
          <p className="text-xl text-center text-white/90 mb-12">
            Celebramos tu lugar como un Consultxr Natura Digital.
          </p>

          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4 text-[#B060E3]">
              Rango alcanzado:
            </h3>
            <p className="text-6xl font-bold text-[#B060E3] mb-4">CND Top</p>
          </div>
          <div className="bg-[#D9B6F1] p-8 rounded-xl shadow-lg text-center">
            <p className="text-2xl italic text-gray-800">
              Tu dedicación transforma vidas y eleva la experiencia Natura.
              ¡Gracias por ser ejemplo!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
