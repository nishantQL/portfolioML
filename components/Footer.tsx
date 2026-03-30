export default function Footer() {
  return (
    <footer className="py-8 border-t border-glassBorder/30 bg-[#0A0A0F] text-center relative z-10">
      <div className="container mx-auto px-6 flex items-center justify-center gap-2">
        <p className="text-muted text-sm font-medium">
          Built by Krishan Kant · 2026
        </p>
        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(107,63,160,0.9)] animate-pulse" />
      </div>
    </footer>
  );
}
