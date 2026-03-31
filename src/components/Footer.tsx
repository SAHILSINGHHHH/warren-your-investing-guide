const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-heading text-lg font-semibold text-primary">Warren</span>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <span className="text-sm text-muted-foreground">© 2026 Warren. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
