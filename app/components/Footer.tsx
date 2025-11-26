export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-3xl mx-auto px-16 py-12">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-black mb-4">Locta</h3>
            <p className="text-sm text-zinc-600">Agency services</p>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><a href="#" className="hover:text-black transition">About</a></li>
              <li><a href="#" className="hover:text-black transition">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><a href="#" className="hover:text-black transition">Privacy</a></li>
              <li><a href="#" className="hover:text-black transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-200 pt-8 text-center text-sm text-zinc-600">
          <p>&copy; 2024 Locta Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
