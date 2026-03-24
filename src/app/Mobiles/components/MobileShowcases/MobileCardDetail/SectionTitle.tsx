export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-xs uppercase tracking-[0.2em] text-white/30 font-semibold mb-5">
      {children}
    </h2>
  );
}
