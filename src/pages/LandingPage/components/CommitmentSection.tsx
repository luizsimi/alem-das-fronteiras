import React from "react";
import { motion } from "motion/react";

export default function CommitmentSection() {
  return (
    <section className="py-10 px-6 max-w-[1400px] mx-auto">
      <div className="bg-card border-2 border-foreground rounded-[32px] p-8 md:p-10 shadow-[6px_6px_0_var(--foreground)] relative overflow-hidden">
        {/* Fundo geométrico decorativo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-foreground/5 rounded-full blur-[60px]" />

        <div className="text-center mb-8 relative z-10">
          <h2 className="font-poppins font-bold text-[32px] md:text-[44px] text-foreground leading-tight">
            Nosso <span className="text-primary italic">compromisso</span>
          </h2>
          <p className="text-[16px] text-muted-foreground font-plus-jakarta font-medium mt-3 max-w-2xl mx-auto">
            Estamos dando os primeiros passos com um propósito claro: criar o ambiente digital mais seguro e acessível para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-background rounded-[24px] p-6 text-center border-2 border-border group hover:border-foreground transition-colors"
          >
            <div className="font-poppins font-bold text-[48px] text-primary group-hover:scale-110 transition-transform leading-none">
              100%
            </div>
            <div className="font-plus-jakarta font-bold text-[16px] text-foreground mt-2">
              Acesso Gratuito
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-[#121212] rounded-[24px] p-6 text-center border-2 border-[#121212] group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="font-poppins font-bold text-[48px] text-[#fefeff] group-hover:scale-110 transition-transform leading-none relative z-10">
              Zero
            </div>
            <div className="font-plus-jakarta font-bold text-[16px] text-[#fefeff] mt-2 relative z-10">
              Burocracia Digital
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="bg-primary rounded-[24px] p-6 text-center border-2 border-primary group shadow-inner"
          >
            <div className="font-poppins font-bold text-[48px] text-primary-foreground group-hover:scale-110 transition-transform leading-none">
              24h
            </div>
            <div className="font-plus-jakarta font-bold text-[16px] text-primary-foreground mt-2">
              Informação Disponível
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
