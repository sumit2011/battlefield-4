
import React from "react";
import styled from "styled-components";

const ServerInfoContainer = styled.div`
  color: #fff;
//   border-radius: 10px;
//   padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  height: 85vh; /* Set a maximum height for the container */
  margin-left: 0;
  font-family: Arial, sans-serif;
  position: relative;
  overflow-y: auto; /* Enable vertical scrolling */
  scroll-behavior: smooth; /* Smooth scrolling effect */
//   background: rgba(0, 0, 0, 0.6); /* Optional semi-transparent background */

  /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 500;
`;

const ServerName = styled.div`
color: #fff;
  letter-spacing: .1vh;
  margin-bottom: -1vh;
  font-family: Rajdhani, sans-serif;
  font-size: 3.1vh;
  font-weight: 600;
  line-height: 3.8vh;
`;

const Container = styled.div`
display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 75%;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const Section = styled.div`
  margin: 15px 0;
`;

const SectionTitle = styled.h2`
//   font-size: 18px;
//   margin-bottom: 10px;

  color: #fff;
  letter-spacing: .1vh;
  text-transform: uppercase;
  margin-bottom: 1vh;
  font-family: Rajdhani, sans-serif;
  font-size: 1.5vh;
  font-weight: 600;
  line-height: 1.8vh;
`;

const DetailsGrid = styled.div`
  // display: grid;
  // grid-template-columns: repeat(1, 1fr);
//   gap: 10px;

`;

const Detail = styled.div`
//   background: rgba(255, 255, 255, 0.1);
 border-bottom: 1px solid rgba(95, 92, 92, 0.5);  padding: 10px;
//   border-radius: 5px;
color: #fff;
  letter-spacing: .1vh;
  text-transform: uppercase;
  // margin-bottom: 1vh;
  font-family: Rajdhani, sans-serif;
  font-size: 1.5vh;
  font-weight: 600;
  line-height: 1.2vh;
  
  display: flex;
justify-content: space-between; 
 &: hover{
 background: white;
 color: black;
 transition: background 0.3s ease, color 0.3s ease;
 }
`;

const Status = styled.div`
// margin-right: 0px;

`;

const MapRotation = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  row-gap: 15px; /* Vertical gap */
  column-gap: 50px; /* Horizontal gap */

`;


const MapCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align the text at the bottom */
  text-align: center;
  position: relative; /* Necessary for overlay positioning */
  height: 150px; /* Match the image height */

  transition: transform 0.3s ease; /* Smooth animation for card hover */
  cursor: pointer;

  &:hover {
    // transform: translateY(-10px); /* Shift image upward */
    .map-name {
      color: black; /* Text color changes to white on hover */
      background: white; /* Background darkens slightly */
    }
  }
`;

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
    transition: transform 0.3s ease; /* Smooth animation */

  &:hover {
    transform: translateY(-10px); /* Shift image upward */
  }
`;

const MapName = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.9); /* Semi-transparent black background */
  color: #ccc; /* Default text color */
  font-size: 14px;
  font-weight: bold;
  padding: 5px 0;
  transition: color 0.3s ease, background 0.3s ease;

  &:hover {
    color: black; /* Text color changes to white on hover */
    background: white; /* Background darkens slightly */
  }
`;

const Buttons = styled.div`
 display: flex;
 gap: 10px;
 text-transform: uppercase;
`;

const Button = styled.div`
    width: 235px;
    color: white;
    border: 1px solid grey;
    background: none;
    padding: 10px;
    text-align: center;
    transition: color 0.3s ease , background 0.3s ease;
    cursor: pointer;
    font-weight: 600;

    &: hover{
        background: white;
        color: black;
    }
`;

const StarButton = styled.div`
    width: 100px;
    color: white;
    border: 1px solid grey;
    background: none;
    padding: 10px;
    text-align: center;
    transition: color 0.3s ease , background 0.3s ease;
    cursor: pointer;
    font-weight: 600;

    &: hover{
        background: white;
        color: black;
    }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
