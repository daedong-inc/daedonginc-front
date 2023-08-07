import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoSvg from 'assets/대동로고.svg';

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 200, height = 100 }) => {
  return (
      <img src={LogoSvg} alt="DaeDongLogo" style={{ width, height }} />
  );
};
export default Logo;

