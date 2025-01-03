import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 50px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center; /* Centers items vertically */
  padding: 10px;
  z-index: 2;
  border-right: 1px solid rgba(95, 92, 92, 0.5);
  display: flex;
  // justify-content: flex-end;
`;

const Container = styled.div`
  margin-top: 17vh;
  height: 250px;
`;



const Icon = styled.a`
  width: 50px;
  height: 50px;
  // margin: 4px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  text-decoration: none; /* Remove link underline */

  img {
    width: 35px;
    height: 40px;
    object-fit: cover;
    opacity: 0.5; /* Dull icon by default */
    transition: opacity 0.3s ease; /* Smooth transition */
  }

  &:hover img {
    opacity: 1; /* Brighten icon on hover */
  }

  span {
    position: absolute;
    left: 60px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    opacity: 0; /* Hide tooltip by default */
    transform: translateX(-10px); /* Initial position for smooth slide-in */
    transition: all 0.3s ease; /* Smooth tooltip transition */
    white-space: nowrap; /* Prevent tooltip wrapping */
  }

  &:hover span {
    opacity: 1; /* Show tooltip on hover */
    transform: translateX(10px); /* Slide tooltip out */
  }


`;
const Bottom = styled.div`
margin-top: 40vh;
justify-content : center;
align-items: center;


`;

const Button = styled.div`
  height: 20px;
  width: 20px;
  opacity: 0.5;
  padding: 15px;
  
`;

const Sidebar = () => {
  const icons = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd334e34cd4dbb8ba_side-menu__game-2.png",
      label: "Home",
      link: "/home",
    },
    {
      id: 2,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab108eb6365513203b_side-menu__game.png",
      label: "Settings",
      link: "/settings",
    },
    {
      id: 3,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafac57edde91d49b301f_side-menu__game-1.png",
      label: "Documents",
      link: "/documents",
    },
    {
      id: 4,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab2823bb5957cc1ffd_side-menu__game-3.png",
      label: "Documents",
      link: "/documents",
    },
    {
      id: 5,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafaa108eb614c813203a_side-menu__career.png",
      label: "Documents",
      link: "/documents",
    },
    {
      id: 6,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab68a3c97a6a478b8d_side-menu__watch.svg",
      label: "Lock",
      link: "/lock",
    },
    {
      id: 7,
      url: "    https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab332f0ade9870b435_side-menu__news.svg",
      label: "Lock",
      link: "/lock",
    },


  ];

  return (
    <SidebarContainer>
      <Container>
      {icons.map((icon) => (
        <Icon key={icon.id} href={icon.link}>
          <img src={icon.url} alt={icon.label} />
          <span>{icon.label}</span>
        </Icon>
      ))}

      </Container>

      <Bottom>
        <Button>
          <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd71ff7186d1c97d5_side-menu__help.svg" />
        </Button>
        <Button>
          <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabc5fc83c1e7f50842_side-menu__quit.svg" />
        </Button>
      </Bottom>


      
    </SidebarContainer>
  );
};

export default Sidebar;
