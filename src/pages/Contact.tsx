import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  const email = "chris@updatemediagroup.co.uk";
  const subject = "RCWDesign Contact Request";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="pb-24 min-h-[80vh] flex items-center">
      <section className="px-6 py-24 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full bg-white rounded-[3rem] p-12 md:p-24 border border-brand-ink/5 shadow-2xl shadow-brand-ink/5"
        >
          <div className="w-20 h-20 bg-brand-bg rounded-2xl flex items-center justify-center mx-auto mb-10">
            <Mail className="w-10 h-10 text-brand-ink" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
            Let's build something <span className="italic">great</span>.
          </h1>
          <p className="text-xl text-brand-muted leading-relaxed mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Get in touch directly to start exploring your next web app, AI integration, or print design project.
          </p>
          
          <a
            href={mailtoLink}
            className="group inline-flex items-center justify-center gap-4 text-lg md:text-2xl font-serif px-10 py-6 bg-brand-ink text-brand-bg rounded-full hover:bg-brand-ink/90 transition-all hover:scale-105"
          >
            Start the Conversation <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
