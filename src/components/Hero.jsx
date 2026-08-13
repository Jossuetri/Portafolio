import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { TECH_ICONS, HERO_STATS } from "../data";
import foto from "../assets/foto_perfil.png";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Columna de texto */}
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#F4763A]">
            DESARROLLADOR DE SOFTWARE
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Hola, soy</h1>
          <h1 className="text-4xl font-bold leading-tight text-[#F4763A] sm:text-5xl">
            Jossue Eugenio
          </h1>

          <p className="mt-5 max-w-md text-[#9BA3BF]">
            Integro ingeniería de software y análisis de datos para construir aplicaciones de alto rendimiento y
            soluciones basadas en evidencia que resuelven problemas reales.
          </p>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#9BA3BF]">
            <span>✓ Código limpio</span>
            <span>✓ Soluciones escalables</span>
            <span>✓ Enfocado en el usuario</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="https://github.com/Jossuetri/Josu-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#F4763A] to-[#FF8C42] px-5 py-3 text-sm font-medium shadow-lg shadow-[#F4763A]/20 transition-transform hover:scale-105"
            >
              Ver mi trabajo <ArrowRight size={16} />
            </a>
            <a
              href="/cv_jossue4.pdf"
              download="cv_jossue4.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Descargar CV <Download size={16} />
            </a>
          </div>

          <p className="mt-8 text-xs text-[#5C6580]">Tecnologías con las que trabajo:</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {TECH_ICONS.map((t, i) => (
              <div
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#12162A] text-xs font-bold text-[#F4763A]"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Columna visual */}
        <div className="relative flex justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-[#F4763A] to-[#FF8C42] opacity-25 blur-3xl" />
          <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl bg-gradient-to-br from-[#F4763A]/25 to-[#FF8C42]/10 sm:h-96 sm:w-96">
            <img src={foto} alt="Foto de perfil" />
            {/*<span className="text-sm text-[#9BA3BF]">Tu foto aquí</span>*/}
          </div>

          <div className="absolute -bottom-6 left-1/2 flex w-[90%] -translate-x-1/2 divide-x divide-white/10 rounded-xl border border-white/10 bg-[#12162A]/95 px-4 py-4 text-center shadow-xl backdrop-blur">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="flex-1 px-2">
                <p className="text-xl font-bold text-[#F4763A]">{s.value}</p>
                <p className="text-[10px] text-[#9BA3BF]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
