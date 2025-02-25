import React from 'react';
import type { FC } from 'react';
import { LoanCalculator } from '../LoanCalculator';
import { ContactForm } from '../ContactForm';
import { Footer } from '../Footer';
import { Scale, Shield, MapPin } from 'lucide-react';

interface LawFirmDemoProps {
  defaultFirmName: string;
  defaultLocation: {
    city: string;
    state: string;
  };
}

export const LawFirmDemo: FC<LawFirmDemoProps> = ({ defaultFirmName, defaultLocation }) => {
  const features = [
    { icon: Scale, text: "Flexible Payment Options" },
    { icon: Shield, text: "100% Secure & Confidential" },
    { icon: MapPin, text: "Local Experience Matters" }
  ];

  const faqs = [
    {
      question: "How do your payment plans work?",
      answer: "Our payment plans are designed to make legal representation accessible. Once you select a plan that works for you, our team will contact you within 24 hours to finalize the details and begin working on your case immediately."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees. The payment plan you select includes all costs associated with your legal representation. We believe in complete transparency about legal fees."
    },
    {
      question: "How quickly can I get started with my case?",
      answer: "Once you select a payment plan, we can begin working on your case immediately. Our team will contact you within 24 hours to finalize the details and start your legal representation."
    },
    {
      question: "What if my financial situation changes?",
      answer: "We understand that circumstances can change. If your financial situation changes during your case, please contact us immediately to discuss adjustments to your payment plan."
    }
  ];

  return React.createElement('div', { className: "min-h-screen bg-white" }, [
    // Hero Section
    React.createElement('header', {
      key: 'hero',
      className: "relative bg-gradient-to-br from-[--secondary] to-[--primary-dark] text-white py-24"
    }, [
      React.createElement('div', {
        key: 'pattern',
        className: "absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px] opacity-30"
      }),
      React.createElement('div', {
        key: 'content',
        className: "container mx-auto px-6 text-center relative z-10"
      }, [
        React.createElement('div', {
          key: 'text-content',
          className: "max-w-3xl mx-auto"
        }, [
          React.createElement('h1', {
            key: 'heading',
            className: "text-4xl md:text-5xl font-bold mb-4"
          }, [
            React.createElement('span', {
              key: 'title',
              className: "block"
            }, `Legal Payment Plans in ${defaultLocation.city}`),
            React.createElement('span', {
              key: 'firm-name',
              className: "block text-2xl md:text-3xl mt-4 text-[--accent]"
            }, `at ${defaultFirmName}`)
          ]),
          React.createElement('p', {
            key: 'description',
            className: "text-xl md:text-2xl mb-8 text-white/90"
          }, [
            React.createElement('span', {
              key: 'specialty',
              className: "text-[--accent] font-semibold"
            }, "Specializing in Criminal Defense"),
            React.createElement('span', {
              key: 'tagline',
              className: "inline text-white"
            }, ", we turn 'if you can afford representation' into 'how you can pay for it'.")
          ])
        ]),
        React.createElement('div', {
          key: 'features',
          className: "flex flex-wrap justify-center gap-8 mt-12"
        }, features.map((feature, index) => 
          React.createElement('div', {
            key: `feature-${index}`,
            className: "flex items-center gap-2 text-white/90"
          }, [
            React.createElement(feature.icon, { 
              key: 'icon',
              className: "w-5 h-5" 
            }),
            React.createElement('span', {
              key: 'text'
            }, feature.text)
          ])
        ))
      ])
    ]),

    // Rest of the component remains the same...
    React.createElement('section', {
      key: 'calculator',
      className: "py-16 bg-gradient-to-b from-gray-50 to-white relative"
    }, [
      React.createElement('div', {
        key: 'pattern',
        className: "absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[size:20px_20px]"
      }),
      React.createElement('div', {
        key: 'content',
        className: "container mx-auto px-6 relative z-10"
      }, [
        React.createElement('div', {
          key: 'context',
          className: "max-w-3xl mx-auto text-center mb-12"
        }, [
          React.createElement('h2', {
            key: 'heading',
            className: "text-3xl font-bold text-[--secondary] mb-4"
          }, "Choose the payment option that works best for you."),
          React.createElement('p', {
            key: 'description',
            className: "text-lg text-gray-600"
          }, `Flexible financing solutions are available exclusively for clients of ${defaultFirmName}. Select your preferred plan, and we'll take care of the rest.`)
        ]),
        React.createElement(LoanCalculator, {
          key: 'calculator',
          practiceArea: "Criminal Defense",
          location: defaultLocation.city
        })
      ])
    ]),

    React.createElement('section', {
      key: 'faq',
      className: "py-16 bg-gradient-to-br from-[--primary]/5 to-white relative"
    }, [
      React.createElement('div', {
        key: 'pattern',
        className: "absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.03)_1px,transparent_0)] bg-[size:20px_20px]"
      }),
      React.createElement('div', {
        key: 'content',
        className: "container mx-auto px-6 relative z-10"
      }, [
        React.createElement('h2', {
          key: 'heading',
          className: "text-3xl font-bold text-[--secondary] text-center mb-12"
        }, "Frequently Asked Questions"),
        React.createElement('div', {
          key: 'faq-list',
          className: "max-w-3xl mx-auto space-y-8"
        }, faqs.map((faq, index) => 
          React.createElement('div', {
            key: `faq-${index}`,
            className: "space-y-2 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          }, [
            React.createElement('h3', {
              key: 'heading',
              className: "text-xl font-semibold text-[--secondary]"
            }, faq.question),
            React.createElement('p', {
              key: 'content',
              className: "text-gray-600"
            }, faq.answer)
          ])
        ))
      ])
    ]),

    React.createElement(Footer, { key: 'footer' })
  ]);
};