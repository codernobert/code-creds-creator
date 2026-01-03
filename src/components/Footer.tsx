const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <p>Designed & Built by John Developer</p>
            <p className="mt-1 text-xs">© {new Date().getFullYear()}</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
