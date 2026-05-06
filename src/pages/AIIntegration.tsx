import { motion } from 'motion/react';
import { Bot, Workflow, Zap, Database, MessageSquare, BarChart, ArrowRight } from 'lucide-react';

export default function AIIntegration() {
  const email = "chris@updatemediagroup.co.uk";
  const subject = "RCWDesign Contact Request";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  
  const useCases = [
    {
      title: 'Automated Lead Management',
      description: 'Instantly capture, qualify, and route leads from your website to your CRM using AI-driven analysis.',
      icon: <Database className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Intelligent Customer Support',
      description: 'Deploy AI agents that handle common queries, summarize support tickets, and escalate complex issues automatically.',
      icon: <MessageSquare className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Content Automation',
      description: 'Generate, format, and publish social media posts or blog content based on your business activity and trends.',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Data Processing & Analysis',
      description: 'Automatically extract data from documents, summarize reports, and visualize key metrics in real-time.',
      icon: <BarChart className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Workflow Orchestration',
      description: 'Connect hundreds of apps using n8n to create seamless, self-healing business processes.',
      icon: <Workflow className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Custom AI Agents',
      description: 'Build specialised AI assistants tailored to your specific industry knowledge and internal data.',
      icon: <Bot className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto border-b border-brand-ink/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              AI & Automation <span className="italic">Integration</span>.
            </h1>
            <p className="text-xl text-[#000000] leading-relaxed mb-8">
              Utilising n8n and advanced AI models to streamline your workflows and let technology do the heavy lifting for you.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80" 
              alt="AI Automation" 
              className="rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-6 -right-6 bg-purple-600 text-white p-8 rounded-2xl hidden md:block max-w-xs">
              <p className="text-sm font-medium italic">"Stop doing repetitive tasks. Start building systems that work for you."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why n8n? */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
              alt="Data and Workflow" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-brand-muted font-sans font-semibold mb-6">The Power of n8n</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">Why n8n for your business?</h3>
            <div className="space-y-6 text-lg text-black leading-relaxed">
              <p>
                n8n is a powerful workflow automation tool that allows for complex, multi-step integrations without the high costs of traditional enterprise software.
              </p>
              <p>
                By combining n8n with AI models like Gemini or GPT-4, we can create intelligent automations that don't just move data—they understand it.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center gap-3 text-brand-ink font-medium">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Self-hosted for complete data privacy
                </li>
                <li className="flex items-center gap-3 text-brand-ink font-medium">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  No-code/Low-code flexibility
                </li>
                <li className="flex items-center gap-3 text-brand-ink font-medium">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Seamless integration with 400+ apps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm uppercase tracking-[0.2em] text-brand-muted font-sans font-semibold mb-4">Practical Applications</h2>
            <h3 className="text-4xl md:text-5xl font-serif">How AI can transform your daily operations.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl border border-brand-ink/5 bg-brand-bg hover:border-purple-500/20 transition-all"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-8">
                  {useCase.icon}
                </div>
                <h4 className="text-2xl font-serif mb-4">{useCase.title}</h4>
                <p className="text-black leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 max-w-7xl mx-auto text-center">
        <div className="bg-purple-50 rounded-[3rem] p-12 md:p-24">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-brand-ink">Ready to automate?</h2>
          <div className="text-xl text-black mb-12 max-w-2xl mx-auto space-y-6">
            <p>
              Let's identify the bottlenecks in your business and build intelligent systems to eliminate them.
            </p>
            <p>
              Contact us today to discuss how AI integration can streamline your processes and save you time and money.
            </p>
          </div>
          <a
            href={mailtoLink}
            className="group inline-flex items-center justify-center gap-4 text-lg md:text-2xl font-serif px-10 py-6 bg-brand-ink text-brand-bg rounded-full hover:bg-brand-ink/90 transition-all hover:scale-105"
          >
            Schedule an Automation Audit <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
