import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoSvg from 'assets/대동로고.svg';
import { ReactComponent as LogoIcon } from 'assets/대동로고.svg';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 200,
  height = 100,
  color = 'white',
}) => {
  return (
    <StyledLogo>
      <LogoWrapper width={width} height={height}>
        <StyledLogoIcon color={color} />
      </LogoWrapper>
    </StyledLogo>
  );
};
export default Logo;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div<LogoProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const StyledLogoIcon = styled(LogoIcon)<LogoProps>`
  path:not(:nth-child(12)) {
    fill: ${(props) => props.color};
  }
`;
