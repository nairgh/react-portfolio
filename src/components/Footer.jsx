import React from "react";

function Footer() {
  return (
    <div class="text-center p-6 bg-black footer">
      <span class="text-white">
        Copyright - &copy;{new Date().getFullYear()}{" "}
      </span>
      <a
        class="link-underline text-white font-bold"
        href="https://harinair.netlify.app/"
      >
        Hari Nair
      </a>
    </div>
  );
}

export default Footer;
