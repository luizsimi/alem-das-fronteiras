import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import img0 from "../../../assets/content/hero-main.png";
import img1 from "../../../assets/content/detail-1.png";
import img2 from "../../../assets/content/detail-2.png";
import img3 from "../../../assets/content/detail-3.png";
import img4 from "../../../assets/content/detail-4.png";

export default function HeroSection() {
  const lineVariants = {
    hidden: { y: "120%", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  // Animação de entrada stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.6, rotate: -10, y: 60 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: { type: "spring", stiffness: 250, damping: 18, bounce: 0.5 },
    },
  };

  return (
    <section id="inicio" className="pt-40 pb-20 px-6 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-12 gap-6 items-center">
        {/* Bloco de Título e Chamada */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            bounce: 0.4,
          }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="flex flex-wrap gap-3 mb-2">
            <span className="px-4 py-2 bg-card border border-border rounded-full text-[14px] font-plus-jakarta font-bold text-primary shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />{" "}
              Proteção
            </span>
            <span className="px-4 py-2 bg-foreground text-background rounded-full text-[14px] font-plus-jakarta font-bold shadow-sm">
              Acolhimento
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-full text-[14px] font-plus-jakarta font-bold text-foreground shadow-sm">
              Direitos
            </span>
          </div>

          <h1 className="font-poppins font-bold text-[56px] md:text-[80px] leading-[0.95] tracking-tight text-foreground relative inline-block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-8 -right-16 md:-right-24 bg-card border-2 border-foreground rounded-[16px] px-4 py-2 shadow-[4px_4px_0_var(--foreground)] rotate-6 hidden sm:flex items-center gap-2 z-10"
            >
              <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
              <span className="font-plus-jakarta font-bold text-[14px] uppercase tracking-wider">
                Online
              </span>
            </motion.div>

            <span className="block overflow-hidden pb-2">
              <motion.span
                variants={lineVariants}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.1 }}
                className="block"
              >
                Sua <span className="text-primary italic">nova</span>
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-2">
              <motion.span
                variants={lineVariants}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.25 }}
                className="block"
              >
                jornada no
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-2">
              <motion.span
                variants={lineVariants}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.4 }}
                className="block"
              >
                <span className="relative inline-block">
                  Brasil
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4 text-primary/30"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 10 Q 50 20 100 10"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                </span>{" "}
                começa aqui.
              </motion.span>
            </span>
          </h1>

          <p className="text-[20px] text-muted-foreground leading-relaxed max-w-[500px] font-plus-jakarta font-medium mt-4">
            O ecossistema completo de informações para migrantes e refugiados.
            Seguro, oficial e focado no seu futuro.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#servicos"
              className="bg-foreground text-background px-8 py-5 rounded-[20px] font-plus-jakarta font-bold text-[18px] hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] transition-all flex items-center gap-3"
            >
              Explorar Guia <ArrowUpRight size={24} />
            </a>
          </div>
        </motion.div>

        {/* Grid Bento de Imagens à Direita */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-5 grid grid-cols-4 grid-rows-4 gap-4 h-[500px] lg:h-[650px]"
        >
          {/* Imagem de Destaque Principal */}
          <motion.div
            variants={itemVariants}
            className="col-span-4 row-span-2 rounded-[32px] overflow-hidden relative group"
          >
            <img
              src={img0}
              alt="Comunidade UFS"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#fefeff]/20 backdrop-blur-md rounded-[20px] p-4 border border-white/30 text-white inline-block">
                <h3 className="font-poppins font-bold text-[18px]">
                  Trabalhamos Juntos para Acolher
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Imagens Secundárias Adicionais */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-1 rounded-[24px] overflow-hidden relative group"
          >
            <img
              src={img1}
              alt="Voluntários da UFS auxiliando imigrantes na triagem de documentos"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-1 rounded-[24px] overflow-hidden relative group"
          >
            <img
              src={img2}
              alt="Refugiados participando de oficina de integração cultural"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-1 rounded-[24px] overflow-hidden relative group"
          >
            <img
              src={img3}
              alt="Atendimento jurídico gratuito para migrantes na UFS"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-1 rounded-[24px] overflow-hidden relative group"
          >
            <img
              src={img4}
              alt="Imigrantes em atividade de acolhimento e suporte emocional"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
