import React from 'react';
import styled from 'styled-components';

import { FaPlus, FaPlay } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';

const Container = styled.div`
  width: 100%;
  margin: 0 4%;
`;
const Title = styled.h2`
  line-height: 1.25vw;
  font-size: 1.4vw;
  color: #e5e5e5;
  font-weight: 700;
  min-width: 6em;
  margin-bottom: 0.5em;
  cursor: pointer;
`;
const Items = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  display: flex;
`;
const Item = styled.div`
  border-radius: 6px;
  width: 16%;
  cursor: pointer;
  transition: 1s;
  position: relative;
  margin-right: 5px;
  &:hover {
    transform: scale(1.1);
    z-index: 999;
  }
`;
const ItemImage = styled.img`
  border-radius: 6px;
  width: 100%;
`;
const ItemInfo = styled.div`
  position: absolute;
  display: flex;
  opacity: 0;
  top: 0;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  padding: 10px;
  z-index: 3;
  transition: 0.5s;
  &:hover {
    opacity: 1;
  }
`;

const ButtonsRow = styled.div`
  width: 100%;
  display: flex;

  margin-bottom: 12px;
`;
const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: calc(40px / 2);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #ffffff;
  }

  transition: 0.5s;
  &:hover {
    opacity: 0.8;
  }
`;

const PlayButton = styled(Button)`
  background-color: white;
  margin-right: 10px;
  svg {
    color: black;
  }
`;
const AddButton = styled(Button)`
  border: 1px solid white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const DropdownButton = styled(Button)`
  background-color: rgb(128, 128, 128, 0.8);

  position: absolute;
  right: 10px;
`;

const ItemTitle = styled.h4`
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 12px;
`;
const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: gray;
  height: 4px;
  div {
    width: ${({ progress }) => `${progress}%`};
    background-color: red;
    height: 4px;
  }
`;

const ItemOverlay = styled.div`
  height: 30%;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(transparent, rgba(0, 0, 0));
  border-radius: 6px;
`;

const Slider = ({ title, items }) => {
  // const [showInfo, setShowInfo] = React.useState(false);

  return (
    <Container>
      <Title>{title}</Title>
      <Items>
        {React.Children.toArray(
          items.map((item) => (
            <Item
            // onMouseEnter={() => setShowInfo(true)}
            // onMouseLeave={() => setShowInfo(false)}
            >
              <ItemImage src={item.image} />
              <ItemOverlay />
              {/* {showInfo && ( */}
              <ItemInfo>
                <ButtonsRow>
                  <PlayButton>
                    <FaPlay />
                  </PlayButton>
                  <AddButton>
                    <FaPlus />
                  </AddButton>
                  <DropdownButton>
                    <BsChevronDown />
                  </DropdownButton>
                </ButtonsRow>
                <ItemTitle>{item.title}</ItemTitle>
                <ProgressBarContainer progress={item.progress}>
                  <div />
                </ProgressBarContainer>
              </ItemInfo>
              {/* )} */}
            </Item>
          ))
        )}
      </Items>
    </Container>
  );
};

export default Slider;
