export default function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className="py-6">
      <div className="page-container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="logo" className="w-10 h-10 rounded-md" />
          <span className="text-lg font-bold">FYS Creations</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm">About</a>
          <a href="#services" className="text-sm">Services</a>
          <a href="#works" className="text-sm">Works</a>
          <a href="#contact" className="btn-primary">Contact</a>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 btn-ghost"
            aria-label="toggle theme"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
