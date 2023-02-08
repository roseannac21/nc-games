import { Link } from "react-router-dom"
const dayjs = require("dayjs")

const SingleReview = ({review}) => {

        const handleSubmit = (event) => {
                event.preventDefault()
        }

        const dateTime = dayjs(review.created_at).format("DD-MM-YYYY @ hh:mm");

return (
        <li key={review.review_id} className="review">
                <Link to={`/reviews/${review.review_id}`} onSubmit={handleSubmit}>
                <h2 id="review-title">{review.title}</h2>
                </Link>
                <img src={review.review_img_url} alt={review.title}/>
                <p>Written by: {review.owner}</p>
                <p>Created at: {dateTime}</p>
        </li>
    )
}

export default SingleReview