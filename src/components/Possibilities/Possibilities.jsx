import React from "react";
import "./Possibilities.scss";
import { Possibilitie } from "../../static";

const Possibilities = () => {
  return (
    <section className="posibilities">
      <div className="container">
        <div className="posibilities-wrapper">
          {Possibilitie?.map((item) => {
            return (
              <div className="posibilities-card" key={item.id}>
                <div className="posibilities-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="posibilities-body">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
