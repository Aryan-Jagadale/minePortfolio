import React, { useState } from "react";
import styled from "styled-components";
//import { gsap } from "gsap";

function App() {
  const [activeItem, setActiveItem] = useState(1);

  const data = [
    {
      id: 1,
      url: "/3.png",
      name: "Writing Course",
      topicList: 100,
      shortName: "Writing",
    },
    {
      id: 2,
      url: "/2.png",
      name: "Coding Course",
      topicList: 120,
      shortName: "Coding",
    },
    {
      id: 3,
      url: "/1.png",
      name: "Business Course",
      topicList: 150,
      shortName: "Business",
    },
  ];

  const handleHover = (id) => {
    if (activeItem === id) {
      return;
    }
    setActiveItem(id);
  };

  const handleHoverLeave = () => {
    if (activeItem === 1) {
      return;
    }
    setActiveItem(1);
  };

  return (
    <AppContainer>
      <Wrapper>
        <ContainerWrapper>
          <First>
            <TextWrapper>
              <Text>My Portfolio</Text>
              <Para>
                A small gallery of recent projects chosen by me. I've done them
                all together with amazing people from companies around the
                globe. It's only a drop in the ocean compared to the entire
                list.
              </Para>
            </TextWrapper>
          </First>
          <Container className="main">
            {data.map((o) => (
              <ItemWrapper
                onMouseOver={() => handleHover(o.id)}
                onMouseLeave={() => handleHoverLeave(o.id)}
                isActive={o.id === activeItem}
              >
                <Item
                  style={{ backgroundImage: `url(${o.url})` }}
                  isActive={o.id === activeItem}
                >
                  <ContentWrap1
                    isActive={o.id === activeItem}
                    isFirst={o.id === 1}
                  >
                    <CourseFullname>{o.name}</CourseFullname>
                    <TopicListWrapper>
                      <TopicItems>{o.topicList}</TopicItems>
                      <TopicText>Topics</TopicText>
                    </TopicListWrapper>
                  </ContentWrap1>
                  <ContentWrap2
                    isActive={o.id === activeItem}
                    isFirst={o.id === 1}
                  >
                    <ShortName>{o.shortName}</ShortName>
                  </ContentWrap2>
                </Item>
              </ItemWrapper>
            ))}
          </Container>{" "}
        </ContainerWrapper>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  width: calc(100vw-50px);
 // height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfbfb;
  @media only screen and (min-width: 768px) {
    margin-left: 75px;
    padding-left: 10px;
    border-left: 1px solid rgb(116, 116, 116);
    width: calc(100vw - 126px);
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const First = styled.div`
  //font-size: 40px;
  position: relative;
  width: 40%;
  
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  max-width: 930px;
  width: calc(100% - 100px);
  height: 600px;
  width: 60%;
`;
const ItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 150px;
  cursor: pointer;
  border-radius: 20px;
  padding: 0 20px;
  flex-grow: ${({ isActive }) => (isActive ? 4 : 1)};
  transition: all 0.6s ease;
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: top;
  background-size: auto ${({ isActive }) => (isActive ? "120%" : "100%")};
  border-radius: 20px;
  transition: all 0.6s ease;
  overflow: hidden;

  :after {
    content: "";
    display: block;
    position: absolute;
    height: 50%;
    width: 100%;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  }
`;

const TextWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  line-height: 80px;
  font-size: 80px;
  margin-top: 90px;
`;

const Text = styled.h2`
  //text-align: center;
            //font-size: 100px;
            font-size: clamp(5rem, 7vw, 15vw);
            font-weight: bold;
            margin-bottom: 8vh;
            font-family: "Poppins", sans-serif;
            color: #111;
`;

const Para = styled.p`
//text-align: center;
            font-weight: bold;
            font-size: 16px;
            line-height: 1.5rem;
            margin-bottom: 2vh;
            //max-width: 60vw;
            //text-transform: uppercase;
            font-family: "Poppins", sans-serif;
            color: #6b6b6b;

`

const ContentWrap1 = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 80px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 40px;
  //padding-left: ${({ isFirst }) => (isFirst ? "100px" : "40px")};
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
`;

const CourseFullname = styled.div`
  font-size: 34px;
  color: #fff;
  font-weight: 600;
  word-break: keep-all;
  height: 100%;
  width: 10vw;
`;
const TopicListWrapper = styled.div`
  text-align: center;
  color: #fff;
`;
const TopicItems = styled.div`
  font-size: 52px;
  line-height: 1;
`;
const TopicText = styled.div`
  text-transform: uppercase;
`;

const ContentWrap2 = styled.div`
  width: 120px;
  height: 120px;
  background-color: #1e1e2f;
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 60px;
  z-index: 1;
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? "0" : "1")};
  display: ${({ isFirst }) => (isFirst ? "none" : "block")};
`;
const ShortName = styled.div`
  font-size: 34px;
  transform: rotate(-90deg);
`;
