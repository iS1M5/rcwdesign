import { motion } from 'motion/react';
import { CheckCircle2, Zap, Shield, Smartphone, Globe, Layers } from 'lucide-react';

export default function WebAppDev() {
  const benefits = [
    {
      title: 'Dynamic Interactivity',
      description: 'Unlike static websites, web apps provide a rich, app-like experience with real-time updates and complex user interactions.',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalability & Performance',
      description: 'Built on modern frameworks like React and Node.js, web apps are designed to handle growth and high traffic with ease.',
      icon: <Layers className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Enhanced Security',
      description: 'Advanced authentication and data encryption ensure that your business and user data remain protected.',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cross-Platform Reach',
      description: 'One codebase that works seamlessly across desktops, tablets, and mobile devices without the need for app stores.',
      icon: <Smartphone className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'SEO & Discoverability',
      description: 'Modern web apps are optimised for search engines, ensuring your business remains visible to potential clients.',
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Custom Functionality',
      description: 'From custom dashboards to complex booking systems, web apps are tailored to your specific business logic.',
      icon: <CheckCircle2 className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto border-b border-brand-ink/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Full-Stack <span className="italic">Web App</span> Development.
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed mb-8">
              Moving beyond the limitations of conventional websites to build powerful digital tools that drive business growth.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80" 
              alt="Web Development" 
              className="rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-ink text-brand-bg p-8 rounded-2xl hidden md:block max-w-xs">
              <p className="text-sm font-medium italic">"A website is a brochure. A web app is a business partner."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.2em] text-brand-muted font-sans font-semibold mb-4">The Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Why choose a Web App over a conventional website?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-brand-ink/5"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h4 className="text-xl font-serif mb-4">{benefit.title}</h4>
              <p className="text-brand-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-24 bg-brand-ink text-brand-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.2em] text-brand-bg/50 font-sans font-semibold mb-12">Modern Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-bold">React</span>
            <span className="text-2xl font-bold">TypeScript</span>
            <span className="text-2xl font-bold">Node.js</span>
            <span className="text-2xl font-bold">PostgreSQL</span>
            <span className="text-2xl font-bold">Tailwind CSS</span>
            <span className="text-2xl font-bold">Vite</span>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-brand-muted font-sans font-semibold mb-6">The Process</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-12">From concept to deployment.</h3>
            <div className="space-y-12">
              {[
                { step: '01', title: 'Discovery', text: 'Understanding your business goals and user needs.' },
                { step: '02', title: 'Architecture', text: 'Designing a robust and scalable system structure.' },
                { step: '03', title: 'Development', text: 'Writing clean, efficient, and maintainable code.' },
                { step: '04', title: 'Launch', text: 'Rigorous testing and seamless deployment.' }
              ].map((item) => (
                <div key={item.step} className="flex gap-8">
                  <div className="text-4xl font-serif text-brand-accent/20">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-brand-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1000&q=80" 
              alt="Development Process" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
