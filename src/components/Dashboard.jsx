import React from "react";
import styled from "styled-components";
import ServerInfo from "./ServerInfo";
import Sidebar from "./Sidebar";

const DashboardContainer = styled.div`
font-family: 'Rajdhani', sans-serif;
  display: flex;
  height: 100vh;
  position: fixed;
  width: 100%;
  
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601abb0b487fc1bfc56a1c3b_menu__background-30blur.jpg"); 
  background-position: center -20px; /* Shift the background 20px up */
  background-size: auto 160vh;
  z-index: 1;
`;


const MainContent = styled.div`
background: rgba(0, 0, 0, 0.5);
color: white;
  flex: 1;
  position: relative;
  z-index: 2;
  padding: 40px;

`;

const Navbar = styled.div`
color: #fff;
  letter-spacing: .1vh;
  text-transform: uppercase;
  margin-bottom: .3vh;
  margin-right: 1.5vh;
  font-family: Rajdhani, sans-serif;
  font-size: 1.5vh;
  font-weight: 500;
  line-height: 2vh;
  text-decoration: none;
  transition: opacity .1s;
  display: flex;

}
`;

const Title = styled.div`
font-size: 4vh;
  font-weight: 600;
  line-height: 4vh;
  text-transform: uppercase;

`;
const Dashboard = () => {
  return (
    <DashboardContainer>
      <BackgroundImage />
      <Sidebar/>
      <MainContent>
        <Navbar> &lt;&nbsp; MULTIPLAYER &nbsp; / &nbsp; SERVER BROWSER &nbsp;  / </Navbar>
        <Title>SERVER INFO</Title>
        <br/> <br/> <br/>
        <ServerInfo />
      </MainContent>
      
      {/* <RightSidebar /> */}
    </DashboardContainer>
  );
};

export default Dashboard;
