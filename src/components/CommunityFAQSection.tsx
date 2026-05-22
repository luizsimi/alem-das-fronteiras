import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, Search, MessageSquare, Plus, Home, User, FileText,
  MessageCircle, HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react';

export function CommunityFAQSection() {
  const [activeTab, setActiveTab] = useState<'forum' | 'faq'>('forum');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const forumPosts = [
    {
      id: 1,
      title: "Como posso revalidar meu diploma?",
      category: "EDUCAÇÃO",
      author: "Aisha",
      replies: 2,
      status: "RESOLVIDO",
      color: "bg-[#9F2442]"
    },
    {
      id: 2,
      title: "Onde tirar o CPF para estrangeiros?",
      category: "DOCUMENTOS",
      author: "Carlos",
      replies: 3,
      status: "RESOLVIDO",
      color: "bg-[#121212]"
    },
    {
      id: 3,
      title: "Preciso de ajuda com o aluguel sem fiador",
      category: "MORADIA",
      author: "Anônimo",
      replies: 0,
      status: "",
      color: "bg-[#6C7C93]"
    }
  ];

  const faqs = [
    {
      id: 0,
      question: "Quem pode usar o app?",
      answer: "O aplicativo é voltado para imigrantes e refugiados que buscam apoio, acolhimento e oportunidades no Brasil, mas qualquer pessoa disposta a ajudar como voluntário ou mentor também pode se cadastrar e participar da nossa comunidade."
    },
    {
      id: 1,
      question: "O serviço é gratuito?",
      answer: "Sim, todas as funcionalidades básicas do aplicativo são 100% gratuitas para imigrantes e refugiados."
    },
    {
      id: 2,
      question: "Como agendo uma reunião?",
      answer: "Você pode ir na aba de 'Serviços' e escolher um dos especialistas disponíveis para marcar um horário online ou presencial."
    }
  ];

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
              <div className="flex-1 flex items-center gap-4 bg-card border border-border rounded-[24px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.02)] hover:border-primary/30 transition-colors cursor-pointer" onClick={() => setActiveTab('forum')}>
                <div className={`p-3 rounded-2xl transition-colors ${activeTab === 'forum' ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground'}`}>
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-plus-jakarta font-bold text-[16px] text-foreground">Fórum Ativo</h4>
                  <p className="text-[14px] text-muted-foreground">Troque informações</p>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 bg-card border border-border rounded-[24px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.02)] hover:border-primary/30 transition-colors cursor-pointer" onClick={() => setActiveTab('faq')}>
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

        {/* Container do preview interativo do aplicativo */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-full blur-[80px] -z-10" />

          {/* Mockup de celular em 3D simulado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[290px] xl:max-w-[340px] aspect-[1/2] bg-background border-[8px] border-card rounded-[48px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)] relative flex flex-col"
          >
            {/* Cabeçalho do aplicativo simulado */}
            <div className="bg-gradient-to-b from-primary to-primary/80 pt-12 pb-6 px-6 rounded-b-[40px] shrink-0 relative shadow-md">
              <div className="flex items-center gap-4 mb-6 text-white relative z-10">
                <ArrowLeft size={24} className="opacity-80" />
                <h3 className="font-poppins font-bold text-[24px] tracking-tight">Comunidade</h3>
              </div>

              <div className="bg-white rounded-[16px] h-12 flex items-center gap-3 mb-6 px-4 shadow-inner relative z-10">
                <Search size={20} className="text-primary" />
                <span className="text-muted-foreground/70 font-plus-jakarta font-medium text-[14px]">Buscar dúvidas ou informações...</span>
              </div>

              {/* Abas internas para alternar visualizações */}
              <div className="bg-white/20 p-1 rounded-[14px] flex relative z-10 backdrop-blur-sm">
                <button
                  onClick={() => setActiveTab('forum')}
                  className={`flex-1 rounded-[10px] py-2.5 font-sans font-bold text-[14px] transition-all ${activeTab === 'forum' ? 'bg-white text-[#121212] shadow-sm' : 'text-white/80 hover:text-white'}`}
                >
                  Fórum
                </button>
                <button
                  onClick={() => setActiveTab('faq')}
                  className={`flex-1 rounded-[10px] py-2.5 font-sans font-bold text-[14px] transition-all ${activeTab === 'faq' ? 'bg-white text-[#121212] shadow-sm' : 'text-white/80 hover:text-white'}`}
                >
                  FAQ
                </button>
              </div>
            </div>

            {/* Área de conteúdo rolável do app */}
            <div className="flex-1 overflow-hidden relative bg-background">
              <AnimatePresence mode="wait">

                {/* Visualização dos tópicos do Fórum */}
                {activeTab === 'forum' && (
                  <motion.div
                    key="forum"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 overflow-y-auto p-6 pb-28 space-y-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-plus-jakarta font-bold text-[18px] text-foreground">Últimas Perguntas</h4>
                      <span className="text-[12px] bg-border/50 px-3 py-1.5 rounded-full text-muted-foreground font-bold">3 resultados</span>
                    </div>

                    {/* Lista de tópicos recentes */}
                    {forumPosts.map((post) => (
                      <div key={post.id} className="bg-card rounded-[20px] p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-border/50">
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <h5 className="font-plus-jakarta font-bold text-[15px] text-foreground leading-snug">{post.title}</h5>
                          {post.status && (
                            <span className="shrink-0 text-[9px] font-bold bg-[#10b981]/10 text-[#10b981] px-2 py-1 rounded-md tracking-wider">
                              {post.status}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <span className={`text-[10px] font-bold ${post.color}/10 ${post.color.replace('bg-', 'text-')} px-2 py-1 rounded-md tracking-wider`}>
                              {post.category}
                            </span>
                            <span className="text-[12px] text-muted-foreground">Por {post.author}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <MessageCircle size={14} /> <span className="text-[13px] font-bold">{post.replies}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Visualização das Perguntas Frequentes (FAQ) */}
                {activeTab === 'faq' && (
                  <motion.div
                    key="faq"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 overflow-y-auto p-6 pb-28 space-y-4"
                  >
                    <h4 className="font-plus-jakarta font-bold text-[18px] text-foreground mb-4">Dúvidas Frequentes</h4>

                    {/* Lista expansível (Accordion) das perguntas */}
                    {faqs.map((faq) => (
                      <div key={faq.id} className="bg-card rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-border/50 overflow-hidden transition-all duration-300">
                        <button
                          className="w-full flex items-center justify-between p-5 text-left"
                          onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                        >
                          <span className={`font-plus-jakarta font-bold text-[14.5px] ${openFaq === faq.id ? 'text-primary' : 'text-foreground'}`}>
                            {faq.question}
                          </span>
                          {openFaq === faq.id ? (
                            <ChevronUp size={20} className="text-primary" />
                          ) : (
                            <ChevronDown size={20} className="text-muted-foreground" />
                          )}
                        </button>
                        <AnimatePresence>
                          {openFaq === faq.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-5 pb-5 pt-0">
                                <div className="w-full h-px bg-border/40 mb-4" />
                                <p className="font-sans font-normal text-[13.5px] text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Botão flutuante para criar tópico (visível apenas no fórum) */}
            <AnimatePresence>
              {activeTab === 'forum' && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute bottom-24 right-6 w-14 h-14 bg-gradient-to-tr from-primary to-primary/80 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 z-20 cursor-pointer hover:scale-105 transition-transform"
                >
                  <Plus size={24} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Menu de navegação inferior fictício */}
            <div className="absolute bottom-0 w-full bg-card h-[80px] rounded-t-[24px] shadow-[0_-4px_24px_rgba(0,0,0,0.06)] flex justify-between items-center px-8 z-30">
              <div className="flex flex-col items-center gap-1.5 text-muted-foreground">
                <Home size={22} />
                <span className="text-[11px] font-sans font-medium">Home</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-muted-foreground">
                <MessageSquare size={22} />
                <span className="text-[11px] font-sans font-medium">Chat</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-primary">
                <div className="bg-primary px-5 py-1.5 rounded-full text-primary-foreground">
                  <FileText size={20} />
                </div>
                <span className="text-[11px] font-sans font-medium">Comunidade</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-muted-foreground">
                <User size={22} />
                <span className="text-[11px] font-sans font-medium">Perfil</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
