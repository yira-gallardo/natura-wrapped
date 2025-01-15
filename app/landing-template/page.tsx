"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import DATA from "../data.json";

interface DigitalPresenceProps {
  clientsReached?: number;
}

interface DataItem {
  tipo: string;
  ranking: number;
  codigo: number;
  nombreCdn: string;
  nombreSitio: string;
  urlSitio: string;
  codigoVol: number;
  facturacion: number;
  top1Mes?: string | null;
  top1Total?: number | null;
  top2Mes?: string | null;
  top2Total?: number | null;
  top3Mes?: string | null;
  top3Total?: number | null;
  vendidos: number;
  producto1Codigo?: string | null;
  producto1Cantidad?: number | null;
  producto1Nombre?: string | null;
  producto2Codigoo?: string | null;
  producto2Cantidad?: number | null;
  producto2Nombre?: string | null;
  producto3Codigo?: string | null;
  producto3Cantidad?: number | null;
  producto3Nombre?: string | null;
  producto4Codigo?: string | null;
  producto4Cantidad?: number | null;
  producto4Nombre?: string | null;
  producto5Codigo?: string | null;
  producto5Cantidad?: number | null;
  producto5Nombre?: string | null;
  clientes: number;
}

const data: DataItem = {
  ...DATA[0],
  nombreSitio: String(DATA[0].nombreSitio),
};

const formatNumberToCurrency = (number: number) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(number);
};

const formatNumber = (number: number) => {
  return new Intl.NumberFormat("es-MX").format(number);
};

