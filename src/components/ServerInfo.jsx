import React from "react";
import styled from "styled-components";

const ServerInfoContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  height: 85vh;
  margin-left: 0;
  font-family: Arial, sans-serif;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

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
  color: #fff;
  letter-spacing: .1vh;
  text-transform: uppercase;
  margin-bottom: 1vh;
  font-family: Rajdhani, sans-serif;
  font-size: 1.5vh;
  font-weight: 600;
  line-height: 1.8vh;
`;

const DetailsGrid = styled.div``;

const Detail = styled.div`
  border-bottom: 1px solid rgba(95, 92, 92, 0.5);
  padding: 10px;
  color: #fff;
  letter-spacing: .1vh;
  text-transform: uppercase;
  font-family: Rajdhani, sans-serif;
  font-size: 1.5vh;
  font-weight: 600;
  line-height: 1.2vh;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: white;
    color: black;
    transition: background 0.3s ease, color 0.3s ease;
  }
`;

const Status = styled.div``;

const MapRotation = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  row-gap: 15px; 
  column-gap: 50px; 
  padding-bottom: 20px;
`;

const MapCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  text-align: center;
  position: relative; 
  height: 150px; 
  transition: transform 0.3s ease; 
  cursor: pointer;

  &:hover {
    .map-name {
      color: black; 
      background: white; 
    }
  }
`;

const MapImage = styled.img`
  width: 100%;
  height: 50%;
  margin-bottom: 30%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const MapName = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.8); 
  color: #fff; 
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  transition: color 0.3s ease, background 0.3s ease;

  &:hover {
    color: black; 
    background: white; 
  }
`;

const Name = styled.div`
 width: 55%;
 text-align: left;
 padding: 10px;
 text-transform: uppercase;
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

  &:hover {
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

  &:hover {
    background: white;
    color: black;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 20px;
  width: 550px;
`;

const Info = styled.div`
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
  height: 2.5vh;
`;



const ServerInfo = () => {
  const maps = [
    { name: "Conquest Large Dawnbreaker", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png" },
    { name: "Conquest Large Propaganda", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png" },
    { name: "Conquest Large Operation Locker", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png" },
    { name: "Conquest Large Lancang dam", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },
    { name: "Conquest Large siege of shanghai", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png" },
    { name: "Conquest Large golmud railway", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d00244d9e5298944f_browser__SI-next-image%20-%2003.png" },
    { name: "Conquest Large Propaganda", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png" },
    { name: "Conquest Large siege of shanghai", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png" },
    { name: "Conquest Large Dawnbreaker", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png" },
    { name: "Conquest Large Propaganda", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png" },
    { name: "Conquest Large Operation Locker", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png" },
    { name: "Conquest Large Lancang dam", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png" },
    { name: "Conquest Large siege of shanghai", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png" },
    { name: "Conquest Large golmud railway", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d00244d9e5298944f_browser__SI-next-image%20-%2003.png" },
    { name: "Conquest Large Propaganda", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png" },
    { name: "Conquest Large siege of shanghai", img: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png" },

  ];

  return (
    <ServerInfoContainer>
      <ServerName>! RC3-BASEMAPS</ServerName>
      <p>🇺🇲 CONQUEST LARGE - LANCING DAM - CUSTOM - 60 HZ<br />
        Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord <br /> https://discord.gg/3r5NK4d</p>
      <Buttons>
        <Button>Join</Button>
        <Button>Spectate</Button>
        <Button>Join as Commander</Button>
        <StarButton>★ 13672</StarButton>
      </Buttons>
      <InfoGrid>
        <Info>
          <InfoTitle>Players</InfoTitle>
          60/64
        </Info>
        <Info>
          <InfoTitle>Ping</InfoTitle>
          104ms
        </Info>
        <Info>
          <InfoTitle>Tickrate</InfoTitle>
          60 Hz
        </Info>
      </InfoGrid>
      <Container>
        <Section>
          <SectionTitle>Settings</SectionTitle>
          <DetailsGrid>
            <Detail>Region<Status>Europe - DE</Status></Detail>
            <Detail>PunkBuster<div>ON</div></Detail>
            <Detail>FairFight<div>ON</div></Detail>
            <Detail>Password<div>OFF</div></Detail>
            <Detail>Preset<div>Normal</div></Detail>
          </DetailsGrid>
        </Section>
        <Section>



          <SectionTitle>Advanced</SectionTitle>
          <DetailsGrid>
            <Detail>minimap<div>on</div></Detail>
            <Detail>only squad leader spawn<div>off</div></Detail>
            <Detail>vehicles<div>on</div></Detail>
            <Detail>team balance<div>on</div></Detail>
            <Detail>minimap spotting<div>on</div></Detail>
            <Detail>hud<div>on</div></Detail>
            <Detail>3p vehicle cam<div>on</div></Detail>
            <Detail>regenerative health<div>on</div></Detail>
            <Detail>kill cam<div>on</div></Detail>
            <Detail>friendly fire<div>off</div></Detail>
            <Detail>3d spotting<div>on</div></Detail>
            <Detail>enemy name tags<div>on</div></Detail>
          </DetailsGrid>


        </Section>
        <Section>
          <SectionTitle>Rules</SectionTitle>
          <DetailsGrid>
            <Detail>
              tickets<Status style={{ color: "yellow" }}>400</Status>
            </Detail>
            <Detail>
              vehicle spawn delay<div style={{ color: "yellow" }}>25</div>
            </Detail>
            <Detail>bullet damage<div>100</div></Detail>
            <Detail>kick after team kills<div>5</div></Detail>
            <Detail>player health<div>100</div></Detail>
            <Detail>player respawn time<div>100</div></Detail>
            <Detail>kick after idle<div>300</div></Detail>
            <Detail>ban after kicks<div>3</div></Detail>
          </DetailsGrid>
        </Section>
      </Container>
      <Section>
        <h3>Map Rotation</h3>
        <MapRotation>
          {maps.map((map, index) => (
            <MapCard key={index}>
              <MapImage src={map.img} alt={map.name} />
              <MapName><Name>{map.name}
              </Name></MapName>
            </MapCard>
          ))}
        </MapRotation>
      </Section>
    </ServerInfoContainer>
  );
};

export default ServerInfo;
