import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-ink/5 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight mb-6 block">
            RCWD<span className="italic">esign</span><span className="text-brand-accent">.</span>
          </Link>
          <p className="text-brand-muted max-w-sm leading-relaxed">
            Crafting high-performance web applications, intelligent AI automations, and timeless print designs for forward-thinking brands.
          </p>
        </div>
        
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-6 text-brand-ink">Services</h4>
          <ul className="space-y-4 text-sm text-brand-muted">
            <li><Link to="/web-apps" className="hover:text-brand-accent transition-colors">Web App Development</Link></li>
            <li><Link to="/ai-integration" className="hover:text-brand-accent transition-colors">AI Integration</Link></li>
            <li><Link to="/print-design" className="hover:text-brand-accent transition-colors">Print Design</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-ink/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-muted uppercase tracking-widest">
        <p>© {new Date().getFullYear()} RCWDesign. All rights reserved.</p>
      </div>
    </footer>
  );
}
