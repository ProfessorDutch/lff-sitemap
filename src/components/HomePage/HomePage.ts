import React from 'react';
import type { FC } from 'react';
import { useContentful } from '../../hooks/contentful';
import { LoanCalculator } from '../LoanCalculator';
import { AttorneyReferralForm } from '../AttorneyReferralForm';
import { ContentSection } from '../ContentSection';
import { Footer } from '../Footer';
import { LoadingSpinner } from '../LoadingSpinner';
import { ErrorMessage } from '../ErrorMessage';

export const HomePage: FC = () => {
  const { pages, loading, error } = useContentful();

  if (loading) {
    console.log('Loading content...');
    return React.createElement(LoadingSpinner);
  }

  if (error) {
    console.error('Error loading content:', error);
    return React.createElement(ErrorMessage, { message: error });
  }

  if (!pages.length) {
    console.error('No pages found');
    return React.createElement(ErrorMessage, { 
      message: 'No content available. Please try again later.' 
    });
  }

  console.log('Loaded pages:', {
    count: pages.length,
    firstPage: pages[0]?.fields ? {
      title: pages[0].fields.pageTitle,
      city: pages[0].fields.city,
      slug: pages[0].fields.urlSlug
    } : null
  });

  const page = pages[0];
  const { fields } = page;

  return React.createElement('div', { className: "min-h-screen bg-white" }, [
    // Hero Section
    React.createElement('header', {
      key: 'hero',
      className: "bg-gradient-to-br from-[--secondary] to-[--primary-dark] text-white py-24 relative"
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
            key: 'title',
            className: "text-4xl md:text-5xl font-bold mb-6"
          }, fields.pageTitle || 'Legal Payment Plans'),
          React.createElement('p', {
            key: 'description',
            className: "text-xl text-white/90 mb-12"
          }, fields.metaDescription || 'Affordable legal payment plans for your case')
        ])
      ])
    ]),

    React.createElement('section', {
      key: 'calculator',
      className: "py-16 bg-gray-50"
    }, 
      React.createElement('div', {
        className: "container mx-auto px-6"
      },
        React.createElement(LoanCalculator, {
          practiceArea: fields.practiceArea || 'Legal Services',
          location: fields.city || 'Your Area'
        })
      )
    ),

    React.createElement(ContentSection, {
      key: 'content',
      content1: fields.contentSection1,
      content2: fields.contentSection2,
      imageUrl: fields.imageUrl,
      location: {
        city: fields.city,
        state: fields.state,
        msaRegion: fields.msaRegion,
        surroundingCities: fields.surroundingCities
      }
    }),

    React.createElement(AttorneyReferralForm, { key: 'attorney-form' }),
    React.createElement(Footer, { key: 'footer' })
  ]);
};