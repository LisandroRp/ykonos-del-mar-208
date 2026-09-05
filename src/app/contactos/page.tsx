import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { contacts, emergencies } from "@/data/contacts";

export const metadata = {
  title: "Contactos"
};

export default function ContactsPage() {
  return (
    <div className="page-shell">
      <PageHero compact title="Contactos" />

      <main className="px-3.5 pb-11 pt-6 min-[431px]:px-4">
        <section className="mx-1 mb-5">
          <h2 className="mb-1.5 text-xl font-semibold">¿Necesitás ayuda?</h2>
          <p className="m-0 text-sm leading-5 text-[#777]">
            Acá encontrás los contactos importantes durante tu estadía.
          </p>
        </section>

        <div className="space-y-3">
          {contacts.map((contact) => (
            <section
              key={contact.name}
              className="rounded-[18px] bg-white p-5 shadow-card"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#f2f1ee] text-[23px]">
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <div className="mb-1 text-base font-semibold">
                    {contact.name}
                  </div>
                  <div className="text-[13px] leading-5 text-[#888]">
                    {contact.description}
                  </div>
                </div>
              </div>

              <div
                className={`mt-4 grid gap-2.5 ${
                  contact.actions?.length === 2 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                {contact.actions?.map((action) => (
                  <a
                    key={action.href}
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      action.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className={`flex min-h-[45px] items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold no-underline ${
                      action.kind === "whatsapp"
                        ? "bg-[#25D366] text-white"
                        : "bg-[#f2f1ee] text-[#333]"
                    }`}
                  >
                    {action.kind === "whatsapp" ? (
                      <WhatsAppIcon />
                    ) : (
                      <PhoneIcon />
                    )}
                    {action.label}
                  </a>
                ))}
                {contact.placeholder ? (
                  <div className="flex min-h-[45px] items-center justify-center rounded-xl bg-[#f2f1ee] px-3 py-3 text-sm font-semibold text-[#aaa]">
                    {contact.placeholder}
                  </div>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <div className="mx-1 mb-3 mt-8 text-xs font-bold uppercase tracking-[1.6px] text-[#888]">
          Emergencias
        </div>

        <section className="overflow-hidden rounded-[18px] bg-white shadow-card">
          {emergencies.map((emergency) => (
            <a
              key={emergency.number}
              className="flex items-center gap-3 border-b border-[#eee] px-4 py-4 text-[#222] no-underline last:border-b-0"
              href={`tel:${emergency.number}`}
            >
              <div className="w-10 text-center text-[21px]">{emergency.icon}</div>
              <div className="flex-1">
                <div className="mb-0.5 text-sm font-semibold">
                  {emergency.name}
                </div>
                <div className="text-[13px] text-[#888]">{emergency.number}</div>
              </div>
              <div className="text-xl text-[#999]">›</div>
            </a>
          ))}
        </section>

        <p className="mx-1 mt-3 text-xs leading-5 text-[#999]">
          Ante una situación de riesgo inmediato, comunicate con el servicio de
          emergencias correspondiente.
        </p>

        <Footer />
      </main>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2.2 22l5.15-1.31A9.9 9.9 0 1 0 12.04 2Zm0 1.76a8.14 8.14 0 0 1 6.9 12.46 8.18 8.18 0 0 1-10.96 2.8l-.37-.22-3.05.78.8-2.95-.24-.38a8.15 8.15 0 0 1 6.92-12.49Zm-3.2 3.88c-.16 0-.42.06-.64.32-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.66 4.11 3.62 2.03.8 2.45.64 2.89.6.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.63 2.65a2 2 0 0 1-.45 2.11L8.09 9.69a16 16 0 0 0 6.22 6.22l1.21-1.21a2 2 0 0 1 2.11-.45c.85.3 1.74.51 2.65.63A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
