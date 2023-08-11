export interface Theme {
  colors: {
    black: string;
    white: string;
    gray1: string; //unpicked button
    gray2: string; //more button
    gray3: string; //화살표 슬라이드 버튼
    background: string; //이미지 없음 배경
  };
  media: {
    desktop_L: string;
    desktop_S: string;
    mobile: string;
  };
}

const theme: Theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    gray1: '#666666',
    gray2: '#BDBDBD',
    gray3: '#D9D9D9',
    background: '#F6F6F6',
  },
  media: {
    desktop_L: '@media (min-width: 1025px)',
    desktop_S: '@media (min-width: 1024px) and (max-width: 361px)',
    mobile: '@media (max-width: 360px) ',
  },
};

export default theme;
