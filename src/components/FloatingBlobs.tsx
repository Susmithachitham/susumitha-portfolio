export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-blob-delayed" />
      <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-blob" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-1/3 -left-20 w-72 h-72 rounded-full bg-secondary/5 blur-3xl animate-blob-delayed" style={{ animationDelay: '-6s' }} />
    </div>
  );
}
