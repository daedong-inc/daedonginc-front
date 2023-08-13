declare module '*.svg' {
  import { ReactComponent } from 'vite-plugin-svgr';

  const content: ReactComponent;
  export default content;
}
