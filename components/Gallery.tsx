"use client";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

// Duplicate for infinite loop
const IMGS = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

export default function Gallery() {
  return (
    <div
      style={{
        overflow: "hidden",
        height: "clamp(240px,40vw,500px)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          height: "100%",
          animation: "marquee 32s linear infinite",
          width: "max-content",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.animationPlayState =
            "running")
        }
      >
        {IMGS.map((src, i) => (
          <div
            key={i}
            style={{
              height: "100%",
              width: "clamp(180px,26vw,340px)",
              position: "relative",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <Image
              src={src}
              alt={`X ${i}`}
              fill
              style={{ objectFit: "cover", filter: "saturate(1.05)" }}
              sizes="340px"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform:translateX(0); }
          to   { transform:translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
