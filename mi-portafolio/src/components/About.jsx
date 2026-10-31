import { ArrowUpRight } from "lucide-react";
import { ABOUT_META, ABOUT_TEXT } from "../data";

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="flex h-64 items-center justify-center rounded-2xl border border-white/10 bg-surface sm:h-80">
          <span className="text-sm text-muted">Foto trabajando</span>
        </div>

        <div>
          <span className="text-xs font-semibold tracking-widest text-accent">SOBRE MÍ</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Del código a los datos: soluciones que resuelven problemas reales
          </h2>
          <div className="mt-4 flex max-w-xl flex-col gap-3 text-muted">
            {ABOUT_TEXT.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {ABOUT_META.map(({ icon: Icon, label, value, accent }) => (
              <div key={label} className="flex min-w-0 items-center gap-2">
                <Icon size={16} className="shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="text-[11px] text-subtle">{label}</p>
                  <p className={`truncate text-sm ${accent ? "text-emerald-400" : "text-fg"}`}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#projects"
            className="mt-7 inline-flex items-center gap-2 rounded-lg border border-accent/40 px-5 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            Ver mis proyectos <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
