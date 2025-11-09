declare namespace JSX {
  interface IntrinsicElements {
    "dotlottie-player": {
      src: string;
      loop?: boolean;
      autoplay?: boolean;
      class?: string;
      style?: React.CSSProperties;
    };
  }
}
