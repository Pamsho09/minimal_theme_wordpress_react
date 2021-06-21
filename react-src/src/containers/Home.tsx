import React from "react";
import "../styles/containers/home.scss";

import HeadSection from "../components/HeadSection"
import SectionPosts from "../components/SectionPosts";

export default function Home() {
  return <div className="Home">
    
      <HeadSection/>
      <SectionPosts/>
      
  </div>;
}
