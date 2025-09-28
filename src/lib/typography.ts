/**
 * Sistema de tipografía normalizado para Wellbyn
 * 
 * Este archivo contiene las clases de tipografía consistentes
 * para títulos, subtítulos, párrafos y otros elementos de texto.
 */

// Clases para títulos principales (Hero)
export const heroClasses = {
  // Título hero principal (home page)
  main: "text-hero font-medium text-text-primary",
  // Título hero secundario (patients, provider pages)
  secondary: "text-hero-sm font-medium text-text-primary",
  // Título hero pequeño
  small: "text-hero-xs font-medium text-text-primary",
}

// Clases para títulos de sección (H1)
export const h1Classes = {
  // Título de sección principal
  main: "text-h1 font-medium text-text-primary",
  // Título de sección pequeño
  small: "text-h1-sm font-medium text-text-primary",
}

// Clases para subtítulos (H2)
export const h2Classes = {
  // Subtítulo principal
  main: "text-h2 font-medium text-text-primary",
  // Subtítulo pequeño
  small: "text-h2-sm font-medium text-text-primary",
}

// Clases para títulos terciarios (H3)
export const h3Classes = {
  // Título terciario principal
  main: "text-h3 font-semibold text-text-primary",
  // Título terciario pequeño
  small: "text-h3-sm font-semibold text-text-primary",
}

// Clases para párrafos
export const bodyClasses = {
  // Párrafo principal
  main: "text-body font-normal text-text-secondary leading-relaxed",
  // Párrafo pequeño
  small: "text-body-sm font-normal text-text-secondary leading-relaxed",
}

// Clases para texto de captión
export const captionClasses = {
  main: "text-caption font-normal text-text-tertiary",
}

// Clases para elementos especiales
export const specialClasses = {
  // Texto con gradiente
  gradient: "gradient-01 font-medium",
  // Texto sobre fondo azul
  onBlue: "text-text-inverse font-medium",
  // Texto de botones
  button: "text-body-sm font-semibold",
}

// Clases responsive para títulos hero (basadas en scheduling page)
export const responsiveHeroClasses = {
  // Hero responsive completo - igual al de scheduling
  full: "text-[28px] sm:text-5xl md:text-6xl lg:text-[48px] xl:text-[56px] font-medium text-text-primary leading-tight md:leading-tight lg:leading-[100%]",
  // Hero responsive secundario
  secondary: "text-[24px] sm:text-[32px] md:text-[40px] lg:text-hero-sm font-medium text-text-primary leading-tight",
  // Hero responsive pequeño
  small: "text-[20px] sm:text-[24px] md:text-[32px] lg:text-hero-xs font-medium text-text-primary leading-tight",
}

// Clases responsive para títulos H1 (basadas en scheduling page)
export const responsiveH1Classes = {
  // H1 responsive completo - igual al de scheduling
  full: "text-2xl md:text-3xl lg:text-4xl font-medium text-text-primary leading-tight md:leading-tight lg:leading-[110%]",
  // H1 responsive grande - para títulos de video
  large: "text-2xl md:text-3xl lg:text-5xl font-medium text-text-primary leading-tight md:leading-tight lg:leading-[110%]",
  // H1 responsive pequeño
  small: "text-[18px] sm:text-[20px] md:text-[24px] lg:text-h1-sm font-medium text-text-primary leading-tight",
}

// Clases responsive para subtítulos H2 (basadas en scheduling page)
export const responsiveH2Classes = {
  // H2 responsive completo - igual al de scheduling
  full: "text-lg md:text-xl font-medium text-text-primary",
  // H2 responsive pequeño
  small: "text-[16px] sm:text-[18px] md:text-[20px] lg:text-h2-sm font-medium text-text-primary",
}

// Clases responsive para párrafos (basadas en scheduling page)
export const responsiveBodyClasses = {
  // Párrafo responsive completo - igual al de scheduling
  full: "text-sm md:text-base lg:text-lg font-medium text-text-secondary leading-relaxed",
  // Párrafo responsive grande - para descripciones importantes
  large: "text-base md:text-lg lg:text-[20px] font-normal text-text-secondary leading-relaxed",
  // Párrafo responsive pequeño
  small: "text-caption sm:text-body-sm font-normal text-text-secondary leading-relaxed",
}

// Clases para métricas y números (basadas en scheduling page)
export const metricClasses = {
  // Números grandes de métricas
  large: "text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary",
  // Números medianos
  medium: "text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary",
  // Números pequeños
  small: "text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary",
}

// Función helper para combinar clases
export const combineClasses = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

