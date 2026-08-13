import React, { useState } from "react";
import { Quote, Star, ChevronDown } from "lucide-react";
import { FAQS } from "../data";

export default function TestimonialsAndFAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="testimonials" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#F4763A]">TESTIMONIOS</span>
          <h2 className="mt-3 text-3xl font-bold">Lo que dicen mis clientes</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#12162A] p-6">
            <Quote className="text-[#F4763A]" size={24} />
            <p className="mt-3 text-[#D6DAEB]">
              Un desarrollador excepcional. Entendió perfectamente nuestros
              requerimientos y entregó un producto de alta calidad a tiempo.
            </p>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#F4763A] to-[#FF8C42]" />
                <div>
                  <p className="text-sm font-semibold">Nombre del cliente</p>
                  <p className="text-xs text-[#9BA3BF]">Puesto, Empresa</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-[#F4763A]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold tracking-widest text-[#F4763A]">PREGUNTAS FRECUENTES</span>
          <h2 className="mt-3 text-3xl font-bold">Preguntas frecuentes</h2>

          <div className="mt-6 flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <div key={f.q} className="rounded-xl border border-white/10 bg-[#12162A]">
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  {f.q}
                  <ChevronDown
                    size={16}
                    className={`text-[#F4763A] transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm text-[#9BA3BF]">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
