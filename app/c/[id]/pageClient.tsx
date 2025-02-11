"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DATA from "../../data.json";
import Link from "next/link";
import { useAnimatedNumber } from "./useAnimatedNumber";

interface DataItem {
  tipo: string;
  ranking: number;
  codigo: number;
  nombreCdn: string;
  nombreSitio: string | number;
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
  producto2Codigo?: string | null;
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

const formatNumberToCurrency = (number: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(number);

const formatNumber = (number: number) =>
  new Intl.NumberFormat("es-MX").format(number);

export default function LandingPageClient({ codigo }: { codigo: string }) {
  const [data, setData] = useState<DataItem | null>(null);
  const animatedFacturacion = useAnimatedNumber(data?.facturacion ?? 0, 6000);
  const animatedVendidos = useAnimatedNumber(data?.vendidos ?? 0, 6000);
  const animatedTop1Total = useAnimatedNumber(data?.top1Total ?? 0, 6000);
  const animatedTop2Total = useAnimatedNumber(data?.top2Total ?? 0, 6000);
  const animatedTop3Total = useAnimatedNumber(data?.top3Total ?? 0, 6000);
  const animatedClientes = useAnimatedNumber(data?.clientes ?? 0, 6000);

  const products = Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;
    return {
      image: data ? data[`producto${index}Codigo` as keyof DataItem] : null,
      name: data ? data[`producto${index}Nombre` as keyof DataItem] : null,
      sales: data ? data[`producto${index}Cantidad` as keyof DataItem] : null,
    };
  }).filter((product) => product.name && product.sales);

  useEffect(() => {
    const matchedData = DATA.find(
      // eslint-disable-next-line
      (item: any) => item.codigo === parseInt(codigo)
    );

    if (matchedData) {
      setData(matchedData);
    } else {
      notFound(); // Show 404 if no match
    }
  }, [codigo]);

  if (!data) {
    return <></>;
  }

