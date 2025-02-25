import React from 'react';
import type { FC } from 'react';

export const TermsConditions: FC = () => 
  React.createElement('div', {
    className: "container mx-auto px-6 py-12 max-w-4xl"
  }, [
    React.createElement('h1', {
      key: 'title',
      className: "text-3xl font-bold text-[--secondary] mb-8"
    }, "Terms and Conditions"),
    React.createElement('div', {
      key: 'content',
      className: "prose prose-lg max-w-none"
    }, [
      React.createElement('h2', { key: 'intro-title' }, "Introduction"),
      React.createElement('p', { key: 'intro' }, 
        "Welcome to LegalFeeFinder.com. By accessing or using our website, you agree to these Terms and Conditions. If you do not agree, you must not use this site."
      ),
      React.createElement('h2', { key: 'scope-title' }, "Scope of Services"),
      React.createElement('p', { key: 'scope' }, 
        "LegalFeeFinder.com is a lead generation platform that connects users with attorneys offering payment plans and financing options."
      ),
      React.createElement('ul', { key: 'scope-list' }, [
        React.createElement('li', { key: 'scope-1' }, "Not an Attorney: We are not attorneys, law firms, lenders, brokers, or licensed agents."),
        React.createElement('li', { key: 'scope-2' }, "No Fiduciary Responsibility: We do not offer legal or financial advice and assume no fiduciary responsibilities."),
        React.createElement('li', { key: 'scope-3' }, "Third-Party Referrals: Leads without law firm coverage in our network may be referred to third-party services, which may not provide the same offerings described on this website.")
      ]),
      // Add remaining sections similarly
      React.createElement('h2', { key: 'contact-title', className: "mt-8" }, "Contact"),
      React.createElement('p', { key: 'contact' }, 
        "For questions about these Terms, contact us at support@legalfeefinder.com."
      )
    ])
  ]);