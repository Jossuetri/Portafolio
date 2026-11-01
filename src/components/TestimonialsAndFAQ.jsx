import { useState } from "react";
import { Quote, Star, ChevronDown } from "lucide-react";
import { FAQS, TESTIMONIALS } from "../data";

export default function TestimonialsAndFAQ() {
  const [openFaq, setOpenFaq] = useState(0);
  const hasTestimonials = TESTIMONIALS.length > 0;

  return (
    <section id="faq"className="border-t border-white/5 px-6 py-20">
      <div className={`mx-auto grid gap-12 ${hasTestimonials ? "max-w-6xl md:grid-cols-2" : "max-w-3xl"}`}>
        {hasTestimonials && (
          <div>
            <span className="text-xs font-semibold tracking-widest text-accent">TESTIMONIOS</span>
            <h2 className="mt-3 text-3xl font-bold">Lo que dicen mis clientes</h2>

            <div className="mt-6 flex flex-col gap-4">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="rounded-2xl border border-white/10 bg-surface p-6">
                  <Quote className="text-accent" size={24} />
                  <blockquote className="mt-3 text-fg-soft">{t.quote}</blockquote>
                  <figcaption className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-bg">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted">{t.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-accent" aria-label="5 de 5 estrellas">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        <div>
          <span className="text-xs font-semibold tracking-widest text-accent">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold">Preguntas frecuentes</h2>

          <div className="mt-6 flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <div key={f.q} className="rounded-xl border border-white/10 bg-surface">
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-accent transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm text-muted">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
