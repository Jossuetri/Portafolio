import { ArrowRight, Download } from "lucide-react";
import { TECH_STACK, HERO_STATS, PROFILE } from "../data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Columna de texto */}
        <div>
          <span className="text-xs font-semibold tracking-widest text-accent">{PROFILE.role}</span>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Hola, soy
            <span className="block text-accent">{PROFILE.name}</span>
          </h1>

          <p className="mt-5 max-w-md text-muted">
            Construyo aplicaciones web escalables y de alto rendimiento que
            resuelven problemas reales y generan impacto.
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
            <li>✓ Código limpio</li>
            <li>✓ Soluciones escalables</li>
            <li>✓ Enfocado en el usuario</li>
          </ul>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-transform hover:scale-105"
            >
              Ver mi trabajo <ArrowRight size={16} />
            </a>
            <a
              href={PROFILE.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Descargar CV <Download size={16} />
            </a>
          </div>

          <p className="mt-8 text-xs text-subtle">Tecnologías con las que trabajo:</p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {TECH_STACK.map((t) => (
              <li
                key={t.name}
                title={t.name}
                aria-label={t.name}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-surface text-xs font-bold text-accent"
              >
                {t.short}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna visual */}
        <div className="relative flex justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-accent to-accent-2 opacity-25 blur-3xl" />
          <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl bg-gradient-to-br from-accent/25 to-accent-2/10 sm:h-96 sm:w-96">
          <img
              src="src/assets/foto.png"
              alt="Foto de perfil"
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 flex w-[90%] -translate-x-1/2 divide-x divide-white/10 rounded-xl border border-white/10 bg-surface/95 px-4 py-4 text-center shadow-xl backdrop-blur">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="flex-1 px-2">
                <p className="text-xl font-bold text-accent">{s.value}</p>
                <p className="text-[11px] text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
