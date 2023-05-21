import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaAngellist } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaAngellist />
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <BsLinkedin />
    </div>
  </div>
);

export default SocialMedia;
