
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Slack } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">SoraCloud</h3>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
              <li><Link to="/docs" className="text-gray-600 hover:text-gray-900">Docs</Link></li>
              <li><Link to="/company" className="text-gray-600 hover:text-gray-900">Company</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Slack className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-gray-600 text-center">© 2025 SoraCloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
