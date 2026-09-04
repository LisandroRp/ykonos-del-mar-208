"use client";

import { useEffect, useState } from "react";
import { inventory } from "@/data/inventory";

export function InventoryList() {
  const [openId, setOpenId] = useState(inventory[0]?.id ?? "");
  const [menuOpen, setMenuOpen] = useState(false);

  const goToCategory = (id: string) => {
    setOpenId(id);
    setMenuOpen(false);
    window.history.pushState(null, "", `#${id}`);

    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
  };

  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (inventory.some((group) => group.id === id)) {
        setOpenId(id);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <>
      <section className="mx-1 mb-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="mb-1.5 text-xl font-semibold">
            Elementos del departamento
          </h2>
          <p className="m-0 text-sm leading-5 text-[#777]">
            Lista de referencia para revisar rápidamente qué hay disponible.
          </p>
        </div>

        <div className="relative shrink-0">
          <button
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex min-h-11 items-center gap-2 rounded-[14px] border border-line bg-white px-3 text-sm font-semibold text-[#333] shadow-card"
          >
            Categorías
            <span className="text-base leading-none text-[#999]">
              {menuOpen ? "▴" : "▾"}
            </span>
          </button>

          {menuOpen ? (
            <div className="absolute right-0 top-12 z-10 w-[235px] overflow-hidden rounded-[16px] border border-line bg-white p-1.5 shadow-feature">
              {inventory.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => goToCategory(group.id)}
                  className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#333] transition hover:bg-[#f4f3f0]"
                >
                  <span>{group.category}</span>
                  <span className="text-xs font-semibold text-[#999]">
                    {group.items.length}
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <div className="space-y-4">
        {inventory.map((group) => (
          <section
            id={group.id}
            key={group.id}
            className="scroll-mt-4 overflow-hidden rounded-[18px] bg-white shadow-card"
          >
            <button
              type="button"
              aria-expanded={openId === group.id}
              onClick={() =>
                setOpenId((current) => (current === group.id ? "" : group.id))
              }
              className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left text-base font-semibold"
            >
              <span>{group.category}</span>
              <span className="flex shrink-0 items-center gap-2">
                <span className="rounded-full bg-[#f2f1ee] px-3 py-1 text-xs font-semibold text-[#777]">
                  {group.items.length}
                </span>
                <span className="w-4 text-center text-lg font-light leading-none text-[#999]">
                  {openId === group.id ? "▴" : "▾"}
                </span>
              </span>
            </button>

            {openId === group.id ? (
              <div className="border-t border-line">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5 last:border-b-0"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="shrink-0 rounded-full bg-[#f2f1ee] px-3 py-1 text-xs font-semibold text-[#777]">
                      {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </>
  );
}
