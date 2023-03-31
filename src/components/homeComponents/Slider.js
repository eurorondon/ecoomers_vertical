import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const sliderItems = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1679362772/laraPlastic/kicdgikcmvylmq3fryzm.png",
    title: "MESA PARA NIÑOS",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];

const promociones = [
  {
    img: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680232745/1_ihs8nv.png",
  },
  {
    img: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680232745/3_zvsj6w.png",
  },
  {
    img: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680232745/2_brzbfx.png",
  },
];

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: #fff7f7; */
  background-color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "rigth" && "10px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

// PARA CAMBIAR EL TAMANO DEBE SER AQUI
const Slide = styled.div`
  width: 100vw;
  height: 56vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Tittle = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const initialSlideIndex = 0;
  const [slideIndex, setSlideIndex] = useState(initialSlideIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = slideIndex < 2 ? slideIndex + 1 : 0;
      setSlideIndex(newIndex);
    }, 3500); // 300000ms = 5 minutos
    return () => clearInterval(interval);
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container className="mb-4">
      {/* <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined className="text-white" />
      </Arrow> */}
      {window.innerWidth < 767 ? (
        <Wrapper slideIndex={slideIndex}>
          {promociones.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <div>
                <img src={item.img} className="img-fluid" alt="" style={{}} />
              </div>
            </Slide>
          ))}
        </Wrapper>
      ) : (
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <img src={item.img} alt="" style={{ height: "100%" }} />
              </ImageContainer>
              <InfoContainer>
                <Tittle>{item.title}</Tittle>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
      )}

      {/* <Arrow direction="rigth" onClick={() => handleClick("rigth")}>
        <ArrowRightOutlined className="text-white" />
      </Arrow> */}
    </Container>
  );
};

export default Slider;
