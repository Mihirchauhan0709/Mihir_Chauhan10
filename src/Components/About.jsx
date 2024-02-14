/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import "./About.css";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Data Science enthusiast studying at Mumbai University. I love exploring and analyzing data to extract insights and create models.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python",
  "R programming",
  "Power BI",
  "Tableau",
  "SQL",
  "Data visualization",
  "Data analysis",
  "Data mining",
  "Machine learning",
  "Deep learning",
  "Natural language processing",
  "Predictive modeling",
  "Data warehousing",
  "Data modeling",
  "Cloud computing",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am driven by a passion for solving complex problems through innovative approaches in data science. Leveraging my skills, I continuously seek new and improved ways to make the power of data accessible and impactful for all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="content-container">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
