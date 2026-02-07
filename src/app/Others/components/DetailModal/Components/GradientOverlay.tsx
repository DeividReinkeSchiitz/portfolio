export default function GradientOverlay() {
  return (
    <>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      {/* Ambient gradient orbs - CSS animations instead of framer-motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl animate-[float-orb_8s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl animate-[float-orb_8s_ease-in-out_infinite_1s_reverse]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
            bottom: "10%",
            right: "-10%",
          }}
        />
      </div>
    </>
  );
}
