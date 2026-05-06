import { motion } from 'motion/react';
import { Palette, Layout, PenTool, Image, FileText, CreditCard } from 'lucide-react';

export default function PrintDesign() {
  const services = [
    {
      title: 'Business Cards',
      description: 'Make a lasting first impression with premium, tactile business card designs.',
      icon: <CreditCard className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Flyers & Posters',
      description: 'High-impact visual designs for events, promotions, and brand awareness.',
      icon: <Image className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Magazine Inclusions',
      description: 'Professional layout design for advertisements and editorial features.',
      icon: <Layout className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Event Invitations',
      description: 'Elegant and memorable designs for weddings, corporate events, and galas.',
      icon: <FileText className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Brand Identity',
      description: 'Cohesive visual systems including logos, typography, and colour palettes.',
      icon: <Palette className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Custom Illustrations',
      description: 'Unique vector artwork and illustrations tailored to your brand story.',
      icon: <PenTool className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto border-b border-brand-ink/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Conventional <span className="italic">Print</span> Design.
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed mb-8">
              Timeless visual communication for the physical world. High-quality design for flyers, magazines, and more.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://drive.google.com/file/d/1OJvAh58h1uX7wGrqNZWkop-bm50mDC9m/view?usp=sharing" 
              alt="Print Design" 
              className="rounded-3xl shadow-xl w-full object-cover aspect-[5/4]"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-2xl hidden md:block max-w-xs">
              <p className="text-sm font-medium italic">"Design is thinking made visual." — Saul Bass</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.2em] text-brand-muted font-sans font-semibold mb-4">The Collection</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Design services for every physical touchpoint.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-3xl bg-white border border-brand-ink/5 hover:border-orange-500/20 transition-all"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif mb-4">{service.title}</h4>
              <p className="text-brand-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Section */}
      <section className="px-6 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-brand-muted font-sans font-semibold mb-6">Quality First</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">Print-ready precision.</h3>
            <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
              <p>
                Digital design is only half the battle. I ensure every file is perfectly prepared for the press, with correct bleeds, margins, and colour profiles (CMYK).
              </p>
              <p>
                I work closely with printers to ensure the final physical product matches the digital vision, from paper stock selection to special finishes like spot UV or foil.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="/images/printdesign1.jpg" alt="Print Quality" className="h-40 w-full object-cover rounded-2xl shadow-lg" />
              <img src="/images/printdesign2.jpg" alt="Print Details" className="h-60 w-full object-cover rounded-2xl shadow-lg" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="/images/printdesign3.jpg" alt="Press Print" className="h-60 w-full object-cover rounded-2xl shadow-lg" />
              <img src="/images/printdesign4.jpg" alt="Graphic Prints" className="h-40 w-full object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
