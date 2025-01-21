import css from "./Card.module.css";
import { GetCardsRecord } from "@services/api/get-cards/types";
import { useState } from "react";

export default function Card({ card }: Props) {
  const [isBack, setIsBack] = useState(false);
  const { name, front, img, likes, author, audio, back } = card;
  return (
    <article className={css.card}>
      <picture onClick={() => setIsBack(!isBack)}>
        <img src={img} alt={name} />
      </picture>
      <h5 className={css.name}>
        {name}
        <button>{likes}</button>
      </h5>

      {!isBack ? (
        <div className={css.front}>
          <p>{front}</p>
          <div>{author}</div>
        </div>
      ) : (
        <div className={css.back}>
          <div>{back}</div>
          <audio controls>
            <source src={audio} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      )}
    </article>
  );
}

type Props = {
  card: GetCardsRecord;
};
