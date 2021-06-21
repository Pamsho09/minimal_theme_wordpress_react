import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

import "../styles/components/sectionPosts.scss";
import arrow from "../assets/icons/arrow.svg";
import CardPost from "../components/CardPost";

function Articles() {
  const { state }: any = useContext(AppContext);
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => {
        let a: any = [];
      
        for (let index: number = 0; index < data.length; index++) {
          a.push({
            name: data[index].title["rendered"],
            description: des(data[index].excerpt["rendered"]), postId: data[index].id,
            id:index>4?index-5:index,
            date: date(data[index].date),
          });
         
        }
      
        setPost(a);
      });
  }, []);
  function des(e: string) {
    return e.split("<p>")[1];
  }
  function date(e: string) {
    let newDate = new Date(e);
    let data = newDate.toString().split(" ");
    let day;
    if (data[2] === "1") {
      day = "nd";
    }
    if (data[2] === "2") {
      day = "rd";
    }
    if (data[2] === "3") {
    } else {
      day = "th";
    }
    return `${data[1]} ${data[2]}${day} ${data[3]} `;
  }
  return (
    <div className="SectionPosts articles">
      {post.map((e: any, index: number) => {
       
          return <CardPost key={index} {...e} />;
        
      })}
   
    </div>
  );
}

export default Articles;
