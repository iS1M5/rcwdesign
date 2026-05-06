import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Code, Cpu, Printer } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Web App Development',
      description: 'Building powerful, scalable full-stack applications that outperform conventional websites.',
      icon: <Code className="w-8 h-8" />,
      link: '/web-apps',
      color: 'bg-blue-50'
    },
    {
      title: 'AI Integration',
      description: 'Streamlining workflows with n8n and AI to automate the heavy lifting for your business.',
      icon: <Cpu className="w-8 h-8" />,
      link: '/ai-integration',
      color: 'bg-purple-50'
    },
    {
      title: 'Print Design',
      description: 'Timeless design for flyers, magazines, business cards, and event invitations.',
      icon: <Printer className="w-8 h-8" />,
      link: '/print-design',
      color: 'bg-orange-50'
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-40 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
            Digital solutions crafted with <span className="italic">precision</span> and <span className="italic">purpose</span>.
          </h1>
          <p className="text-xl text-brand-muted leading-relaxed mb-12 max-w-2xl">
            I help businesses evolve through custom web applications, intelligent automation, and high-impact visual design.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-brand-ink text-brand-bg rounded-full font-medium flex items-center gap-2 hover:bg-brand-ink/90 transition-all group cursor-pointer"
            >
              View Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-sm uppercase tracking-[0.2em] text-brand-muted font-sans font-semibold mb-4">What I Do</h2>
              <h3 className="text-4xl md:text-5xl font-serif">Specialised services to elevate your digital presence.</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link} className="block h-full p-10 rounded-3xl border border-brand-ink/5 hover:border-brand-accent/20 transition-all hover:shadow-xl hover:shadow-brand-accent/5 bg-brand-bg">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 text-brand-ink group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-serif mb-4">{service.title}</h4>
                  <p className="text-brand-muted leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-ink group-hover:text-brand-accent transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80" 
              alt="Minimalist Workspace" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-brand-muted font-sans font-semibold mb-6">My Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Less noise, more <span className="italic">impact</span>.</h3>
            <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
              <p>
                In a world of digital clutter, I believe in the power of minimalism. My approach focuses on stripping away the unnecessary to let your core message shine.
              </p>
              <p>
                Whether it's a complex web application or a single business card, every pixel and every line of code is placed with intention.
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-brand-ink/5 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-serif mb-2">100%</div>
                <div className="text-xs uppercase tracking-widest text-brand-muted">Custom Solutions</div>
              </div>
              <div>
                <div className="text-3xl font-serif mb-2">10+</div>
                <div className="text-xs uppercase tracking-widest text-brand-muted">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto bg-brand-ink text-brand-bg rounded-[3rem] p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to start your next project?</h2>
          <p className="text-xl text-brand-bg/70 mb-12 max-w-2xl mx-auto">
            Let's collaborate to build something exceptional. I'm currently accepting new freelance projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-10 py-5 bg-brand-bg text-brand-ink rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
