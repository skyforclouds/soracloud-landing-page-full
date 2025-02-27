
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">SoraCloud</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/docs" className="text-gray-600 hover:text-gray-900">Docs</Link>
            <Link to="/company" className="text-gray-600 hover:text-gray-900">Company</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Button variant="default">Request Access</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
