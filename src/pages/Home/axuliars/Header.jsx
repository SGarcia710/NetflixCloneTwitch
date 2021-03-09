import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../../providers/AuthProvider';
import { BsFillBellFill } from 'react-icons/bs';
import { FiGift } from 'react-icons/fi';
import { GoTriangleDown } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.9), transparent);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;

  height: fit-content;
  align-items: center;
  padding: 16px 55px;
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 120px;
  height: 40px;
  margin-right: 24px;
  object-fit: cover;
`;

const RightWrapper = styled(ArrowWrapper)`
  width: 12%;
  justify-content: space-between;
  svg,
  p {
    cursor: pointer;
  }
  p {
    font-size: 12px;
  }
`;
const Link = styled.p`
  font-weight: ${(props) => (props.selected === true ? '700' : '400')};
  padding: 0 10px;
  font-size: 12px;
  transition: 500ms;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    height: 32px;
    width: 32px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 8px;
  }
`;

const LINKS = [
  'Inicio',
  'Series',
  'Películas',
  'Novedades populares',
  'Mi lista',
];

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <ArrowWrapper>
        <Logo alt="Background image" src="/images/Netflix_Logo.png" />

        {React.Children.toArray(
          LINKS.map((link, index) => <Link selected={index === 0}>{link}</Link>)
        )}
      </ArrowWrapper>
      <RightWrapper>
        <FaSearch />
        <p>NIÑOS</p>
        <FiGift />
        <BsFillBellFill />
        <AvatarContainer>
          <img src={user.avatarUrl} alt={user.username} />
          <GoTriangleDown />
        </AvatarContainer>
      </RightWrapper>
    </Container>
  );
};

export default Header;
