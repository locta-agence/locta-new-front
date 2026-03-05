"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

const items = [
  { name: "ARTISTE 1", image: "/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6.jpg", href: "#" },
  { name: "ARTISTE 2", image: "/images/img-21.png", href: "#" },
  { name: "ARTISTE 3", image: "/images/source_imgi_69_442171572_983153753516259_113050789989027832_n.jpg", href: "#" },
  { name: "ARTISTE 4", image: "/images/1bf71634184186caa805f3c32ce4e9bbc631740c.jpg", href: "#" },
  { name: "ARTISTE 5", image: "/images/beeb9bba61fc7e58eeabf6a446cdc5f64b22af7b.png", href: "#" },
  { name: "ARTISTE 6", image: "/images/134f8f4eb69029543e7dce8d7ab181d3b98565d6-1.jpg", href: "#" },
];

const LARGE_H = 483.636;
const LARGE_W = 380;
const SMALL_H = 280;
const SMALL_W = 220;
const GAP = 24;
const PAD = 24;

function computeLayout(active: number) {
  const hasAbove = active > 0;
  const hasBelow = active < items.length - 1;

  let center: number;
  let height: number;

  if (hasAbove && hasBelow) {
    center = PAD + SMALL_H + GAP + LARGE_H / 2;
    height = PAD + SMALL_H + GAP + LARGE_H + GAP + SMALL_H + PAD;
  } else if (hasAbove) {
    center = PAD + SMALL_H + GAP + LARGE_H / 2;
    height = PAD + SMALL_H + GAP + LARGE_H + PAD;
  } else if (hasBelow) {
    center = PAD + LARGE_H / 2;
    height = PAD + LARGE_H + GAP + SMALL_H + PAD;
  } else {
    center = PAD + LARGE_H / 2;
    height = PAD + LARGE_H + PAD;
  }

  return { center, height };
}

export default function ScrollGallery() {
  const [active, setActive] = useState(0);
  const photoAreaRef = useRef<HTMLDivElement>(null);
  const isThrottled = useRef(false);

  const { center, height } = computeLayout(active);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (isThrottled.current) return;
    isThrottled.current = true;
    if (e.deltaY > 0) {
      setActive((prev) => Math.min(prev + 1, items.length - 1));
    } else {
      setActive((prev) => Math.max(prev - 1, 0));
    }
    setTimeout(() => { isThrottled.current = false; }, 600);
  }, []);

  useEffect(() => {
    const el = photoAreaRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const getPhotoStyle = (i: number): React.CSSProperties => {
    const diff = i - active;
    const isActive = diff === 0;
    const isAdjacent = Math.abs(diff) === 1;
    if (!isActive && !isAdjacent) return { display: "none" };

    const w = isActive ? LARGE_W : SMALL_W;
    const h = isActive ? LARGE_H : SMALL_H;

    let top: number;
    if (isActive) {
      top = center - LARGE_H / 2;
    } else if (diff === -1) {
      top = center - LARGE_H / 2 - GAP - SMALL_H;
    } else {
      top = center + LARGE_H / 2 + GAP;
    }

    return {
      position: "absolute",
      width: w,
      height: h,
      left: "50%",
      transform: "translateX(-50%)",
      top,
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      backgroundImage: `url(${items[i].image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#e5e5e5",
    };
  };

  return (
    <section className="w-full" style={{ height, transition: "height 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}>
      <div
        className="w-full h-full grid"
        style={{ gridTemplateColumns: "1fr 380px 1fr", padding: "0 80px" }}
      >
        {/* Left: text */}
        <div className="relative">
          <div
            style={{
              position: "absolute",
              top: center,
              transform: "translateY(-50%)",
              transition: "top 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            className="flex flex-col gap-8"
          >
            <h2
              style={{
                fontFamily: 'var(--Heading, "Armin Soft")',
                fontSize: "52px",
                fontWeight: 600,
                lineHeight: "100%",
                textTransform: "uppercase",
                color: "#000",
              }}
            >
              LOCTA<br />MÉDIA
            </h2>
            <div className="flex flex-col gap-4" style={{ maxWidth: "300px" }}>
              <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#000" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p style={{ fontFamily: 'var(--Heading, "Armin Soft")', fontSize: "14px", fontWeight: 300, color: "#000" }}>
                Sed do eiusmod tempor niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Center: photo stack — intercepts wheel */}
        <div
          ref={photoAreaRef}
          className="relative"
          style={{ height, cursor: "default", overflow: "hidden", transition: "height 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
        >
          {items.map((item, i) => {
            const diff = i - active;
            if (Math.abs(diff) > 1) return null;
            const isActive = i === active;
            return (
              <Link
                key={item.name}
                href={item.href}
                style={{ ...getPhotoStyle(i), cursor: "pointer", display: "block" }}
                onClick={(e) => {
                  if (!isActive) {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
              />
            );
          })}
        </div>

        {/* Right: artist info */}
        <div className="relative pl-12">
          {items.map((item, i) => (
            <div
              key={item.name}
              style={{
                position: "absolute",
                top: center,
                transform: "translateY(-50%)",
                opacity: i === active ? 1 : 0,
                transition: "opacity 0.4s ease, top 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                pointerEvents: i === active ? "auto" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--Heading, "Armin Soft")',
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  marginBottom: "8px",
                }}
              >
                {item.name}
              </p>
              <Link
                href={item.href}
                style={{
                  fontFamily: 'var(--Heading, "Armin Soft")',
                  fontSize: "14px",
                  fontWeight: 400,
                  textDecoration: "underline",
                  color: "#000",
                }}
              >
                En savoir plus
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
