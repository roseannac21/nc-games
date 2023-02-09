import { Link } from "react-router-dom"

const SingleReview = ({review}) => {

        const handleSubmit = (event) => {
                event.preventDefault()
        }


return (
        <li key={review.review_id} className="review">
                <Link to={`/reviews/${review.review_id}`} onSubmit={handleSubmit}>
                <h2 id="review-title">{review.title}</h2>
                <img src={review.review_img_url} alt={review.title}/>
                <p>Written by: {review.owner}</p>
                <p>Created at: {review.created_at}</p>
                <p>Votes: {review.votes}</p>
                </Link>
        </li>
    )
}

export default SingleReview