export default function DigitalPresence({}: DigitalPresenceProps) {
  const products = Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;
    return {
      image: data[`producto${index}Codigo` as keyof DataItem] || null,
      name: data[`producto${index}Nombre` as keyof DataItem] || null,
      sales: data[`producto${index}Cantidad` as keyof DataItem] || null,
    };
  }).filter((product) => product.image && product.name && product.sales);

  return (
    <main>
      {/* SECTION 1 */}
      <section className="bg-background min-h-screen relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-[-60px] left-[-20px] md:bottom-[-120px] md:left-[-40px] p-2 md:p-4 z-0"
        >
          <Image
            src="/img/form-1.png"
            width={150}
            height={50}
            alt="Form"
            className="w-[150px] h-auto md:w-[300px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-[-60px] right-[-20px] md:top-[-120px] md:right-[-40px] p-2 md:p-4 z-0"
        >
          <Image
            src="/img/form-2.png"
            width={150}
            height={50}
            alt="Form"
            className="w-[150px] h-auto md:w-[300px]"
          />
        </motion.div>
        <div className="container mx-auto max-w-7xl justify-center items-center flex flex-col text-center min-h-screen z-10 relative px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/img/logo.png"
              width={200}
              height={133}
              alt="Logo"
              className="w-[200px] h-auto md:w-[300px]"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-8xl font-black text-primary mt-4"
          >
            Natura Wrapped
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-secondary mt-4 font-black"
          >
            ¡Cerramos el 2024 con grandes logros!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg mt-4 max-w-4xl text-gray-500 font-bold"
          >
            Queridx {data.nombreCdn} Consultxr Natura Digital, este año fue
            increíble gracias a tu esfuerzo, dedicación y pasión. En este
            Wrapped CND 2024, celebramos tus resultados, reconocemos tus avances
            y te preparamos para alcanzar nuevas metas en 2025. ¡Échale un
            vistazo a todo lo que lograste con tu Sitio Natura Digital [Click
            Aquí] en el 2024!
          </motion.p>
        </div>
      </section>
      {/* SECTION 2 */}
      <div className="w-full bg-primary text-white pt-28 pb-20 md:py-60 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[-30px] right-[-15px] md:top-[-120px] md:right-[-60px] p-2 md:p-4 z-0"
        >
          <Image
            src="/img/icon-1.png"
            width={150}
            height={33}
            alt="Decorative Icon"
            className="w-[150px] h-auto md:w-[450px]"
          />
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-center md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/4 mb-8 md:mb-0"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-4xl font-black uppercase"
              >
                Tus logros hablan por sí solos
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl mt-2"
              >
                Este año, rompiste barreras y alcanzaste nuevas alturas.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full md:w-3/4"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base md:text-lg"
              >
                Ventas totales alcanzadas
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-5xl md:text-8xl font-bold text-highlight"
              >
                {formatNumberToCurrency(data.facturacion)} MXN
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-xl md:text-2xl italic text-highlight mt-2"
              >
                Tus resultados son el reflejo de tu compromiso. ¡Sigue
                brillando!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* SECTION 3 */}
      <section className="min-h-screen w-full bg-highlightBg py-20 md:py-40 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[400px] left-[-300px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-2.png"
            width={500}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-[-160px] right-[-300px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-2.png"
            width={700}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-16 text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight">
              Tus mejores momentos en 2024
            </h1>
            <p className="mx-auto text-lg md:text-2xl font-bold mt-4">
              Estos fueron los meses donde brillaste al máximo y alcanzaste tus
              mejores resultados.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left mb-8"
          >
            <h2 className="text-xl md:text-2xl text-accent uppercase font-black">
              Mes 1
            </h2>
            <p className="text-base md:text-lg font-bold">Ventas totales:</p>
            <p className="mb-2 text-5xl md:text-6xl lg:text-7xl font-black leading-none">
              {data.top1Total || "$XX,XXX MXN"}
            </p>
            <p className="text-lg md:text-xl italic font-bold">
              ¡Este mes marcaste la diferencia con tu dedicación y entusiasmo!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center md:text-right mb-8"
          >
            <h2 className="text-xl md:text-2xl text-accent uppercase font-black">
              Mes 2
            </h2>
            <p className="text-base md:text-lg font-bold">Ventas totales:</p>
            <p className="mb-2 text-5xl md:text-6xl lg:text-7xl font-black leading-none">
              $XX,XXX MXN
            </p>
            <p className="text-lg md:text-xl italic font-bold">
              Tus logros nos inspiran a seguir construyendo grandes historias.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center md:text-left mb-8"
          >
            <h2 className="text-xl md:text-2xl text-accent uppercase font-black">
              Mes 3
            </h2>
            <p className="text-base md:text-lg font-bold">Ventas totales:</p>
            <p className="mb-2 text-5xl md:text-6xl lg:text-7xl font-black leading-none">
              $XX,XXX MXN
            </p>
            <p className="text-lg md:text-xl italic font-bold">
              Un mes donde todo fue posible gracias a tu esfuerzo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16 md:mt-32 max-w-lg mx-auto"
          >
            <p className="uppercase text-base md:text-xl font-bold">
              Cada mes fue una oportunidad para crecer, y tú lo aprovechaste al
              máximo. <br className="hidden md:inline" />
              ¡Vamos por más meses memorables en 2025!
            </p>
          </motion.div>
        </div>
      </section>
      {/* SECTION 4 */}
      <section className="w-full bg-accent text-white py-20 md:py-40 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[-40px] left-[-200px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-3.png"
            width={400}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-[-40px] right-[-200px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-3-y.png"
            width={400}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase"
          >
            ¡Tus números hablan de éxito!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-center text-white/90 mt-4 mb-8 md:mb-12"
          >
            Este año, tu esfuerzo y dedicación llevaron nuestros productos a más
            hogares que nunca.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl bg-white text-gray-800 p-6 md:p-8 mx-auto text-center mb-8 md:mb-12"
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#F35866]">
              Total de productos vendidos
            </h3>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1,
                type: "spring",
                stiffness: 100,
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F35866] mt-2 mb-2 md:mb-4"
            >
              {formatNumber(data.vendidos)}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-4xl mx-auto px-4 md:px-0"
          >
            <h4 className="text-base md:text-lg uppercase font-semibold mb-4 text-highlight">
              Reconocimiento:
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-start text-lg md:text-xl lg:text-2xl"
              >
                <span className="text-highlight mr-2 flex-shrink-0">•</span>
                <span>
                  Cada producto representa una historia de bienestar que
                  compartiste.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="flex items-start text-lg md:text-xl lg:text-2xl"
              >
                <span className="text-highlight mr-2 flex-shrink-0">•</span>
                <span>
                  Eres parte de los momentos especiales de miles de personas.
                </span>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="max-w-3xl my-8 md:my-16 text-center mx-auto px-4 md:px-0"
          >
            <p className="text-base md:text-lg italic">
              Tus ventas reflejan tu pasión y compromiso. En 2025, ¡estamos
              listos para llevar aún más bienestar a los hogares de la mano del
              mundo digital contigo!
            </p>
          </motion.div>
        </div>
      </section>
      {/* SECTION 5 */}
      <section className="bg-background py-20 md:py-40 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[-100px] left-[-250px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-5.png"
            width={350}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[1000px] right-[-100px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-4.png"
            width={500}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-[-300px] left-[600px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-5.png"
            width={350}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-primary uppercase"
          >
            Tus estrellas favoritas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-center text-gray-600 mt-4 mb-8 md:mb-12 font-bold"
          >
            Estos fueron los productos que hicieron historia en tu negocio este
            año.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-16">
            {products.map((product, index) => (
              <div key={index} className="bg-primary p-12 text-white">
                <div className="relative aspect-square mb-4 overflow-hidden bg-white">
                  {/* <Image
                    src={typeof product.image === "string" ? product.image : ""}
                    alt={String(product.name ?? "")}
                    layout="fill"
                    objectFit="cover"
                  /> */}
                </div>
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p className="text-2xl font-black mt-2">
                  {product.sales} unidades vendidas
                </p>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-center mt-8 md:mt-12 italic text-gray-600 font-black mb-16 md:mb-32"
          >
            Con cada producto vendido, dejaste huella en el corazón de tus
            clientas.
          </motion.p>
        </div>
      </section>
      {/* SECTION 6 */}
      <section className="w-full bg-accent py-20 md:py-40 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[-160px] left-[-200px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-1.png"
            width={350}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full md:w-2/6 text-center md:text-left mb-8 md:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Conectando con el mundo desde tu sitio Natura Digital
              </h2>
              <p className="text-lg md:text-xl text-highlight">
                Este año, tus esfuerzos en el mundo digital marcaron la
                diferencia.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full md:w-4/6 md:pl-8"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl md:text-2xl font-semibold text-highlight mb-4"
              >
                Clientes alcanzados
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl md:text-4xl font-bold mb-4"
              >
                Cada cliente representa una conexión auténtica, creada a través
                de tu compromiso y visión.
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-xl md:text-2xl font-semibold text-highlight mb-4"
              >
                Tu impacto digital
              </motion.h3>
              <ul className="text-xl md:text-4xl font-bold">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex items-start mb-4"
                >
                  <span className="text-highlight mr-2 flex-shrink-0">•</span>
                  <span>
                    Tu sitio digital fue una puerta al éxito, llevando bienestar
                    y belleza a más personas.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex items-start"
                >
                  <span className="text-highlight mr-2 flex-shrink-0">•</span>
                  <span>
                    Eres un ejemplo de cómo aprovechar el mundo digital para
                    transformar vidas.
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12 bg-highlight p-6 md:p-8 text-center text-white"
          >
            <p className="text-lg md:text-xl italic text-accent font-black">
              En 2025, sigamos construyendo conexiones que impulsen tu negocio
              al siguiente nivel. ¡El futuro digital es tuyo!
            </p>
          </motion.div>
        </div>
      </section>
      {/* SECTION 7*/}
      <div className="w-full bg-highlightBg text-white py-20 md:py-40 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[-160px] right-[-200px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-5.png"
            width={350}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-[-160px] left-[-200px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-5.png"
            width={350}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white"
          >
            El esfuerzo tiene sus recompensas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-center mb-8 md:mb-12 text-white font-bold"
          >
            Celebramos tu lugar como un Consultxr Natura Digital.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white text-gray-800 p-6 md:p-8 text-center mb-8 md:mb-12 max-w-xl mx-auto"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-primary">
              Rango alcanzado:
            </h3>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1,
                type: "spring",
                stiffness: 100,
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4"
            >
              CND Top
            </motion.p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl italic text-center"
          >
            Tu dedicación transforma vidas y eleva la experiencia Natura.
            ¡Gracias por ser ejemplo!
          </motion.p>
        </div>
      </div>
      {/* SECTION 8*/}
      <section className="w-full bg-[#F35866] py-6 px-2 sm:py-8 sm:px-4 md:py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 hidden sm:block w-32 md:w-44 lg:w-56 h-auto z-0">
          <Image
            src="/img/icon-1.png"
            alt=""
            width={300}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
              Prepárate para un 2025 de éxitos
            </h2>
            <p className="text-highlight text-base sm:text-lg md:text-xl lg:text-2xl">
              Estamos listas para más oportunidades y más ganancias.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[80vh] sm:max-h-[70vh] mx-auto">
            <Image
              src="/img/calendario.png"
              alt="Calendario de fechas especiales 2025"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 85vw, 80vw"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
