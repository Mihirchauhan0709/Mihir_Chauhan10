// Portfolio.jsx
import React from "react";
import image from "../images/design-desk.jpeg";
import "./Portfolio.css"; // Import the CSS file

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "College Management Chatbot",
    description:
      "Developed a chatbot using natural language processing (NLP) to assist with college management tasks. The chatbot can answer queries, provide information about courses, and more.Technologies: Python, NLTK, Dialogflow, tkinter, neural networks, JSON 🐍.",
    url: "https://github.com/Mihirchauhan0709/chatbot-for-collage-management",
  },
  {
    title: "Sign Language Recognition using LSTM",
    description:
      "Implemented a deep learning model (LSTM) to recognize sign language gestures. The model can convert sign language gestures into text. Technologies: Python, TensorFlow, LSTM, pandas, OpenCV 🧠",
    url: "https://github.com/Mihirchauhan0709/Sign-language-recognition",
  },
  {
    title: "My Resume Site",
    description: "Includes my experience, skills and Projects.",
    url: "https://mihirchauhan.tiiny.site",
  },
  {
    title: "Stock Market Analysis",
    description:
      "Conducted an in-depth analysis of stock market data. Explored historical stock prices, performed technical analysis, and implemented predictive models. Technologies: Python, Pandas, Matplotlib, Scikit-Learn 📈.",
    url: "https://github.com/Mihirchauhan0709/Stock-Market-analysis",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="container">
        <div className="image-container">
          <img
            src={image}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
            </a>
            <p className="small">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
