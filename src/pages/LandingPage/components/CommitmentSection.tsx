import React from "react";
import { motion } from "motion/react";

export default function CommitmentSection() {
  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto">
      <div className="bg-card border-2 border-foreground rounded-[40px] p-10 md:p-16 shadow-[8px_8px_0_var(--foreground)] relative overflow-hidden">
        {/* Fundo geométrico decorativo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-foreground/5 rounded-full blur-[60px]" />

        <div className="text-center mb-12 relative z-10">
          <h2 className="font-poppins font-bold text-[36px] md:text-[56px] text-foreground leading-tight">
            Nosso <span className="text-primary italic">compromisso</span>
          </h2>
          <p className="text-[18px] text-muted-foreground font-plus-jakarta font-medium mt-4 max-w-2xl mx-auto">
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
            className="bg-background rounded-[32px] p-10 text-center border-2 border-border group hover:border-foreground transition-colors"
          >
            <div className="font-poppins font-bold text-[64px] text-primary group-hover:scale-110 transition-transform leading-none">
              100%
            </div>
            <div className="font-plus-jakarta font-bold text-[18px] text-foreground mt-4">
              Acesso Gratuito
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-[#121212] rounded-[32px] p-10 text-center border-2 border-[#121212] group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="font-poppins font-bold text-[64px] text-[#fefeff] group-hover:scale-110 transition-transform leading-none relative z-10">
              Zero
            </div>
            <div className="font-plus-jakarta font-bold text-[18px] text-[#fefeff] mt-4 relative z-10">
              Burocracia Digital
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="bg-primary rounded-[32px] p-10 text-center border-2 border-primary group shadow-inner"
          >
            <div className="font-poppins font-bold text-[64px] text-primary-foreground group-hover:scale-110 transition-transform leading-none">
              24h
            </div>
            <div className="font-plus-jakarta font-bold text-[18px] text-primary-foreground mt-4">
              Informação Disponível
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