  return (
    <main>
      {/* SECTION 1 */}
      <section className="bg-background min-h-screen relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-0 md:bottom-[-120px] md:left-[-40px] p-1 md:p-4 z-0"
        >
          <Image
            src="/img/form-1.png"
            width={150}
            height={50}
            alt="Form"
            className="w-[100px] h-auto sm:w-[150px] md:w-[300px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-0 right-0 md:top-[-120px] md:right-[-40px] p-1 md:p-4 z-0"
        >
          <Image
            src="/img/form-2.png"
            width={150}
            height={50}
            alt="Form"
            className="w-[100px] h-auto sm:w-[150px] md:w-[300px]"
          />
        </motion.div>
        <div className="container mx-auto max-w-7xl justify-center items-center flex flex-col text-center min-h-screen z-10 relative px-2 sm:px-4 md:px-0 py-4 sm:py-8 md:py-0">
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
              className="w-[100px] h-auto sm:w-[150px] md:w-[300px]"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-8xl font-black text-primary mt-2 sm:mt-4"
          >
            Natura Wrapped
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-4xl text-secondary mt-2 sm:mt-4 font-black"
          >
            ¡Cerramos el 2024 con grandes logros!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xs sm:text-sm md:text-2xl mt-2 sm:mt-4 max-w-4xl text-gray-500"
          >
            Queridx{" "}
            <span className="text-lg sm:text-xl md:text-4xl text-black font-black">
              {data.nombreCdn}
            </span>{" "}
            Consultxr Natura Digital, este año fue increíble gracias a tu
            esfuerzo, dedicación y pasión. En este Wrapped CND 2024, celebramos
            tus resultados, reconocemos tus avances y te preparamos para
            alcanzar nuevas metas en 2025. ¡Échale un vistazo a todo lo que
            lograste con tu{" "}
            <span className="text-black font-black">Sitio Natura Digital</span>{" "}
            <span className="text-black font-black">
              <Link
                href={data.urlSitio}
                target="_blank"
                className="break-words"
              >
                {data.urlSitio}
              </Link>
            </span>{" "}
            en el 2024!
          </motion.p>
        </div>
      </section>
      {/* SECTION 2 */}
      <div className="w-full bg-primary text-white pt-16 pb-12 md:py-60 relative overflow-hidden">
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 50, rotate: -10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[-15px] right-[-7px] md:top-[-120px] md:right-[-60px] p-1 md:p-4 z-0"
        >
          <Image
            src="/img/icon-1.png"
            width={150}
            height={33}
            alt="Decorative Icon"
            className="w-[80px] h-auto md:w-[450px]"
          />
        </motion.div>
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-center md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/4 mb-6 md:mb-0"
            >
              <motion.h2
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-4xl font-black uppercase mb-3 md:mb-8 leading-tight"
              >
                Tus logros hablan por sí solos
              </motion.h2>
              <motion.p
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base md:text-xl mt-2"
              >
                Este año, rompiste barreras y alcanzaste nuevas alturas.
              </motion.p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full md:w-3/4 space-y-4"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base md:text-lg font-medium"
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
                className="text-3xl sm:text-4xl md:text-8xl font-bold text-highlight tracking-tight break-words"
              >
                {formatNumberToCurrency(animatedFacturacion)} MXN
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-base sm:text-lg md:text-2xl italic text-highlight mt-2 leading-relaxed"
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
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
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-16 text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight">
              Tus mejores momentos en 2024
            </h1>
            <p className="mx-auto text-lg md:text-2xl font-bold mt-4 mb-32">
              Estos fueron los meses donde brillaste al máximo y alcanzaste tus
              mejores resultados.
            </p>
          </motion.div>
          {data.top1Mes && data.top1Total && (
            <div className="w-full md:max-w-2xl mx-auto mb-16">
              <h2 className="text-xl md:text-2xl text-accent uppercase font-black">
                {data.top1Mes}
              </h2>
              <p className="text-base md:text-lg font-bold">Ventas totales:</p>
              <p className="mb-2 text-5xl md:text-6xl lg:text-7xl font-black leading-none">
                {formatNumberToCurrency(animatedTop1Total)} MXN
              </p>
              <div className="w-full h-16 bg-gray-200 rounded-full overflow-hidden mt-4 mb-2">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <p className="text-lg md:text-xl italic font-bold">
                ¡Este mes marcaste la diferencia con tu dedicación y entusiasmo!
              </p>
            </div>
          )}
          {data.top2Mes && data.top2Total && (
            <div className="w-full md:max-w-2xl mx-auto mb-16">
              <h2 className="text-xl md:text-2xl text-accent uppercase font-black">
                {data.top2Mes}
              </h2>
              <p className="text-base md:text-lg font-bold">Ventas totales:</p>
              <p className="mb-2 text-5xl md:text-6xl lg:text-7xl font-black leading-none">
                {formatNumberToCurrency(animatedTop2Total)} MXN
              </p>
              <div className="w-full h-16 bg-gray-200 rounded-full overflow-hidden mt-4 mb-2">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <p className="text-lg md:text-xl italic font-bold">
                Tus logros nos inspiran a seguir construyendo grandes historias.
              </p>
            </div>
          )}
          {data.top3Mes && data.top3Total && (
            <div className="w-full md:max-w-2xl mx-auto mb-16">
              <h2 className="text-xl md:text-2xl text-accent uppercase font-black">
                {data.top3Mes}
              </h2>
              <p className="text-base md:text-lg font-bold">Ventas totales:</p>
              <p className="mb-2 text-5xl md:text-6xl lg:text-7xl font-black leading-none">
                {formatNumberToCurrency(animatedTop3Total)} MXN
              </p>
              <div className="w-full h-16 bg-gray-200 rounded-full overflow-hidden mt-4 mb-2">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <p className="text-lg md:text-xl italic font-bold">
                Un mes donde todo fue posible gracias a tu esfuerzo.
              </p>
            </div>
          )}
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
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
      <section className="w-full bg-white text-accent py-16 md:py-40 relative overflow-hidden font-bold">
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[-40px] left-[-20px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/form-1.png"
            width={400}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-[200px] right-[-300px] p-4 z-0 hidden md:block"
        >
          <Image
            src="/img/icon-2.png"
            width={400}
            height={100}
            alt="Decorative icon"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-0 right-0 p-4 z-0 block"
        >
          <Image
            src="/img/icon-3-y.png"
            width={400}
            height={100}
            alt="Decorative icon"
            className="w-32 md:w-64 lg:w-96"
          />
        </motion.div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase leading-tight"
          >
            ¡Tus números hablan de éxito!
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-center text-gray-600 mt-6 md:mt-8 mb-8 md:mb-12"
          >
            Este año, tu esfuerzo y dedicación llevaron nuestros productos a más
            hogares que nunca.
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl bg-white text-gray-800 p-4 sm:p-6 md:p-8 mx-auto text-center"
          >
            <h3 className="text-base sm:text-lg md:text-3xl font-semibold text-gray-600">
              Total de productos vendidos
            </h3>
            <h4 className="text-5xl sm:text-6xl md:text-[100px] font-bold text-[#F35866] mt-2 leading-tight">
              {formatNumber(animatedVendidos)}
            </h4>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-4xl mx-auto px-4 md:px-0 mt-8 md:mt-12"
          >
            <ul className="space-y-4">
              <motion.li
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl"
              >
                <span className="text-gray-400 mr-2 flex-shrink-0">•</span>
                <span>
                  Cada producto representa una historia de bienestar que
                  compartiste.
                </span>
              </motion.li>
              <motion.li
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl"
              >
                <span className="text-gray-400 mr-2 flex-shrink-0">•</span>
                <span>
                  Eres parte de los momentos especiales de miles de personas.
                </span>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="max-w-3xl my-8 md:my-16 text-center mx-auto px-4 md:px-0"
          >
            <p className="text-sm sm:text-base md:text-lg italic text-gray-600">
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-primary uppercase "
          >
            Tus estrellas favoritas
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-center text-gray-600 mt-8 mb-8 md:mb-12 font-bold"
          >
            Estos fueron los productos que hicieron historia en tu negocio este
            año.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 max-w-5xl row-gap-4 mx-auto p-8">
            {products.map((product, index) => (
              <div
                key={`product-${product.image}-${index}`}
                style={{ perspective: "1000px" }}
                className="w-full relative "
              >
                <div className="absolute top-[-100px] left-[-40px] text-primary p-2 z-10 text-[300px] font-black">
                  {index + 1}
                </div>
                <motion.div
                  // 2) Add shadow & rounding
                  className="
          bg-white py-8 text-center text-gray-600 rounded-2xl overflow-hidden 
          shadow-xl 
          w-4/4 mx-auto
        "
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  // 3) Define your starting transform values (no rotation, no offset)
                  initial={{ rotateX: 0, rotateY: 0, y: 0 }}
                  // 4) Animate with an array of values for a "wobble" effect
                  animate={{
                    // Slight back-and-forth rotation on X and Y axis
                    rotateX: [0, 6, 0],
                    rotateY: [0, 6, 0],
                    // Move card slightly up/down
                    y: [0, -10, 0],
                  }}
                  // 5) Control timing, looping, etc.
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse", // goes forward then back
                  }}
                >
                  {/* Card Content */}
                  {product.image !== null ? (
                    <>
                      <div className="relative aspect-square mb-4 overflow-hidden bg-white w-3/4 mx-auto">
                        {product.image && (
                          <Image
                            src={`/img/p/${product.image}.jpg`}
                            alt={String(product.name ?? "")}
                            layout="fill"
                            objectFit="cover"
                          />
                        )}
                      </div>
                      <h4 className="text-lg font-bold">{product.name}</h4>
                      <p className="text-2xl font-black mt-2 text-primary">
                        {product.sales ?? 0} unidades vendidas
                      </p>
                    </>
                  ) : (
                    <div className="relative aspect-square mb-4 overflow-hidden bg-white w-3/4 mx-auto px-16 min-h-[420px]">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="text-2xl font-black mt-2 text-primary">
                          {product.sales ?? 0} unidades vendidas
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
          <motion.p
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-center mt-8 md:mt-12 italic text-gray-600 font-black mb-16 md:mb-32"
          >
            Con cada producto vendido, dejaste huella en el corazón de tus
            clientes.
          </motion.p>
        </div>
      </section>
      {/* SECTION 6 */}
      <section className="bg-gradient-to-br from-accent to-accent/90 py-16 md:py-40 text-white relative overflow-hidden">
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100, y: -100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[-80px] left-[-100px] md:top-[-160px] md:left-[-200px] p-2 md:p-4 z-0"
        >
          <Image
            src="/img/icon-1.png"
            width={175}
            height={50}
            alt="Decorative icon"
            className="w-[175px] md:w-[350px] h-auto"
          />
        </motion.div>
        <div className="container mx-auto p-4">
          <div className="block md:flex items-center">
            <div className="w-full md:w-1/2 mb-4">
              <div className="md:max-w-md md:mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-left leading-tight">
                  Conectando con el mundo desde tu Sitio Natura Digital
                </h2>
                <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-highlight text-left">
                  Este año, tus esfuerzos en el mundo digital marcaron la
                  diferencia.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 relative h-full w-full md:w-1/2">
              <div className="absolute -inset-1 bg-white/20 rounded-3xl blur-xl -z-10"></div>
              <motion.h3
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl sm:text-2xl font-semibold text-yellow-200 mb-4 flex items-center gap-3"
              >
                <span className="bg-yellow-200/20 p-2 rounded-lg inline-flex">
                  <span>👥</span>
                </span>
                Clientes alcanzados
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 relative inline-flex items-center"
              >
                {formatNumber(animatedClientes)}
                <span className="text-2xl sm:text-3xl md:text-4xl absolute -top-4 -right-4 md:-top-6 md:-right-6">
                  ✨
                </span>
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-white/90"
              >
                Cada cliente representa una conexión auténtica, creada a través
                de tu compromiso y visión.
              </motion.p>
              <motion.h3
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-200 mb-4 flex items-center gap-2"
              >
                Tu impacto digital <span>→</span>
              </motion.h3>
              <ul className="space-y-4 md:space-y-6">
                <motion.li
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-yellow-200 text-2xl leading-none">
                    •
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white/90">
                    Tu Sitio Natura Digital fue una puerta al éxito, llevando
                    bienestar y belleza a más personas.
                  </span>
                </motion.li>
                <motion.li
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-yellow-200 text-2xl leading-none">
                    •
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white/90">
                    Eres un ejemplo de cómo aprovechar el mundo digital para
                    transformar vidas.
                  </span>
                </motion.li>
              </ul>
            </div>
          </div>
          {/* <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-8 md:mt-12 bg-highlight p-4 sm:p-6 md:p-8 text-center text-white rounded-2xl"
          >
            <p className="text-base sm:text-lg md:text-xl italic text-accent font-black">
              En 2025, sigamos construyendo conexiones que impulsen tu negocio
              al siguiente nivel. ¡El futuro digital es tuyo!
            </p>
          </motion.div> */}
        </div>
      </section>
      {/* SECTION 7*/}
      <div className="w-full bg-highlightBg text-white py-20 md:py-40 relative overflow-hidden">
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100, y: -100 }}
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
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
              El esfuerzo tiene sus recompensas
            </div>
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
              className="text-gray-800 p-6 md:p-8 text-center mb-8 md:mb-12 max-w-xl mx-auto"
            >
              <h3 className="text-lg md:text-5xl font-semibold mb-4 text-primary">
                Eres el lugar número:
              </h3>
              <div className="bg-red-400 relative w-[350px] h-[350px] flex justify-center items-center mx-auto rounded-full shadow-2xl">
                <div className="absolute top-0 left-[-60px] z-0">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="text-4xl md:text-5xl lg:text-9xl font-black text-primary mb-4"
                  >
                    <Image
                      src="/img/form-1.png"
                      width={150}
                      height={50}
                      alt="Form"
                      className="w-[200px] h-auto"
                    />
                  </motion.p>
                </div>
                <div className="absolute top-0 right-[-60px] z-0">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="text-4xl md:text-5xl lg:text-9xl font-black text-primary mb-4"
                  >
                    <Image
                      src="/img/form-2.png"
                      width={150}
                      height={50}
                      alt="Form"
                      className="w-[200px] h-auto"
                    />
                  </motion.p>
                </div>
                <div className="w-60 h-60 mx-auto bg-white rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="text-[80px] md:text-[80px] font-black text-primary mb-4"
                  >
                    {data.ranking}
                  </motion.p>
                </div>
              </div>
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
          </motion.div>
        </div>
      </div>
      {/* SECTION 8*/}
      <section className="w-full bg-background py-6 px-2 sm:py-8 sm:px-4 md:py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 hidden sm:block w-32 md:w-44 lg:w-56 h-auto z-0">
          <Image
            src="/img/form-2.png"
            width={150}
            height={50}
            alt="Form"
            className="w-[150px] h-auto md:w-[300px]"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h3
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                Prepárate para un 2025 de éxitos
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl">
                Estamos listas para más oportunidades y más ganancias.
              </p>
            </div>
          </motion.h3>
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] h-[80vh] sm:h-[85vh] lg:h-[90vh] xl:h-[95vh] 2xl:h-screen mx-auto">
            <Image
              src="/img/calendario.png"
              alt="Calendario de fechas especiales 2025"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>
      {/* SECTION 9 */}
      <section className="bg-white min-h-screen relative overflow-hidden">
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-[-30px] left-[-10px] sm:bottom-[-60px] sm:left-[-20px] md:bottom-[-120px] md:left-[-40px] p-2 md:p-4 z-10"
        >
          <Image
            src="/img/form-1.png"
            width={300}
            height={100}
            alt="Form"
            className="w-[80px] sm:w-[150px] md:w-[300px] h-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-0 right-0 sm:top-[-60px] sm:right-[-20px] md:top-[-120px] md:right-[-40px] p-2 md:p-4 z-10"
        >
          <Image
            src="/img/form-2.png"
            width={300}
            height={100}
            alt="Form"
            className="w-[60px] sm:w-[150px] md:w-[300px] h-auto"
          />
        </motion.div>

        <div className="container mx-auto max-w-7xl justify-center items-center flex flex-col text-center min-h-screen z-20 relative px-4 sm:px-6 md:px-8 pt-16 sm:pt-24 md:pt-32">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-3xl md:text-4xl font-black text-primary mt-4"
          >
            ¡Gracias por ser parte de esta gran familia Natura!
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-xl md:text-2xl text-secondary mt-4 font-black"
          >
            Nos llena de orgullo contar con consultorxs como tú, que cada día
            hacen posible este sueño. El 2025 será un año lleno de retos, pero
            también de recompensas. Sigamos construyendo juntxs un futuro más
            digital, más sostenible y más humano.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xs sm:text-base md:text-md mt-4 max-w-4xl text-gray-500 font-bold px-4 sm:px-6 md:px-0"
          >
            <p className="mb-4">
              Desarrollamos para ti esta guía interactiva que te permitirá
              resolver dudas sobre cómo digitalizar tu negocio, integrando
              nuestras herramientas clave:
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li>■ Revista Digital</li>
              <li>■ Mis Posteos</li>
              <li>■ Consultor Natura Digital</li>
            </ul>
            <p>
              ¡Prepárate para llevar tu presencia digital al siguiente nivel!
            </p>
          </motion.div>
          <motion.a
            href="https://drive.google.com/drive/u/0/folders/12wG6QoQY9EROJd2Qupw3csKpir3ajGWR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full mt-4 sm:mt-8 hover:bg-secondary transition-colors duration-300 ease-in-out text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Acceder a la Guía
          </motion.a>
        </div>
        <style jsx>{`
          @media (min-width: 768px) {
            section {
              background-image: url("/img/form-1.png"), url("/img/form-2.png");
              background-position: bottom -120px left -40px,
                top -120px right -40px;
              background-repeat: no-repeat;
              background-size: 300px auto, 300px auto;
            }
            section > div:first-child,
            section > div:nth-child(2) {
              display: none;
            }
          }
        `}</style>
      </section>
    </main>
  );
}
