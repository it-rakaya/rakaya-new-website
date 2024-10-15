import React from "react";
import FaceBockIcon from "./icons/FaceBockIcon";
import FooterLink from "./layout/FooterLink";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

const ShareSocialComp = ({ url, imgUrl, postId , title , description , currentUrl  }) => {
  const style = {
    root: {
      display: "flex",
      padding: "0",
      marginTop: "10px",
      alignItems: "center",
      minWidth: "160px",
    },
    copyContainer: {
      display: "none",
    },
    title: {
      color: "aquamarine",
      fontStyle: "italic",
    },
    icon: {
      cursor: "pointer",
      color: "#c9b171",
    },
  };
  const shareText = encodeURIComponent(`${title} - ${description}`);

  const socialLinks = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      label: "Share on Facebook",
      iconClass: "bi bi-facebook",
    },

    {
      href: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(currentUrl)}`,
      label: "Share on Twitter",
      iconClass: "bi bi-twitter",
    },
    {
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        url
      )}&id=${postId}`,
      label: "Contact us on WhatsApp",
      iconClass: "bi bi-whatsapp",
    },
    {
      href: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        url
      )}&id=${postId}`,
      label: "Connect with us on LinkedIn",
      Component: SlSocialLinkedin,
      style: { marginTop: "-5px" },
    },
    {
      href: `https://www.instagram.com/?url=${encodeURIComponent(
        url
      )}&id=${postId}`,
      label: "Follow us on Instagram",
      iconClass: "bi bi-instagram",
    },
  ];

  return (
    <div style={style.root}>
      {socialLinks.map((link, index) => (
        <FooterLink key={index} href={link.href} ariaLabel={link.label}>
          {link.Component ? (
            <link.Component style={{ ...style.icon, ...link.style }} />
          ) : (
            <i className={link.iconClass} style={style.icon}></i>
          )}
        </FooterLink>
      ))}
    </div>
  );
};

export default ShareSocialComp;

