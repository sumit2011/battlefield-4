import React, { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: ${({ isExpanded }) => (isExpanded ? "250px" : "80px")};
  background: ${({ isExpanded }) => isExpanded ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)"};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: fixed;
  right: 0; /* Aligns the sidebar to the right side */
  padding-top: 20px;
  transition: width 0.3s ease-in-out, background 0.3s ease-in-out;
  font-family: 'Rajdhani', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  margin: 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  text-align: left;
  padding-left: 20px;
//   opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  display: flex;
  align-items: center;
`;

const SectionIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 10px;

`;

const Text = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
    opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;


`;


const PlayerItem = styled.div`
  display: flex;
  align-items: left;
  cursor: pointer;
  transition: background 0.3s ease;
  position: relative;
  margin-left: 15px;
 width: 100%;
 &:hover {
    // background: rgba(255, 255, 255, 0.2);
   color: black;
    background: white;
    
  }
  
`;

const StatusBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: ${({ online }) => (online ? "#4caf50" : "grey")}; 
  // margin-left: 10px;
`;

const PlayerImage = styled.img`
  width: 40px;
  height: 100%;
  margin-left: 5px;
  margin-right: ${({ isExpanded }) => (isExpanded ? "10px" : "0")};
  transition: margin 0.3s ease-in-out;
`;

const PlayerInfo = styled.div`
  display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
  

`;

const PlayerName = styled.span`
  font-size: 15px;
  letter-spacing: .1vh;
  font-seight: 500;
  // color: #fff;
      transition: opacity 0.3s ease-in-out;

`;

const PlayerStatus = styled.span`
  font-size: 12px;
  color: ${({ online }) => (online ? "grey" : "grey")};
  transition: opacity 0.2s ease-in-out;

`;

const Hr = styled.hr`
width: 90%;
// opacity: 0.3;
  opacity: ${({ isExpanded }) => (isExpanded ? "0.1" : "0")};


`;
const RightSidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const players = [
        {
            name: "MaryJane",
            status: "Online",
            image: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png",
            details: "Rank: Commander, K/D: 3.5",
        },
        {
            name: "420",
            status: "Offline",
            image: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png",
            details: "Rank: Soldier, K/D: 1.8",
        },
    ];

    return (
        <SidebarContainer
            isExpanded={isExpanded}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >

            <Hr isExpanded={isExpanded} />
            <SectionTitle  >
                <SectionIcon src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg" alt="Squad Icon" />
                <Text isExpanded={isExpanded} >Squad</Text>
            </SectionTitle>
            {/* <PlayerList> */}
            <PlayerItem>
                {/* <StatusBar /> */}
                <PlayerImage
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg"
                    alt="Squad Join"
                    isExpanded={isExpanded}
                />
                <PlayerInfo isExpanded={isExpanded}>
                    <PlayerName>Squad Join</PlayerName>
                </PlayerInfo>
            </PlayerItem>
            <Hr isExpanded={isExpanded} />
            <SectionTitle>
                <SectionIcon src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg" alt="Online Icon" />

                <Text isExpanded={isExpanded} >Online</Text>

            </SectionTitle>
            {players
                .filter((player) => player.status === "Online")
                .map((player, index) => (
                    <PlayerItem key={index}>
                        <StatusBar online={true} />
                        <PlayerImage
                            src={player.image}
                            alt={player.name}
                            isExpanded={isExpanded}
                        />
                        <PlayerInfo isExpanded={isExpanded}>
                            <PlayerName>{player.name}</PlayerName>
                            <br />
                            <PlayerStatus online={true}>{player.status}</PlayerStatus>
                        </PlayerInfo>
                    </PlayerItem>
                ))}

            <Hr isExpanded={isExpanded} />
            <SectionTitle >
                <SectionIcon src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg" alt="Offline Icon" />
                <Text isExpanded={isExpanded} >Offline</Text>

            </SectionTitle>
            {players
                .filter((player) => player.status === "Offline")
                .map((player, index) => (
                    <PlayerItem key={index}>
                        <StatusBar online={false} />
                        <PlayerImage
                            src={player.image}
                            alt={player.name}
                            isExpanded={isExpanded}
                        />
                        <PlayerInfo isExpanded={isExpanded}>
                            <PlayerName>{player.name}</PlayerName>
                            <br />
                            <PlayerStatus online={false}>{player.status}</PlayerStatus>
                        </PlayerInfo>
                    </PlayerItem>
                ))}
            {/* </PlayerList> */}
        </SidebarContainer>
    );
};

export default RightSidebar;
