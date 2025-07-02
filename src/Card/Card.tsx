import { useEffect, useRef } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "./Card.css";
import styles from "./Card.module.css";

interface CardDetails {
  title: string;
  image: string;
  alt?: string;
  description: string;
}

interface CardProps {
  cardsData: CardDetails[];
}

const Card = ({ cardsData }: CardProps) => {
  const firstCardRef = useRef(null);

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
      {cardsData.map((card, idx) => (
        <div
          className="card"
          // tabIndex="0"
          tabIndex={0}
          key={idx}
          ref={idx === 0 ? firstCardRef : null}
        >
          <img src={card.image} alt={card.alt ?? card.title} />
          <div className="text">
            <h2 data-splitting="">{card.title}</h2>
            <p data-splitting="">{card.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Card;
