import React from "react";
import "./Faq.scss";

const faqData = [
  {
    question: "За нами будет закреплен какой-нибудь IT специалист ?",
    
  },
  {
    question: "Какие регионы Вы обслуживаете ?",
    
  },
  {
    question: "Вы можете предоставлять круглосуточную поддержку ?",
    answer:
      "Да, мы можем предоставить расширенный график IT обслуживания и круглосуточную работу нашей технической поддержки для клиентов. Однако мы всегда предупреждаем наших клиентов, что техническая поддержка в графике 24/7 сильно удорожает стоимость договора IT обслуживания.",
  },
];

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
