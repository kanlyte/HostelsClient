import React, { useEffect, useState } from "react";
import placeHolder from "../store/images/profile-picture-placeholder.jpeg";
import styled from "styled-components";
import "../Design/team.css";

const MyProgressiveImage = ({ placeholder, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholder);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <Img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      notSet={imgSrc === placeholder}
    />
  );
};

const SingleTeamMember = ({
  name,
  role,
  url,
  fb,
  twitter,
  linkedin,
  email,
  github,
  whatsapp,
}) => {
  return (
    <div class="box">
      <MyProgressiveImage
        src={url}
        placeholder={placeHolder}
        width="100%"
        height="269.41px"
      />
      <h3>{name}</h3>
      <h5>{role}</h5>
      <div class="icons">
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <i className="lab la-twitter"></i>
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="lab la-linkedin-in"></i>
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="lab la-github"></i>
          </a>
        )}
        {fb && (
          <a href={fb} target="_blank" rel="noopener noreferrer">
            <i className="lab la-facebook-f"></i>
          </a>
        )}
      </div>
    </div>
  );
};

const Img = styled.img`
  //filter: blur(0px);
  transition: filter 0.5s linear;
  ${({ notSet }) =>
    notSet
      ? { objectFit: "contain" }
      : { objectFit: "cover", objectPosition: "50% 10%" }}/* .loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  .loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
  } */
`;

export default SingleTeamMember;
