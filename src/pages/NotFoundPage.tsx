import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Home, Phone } from "lucide-react";
import { Link } from "react-router";
import logoImg from "../assets/brand/logo.png";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-plus-jakarta flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Orbs decorativos de fundo */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Logo no topo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-8 flex items-center gap-3"
      >
        <img src={logoImg} alt="Além das Fronteiras" className="h-9 w-auto object-contain" />
        <div className="flex flex-col justify-center">
          <span className="font-poppins font-bold text-[18px] text-foreground leading-none tracking-tight">
            Além das
          </span>
          <span className="font-poppins font-medium text-[13px] text-primary leading-none">
            Fronteiras
          </span>
        </div>
      </motion.div>

      {/* Conteúdo central */}
      <div className="flex flex-col items-center text-center max-w-2xl relative z-10">

        {/* Número 404 animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
          className="relative mb-6"
        >
          <span className="font-poppins font-bold text-[160px] md:text-[200px] leading-none text-foreground/5 select-none absolute inset-0 flex items-center justify-center">
            404
          </span>
          <span className="font-poppins font-bold text-[120px] md:text-[160px] leading-none bg-gradient-to-br from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent relative z-10">
            404
          </span>
        </motion.div>

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-[14px] font-bold text-primary shadow-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Página não encontrada
        </motion.span>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-poppins font-bold text-[36px] md:text-[48px] text-foreground leading-tight mb-4"
        >
          Ops! Esta página não{" "}
          <span className="text-primary italic">existe</span>.
        </motion.h1>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[18px] text-muted-foreground font-medium leading-relaxed mb-10 max-w-lg"
        >
          O endereço que você tentou acessar não foi encontrado. Pode ter sido removido, renomeado ou você pode ter digitado incorretamente.
        </motion.p>

        {/* Ações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            to="/"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-[20px] font-bold text-[16px] hover:bg-primary/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
          >
            <Home size={20} />
            Voltar ao Início
          </Link>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.history.back(); }}
            className="bg-card border-2 border-border text-foreground px-8 py-4 rounded-[20px] font-bold text-[16px] hover:border-foreground hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-sm"
          >
            <ArrowLeft size={20} />
            Página Anterior
          </a>
        </motion.div>

        {/* Links rápidos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-border/40 w-full flex flex-col items-center gap-4"
        >
          <p className="text-[14px] text-muted-foreground font-medium">
            Ou acesse diretamente uma das nossas seções:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Início", href: "/#inicio" },
              { label: "Serviços", href: "/#servicos" },
              { label: "FAQ", href: "/#faq" },
              { label: "Emergência", href: "/#recursos" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 bg-card border border-border rounded-full text-[14px] font-bold text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contato de emergência discreto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <a
            href="tel:190"
            className="inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={14} />
            Precisa de ajuda emergencial? Ligue 190
          </a>
        </motion.div>
      </div>
    </div>
  );
}
