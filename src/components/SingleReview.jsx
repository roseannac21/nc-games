import { Link } from "react-router-dom";
const dayjs = require("dayjs");

const SingleReview = ({ review }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const dateTime = dayjs(review.created_at).format("DD-MM-YYYY hh:mm");

  return (
    <Link
      to={`/reviews/${review.review_id}`}
      onSubmit={handleSubmit}
      class="clicked"
    >
      <div key={review.review_id} class="review">
        <h2 id="review-title">{review.title}</h2>
        <img
          src={review.review_img_url}
          alt={review.title}
          id="review-list-img"
        />
        <p>
          By {review.owner} @ {dateTime}
        </p>
        <p>Votes: {review.votes}</p>
        <p>Comments: {review.comment_count}</p>
      </div>
    </Link>
  );
};

export default SingleReview;
