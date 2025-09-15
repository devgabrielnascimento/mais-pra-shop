import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      secondaryHover: string;
      secondary: string;
      third: string;
      border: string;
      text: string;
      body: string;
      linearSkeleton: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    radius: string;
    breakpoints: {
      mobileSm: string;
      mobileLg: string;
      tablet: string;
      desktop: string;
    };
  }
}
