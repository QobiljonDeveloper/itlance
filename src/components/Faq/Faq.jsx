import React from "react";
import "./Faq.scss";
import { faqData } from "../../static";

const Faq = () => {
  return (
    <section className="faq">
      <h2 className="faq-title">Часто задаваемые вопросы</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
