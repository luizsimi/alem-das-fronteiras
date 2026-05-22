import React from "react";
import { Heart, Shield, Globe2, Briefcase } from "lucide-react";

export default function ImpactBar() {
  return (
    <div className="w-full bg-[#121212] py-8 z-20 relative border-y border-[#2a2a2a]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 lg:gap-4">
          {[
            { icon: Heart, title: "Acolhimento", desc: "Seguro e humanizado" },
            { icon: Shield, title: "Proteção", desc: "Apoio jurídico oficial" },
            { icon: Globe2, title: "Integração", desc: "Comunidade conectada" },
            {
              icon: Briefcase,
              title: "Oportunidade",
              desc: "Vagas e capacitação",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-[16px] bg-[#f4f4f4]/5 flex items-center justify-center border border-white/10 shadow-sm">
                <item.icon className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-white text-[18px] tracking-wide">
                  {item.title}
                </h4>
                <p className="font-plus-jakarta font-medium text-[#6c7c93] text-[14px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
