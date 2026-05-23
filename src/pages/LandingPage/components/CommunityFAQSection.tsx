import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, HelpCircle } from 'lucide-react';
import forumScreen from '../../../assets/mockups/Fórum.png';
import faqScreen from '../../../assets/mockups/FAQ.png';

export function CommunityFAQSection() {
  const [activeTab, setActiveTab] = useState<'forum' | 'faq'>('forum');

  return (
    <section id="faq" className="py-24 px-6 max-w-[1400px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">

        {/* Conteúdo de texto e apresentação */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-plus-jakarta font-bold text-[16px] uppercase tracking-wider mb-2 block">Comunidade e Suporte</span>
            <h2 className="font-poppins font-bold text-[48px] text-foreground leading-tight mb-6">Tire dúvidas, compartilhe experiências.</h2>
            <p className="font-sans font-normal text-[18px] text-muted-foreground leading-relaxed mb-8">
              Nosso espaço interativo conecta você a outros migrantes e especialistas. Encontre respostas rápidas nas nossas perguntas frequentes ou crie um novo tópico no fórum para pedir ajuda à comunidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Card Fórum */}
              <div
                className={`flex-1 flex items-center gap-4 bg-card border rounded-[24px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.02)] transition-all cursor-pointer ${activeTab === 'forum' ? 'border-primary/50 shadow-[0_0_20px_var(--primary-glow)]' : 'border-border hover:border-primary/30'}`}
                onClick={() => setActiveTab('forum')}
              >
                <div className={`p-3 rounded-2xl transition-colors ${activeTab === 'forum' ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground'}`}>
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-plus-jakarta font-bold text-[16px] text-foreground">Fórum Ativo</h4>
                  <p className="text-[14px] text-muted-foreground">Troque informações</p>
                </div>
              </div>

              {/* Card FAQ */}
              <div
                className={`flex-1 flex items-center gap-4 bg-card border rounded-[24px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.02)] transition-all cursor-pointer ${activeTab === 'faq' ? 'border-primary/50 shadow-[0_0_20px_var(--primary-glow)]' : 'border-border hover:border-primary/30'}`}
                onClick={() => setActiveTab('faq')}
              >
                <div className={`p-3 rounded-2xl transition-colors ${activeTab === 'faq' ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground'}`}>
                  <HelpCircle size={24} />
                </div>
                <div>
                  <h4 className="font-plus-jakarta font-bold text-[16px] text-foreground">FAQ Completo</h4>
                  <p className="text-[14px] text-muted-foreground">Dúvidas resolvidas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Frame de celular — idêntico ao AppPromoSection */}
        <div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end relative h-[620px]"
          style={{ perspective: "1200px" }}
        >
          {/* Glow de fundo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-full blur-[80px] -z-10 pointer-events-none" />

          {/* Frame físico — mesmo estilo do AppPromoSection */}
          <motion.div
            initial={{ opacity: 0, rotateY: -25, y: 40 }}
            whileInView={{ opacity: 1, rotateY: -15, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: -5, y: -8, z: 60 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            style={{ rotateX: 5 }}
            className="absolute top-0 right-[5%] md:right-[15%] w-[280px] h-[580px] bg-[#121212] rounded-[40px] border-[8px] border-[#2a2a2a] shadow-[20px_20px_60px_rgba(0,0,0,0.45)] overflow-hidden flex flex-col"
          >
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
              <div className="w-32 h-6 bg-[#2a2a2a] rounded-b-[16px]" />
            </div>

            {/* Conteúdo: imagem que troca conforme a aba ativa */}
            <div className="flex-1 relative overflow-hidden bg-[#121212]">
              <AnimatePresence mode="wait">
                {activeTab === 'forum' && (
                  <motion.img
                    key="forum"
                    src={forumScreen}
                    alt="Tela do Fórum no app Além das Fronteiras"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35, type: "spring", stiffness: 200, damping: 22 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {activeTab === 'faq' && (
                  <motion.img
                    key="faq"
                    src={faqScreen}
                    alt="Tela do FAQ no app Além das Fronteiras"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.35, type: "spring", stiffness: 200, damping: 22 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
