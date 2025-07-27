// src/styles/responsive.js

export const breakpoints = {
  xs: "320px", // En küçük mobil
  sm: "480px", // Küçük mobil
  md: "768px", // Tablet
  lg: "1024px", // Küçük dizüstü
  xl: "1200px", // Standart desktop
  xxl: "1440px", // Geniş ekran desktop
  xxxl: "1920px", // Full HD
  quadHD: "2560px", // 2K-4K arası
};

export const media = {
  xs: `@media (max-width: ${breakpoints.xs})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
  xxl: `@media (max-width: ${breakpoints.xxl})`,
  xxxl: `@media (max-width: ${breakpoints.xxxl})`,
  quadHD: `@media (max-width: ${breakpoints.quadHD})`,

  minSm: `@media (min-width: ${breakpoints.sm})`,
  minMd: `@media (min-width: ${breakpoints.md})`,
  minLg: `@media (min-width: ${breakpoints.lg})`,
  minXl: `@media (min-width: ${breakpoints.xl})`,
  minXxl: `@media (min-width: ${breakpoints.xxl})`,
  minXxxl: `@media (min-width: ${breakpoints.xxxl})`,
  minQuadHD: `@media (min-width: ${breakpoints.quadHD})`,
};
