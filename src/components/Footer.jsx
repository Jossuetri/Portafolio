import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { FOOTER_LINKS, FOOTER_SERVICES } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#F4763A] to-[#FF8C42] text-sm">
              JA
            </span>
            Jossue Eugenio
          </div>
          <p className="mt-3 text-sm text-[#9BA3BF]">
            Transformando código y datos en soluciones de impacto.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Enlaces rápidos</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#9BA3BF]">
            {FOOTER_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Servicios</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#9BA3BF]">
            {FOOTER_SERVICES.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Conectar</p>
          <div className="mt-3 flex items-center gap-4">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="text-[#9BA3BF] transition-colors hover:text-white">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-[#5C6580]">
        © 2026 Jossue Alejandro Eugenio TRIANA. Todos los derechos reservados.
      </p>
    </footer>
  );
}
