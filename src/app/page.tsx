"use client"
import Underline from "@/components/svgComps/Underline";
import initGA from "@/utils/Analytics/analytics";
import "./page.scss";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    initGA();
  }, []);
  return (
    <div className="about">
      <h1>About Me</h1>
      <Underline />
      <p>
        Hello, I am <strong>Surendra Pratap Tomar</strong>, a passionate and
        skilled software engineer with expertise in various technologies. I hold
        a B.Tech(2023) degree in Computer Science Engineering from{" "}
        <strong>GLA University Mathura (GLA)</strong> in Mathura,
        Uttar Pradesh, India.
      </p>
      <p>
        My professional journey has been focused on web development, and I have
        gained proficiency in languages such as <strong>Java</strong>,{" "}
        <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
        <strong>JavaScript</strong>. I have a strong understanding of data
        structures, algorithms, and database management systems like{" "}
        <strong>MySQL</strong> and <strong>MongoDB</strong>. Additionally, I
        have experience in working with popular frameworks and libraries such as{" "}
        <strong>Next.js</strong>, <strong>React.js</strong>,{" "}
        <strong>Node.js</strong>, <strong>Typescript</strong>,{" "}
      </p>
      <p>
        Outside of my technical pursuits, I have achieved notable success on{" "}
        <strong>LEETCODE</strong>, with best rankings in various competitions.
      </p>
      <p>
        While technology remains a significant part of my life and career, I
        recognize the importance of embracing a well-rounded approach. By
        actively engaging in discussions, exploring diverse interests, and being
        open to new experiences, I strive to cultivate a balanced perspective
        that goes beyond the boundaries of technology.
      </p>
    </div>
  );
}
