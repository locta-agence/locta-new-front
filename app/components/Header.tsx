export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <nav className="max-w-3xl mx-auto px-16 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-black">
          Locta
        </div>
        <ul className="flex gap-8 text-sm font-medium text-zinc-600">
          <li><a href="#" className="hover:text-black transition">Home</a></li>
          <li><a href="#" className="hover:text-black transition">About</a></li>
          <li><a href="#" className="hover:text-black transition">Services</a></li>
          <li><a href="#" className="hover:text-black transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
