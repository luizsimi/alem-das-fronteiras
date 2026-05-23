import React from "react";
import { motion } from "motion/react";
import {
  Globe2,
  FileText,
  Heart,
  Shield,
  GraduationCap,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";

export default function ServicesBentoGrid() {
  return (
    <section id="servicos" className="py-8 px-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
        <div className="max-w-2xl">
          <span className="text-primary font-plus-jakarta font-bold text-[13px] uppercase tracking-wider mb-1 block">
            O Guia Completo
          </span>
          <h2 className="font-poppins font-bold text-[28px] text-foreground leading-tight">
            Tudo que você precisa saber, organizado.
          </h2>
        </div>
        <div className="flex -space-x-4 hidden md:flex">
          <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background z-20 border-4 border-background">
            <Globe2 size={20} />
          </div>
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground z-10 border-4 border-background">
            <FileText size={20} />
          </div>
        </div>
      </div>

      {/* Definição do Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[140px]">
        {/* Card Destaque: Regularização Migratória */}
        <motion.a
          href="https://www.gov.br/pf/pt-br/assuntos/imigracao"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 0.98 }}
          className="md:col-span-2 md:row-span-2 border border-border/20 bg-[#121212] rounded-[24px] p-5 relative overflow-hidden group flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_var(--primary-glow)] hover:border-primary/40"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[80px] group-hover:bg-primary/50 transition-colors" />
          <div className="relative z-10">
            <div className="w-10 h-10 bg-card rounded-[12px] flex items-center justify-center text-foreground mb-2 shadow-xl">
              <Globe2 size={20} />
            </div>
            <h3 className="font-poppins font-bold text-[22px] text-white leading-tight mb-1">
              Regularização Migratória
            </h3>
            <p className="text-[13px] text-white/70 font-plus-jakarta font-medium max-w-sm leading-tight">
              Passo a passo para CRNM, Autorização de Residência, Refúgio e
              Naturalização.
            </p>
          </div>
          <div className="relative z-10 flex justify-between items-end mt-2">
            <div className="flex gap-2">
              <span className="px-3 py-1.5 bg-white/10 rounded-full text-white text-[12px] backdrop-blur-md">
                Vistos
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-full text-white text-[12px] backdrop-blur-md">
                DPRNM
              </span>
            </div>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </motion.a>

        {/* Card 2: Documentos Essenciais */}
        <motion.a
          href="https://www.gov.br/pt-br/servicos/inscrever-se-no-cpf-no-exterior"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 0.98 }}
          className="col-span-1 row-span-1 bg-primary rounded-[24px] p-4 text-primary-foreground flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_var(--primary-glow)]"
        >
          <div className="flex justify-between items-start">
            <FileText size={20} />
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
              <ArrowUpRight size={14} />
            </div>
          </div>
          <div>
            <h3 className="font-poppins font-bold text-[16px] mb-1 leading-tight">
              Documentos Essenciais
            </h3>
            <p className="text-[12px] text-white/80 leading-tight">
              CPF, Cartão SUS, CTPS e CNH.
            </p>
          </div>
        </motion.a>

        {/* Card 3: Assistência Social */}
        <motion.a
          href="https://www.gov.br/mds/pt-br/acoes-e-programas/cadastro-unico"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 0.98 }}
          className="col-span-1 row-span-1 bg-card border-2 border-border rounded-[24px] p-4 text-foreground flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_var(--primary-glow)] hover:border-primary/40"
        >
          <div className="flex justify-between items-start">
            <Heart size={20} className="text-primary" />
            <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
              <ArrowUpRight size={14} />
            </div>
          </div>
          <div>
            <h3 className="font-poppins font-bold text-[16px] mb-1 leading-tight">
              Assistência Social
            </h3>
            <p className="text-[12px] text-muted-foreground leading-tight">
              CadÚnico, CRAS e Bolsa Família.
            </p>
          </div>
        </motion.a>

        {/* Card 4: Direitos e Cidadania */}
        <motion.a
          href="https://www.dpu.def.br/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 0.98 }}
          className="col-span-1 md:col-span-2 row-span-1 bg-card border-2 border-foreground rounded-[24px] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_var(--primary-glow)] hover:border-primary/40"
        >
          <div className="absolute -right-2 -bottom-2 text-background z-0">
            <Shield size={80} />
          </div>
          <div className="relative z-10 max-w-sm">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background mb-2">
              <Shield size={16} />
            </div>
            <h3 className="font-poppins font-bold text-[18px] text-foreground leading-tight mb-1">
              Direitos e Cidadania
            </h3>
            <p className="text-[12px] text-muted-foreground leading-tight">
              Mecanismos de proteção contra abusos, racismo e acesso à justiça.
            </p>
          </div>
          <div className="relative z-10 mt-2 sm:mt-0 w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background group-hover:-translate-y-1 transition-transform shadow-xl shrink-0">
            <ArrowUpRight size={14} />
          </div>
        </motion.a>

        {/* Cards Extras: Educação e Saúde */}
        <motion.a
          href="https://carolinabori.mec.gov.br/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 0.98 }}
          className="col-span-1 bg-background border border-border rounded-[24px] p-4 text-foreground flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_var(--primary-glow)] hover:border-primary/40"
        >
          <GraduationCap size={20} className="text-primary mb-2" />
          <div>
            <h3 className="font-poppins font-bold text-[16px] mb-1 leading-tight">
              Educação
            </h3>
            <p className="text-[12px] text-muted-foreground leading-tight">
              Revalidação de diplomas e cursos.
            </p>
          </div>
          <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors mt-auto">
            <ArrowUpRight size={14} />
          </div>
        </motion.a>

        <motion.a
          href="https://www.gov.br/saude/pt-br/assuntos/sus"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 0.98 }}
          className="col-span-1 bg-background border border-border rounded-[24px] p-4 text-foreground flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_var(--primary-glow)] hover:border-primary/40"
        >
          <Stethoscope size={20} className="text-primary mb-2" />
          <div>
            <h3 className="font-poppins font-bold text-[16px] mb-1 leading-tight">Saúde</h3>
            <p className="text-[12px] text-muted-foreground leading-tight">
              Acesso ao SUS e Saúde Mental.
            </p>
          </div>
          <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors mt-auto">
            <ArrowUpRight size={14} />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
