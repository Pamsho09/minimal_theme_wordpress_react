import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/containers/article.scss";
import image from "../assets/images/details/image.png";
function Article() {
  const [info, setInfo]: any = useState(null);
  const { id }: any = useParams();

  useEffect(() => {
    fetch(`/wp-json/wp/v2/posts/${id}`)
      .then((res) => res.json())
      .then((dat) => setInfo(dat));
  }, []);

  return (
    <>
      {info && (
        <>
          {" "}
          <div className="Article">
            <img src={image} alt="people" className="Article-img" />

            <article className="Article-body">
              <div className="Article-content">
                <h2 className="Article-title">{info.title.rendered}</h2>

                <h3 className="Article-author">Written by John doe</h3>
                <span className="Article-date">Monday May 20</span>
              </div>
              <p
                className="Article-markdown"
                dangerouslySetInnerHTML={{ __html: info.content.rendered }}
              ></p>
            </article>
          </div>
        </>
      )}
    </>
  );
}

export default Article;
