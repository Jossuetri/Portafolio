import React from "react";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#F4763A]">
              PROYECTOS DESTACADOS
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Algunas cosas que he construido</h2>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm text-[#F4763A] sm:inline-flex">
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#12162A] transition-transform hover:-translate-y-1"
            >
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-[#1A1F35] to-[#12162A]">
                <span className="text-xs text-[#5C6580]">Vista previa</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                    style={{ backgroundColor: `${p.tagColor}22`, color: p.tagColor }}
                  >
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#9BA3BF]">{p.desc}</p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <a href="#" className="flex items-center gap-1 text-[#F4763A]">
                    Demo <ArrowUpRight size={12} />
                  </a>
                  <a href="#" className="flex items-center gap-1 text-[#9BA3BF]">
                    <Github size={12} /> Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
