import Lenis from 'lenis';

export {};

declare global {
  interface Window {
    lenis?: Lenis;
  }
}