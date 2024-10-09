import React from "react";
import "./topbar.scss";
import Image from "next/image";
import Pic from "../../../public/pass.png";
import Linkedin from "../svgComps/Linkedin";
import Github from "../svgComps/Github";
import Twitter from "../svgComps/Twitter";
import Leetcode from "../svgComps/Leetcode";
import Link from "next/link";
import Java from "../svgComps/Java";
import Software from "../svgComps/Software"
type Props = {};

export default function Topbar({}: Props) {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <div className="imgWrap">
          <Image
            src={Pic}
            width={151}
            height={151}
            alt="Picture of the author"
          />
        </div>
        <div className="topbarLeftRightItem">
          <h4>
            Surendra Tomar
          </h4>
          <div className="roles">Software Engineer <Java/>| Java Developer <Software/>| ⭐Leetcode</div>
          <div className="icons">
            <Link href="https://www.linkedin.com/in/surendra-tomar-689a2421b/">
              <Linkedin />
            </Link>
            <Link href="https://github.com/surendratomar">
              <Github />
            </Link>
            <Link href="https://twitter.com/@surendraTomar16">
              <Twitter />
            </Link>
            <Link href="https://leetcode.com/u/Surendratomar/">
              <Leetcode/>
            </Link>
          </div>
        </div>
      </div>
      <div className="verticalRule"></div>
      <div className="topbarRight">
        <div>
          <span>EMAIL</span>
          <p>
            <Link
              style={{ textDecoration: "none",color:'white' }}
              href="mailto:tomar123surendra@gmail.com"
            >
              tomar123surendra@gmail.com
            </Link>
          </p>
        </div>
        <div>
          <span>CV</span>
          <Link
            style={{ textDecoration: "none" }}
            href="https://drive.google.com/file/d/10eT1TfzldlHonq6Fd5X9cX_tBPk2Qq7A/view?usp=sharing"
          >
            <p>Download</p>
          </Link>
        </div>
        <div>
          <span>Location</span>
          <p>Agra,India</p>
        </div>
        <div>
          <span>Status</span>
          <p>🚀</p>
        </div>
      </div>
    </div>
  );
}