//   gap: 10px;
 padding-top: 20px;
 width: 550px;
`;


const Info = styled.div`
//   background: rgba(255, 255, 255, 0.1);
//   border-radius: 5px;
color: #fff;
  letter-spacing: .1vh;
  text-transform: uppercase;
  margin-bottom: 1vh;
  font-family: Rajdhani, sans-serif;
  font-size: 2.5vh;
  font-weight: 600;
  line-height: 3vh;
`;
const InfoTitle = styled.div`
  font-size: 1.5vh;
  height: 2.5vh


`;


const ServerInfo = () => {
    const maps = [
        { name: "Conquest Large Dawnbreaker", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },
        { name: "Conquest Large Propaganda", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },
        { name: "Conquest Large Operation Locker", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },
        { name: "Conquest Large Dawnbreaker", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },
        { name: "Conquest Large Propaganda", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },
        { name: "Conquest Large Operation Locker", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },
        { name: "Conquest Large Dawnbreaker", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },
        { name: "Conquest Large Propaganda", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },
        { name: "Conquest Large Operation Locker", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },

    ];

    return (
        <ServerInfoContainer>
            <ServerName>! RC3-BASEMAPS</ServerName>
            <p>🇺🇲 CONQUEST LARGE - LANCING DAM - CUSTOM - 60 HZ<br/>
            Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord <br/>  https://discord.gg/3r5NK4d</p>

            <Buttons>
                <Button>Join</Button>
                <Button>spectate</Button>
                <Button>Join as Commander</Button>
                <StarButton>* 13672</StarButton>
            </Buttons>

            <InfoGrid>

                <Info>
                    <InfoTitle>
                        Players
                    </InfoTitle>
                    60/64
                </Info>
                <Info>
                    <InfoTitle>
                        Ping
                    </InfoTitle>
                    104ms
                </Info>
                <Info>
                    <InfoTitle>
                        Tickrate
                    </InfoTitle>
                    60 Hz
                </Info>

            </InfoGrid>
            <Container>
                <Section>
                    <SectionTitle>Settings</SectionTitle>
                    <DetailsGrid>
                        <Detail>Region:
                            <Status>Europe - DE</Status></Detail>
                        <Detail>PunkBuster: <div>ON</div></Detail>
                        <Detail>FairFight: <div>ON</div></Detail>
                        <Detail>Password: <div>OFF</div></Detail>
                        <Detail>Preset: <div>Normal</div></Detail>
                    </DetailsGrid>
                </Section>
                <Section>
                    <SectionTitle>Advanced</SectionTitle>
                    <DetailsGrid>
                        <Detail>Tickets: <div>400</div></Detail>
                        <Detail>Vehicle Spawn Delay: <div>25</div></Detail>
                        <Detail>Bullet Damage: <div>100</div></Detail>
                        <Detail>Kick After Team Kills: <div>5</div></Detail>

                        
                    </DetailsGrid>
                </Section>
                <Section>
                    <SectionTitle>Rules</SectionTitle>
                    <DetailsGrid>
                        <Detail>Region:
                            <Status>Europe - DE</Status></Detail>
                        <Detail>PunkBuster: <div>ON</div></Detail>
                        <Detail>FairFight: <div>ON</div></Detail>
                        <Detail>Password: <div>OFF</div></Detail>
                        <Detail>Preset: <div>Normal</div></Detail>
                    </DetailsGrid>
                </Section>

            </Container>


            <Section>
                <h3>Map Rotation</h3>
                <MapRotation>
                    {maps.map((map, index) => (
                        <MapCard key={index}>
                            <MapImage src={map.img} alt={map.name} />
                            <MapName>{map.name}</MapName>
                        </MapCard>
                    ))}
                </MapRotation>
            </Section>
        </ServerInfoContainer>
    );
};

export default ServerInfo;
