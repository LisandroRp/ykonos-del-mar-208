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
                    className={`flex min-h-[45px] items-center justify-center rounded-xl px-3 py-3 text-sm font-semibold no-underline ${
                      action.primary
                        ? "bg-[#222] text-white"
                        : "bg-[#f2f1ee] text-[#333]"
                    }`}
                  >
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
