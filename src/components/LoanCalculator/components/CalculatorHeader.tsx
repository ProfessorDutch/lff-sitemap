import React from 'react';
import type { FC } from 'react';

export const CalculatorHeader: FC = () => (
  <div className="text-center mb-8">
    <h3 className="text-3xl md:text-4xl font-bold text-[--secondary] mb-4">
      Payment Options Calculator
    </h3>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Choose the payment option that works best for you. We offer flexible financing solutions to make legal representation accessible.
    </p>
  </div>
);