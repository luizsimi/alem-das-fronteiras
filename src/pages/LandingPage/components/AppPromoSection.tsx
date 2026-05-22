import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import appScreen1 from "../../../assets/mockups/tela-inicial.png";
import appScreen2 from "../../../assets/mockups/home.png";

interface AppPromoSectionProps {
  activeScreen: "front" | "back";
  setActiveScreen: React.Dispatch<React.SetStateAction<"front" | "back">>;
}

export default function AppPromoSection({
  activeScreen,
  setActiveScreen,
}: AppPromoSectionProps) {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto overflow-hidden">
      <div className="bg-[#121212] rounded-[48px] p-10 md:p-20 relative flex flex-col lg:flex-row items-center justify-between gap-16 shadow-[0_20px_60px_rgba(0,0,0,0.2)] border-2 border-[#121212]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Textos Informativos e Chamada de Ação */}
        <div className="relative z-10 lg:w-1/2">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-plus-jakarta font-bold text-[13px] mb-6 tracking-wide">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />{" "}
            NOVO APP DISPONÍVEL
          </span>
          <h2 className="font-poppins font-bold text-[48px] md:text-[60px] text-white leading-[1.05] mb-6">
            O seu <span className="text-primary italic">porto seguro</span> agora
            na palma da mão.
          </h2>
          <p className="text-[18px] text-white/70 font-plus-jakarta font-medium leading-relaxed mb-8 max-w-lg">
            Acesse serviços, agende reuniões com voluntários, encontre apoio
            jurídico e conecte-se com a comunidade. Tudo em um aplicativo
            rápido, seguro e totalmente gratuito.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#fefeff] text-[#121212] px-8 py-4 rounded-[20px] font-plus-jakarta font-bold text-[16px] hover:bg-[#d7e0ea] transition-colors flex items-center gap-3"
            >
              Baixar Aplicativo <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        {/* Container dos celulares com perspectiva 3D simulada */}
        <div
          className="relative z-10 lg:w-1/2 flex justify-center lg:justify-end h-[600px] w-full"
          style={{ perspective: "1200px" }}
        >
          {/* Phone 1: Tela Inicial */}
          <motion.div
            initial={false}
            animate={activeScreen === "back" ? "front" : "back"}
            variants={{
              back: {
                rotateY: -15,
                rotateX: 5,
                x: 80,
                y: 40,
                z: -100,
                zIndex: 10,
                opacity: 0.8,
              },
              front: {
                rotateY: -15,
                rotateX: 5,
                x: -20,
                y: 0,
                z: 0,
                zIndex: 20,
                opacity: 1,
              },
            }}
            whileHover={
              activeScreen === "back"
                ? { rotateY: -5, x: -10, z: 50 }
                : { rotateY: -5, x: 90, z: -50 }
            }
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute top-0 right-[15%] md:right-[25%] w-[280px] h-[580px] bg-[#121212] rounded-[40px] border-[8px] border-[#2a2a2a] shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
              <div className="w-32 h-6 bg-[#2a2a2a] rounded-b-[16px]"></div>
            </div>

            <div className="flex-1 relative flex flex-col overflow-hidden bg-[#121212]">
              <img
                src={appScreen1}
                alt="Tela Inicial do App"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Celular 2: Tela Principal (Home) */}
          <motion.div
            initial={false}
            animate={activeScreen === "front" ? "front" : "back"}
            variants={{
              back: {
                rotateY: -15,
                rotateX: 5,
                x: 80,
                y: 40,
                z: -100,
                zIndex: 10,
                opacity: 0.8,
              },
              front: {
                rotateY: -15,
                rotateX: 5,
                x: -20,
                y: 0,
                z: 0,
                zIndex: 20,
                opacity: 1,
              },
            }}
            whileHover={
              activeScreen === "front"
                ? { rotateY: -5, x: -10, z: 50 }
                : { rotateY: -5, x: 90, z: -50 }
            }
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute top-0 right-[15%] md:right-[25%] w-[280px] h-[580px] bg-[#f8f9fa] rounded-[40px] border-[8px] border-[#121212] shadow-[20px_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
              <div className="w-32 h-6 bg-[#121212] rounded-b-[16px]"></div>
            </div>

            <div className="flex-1 relative flex flex-col overflow-hidden bg-[#f8f9fa]">
              <img
                src={appScreen2}
                alt="Home do App"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Botão de Alternância entre as Telas */}
          <button
            onClick={() =>
              setActiveScreen((prev) => (prev === "front" ? "back" : "front"))
            }
            className="absolute bottom-4 right-[5%] md:right-[15%] z-50 w-14 h-14 bg-card border-2 border-foreground rounded-full flex items-center justify-center shadow-[4px_4px_0_var(--foreground)] text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[4px_4px_0_var(--primary-foreground)] transition-all group"
            aria-label="Trocar tela"
          >
            <ArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
