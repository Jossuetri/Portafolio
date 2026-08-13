import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_META } from "../data";

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="flex h-64 items-center justify-center rounded-2xl border border-white/10 bg-[#12162A] sm:h-80">
          <span className="text-sm text-[#9BA3BF]">Foto trabajando</span>
        </div>

        <div>
          <span className="text-xs font-semibold tracking-widest text-[#F4763A]">SOBRE MÍ</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Transformando código y datos en soluciones de impacto
          </h2>
          <p className="mt-4 max-w-md text-[#9BA3BF]">
             Apasionado por la tecnología con bases sólidas en desarrollo web full-stack y análisis de datos. Me enfoco en escribir código limpio,
             optimizar la lógica backend en bases de datos y convertir problemas complejos en productos digitales eficientes y escalables.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {ABOUT_META.map(({ icon: Icon, label, value, accent }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} className="text-[#F4763A]" />
                <div>
                  <p className="text-[10px] text-[#5C6580]">{label}</p>
                  <p className={`text-sm ${accent ? "text-emerald-400" : "text-[#F5F6FA]"}`}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#skills"
            className="mt-7 inline-flex items-center gap-2 rounded-lg border border-[#F4763A]/40 px-5 py-3 text-sm font-medium text-[#F4763A] transition-colors hover:bg-[#F4763A]/10"
          >
            Más sobre mí <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
