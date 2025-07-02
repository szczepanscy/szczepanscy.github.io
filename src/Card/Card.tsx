/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "./Card.css";
import styles from "./Card.module.css";

export interface CardDetails {
  title: string;
  image: string;
  alt?: string;
  description: string;
}

const colors = [
  "coral",
  "#56ffe5",
]

interface CardProps {
  cardsData: CardDetails[];
}

const Card = ({ cardsData }: CardProps) => {
  const firstCardRef = useRef(null);

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    Splitting();

    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      firstCardRef.current?.focus();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main id="main">
      {cardsData.map((card, idx) => {
        const highlight = getRandomColor();
        return (
          <div
            className="card"
            // @ts-ignore
            style={{ "--highlight": highlight }}
            // tabIndex="0"
            tabIndex={0}
            key={idx}
            ref={idx === 0 ? firstCardRef : null}
          >
            <img
              className={styles.image}
              src={card.image}
              alt={card.alt ?? card.title}
            />
            <div className="text">
              <h2
                className={styles.cardTitle}
                data-splitting=""
              >
                {card.title}
              </h2>
              <p data-splitting="">{card.description}</p>
            </div>
          </div>
        )
      }
      )}
    </main>
  );
};

export default Card;
