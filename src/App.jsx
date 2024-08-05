import React from "react";
import NavBar from "./components/NavBar";
import SecondNavBar from "./components/SecondNavBar";
import Hero from "./components/Hero";
import Managers from "./components/Managers";
import Services from "./components/Services";
import Table from "./components/Table";
import MediaCenter from "./components/MediaCenter";
import OurOffices from "./components/OurOffices";
import VisitUs from "./components/VisitUs";
function App() {
  return (
    <div>
      <NavBar />
      <SecondNavBar />
      <Hero />
      <Managers />
      <Services />
      <Table />
      <MediaCenter />
      <OurOffices />
      <VisitUs />
    </div>
  );
}

export default App;
