import React from "react";
import "../styles/components/cardPost.scss";
import image1 from "../assets/images/landing/image1.png";
import image2 from "../assets/images/landing/image2.png";
import image3 from "../assets/images/landing/image3.png";
import image4 from "../assets/images/landing/image4.png";
import image5 from "../assets/images/landing/image5.png";
function CardPost({ card, date, name, description, id,postId }: any) {
 
  let img =
    (id === 0
      ? image1
      : id === 1
      ? image2
      : id === 2
      ? image3
      : id === 3
      ? image4
      : id === 4 && image5)
  return (
    <div className={`CardPost ${card != undefined && card}`}>
      <div className="CardPost-container">
        <h2 className="container-title">{name}</h2>

        <p className="container-description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that....
        </p>
        <div className="container-opt">
          <span className="container-date">{date}</span>

          <a href={`/articles-details/${postId}`} className="container-read">
            <b>Read more</b>
          </a>
        </div>
      </div>
      <img className="CardPost-image" src={img==false?image1:img} />
    </div>
  );
}

export default CardPost;
