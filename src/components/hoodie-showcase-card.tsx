"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Rotate3d, X, ZoomIn } from "lucide-react";
import type { HoodieDesignSpec } from "@/data/products";
import { useCart } from "@/store/cart-context";


interface DtuAddToCartDetail {
  sku: string;
  colourway: string;
  colourwayLabel: string;
  size: string;
  name: string | null;
  batch: string | null;
  price: number;
  currency: string;
  quantity: number;
}

interface HoodieShowcaseCardProps {
  design: HoodieDesignSpec;
  onItemAdded: () => void;
}

const SHADOW_CARD_CSS = `
  :host {
    --taupe: transparent !important;
    --paper: #FAF6EE !important;
    --line: #E2D6C3 !important;
    --ink: #1E1614 !important;
    --ink-soft: #6E5D53 !important;
    --maroon: #781215 !important;
    --maroon-deep: #5E0D10 !important;
    background: transparent !important;
    display: block !important;
  }
  .wrap {
    max-width: none !important;
    margin: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    padding: 0 !important;
    gap: 0 !important;
  }
  .viewer {
    position: static !important;
    height: auto !important;
    min-height: 0 !important;
    padding: 0.25rem 0.5rem 1.35rem !important;
    background: transparent !important;
    border-bottom: none !important;
  }
  .stage {
    height: clamp(19.5rem, 31vw, 25rem) !important;
    min-height: 19.5rem !important;
  }
  .views {
    margin-top: 0.75rem !important;
    background: rgba(255, 255, 255, 0.9) !important;
    border-color: #E2D6C3 !important;
  }
  .panel {
    background: #FFFFFF !important;
    border: 1px solid #E2D6C3 !important;
    border-radius: 1.5rem !important;
    box-shadow: 0 1px 3px rgba(30, 22, 20, 0.04) !important;
    padding: 1.4rem 1.4rem 1.5rem !important;
    max-width: none !important;
    width: 100% !important;
    box-sizing: border-box !important;
    overflow-x: clip !important;
    align-self: stretch !important;
    min-width: 0 !important;
  }
  .chapter {
    min-height: 0 !important;
    justify-content: flex-start !important;
    gap: 1rem !important;
    padding-block: 0 1rem !important;
  }
  .chapter.last {
    display: none !important;
  }
  .design {
    display: none !important;
  }
  h2 {
    font-family: var(--font-serif), 'Cormorant Garamond', Georgia, serif !important;
    font-style: italic !important;
    font-weight: 600 !important;
    font-size: clamp(2.05rem, 2.85vw, 2.6rem) !important;
    line-height: 1.05 !important;
    letter-spacing: 0.01em !important;
    color: #1E1614 !important;
  }
  .chapter > div > .lede {
    display: none !important;
  }
  .sizes {
    grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
    gap: 0.35rem !important;
  }
  .sizes label {
    min-height: 2.35rem !important;
    padding: 0 0.25rem !important;
    background: #FAF6EE !important;
    border-color: #E2D6C3 !important;
    font-size: 0.8125rem !important;
  }
  .sizes label:has(:checked) {
    background: #781215 !important;
    border-color: #781215 !important;
    color: #FAF6EE !important;
  }
  .put-name-card {
    display: grid !important;
    gap: 0.85rem !important;
    padding: 1rem 1.1rem !important;
    background: #FAF6EE !important;
    border: 1.5px solid #E2D6C3 !important;
    border-radius: 14px !important;
    box-shadow: none !important;
    width: 100% !important;
    max-width: none !important;
    box-sizing: border-box !important;
  }
  .put-name-card .sq-box {
    display: inline-grid !important;
    place-items: center !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
    border: 1.5px solid #E2D6C3 !important;
    border-radius: 5px !important;
    background: #FFFFFF !important;
    color: #781215 !important;
    flex-shrink: 0 !important;
  }
  .put-name-card .fields {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 0.75rem !important;
    max-width: none !important;
    width: 100% !important;
  }
  .put-name-card .field {
    min-width: 0 !important;
  }
  .put-name-card input,
  .put-name-card select {
    width: 100% !important;
    min-width: 0 !important;
    min-height: 48px !important;
    font-size: max(1rem, 1em) !important;
    background: #FFFFFF !important;
    border: 1px solid #D4C5B2 !important;
    box-sizing: border-box !important;
  }
  .buy {
    position: static !important;
    background: #FFFFFF !important;
    border-top: 1px solid #E2D6C3 !important;
    margin: 0.25rem 0 0 !important;
    padding: 1rem 0 0 !important;
    width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    grid-template-columns: auto minmax(0, 1fr) !important;
    gap: 0.75rem 1rem !important;
  }
  .price {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: baseline !important;
    gap: 0.15rem 0.35rem !important;
    font-size: 1.45rem !important;
  }
  .sum {
    font-size: 0.85rem !important;
  }
  .add {
    max-width: 13.5rem !important;
    min-height: 3.1rem !important;
    border-radius: 9999px !important;
    font-size: 0.8125rem !important;
    letter-spacing: 0.14em !important;
    text-transform: uppercase !important;
    font-weight: 700 !important;
  }
  .dtu-highlights {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 0.6rem !important;
    margin-top: 1.1rem !important;
  }
  .dtu-hl-item {
    background: #FAF6EE !important;
    border: 1px solid #E2D6C3 !important;
    border-radius: 12px !important;
    padding: 0.7rem 0.85rem !important;
  }
  .dtu-hl-item--premium {
    background: #FDF4EE !important;
    border: 1.5px solid #781215 !important;
  }
  .dtu-hl-head {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 0.35rem !important;
  }
  .dtu-hl-badge {
    display: inline-block !important;
    padding: 0.12rem 0.4rem !important;
    border-radius: 9999px !important;
    background: #781215 !important;
    color: #FAF6EE !important;
    font-size: 0.5625rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    flex-shrink: 0 !important;
  }
  .dtu-hl-title {
    font-size: 0.75rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.04em !important;
    text-transform: uppercase !important;
    color: #781215 !important;
    margin: 0 !important;
  }
  .dtu-hl-sub {
    font-size: 0.78rem !important;
    line-height: 1.35 !important;
    color: #6E5D53 !important;
    margin: 0.2rem 0 0 !important;
  }
  @media (max-width: 520px) {
    .panel {
      padding: 1.1rem 1rem 1.25rem !important;
    }
    .sizes {
      grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
      gap: 0.3rem !important;
    }
    .sizes label {
      min-height: 2.2rem !important;
      font-size: 0.75rem !important;
    }
    .put-name-card .fields {
      grid-template-columns: 1fr !important;
    }
    .buy {
      margin: 0.25rem 0 0 !important;
      padding: 1rem 0 0 !important;
      grid-template-columns: minmax(0, 1fr) !important;
    }
    .add {
      max-width: 100% !important;
      min-width: 0 !important;
      width: 100% !important;
      box-sizing: border-box !important;
      justify-self: stretch !important;
    }
    .dtu-highlights {
      grid-template-columns: 1fr !important;
    }
  }
  @media (max-width: 360px) {
    .views button {
      min-width: 4.35rem !important;
      padding: 0 0.75rem !important;
      font-size: 0.875rem !important;
    }
  }
`;

