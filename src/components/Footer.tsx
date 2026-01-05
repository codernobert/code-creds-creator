const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-mono text-sm text-muted-foreground">
            Designed & Built by Norbert Odayo Okoth
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
