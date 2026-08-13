import React from "react";
import { SERVICES_BENTO } from "../data";

function BentoCard({ icon: Icon, title, desc, large }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#12162A] p-6 transition-colors hover:border-[#F4763A]/40 ${
        large ? "sm:p-8" : ""
      }`}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#F4763A] to-[#FF8C42]">
        <Icon size={18} />
      </div>
      <h3 className={`font-semibold ${large ? "text-lg" : ""}`}>{title}</h3>
      <p className="mt-2 text-sm text-[#9BA3BF]">{desc}</p>
    </div>
  );
}

export default function ServicesBento() {
  const top = SERVICES_BENTO.filter((s) => !s.big);
  const bottom = SERVICES_BENTO.filter((s) => s.big);

  return (
    <section id="skills" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <span className="text-xs font-semibold tracking-widest text-[#F4763A]">
          HABILIDADES Y SERVICIOS
        </span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Lo que hago mejor</h2>

        {/* fila superior: 3 tarjetas iguales */}
        <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
          {top.map(({ icon, title, desc }) => (
            <BentoCard key={title} icon={icon} title={title} desc={desc} />
          ))}
        </div>

        {/* fila inferior: 2 tarjetas más grandes */}
        <div className="mt-6 grid gap-6 text-left sm:grid-cols-2">
          {bottom.map(({ icon, title, desc }) => (
            <BentoCard key={title} icon={icon} title={title} desc={desc} large />
          ))}
        </div>
      </div>
    </section>
  );
}
