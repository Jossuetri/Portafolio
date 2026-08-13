import React from "react";
import { MILESTONES } from "../data";

export default function Milestones() {
  return (
    <section id="achievements" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <span className="text-xs font-semibold tracking-widest text-[#F4763A]">
          TRAYECTORIA Y LOGROS
        </span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Hitos que importan</h2>

        <div className="relative mt-14 hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-white/10" />
          <div className="grid grid-cols-5 gap-4">
            {MILESTONES.map(({ year, icon: Icon, title, desc }) => (
              <div key={year} className="text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#F4763A] bg-[#0B0E1A]">
                  <Icon size={18} className="text-[#F4763A]" />
                </div>
                <p className="mt-4 text-sm font-semibold text-[#F4763A]">{year}</p>
                <p className="mt-1 font-medium">{title}</p>
                <p className="mt-1 text-sm text-[#9BA3BF]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* versión móvil: lista vertical */}
        <div className="mt-10 flex flex-col gap-6 text-left lg:hidden">
          {MILESTONES.map(({ year, icon: Icon, title, desc }) => (
            <div key={year} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#F4763A]">
                <Icon size={16} className="text-[#F4763A]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F4763A]">{year}</p>
                <p className="font-medium">{title}</p>
                <p className="text-sm text-[#9BA3BF]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
