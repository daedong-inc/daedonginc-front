export interface Theme {
  colors: {
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
  };
  media: {
    desktop_L: string;
    desktop_S: string;
    mobile: string;
  };
}

const theme: Theme = {
  colors: {
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
  },
  media: {
    desktop_L: '@media (min-width: 1025px)',
    desktop_S: '@media (min-width: 1024px) and (max-width: 361px)',
    mobile: '@media (max-width: 360px) ',
  },
};

export default theme;
