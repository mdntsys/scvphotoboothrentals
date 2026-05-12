import Marquee from "./Marquee";

const swatches = [
  "#e8b4a0",
  "#f3ece2",
  "#c97b5a",
  "#1a1612",
  "#9e5a3f",
  "#e5ddd2",
  "#faf6f1",
  "#6b5d52",
];

export default function EventGallery() {
  const tiles = Array.from({ length: swatches.length * 2 });
  return (
    <Marquee duration={60}>
      {tiles.map((_, i) => {
        const c = swatches[i % swatches.length];
        return (
          <div
            key={i}
            className="mx-3 h-48 md:h-64 aspect-square rounded-2xl border border-border overflow-hidden relative"
            style={{
              background: `linear-gradient(135deg, ${c} 0%, rgba(250,246,241,0.7) 100%)`,
            }}
          >
            <div className="absolute inset-0 flex items-end p-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-ink/60">
                Event #{i + 1}
              </span>
            </div>
          </div>
        );
      })}
    </Marquee>
  );
}
