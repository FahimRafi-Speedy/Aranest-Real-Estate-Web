import React from "react";
import styles from "./CardContainer.module.css";
import Card from "./Card";

const data = [
  {
    img: "/cards/searchLocation.png",
    name: "Search Location",
    description: "Here you can search your desired location",
  },
  {
    img: "/cards/choose.png",
    name: "Choose Property",
    description: "Here you can choose your right property",
  },
  {
    img: "/cards/property.png",
    name: "Own Property",
    description: "Here you can own your desired property",
  },
];

const CardContainer = () => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index} className={styles.cardWithArrow}>
          <Card img={item.img} name={item.name} description={item.description} />
          {index !== data.length - 1 && (
            <img src="/cards/rightArrow.png" alt="Arrow" className={styles.arrow} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
