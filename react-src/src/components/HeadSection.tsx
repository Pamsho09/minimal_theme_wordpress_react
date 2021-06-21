import React,{useState,useContext} from "react";
import AppContext from "../context/AppContext"
import "../styles/components/headSection.scss";
import coffe from "../assets/images/coffe.svg";
import croods from "../assets/images/croods.png";
function HeadSection() {
  const {state } :any =useContext(AppContext) 
  return (
    <>
      <section className="HeadSection">
        <div className="HeadSection_container">
          <div className="HeadSection_container-text">
            <h1 className="container_text-h1">
               {state.description}  <img src={coffe}/>
            </h1>

            <div className="container_input">
                <input type="text"
                className="input"placeholder="you@domain.com"/> <button className="button">SUBSCRIBE</button>


            </div>


          </div>
          <div className="HeadSection_container-img">
              <img src={croods}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeadSection;
