declare module 'react-animate-on-scroll' {
  import { Component } from 'react';
  
  interface ScrollAnimationProps {
    animateIn?: string;
    animateOut?: string;
    offset?: number;
    duration?: number;
    delay?: number;
    animateOnce?: boolean;
    animatePreScroll?: boolean;
    initiallyVisible?: boolean;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
  }
  
  export default class ScrollAnimation extends Component<ScrollAnimationProps> {}
}
