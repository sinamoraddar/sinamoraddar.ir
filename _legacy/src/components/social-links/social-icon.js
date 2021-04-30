import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaProductHunt,
  FaTwitter,
  FaPhone,
  FaMailBulk,
  FaPaperclip,
} from "react-icons/fa";
import { SocialType } from "../../types";

const SocialIcon = ({ name, ...params }) => {
  const icons = {
    behance: FaBehance,
    dribbble: FaDribbble,
    facebook: FaFacebook,
    github: FaGithub,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    producthunt: FaProductHunt,
    twitter: FaTwitter,
    phone: FaPhone,
    email: FaMailBulk,
    resume: FaPaperclip,
  };

  const Icon = icons[name];

  return Icon ? <Icon {...params} /> : null;
};

SocialIcon.propTypes = {
  name: SocialType.name,
};

export default SocialIcon;
