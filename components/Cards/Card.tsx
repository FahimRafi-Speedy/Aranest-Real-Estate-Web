import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

// Define the type for the props
interface CardProps {
  img: string;
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ img, name, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image 
            src={img} 
            alt={name} 
            className={styles.image} 
            width={100} 
            height={100} 
          />
        </div>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>{name}</button>
      </div>
    </div>
  );
};

export default Card;
