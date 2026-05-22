import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] pt-20 pb-10 border-t-8 border-primary text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Coluna da Marca e Slogan */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-12 bg-primary rounded-full shadow-[0_0_15px_var(--primary)]" />
              <div className="flex flex-col justify-center">
                <span className="font-poppins font-bold text-[20px] text-[#fefeff] leading-none tracking-wide">
                  ALÉM DAS FRONTEIRAS
                </span>
              </div>
            </div>
            <p className="text-[15px] text-[#fefeff]/80 font-plus-jakarta font-medium max-w-[240px]">
              Apoio ao imigrante e refugiado na UFS
            </p>
          </div>

          {/* Colunas com links rápidos e contato */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-5">
              <h4 className="font-poppins font-bold text-[14px] tracking-wider text-[#fefeff]">
                SERVIÇOS
              </h4>
              <div className="flex flex-col gap-4">
                {[
                  "Documentação",
                  "Integração Cultural",
                  "Suporte Acadêmico",
                  "Orientação Legal",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-plus-jakarta font-medium text-[14px] text-[#fefeff]/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-primary transition-all duration-300"></span>
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="font-poppins font-bold text-[14px] tracking-wider text-[#fefeff]">
                RECURSOS
              </h4>
              <div className="flex flex-col gap-4">
                {["Guias", "FAQ", "Eventos", "Blog"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-plus-jakarta font-medium text-[14px] text-[#fefeff]/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-primary transition-all duration-300"></span>
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 col-span-2 sm:col-span-1">
              <h4 className="font-poppins font-bold text-[14px] tracking-wider text-[#fefeff]">
                CONTATO
              </h4>
              <div className="flex flex-col gap-4 font-plus-jakarta font-medium text-[14px] text-[#fefeff]/70">
                <p>UFS Campus São Cristóvão</p>
                <p>Sergipe, Brasil</p>
                <a
                  href="mailto:contato@alemdasfronteiras.ufs.br"
                  className="hover:text-primary transition-colors break-all"
                >
                  contato@alemdasfronteiras.ufs.br
                </a>
                <a
                  href="tel:+557931940000"
                  className="hover:text-primary transition-colors"
                >
                  (79) 3194-0000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#fefeff]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-plus-jakarta font-medium text-[14px] text-[#fefeff]/60 text-center md:text-left">
            © 2026 Além das Fronteiras - UFS. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacidade", "Termos", "Acessibilidade"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-plus-jakarta font-medium text-[14px] text-[#fefeff]/60 hover:text-[#fefeff] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
