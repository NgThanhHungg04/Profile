import { motion } from "framer-motion";
import Discord from "../../api/userInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  { icon: faEnvelope, link: "mailto:nguyenthanhhungg04@gmail.com", tooltip: "Gmail" },
  { icon: faGithub, link: "https://github.com/NgThanhHungg04", tooltip: "Github" },
  { icon: faCommentDots, link: "https://zalo.me/0345781317", tooltip: "Zalo" },
  { icon: faYoutube, link: "https://youtube.com/", tooltip: "Youtube" },
  { icon: faFacebook, link: "https://www.facebook.com/profile.php?id=100038114235678", tooltip: "Facebook" },
];

function Header() {
  return (
    <div className="p-5 md:rounded-xl bg-white shadow-sm text-neutral-800">
      <Discord />
      <div className="flex mt-4 gap-2 text-xl">
        {socialLinks.map((item, index) => (
          <Tippy key={index} animation="scale" content={item.tooltip}>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-200 size-[38px] flex items-center justify-center hover:bg-cyan-500"
              href={item.link}
              whileHover={{ scale: 1.2 }}
              whileTap={{ rotate: 10 }}
            >
              <FontAwesomeIcon icon={item.icon} />
            </motion.a>
          </Tippy>
        ))}
      </div>
    </div>
  );
}

export default Header;
