import { useState } from "react";
import gamesAPI from "../utils/api";

const Votes = ({ setLikeCount, likeCount, review }) => {
  const [likeChange, setLikeChange] = useState(0);
  const [err, setErr] = useState(null);

  const handleLike = () => {
    setLikeChange((currLikes) => currLikes + 1);
    setErr(null);
    gamesAPI
      .patch(`/reviews/${review.review_id}`, { inc_votes: 1 })
      .catch((err) => {
        setLikeChange(0);
        setLikeCount((currLikes) => currLikes - 1);
        setErr(err);
      });
  };

  const handleDislike = () => {
    setLikeChange((currLikes) => currLikes - 1);
    setErr(null);
    gamesAPI
      .patch(`/reviews/${review.review_id}`, { inc_votes: -1 })
      .catch((err) => {
        setLikeChange(0);
        setLikeCount((currLikes) => currLikes + 1);
        setErr(err);
      });
  };

  return (
    <section class="votes">
      <button
        id={likeChange === 1 ? "button-clicked" : "vote-button"}
        disabled={likeChange === 1}
        onClick={handleLike}
      >
        👍🏽
      </button>
      <button
        id={likeChange === -1 ? "button-clicked" : "vote-button"}
        disabled={likeChange === -1}
        onClick={handleDislike}
      >
        👎🏽
      </button>
      <p>Votes: {likeCount + likeChange}</p>
      {err ? <p>{err.message}</p> : null}
    </section>
  );
};

export default Votes;
