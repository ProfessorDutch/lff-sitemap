import React from 'react';
import type { FC } from 'react';

export const PrivacyPolicy: FC = () => 
  React.createElement('div', {
    className: "container mx-auto px-6 py-12 max-w-4xl"
  }, [
    React.createElement('h1', {
      key: 'title',
      className: "text-3xl font-bold text-[--secondary] mb-8"
    }, "Privacy Policy"),
    React.createElement('div', {
      key: 'content',
      className: "prose prose-lg max-w-none"
    }, [
      React.createElement('h2', { key: 'intro-title' }, "Introduction"),
      React.createElement('p', { key: 'intro' }, 
        "At LegalFeeFinder.com, your privacy is a top priority. This Privacy Policy explains how we collect, use, and safeguard your information. By using our website, you consent to the practices described herein."
      ),
      React.createElement('h2', { key: 'collect-title' }, "Information We Collect"),
      React.createElement('p', { key: 'collect-intro' }, "We collect the following types of information:"),
      React.createElement('h3', { key: 'personal-title' }, "Personal Information:"),
      React.createElement('ul', { key: 'personal-list' }, [
        React.createElement('li', { key: 'personal-1' }, "Name, email address, phone number, and other contact details provided by you."),
        React.createElement('li', { key: 'personal-2' }, "Case details and preferences to connect you with a suitable attorney.")
      ]),
      // Add remaining sections similarly
      React.createElement('h2', { key: 'contact-title', className: "mt-8" }, "Contact Us"),
      React.createElement('p', { key: 'contact' }, 
        "For questions or concerns about this Privacy Policy, please email support@legalfeefinder.com."
      )
    ])
  ]);