import { ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import { PROJECTS, PROFILE } from "../data";

const external = { target: "_blank", rel: "noreferrer" };

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold tracking-widest text-accent">
              PROYECTOS DESTACADOS
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Algunas cosas que he construido</h2>
          </div>
          {PROFILE.github && (
            <a href={PROFILE.github} {...external} className="hidden items-center gap-1 text-sm text-accent hover:underline sm:inline-flex">
              Ver todos <ArrowRight size={14} />
            </a>
          )}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-surface-2 to-surface">
                {p.image ? (
                  <img src={p.image} alt={`Vista previa de ${p.title}`} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <span className="text-xs text-subtle">Vista previa</span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium"
                    style={{ backgroundColor: `${p.tagColor}22`, color: p.tagColor }}
                  >
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm text-muted">{p.desc}</p>
                {(p.demo || p.repo) && (
                  <div className="mt-4 flex items-center gap-4 text-sm">
                    {p.demo && (
                      <a href={p.demo} {...external} className="flex items-center gap-1 text-accent hover:underline">
                        Demo <ArrowUpRight size={12} />
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} {...external} className="flex items-center gap-1 text-muted hover:text-fg">
                        <Code2 size={12} /> Código
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
