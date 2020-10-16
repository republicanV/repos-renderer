import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
    }

    spaces: {
      default: string
    }
  }
};
