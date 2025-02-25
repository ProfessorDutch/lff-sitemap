import React from 'react';
import type { FC } from 'react';
import { formatCurrency } from '../../../utils/formatting/currency';
import { loanCalculatorStyles as styles } from '../LoanCalculator.styles';

interface AmountSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const AmountSlider: FC<AmountSliderProps> = ({ value, onChange }) => (
  <div className={styles.sliderGroup}>
    <div className={styles.label}>
      <span>Case Amount</span>
      <span className={styles.amount}>{formatCurrency(value)}</span>
    </div>
    <input
      type="range"
      min="1000"
      max="35000"
      step="1000"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className={styles.slider}
    />
    <div className="flex justify-between text-xs text-gray-500">
      <span>$1,000</span>
      <span>$35,000</span>
    </div>
  </div>
);