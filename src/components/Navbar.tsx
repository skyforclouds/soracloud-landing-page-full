
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">SoraCloud</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/docs" className="text-foreground/80 hover:text-foreground transition-colors">Docs</Link>
            <Link to="/company" className="text-foreground/80 hover:text-foreground transition-colors">Company</Link>
            <Link to="/blog" className="text-foreground/80 hover:text-foreground transition-colors">Blog</Link>
            <Button variant="default">Request Access</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
