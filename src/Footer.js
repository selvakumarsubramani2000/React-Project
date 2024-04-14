import React from "react";

export const Footer = ({length}) => {
  return (
    <footer>
        {length} list {length === 1 || length === 0 ?"item":"items"}
    </footer>
  )
}
export default Footer;

