import { BREAKPOINT_MEDIAQUERY } from 'styles/constants';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  // gray
  gray25: '#979AA0',
  gray50: '#84898F',
  gray100: '#777C81',
  gray200: '#666C73',
  gray300: '#5B6066',
  gray400: '#4D5256',
  gray500: '#45484B',
  gray600: '#3A3C3E',
  gray700: '#343537',
  gray800: '#2B2D2F',
  gray900: '#252525',
  gray950: '#181818',
  // neutrals
  neutral25: '#FCFCFD',
  neutral50: '#FAFBFC',
  neutral100: '#F8F9FB',
  neutral200: '#F9F9F9',
  neutral300: '#F7F7F8',
  neutral400: '#F5F5F5',
  neutral500: '#EFEFF1',
  neutral600: '#EAEBF0',
  neutral700: '#E5E5E7',
  neutral800: '#C1C3C7',
  neutral900: '#A1A4AC',
  neutral950: '#9599A1',
};

export const nav_lightTheme = {
  textColor: 'white',
  logoColor: 'white',
  searchIconColor: 'white',
  searchBackgroundColor: 'rgba(255, 255, 255, 0.2)',
  searchFontColor: 'white',
  searchPlaceholderColor: 'rgba(255, 255, 255, 0.5)',
};

export const nav_darkTheme = {
  textColor: colors.gray800,
  logoColor: 'black',
  searchIconColor: colors.gray600,
  searchBackgroundColor: colors.neutral300,
  searchFontColor: colors.gray800,
  searchPlaceholderColor: colors.gray25,
};

// type MediaQuery = {
//   [key in keyof typeof BREAKPOINT_MEDIAQUERY]: string;
// };

// export const media: MediaQuery = Object.keys(BREAKPOINT_MEDIAQUERY).reduce(
//   (acc, key) => {
//     const label = key as keyof typeof BREAKPOINT_MEDIAQUERY;
//     acc[label] = `@media (min-width: ${BREAKPOINT_MEDIAQUERY[label]}px)`;
//     return acc;
//   },
//   {} as MediaQuery,
// );

const theme: Theme = {
  colors,
  media: {
    desktop_L: `@media (min-width: ${BREAKPOINT_MEDIAQUERY.desktop_L}px)`,
    tablet: `@media (max-width: ${BREAKPOINT_MEDIAQUERY.desktop_L - 1}px) 
                and (min-width: ${BREAKPOINT_MEDIAQUERY.tablet}px)`,
    mobile: `@media (max-width: ${BREAKPOINT_MEDIAQUERY.tablet - 1}px) 
                and (min-width: ${BREAKPOINT_MEDIAQUERY.mobile}px)`,
  },
  navTheme: {
    nav_darkTheme,
    nav_lightTheme,
  },
};

export default theme;

export interface NavTheme {
  textColor: string;
  logoColor: string;
  searchIconColor: string;
  searchBackgroundColor: string;
  searchFontColor: string;
  searchPlaceholderColor: string;
}

export interface Colors {
  white: string;
  black: string;
  // gray
  gray25: string;
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  gray950: string;
  // neutrals
  neutral25: string;
  neutral50: string;
  neutral100: string;
  neutral200: string;
  neutral300: string;
  neutral400: string;
  neutral500: string;
  neutral600: string;
  neutral700: string;
  neutral800: string;
  neutral900: string;
  neutral950: string;
}

export interface Theme {
  colors: Colors;
  media: {
    desktop_L: string;
    tablet: string;
    mobile: string;
  };
  navTheme: {
    nav_darkTheme: NavTheme;
    nav_lightTheme: NavTheme;
  };
}