export default function HoodieShowcaseCard({
  design,
  onItemAdded,
}: HoodieShowcaseCardProps) {
  const { addItem } = useCart();
  const hoodieRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeZoomIdx, setActiveZoomIdx] = useState<number | null>(null);
  const lightboxTitleId = useId();
  const gallery = design.gallery ?? [];

  const openZoom = (idx: number) => {
    setActiveZoomIdx(idx);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeZoom = () => {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
    }
    setActiveZoomIdx(null);
  };

  // Fallback light-dismiss for browsers without native <dialog closedby="any">
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || "closedBy" in HTMLDialogElement.prototype) return;

    let pressedOutside = false;
    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };
    const onPointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) dialog.close();
    };
    dialog.addEventListener("pointerdown", onPointerDown);
    dialog.addEventListener("pointerup", onPointerUp);
    return () => {
      dialog.removeEventListener("pointerdown", onPointerDown);
      dialog.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;

    const syncShadowCard = () => {
      const el = hoodieRef.current;
      const root = el?.shadowRoot;
      if (!root) return false;

      if (!root.getElementById("dtu-theme-sync")) {
        const style = document.createElement("style");
        style.id = "dtu-theme-sync";
        style.textContent = SHADOW_CARD_CSS;
        root.appendChild(style);
      }

      const heading = root.querySelector("h2");
      if (heading && heading.textContent !== design.title) {
        heading.textContent = design.title;
      }

      const highlightsEl = root.querySelector(".dtu-highlights");
      if (highlightsEl && highlightsEl.getAttribute("data-synced") !== design.id) {
        highlightsEl.setAttribute("data-synced", design.id);
        highlightsEl.innerHTML = design.highlights
          .map(
            (item) => `
              <div class="dtu-hl-item${item.highlight ? " dtu-hl-item--premium" : ""}">
                <div class="dtu-hl-head">
                  <p class="dtu-hl-title">${item.label}</p>
                  ${item.highlight ? `<span class="dtu-hl-badge">Premium</span>` : ""}
                </div>
                <p class="dtu-hl-sub">${item.detail}</p>
              </div>
            `
          )
          .join("");
      }

      return Boolean(root.getElementById("dtu-theme-sync") && heading && highlightsEl);
    };

    if (!syncShadowCard()) {
      timer = setInterval(() => {
        if (syncShadowCard() && timer) {
          clearInterval(timer);
          timer = null;
        }
      }, 150);
    }

    const el = hoodieRef.current;
    const handleReady = () => {
      if (syncShadowCard() && timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    el?.addEventListener("dtu:ready", handleReady);

    const handleAddToCart = (e: Event) => {
      e.stopPropagation();
      const detail = (e as CustomEvent<DtuAddToCartDetail>).detail;
      if (!detail) return;

      const customLabel = detail.name
        ? `${design.editionNumber} • ${detail.name.toUpperCase()}${
            detail.batch ? ` (${detail.batch})` : ""
          }`
        : `${design.editionNumber} • Standard`;

      const chosenSize = detail.size || "L";
      const trimmedName = detail.name?.trim() || "";
      const hasCustomName = trimmedName.length > 0;
      const nameExtra = hasCustomName ? 100 : 0;
      const mrpPrice = design.mrp + nameExtra;
      const advancePerUnit = design.baseAdvance + nameExtra;

      addItem({
        productId: design.id,
        name: design.title,
        color: customLabel,
        size: chosenSize,
        price: mrpPrice,
        discountPerUnit: design.discountPerUnit,
        advancePerUnit,
        customName: hasCustomName ? trimmedName.toUpperCase() : null,
      });

      onItemAdded();
    };

    el?.addEventListener("dtu:add-to-cart", handleAddToCart);

    return () => {
      if (timer) clearInterval(timer);
      el?.removeEventListener("dtu:ready", handleReady);
      el?.removeEventListener("dtu:add-to-cart", handleAddToCart);
    };
  }, [addItem, design, onItemAdded]);

  return (
    <article className="min-w-0 flex flex-col">
      {/* Floating Edition Label Above the 3D Model */}
      <header className="flex flex-wrap items-center justify-between gap-2 px-1 pb-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#781215] text-[#FAF6EE] text-[10px] font-bold tracking-[0.16em] uppercase">
            {design.editionNumber}
          </span>
          <span className="text-xs font-semibold text-[#1E1614]">
            {design.editionTag}
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#6E5D53]">
          <Rotate3d size={13} className="text-[#781215]" />
          360° 3D View
        </span>
      </header>

      {/* Horizontal Close-Up Gallery Above 3D Model (with desktop alignment spacer when absent) */}
      {gallery.length > 0 ? (
        <div
          className="grid grid-cols-3 gap-2.5 mb-3"
          role="group"
          aria-label={`${design.title} detail close-up images`}
        >
          {gallery.map((shot, idx) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => openZoom(idx)}
              className="group relative h-20 sm:h-24 rounded-2xl overflow-hidden border border-[#E2D6C3] bg-white shadow-xs hover:border-[#781215] transition-all cursor-zoom-in text-left"
              aria-label={`Zoom in: ${shot.label}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 1024px) 32vw, 210px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#1E1614]/70 via-[#1E1614]/25 to-transparent"
              />
              <span className="absolute bottom-1.5 left-2 right-7 text-[10px] font-semibold tracking-wide text-[#FAF6EE] truncate">
                {shot.label}
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 text-[#781215] flex items-center justify-center shadow-xs group-hover:bg-[#781215] group-hover:text-[#FAF6EE] transition-colors"
              >
                <ZoomIn size={11} />
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div aria-hidden="true" className="hidden lg:block lg:h-24 lg:mb-3" />
      )}

      {/* 3D Model outside card on top + Card body (Size, Customizer, Price, CTA) directly below */}
      <dtu-hoodie
        ref={(node) => {
          hoodieRef.current = node;
        }}
        design={design.colourwayKey}
        price={design.mrp}
        currency="INR"
      />

      {/* Accessible Native Lightbox Dialog for Zoomed Close-Up Shots */}
      {gallery.length > 0 && (
        <dialog
          ref={dialogRef}
          aria-labelledby={lightboxTitleId}
          onClose={() => setActiveZoomIdx(null)}
          {...({ closedby: "any" } as Record<string, string>)}
          className="dtu-lightbox m-auto w-[min(92vw,52rem)] max-h-[90dvh] rounded-3xl border border-[#E2D6C3] bg-[#FAF6EE] p-0 text-[#1E1614] shadow-2xl overflow-hidden"
        >
          {activeZoomIdx !== null && gallery[activeZoomIdx] && (
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-[#E2D6C3] bg-white">
                <h1
                  id={lightboxTitleId}
                  className="font-serif italic text-xl font-semibold text-[#1E1614]"
                >
                  {design.title} — {gallery[activeZoomIdx].label}
                </h1>
                <button
                  type="button"
                  onClick={closeZoom}
                  autoFocus
                  aria-label="Close zoom preview"
                  className="p-2 rounded-full border border-[#E2D6C3] bg-[#FAF6EE] hover:bg-[#781215] hover:text-[#FAF6EE] hover:border-[#781215] transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="relative w-full aspect-[3/2] bg-[#EFE5D6]">
                <Image
                  src={gallery[activeZoomIdx].src}
                  alt={gallery[activeZoomIdx].alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 820px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center justify-between gap-3 px-5 py-3 border-t border-[#E2D6C3] bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setActiveZoomIdx(
                      (activeZoomIdx - 1 + gallery.length) % gallery.length
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#E2D6C3] text-xs font-semibold text-[#1E1614] hover:border-[#781215] hover:text-[#781215] transition-colors cursor-pointer"
                >
                  <ChevronLeft size={14} />
                  Previous
                </button>
                <span className="text-xs font-medium text-[#6E5D53]">
                  {activeZoomIdx + 1} / {gallery.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveZoomIdx((activeZoomIdx + 1) % gallery.length)
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#E2D6C3] text-xs font-semibold text-[#1E1614] hover:border-[#781215] hover:text-[#781215] transition-colors cursor-pointer"
                >
                  Next
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}
        </dialog>
      )}
    </article>
  );
}

