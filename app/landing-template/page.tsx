import Image from "next/image";
import React from "react";

interface DigitalPresenceProps {
  clientsReached?: number;
}

export default function DigitalPresence({}: DigitalPresenceProps) {
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
          <p className="text-lg mt-4 max-w-4xl text-gray-500 font-bold">
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
      <div className="w-full bg-primary text-white py-60 relative overflow-hidden">
        <div className="absolute top-[-120px] right-[-60px] p-4 z-0">
          <Image src="/img/icon-1.png" width={450} height={100} alt="Form" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center  gap-12">
            <div className="w-1/4">
              <h2 className="text-4xl font-black uppercase">
                Tus logros hablan por sí solos
              </h2>
              <p className="text-xl">
                Este año, rompiste barreras y alcanzaste nuevas alturas.
              </p>
            </div>
            <div className="w-3/4">
              <h3 className="text-lg">Ventas totales alcanzadas</h3>
              <p className="text-8xl font-bold text-highlight ">$X,XXX MXN</p>
              <p className="text-2xl italic text-highlight">
                Tus resultados son el reflejo de tu compromiso. ¡Sigue
                brillando!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 3 */}
      <section className="min-h-screen w-full bg-highlightBg py-40 text-white relative overflow-hidden">
        <div className="absolute top-[400px] left-[-300px] p-4 z-0">
          <Image src="/img/icon-2.png" width={500} height={100} alt="Form" />
        </div>
        <div className="absolute bottom-[-160px] right-[-300px] p-4 z-0">
          <Image src="/img/icon-2.png" width={700} height={100} alt="Form" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="mb-16 text-center">
            <h1 className="text-9xl font-black md:text-6xl uppercase">
              Tus mejores momentos en 2024
            </h1>
            <p className="mx-auto text-2xl font-bold">
              Estos fueron los meses donde brillaste al máximo y alcanzaste tus
              mejores resultados.
            </p>
          </div>
          <div className="text-left mb-8">
            <h2 className="text-2xl text-accent uppercase font-black">Mes 1</h2>
            <p className="text-lg font-bold">Ventas totales:</p>
            <p className="mb-2 text-[120px]  font-black">$XX,XXX MXN</p>
            <p className="text-xl italic font-bold">
              ¡Este mes marcaste la diferencia con tu dedicación y entusiasmo!
            </p>
          </div>
          <div className="text-right mb-8">
            <h2 className="text-2xl text-accent uppercase font-black">Mes 2</h2>
            <p className="text-lg font-bold">Ventas totales:</p>
            <p className="mb-2 text-[120px]  font-black">$XX,XXX MXN</p>
            <p className="text-xl italic font-bold">
              Tus logros nos inspiran a seguir construyendo grandes historias.
            </p>
          </div>
          <div className="text-left mb-8">
            <h2 className="text-2xl text-accent uppercase font-black">Mes 3</h2>
            <p className="text-lg font-bold">Ventas totales:</p>
            <p className="mb-2 text-[120px]  font-black">$XX,XXX MXN</p>
            <p className="text-xl italic font-bold">
              Un mes donde todo fue posible gracias a tu esfuerzo.
            </p>
          </div>
          <div className="text-center mt-32 max-w-lg mx-auto">
            <p className="uppercase text-xl font-bold">
              Cada mes fue una oportunidad para crecer, y tú lo aprovechaste al
              máximo. <br></br>¡Vamos por más meses memorables en 2025!
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 4 */}
      <section className="w-full bg-accent text-white py-40 relative overflow-hidden">
        <div className="absolute top-[-40px] left-[-200px] p-4 z-0">
          <Image src="/img/icon-3.png" width={400} height={100} alt="Form" />
        </div>
        <div className="absolute bottom-[-40px] right-[-200px] p-4 z-0">
          <Image src="/img/icon-3-y.png" width={400} height={100} alt="Form" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold text-center uppercase">
            ¡Tus números hablan de éxito!
          </h2>
          <p className="text-xl text-center text-white/90 mb-12">
            Este año, tu esfuerzo y dedicación llevaron nuestros productos a más
            hogares que nunca.
          </p>
          <div className="max-w-4xl bg-white text-gray-800 p-8 mx-auto text-center mb-12">
            <h3 className="text-xl font-semibold text-[#F35866]">
              Total de productos vendidos
            </h3>
            <p className="text-8xl font-bold text-[#F35866] mb-4">$X,XXX</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <h4 className="text-lg uppercase font-semibold mb-4 text-highlight">
              Reconocimiento:
            </h4>
            <ul className="space-y-4 ">
              <li className="flex items-start text-2xl">
                <span className="text-highlight mr-2">•</span>
                <span>
                  Cada producto representa una historia de bienestar que
                  compartiste.
                </span>
              </li>
              <li className="flex items-start text-2xl">
                <span className="text-highlight mr-2">•</span>
                <span>
                  Eres parte de los momentos especiales de miles de personas.
                </span>
              </li>
            </ul>
          </div>
          <div className="max-w-3xl my-16 text-center mx-auto">
            <p className="text-lg italic">
              Tus ventas reflejan tu pasión y compromiso. En 2025, ¡estamos
              listos para llevar aún más bienestar a los hogares de la mano del
              mundo digital contigo!
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 5 */}
      <section className="bg-background py-40 relative overflow-hidden">
        <div className="absolute top-[-100px] left-[-250px] p-4 z-0">
          <Image src="/img/icon-5.png" width={350} height={100} alt="Form" />
        </div>
        <div className="absolute top-[1000px] right-[-100px] p-4 z-0">
          <Image src="/img/icon-4.png" width={500} height={100} alt="Form" />
        </div>
        <div className="absolute bottom-[-300px] left-[600px] p-4 z-0">
          <Image src="/img/icon-5.png" width={350} height={100} alt="Form" />
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-6xl font-black text-center text-primary uppercase">
            Tus estrellas favoritas
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 font-bold">
            Estos fueron los productos que hicieron historia en tu negocio este
            año.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-16">
            {topProducts.map((product, index) => (
              <div key={index} className="bg-primary p-12 text-white">
                <div className="relative aspect-square mb-4 overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p>{product.subtitle}</p>
                <p className="text-2xl font-black mt-2">
                  {product.sales} unidades vendidas
                </p>
              </div>
            ))}
          </div>
          <p className="text-2xl text-center mt-12 italic text-gray-600 font-black mb-32">
            Con cada producto vendido, dejaste huella en el corazón de tus
            clientas.
          </p>
        </div>
      </section>
      {/* SECTION 6 */}
      <section className="w-full bg-accent py-40 text-white relative overflow-hidden">
        <div className="absolute top-[-160px] left-[-200px] p-4 z-0">
          <Image src="/img/icon-1.png" width={350} height={100} alt="Form" />
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center items-center">
            <div className="w-2/6 text-left">
              <h2 className="text-4xl font-bold">
                Conectando con el mundo desde tu sitio Natura Digital
              </h2>
              <p className="text-xl text-highlight">
                Este año, tus esfuerzos en el mundo digital marcaron la
                diferencia.
              </p>
            </div>
            <div className="w-4/6">
              <h3 className="text-2xl font-semibold text-highlight mb-4">
                Clientes alcanzados
              </h3>
              <p className="text-4xl font-bold mb-4">
                Cada cliente representa una conexión auténtica, creada a través
                de tu compromiso y visión.
              </p>
              <h3 className="text-2xl font-semibold text-highlight mb-4">
                Tu impacto digital
              </h3>
              <ul className="text-4xl font-bold">
                <li className="flex items-start mb-2">
                  <span className="text-highlight mr-2">•</span>
                  <span>
                    Tu sitio digital fue una puerta al éxito, llevando bienestar
                    y belleza a más personas.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2">•</span>
                  <span>
                    Eres un ejemplo de cómo aprovechar el mundo digital para
                    transformar vidas.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-highlight p-8 text-center text-white">
            <p className="text-xl italic text-accent font-black">
              En 2025, sigamos construyendo conexiones que impulsen tu negocio
              al siguiente nivel. ¡El futuro digital es tuyo!
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 7*/}
      <div className="w-full bg-highlightBg text-white py-40 relative overflow-hidden">
        <div className="absolute top-[-160px] right-[-200px] p-4 z-0">
          <Image src="/img/icon-5.png" width={350} height={100} alt="Form" />
        </div>
        <div className="absolute bottom-[-160px] left-[-200px] p-4 z-0">
          <Image src="/img/icon-5.png" width={350} height={100} alt="Form" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-4 text-white ">
            El esfuerzo tiene sus recompensas
          </h2>
          <p className="text-xl text-center  mb-12 text-white font-bold">
            Celebramos tu lugar como un Consultxr Natura Digital.
          </p>
          <div className="bg-white text-gray-800 p-8 text-center mb-12 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Rango alcanzado:
            </h3>
            <p className="text-6xl font-black text-primary mb-4">CND Top</p>
          </div>
          <p className="text-xl italic  text-center">
            Tu dedicación transforma vidas y eleva la experiencia Natura.
            ¡Gracias por ser ejemplo!
          </p>
        </div>
      </div>
    </main>
  );
}
