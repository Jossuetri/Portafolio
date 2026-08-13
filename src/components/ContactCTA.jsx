import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-[#F4763A]/10 to-[#FF8C42]/5 p-10 text-center sm:flex-row sm:text-left">
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#F4763A]">CONECTEMOS</span>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">¿Buscas sumar a tu equipo o desarrollar un proyecto?</h2>
          <p className="mt-2 max-w-md text-[#9BA3BF]">
             ¡Estoy listo para aportar valor en desarrollo de software y análisis de datos. ¡Hablemos!
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <span className="flex items-center gap-2 text-sm text-[#9BA3BF]">
            <Mail size={14} /> jossue.eugenio16@gmail.com
          </span>
          <span className="flex items-center gap-2 text-sm text-[#9BA3BF]">
            <Phone size={14} /> +57 (315) 373-2167
          </span>
          <a
            href="mailto:jossue.eugenio16@gmail.com"
            className="mt-1 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#F4763A] to-[#FF8C42] px-5 py-3 text-sm font-medium shadow-lg shadow-[#F4763A]/20 transition-transform hover:scale-105"
          >
            Enviar mensaje <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
