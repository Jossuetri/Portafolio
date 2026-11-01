import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data";

export default function ContactCTA() {
  return (
    <section id="contact" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-accent/10 to-accent-2/5 p-10 text-center sm:flex-row sm:text-left">
        <div>
          <span className="text-xs font-semibold tracking-widest text-accent">TRABAJEMOS JUNTOS</span>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">¿Tienes un proyecto en mente?</h2>
          <p className="mt-2 max-w-md text-muted">
            Hagamos realidad tus ideas. ¡Es solo un mensaje de distancia!
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-sm text-muted hover:text-fg">
            <Mail size={14} /> {PROFILE.email}
          </a>
          {PROFILE.phone && (
            <a href={`tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-sm text-muted hover:text-fg">
              <Phone size={14} /> {PROFILE.phone}
            </a>
          )}
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-1 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-transform hover:scale-105"
          >
            Enviar mensaje <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
