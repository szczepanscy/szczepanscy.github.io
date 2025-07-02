import { useEffect, useRef } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "./Card.css";
// import "./Card.module.css";

const cardsData = [
  {
    title: "The City",
    image:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    alt: "A City skyline at sunset",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio. Quasi non molestias odio.",
  },
  {
    title: "The Beach",
    image:
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    alt: "A beach at sunset",
    description:
      "Quasi non molestias odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio.",
  },
];

const CardSplitHovers = () => {
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
          <img src={card.image} alt={card.alt} />
          <div className="text">
            <h2 data-splitting="">{card.title}</h2>
            <p data-splitting="">{card.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default CardSplitHovers;
