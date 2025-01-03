// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import RightSidebar from "./components/RightSidebar";

const AppContainer = styled.div`
  display: flex;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      {/* <Sidebar /> */}
      <Dashboard />
      <RightSidebar/>
    </AppContainer>
  );
}

export default App;
