import { Mail } from "lucide-react";
import { FOOTER_LINKS, FOOTER_SERVICES, PROFILE } from "../data";

// lucide-react ya no incluye logos de marcas, por eso van como SVG
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "GitHub", href: PROFILE.github, Icon: GithubIcon },
  { label: "LinkedIn", href: PROFILE.linkedin, Icon: LinkedinIcon },
  { label: "Email", href: `mailto:${PROFILE.email}`, Icon: Mail },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-accent to-accent-2 text-sm text-bg">
              {PROFILE.initials}
            </span>
            {PROFILE.name}
          </a>
          <p className="mt-3 text-sm text-muted">
            Construyendo soluciones digitales que generan impacto.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Enlaces rápidos</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
            {FOOTER_LINKS.map(({ label, id }) => (
              <a key={id} href={`#${id}`} className="hover:text-fg">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Servicios</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
            {FOOTER_SERVICES.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Conectar</p>
          <div className="mt-3 flex items-center gap-4">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-subtle">
        © {new Date().getFullYear()} {PROFILE.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
