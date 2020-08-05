import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;

  .slick-list {
    padding-left: 5%;
  }
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    width: 5%;
    height: 100%;
    transform: initial;
    opacity: 0.5;
    margin: auto;
    transition: all 0.3s ease 0s;
    &:before {
      font-size: 40px;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  img {
    width: 298px;
    max-height: 260px;
    object-fit: cover;
  }
`;

const MyArrow = styled.button`
  :hover {
    opacity: 1;
  }
  ::before {
    color: ${(props) => props.color};
  }
`;

// These glyphs are not supported on my phone :(
// const MyPrevArrow = styled(MyArrow)`
//   ::before {
//     content: '⮜';
//   }
// `;
// const MyNextArrow = styled(MyArrow)`
//   ::before {
//     content: '⮞';
//   }
// `;

const Slider = ({ children, arrowColor }) => (
  <Container>
    <SlickSlider
      {...{
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        prevArrow: <MyArrow color={arrowColor} />,
        nextArrow: <MyArrow color={arrowColor} />,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
