import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";


const SidebarContainer = styled.div`
  width: 55px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  z-index: 2;
  border-right: 1px solid rgba(95, 92, 92, 0.5);
`;

const Container = styled.div`
  margin-top: 17vh;
  height: 250px;
`;

const Icon = styled.a`
  width: 50px;
  height: 40px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  transition: background 0.3s ease;
  border-left: ${({ isSelected }) => (isSelected ? "3px solid orange" : "5px solid rgba(0, 0, 0, 0)")};

  img {
    width: 35px;
    height: 40px;
    object-fit: cover;
    opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 1;
  }

  span {
    position: absolute;
    top: 50%;
    left: 110%; /* Adjust to position the label slightly to the right of the icon */
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    opacity: 0;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  &:hover span {
    opacity: 1;
    right: 100%; /* Smooth transition to the right */
  }
`;


const Bottom = styled.div`
  margin-top: 40vh;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  height: 20px;
  width: 20px;
  opacity: 0.5;
  padding: 15px;
`;

const Sidebar = () => {
  const [selectedId, setSelectedId] = useState(null);

  const icons = [
    {
      id: 1,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd334e34cd4dbb8ba_side-menu__game-2.png",
      label: "Home",
      link: "/1",
    },
    {
      id: 2,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab108eb6365513203b_side-menu__game.png",
      label: "Settings",
      link: "/2",
    },
    {
      id: 3,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafac57edde91d49b301f_side-menu__game-1.png",
      label: "Documents",
      link: "/3",
    },
    {
      id: 4,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab2823bb5957cc1ffd_side-menu__game-3.png",
      label: "Documents",
      link: "/4",
    },
    {
      id: 5,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafaa108eb614c813203a_side-menu__career.png",
      label: "Documents",
      link: "/5",
    },
    {
      id: 6,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab68a3c97a6a478b8d_side-menu__watch.svg",
      label: "Lock",
      link: "/6",
    },
    {
      id: 7,
      url: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab332f0ade9870b435_side-menu__news.svg",
      label: "Lock",
      link: "/7",
    },
  ];
  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeIcon = icons.find((icon) => icon.link === currentPath);
    if (activeIcon) setSelectedId(activeIcon.id);
  }, [icons]);
  return (
    <SidebarContainer>
      <Container>
        {icons.map((icon) => (
          <Icon key={icon.id} href={icon.link} isSelected={icon.id === selectedId}
          onClick={() => setSelectedId(icon.id)} >
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
