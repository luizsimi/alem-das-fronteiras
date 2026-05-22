import React from "react";
import { motion } from "motion/react";
import { Phone, CheckCircle2 } from "lucide-react";

export default function EmergencyContacts() {
  return (
    <section id="recursos" className="py-24 bg-[#121212] text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full mb-8 font-plus-jakarta font-bold text-[16px] animate-pulse">
              <Phone size={20} /> Contatos de Emergência
            </div>
            <h2 className="font-poppins font-bold text-[56px] leading-[1] mb-6">
              Precisando de
              <br />
              ajuda imediata?
            </h2>
            <p className="text-[20px] text-white/70 font-plus-jakarta mb-8 max-w-md">
              Ligue gratuitamente de qualquer telefone. Os serviços funcionam 24h
              por dia em todo o Brasil.
            </p>

            <ul className="space-y-4">
              {[
                {
                  text: "Proteção total dos seus dados (LGPD)",
                  icon: CheckCircle2,
                },
                {
                  text: "Suporte especializado por órgãos oficiais",
                  icon: CheckCircle2,
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-[16px] font-plus-jakarta font-medium text-white/90"
                >
                  <item.icon size={24} className="text-primary" /> {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                num: "190",
                name: "Polícia Militar",
                color: "bg-card text-card-foreground",
              },
              {
                num: "192",
                name: "SAMU (Ambulância)",
                color: "bg-primary text-primary-foreground",
              },
              {
                num: "180",
                name: "Atendimento à Mulher",
                color: "bg-[#2a2a2a] text-white",
              },
              {
                num: "100",
                name: "Direitos Humanos",
                color: "bg-[#2a2a2a] text-white",
              },
            ].map((contact, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`${contact.color} p-8 rounded-[32px] flex flex-col justify-center items-center text-center shadow-lg border border-white/5 cursor-pointer`}
              >
                <span className="font-poppins font-bold text-[48px] leading-none mb-2">
                  {contact.num}
                </span>
                <span className="font-plus-jakarta font-bold text-[16px] opacity-80">
                  {contact.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
