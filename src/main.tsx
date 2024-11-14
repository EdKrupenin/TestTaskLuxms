import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chart  from './Chart.tsx'
import {COLORS, STYLES} from './constants'; // Импортируем ваши константы
import './index.css'

const setCSSVariables = () => {
    document.documentElement.style.setProperty('--text-gray', COLORS.textGray);
    document.documentElement.style.setProperty('--bar-front-color', COLORS.barFront);
    document.documentElement.style.setProperty('--bar-back-color', COLORS.barBack);
    document.documentElement.style.setProperty('--bar-db-color', COLORS.barDB);
    document.documentElement.style.setProperty('--bar-norm-gradient', COLORS.barNormGradient);
    document.documentElement.style.setProperty('--bg-color', COLORS.background);
    document.documentElement.style.setProperty('--shadow-color', STYLES.shadow);
    document.documentElement.style.setProperty('--legend-label-color', COLORS.textGray);
    document.documentElement.style.setProperty('--hover-color', COLORS.hover);
    document.documentElement.style.setProperty('--menu-color', COLORS.menu);
    document.documentElement.style.setProperty('--line-color', COLORS.lineColor);
    document.documentElement.style.setProperty('--arrow-positive', COLORS.arrowPositive);
    document.documentElement.style.setProperty('--arrow-negative', COLORS.arrowNegative);
};

setCSSVariables();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Chart  />
  </StrictMode>,
)
