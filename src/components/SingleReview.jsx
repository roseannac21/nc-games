import { Link } from "react-router-dom"

const SingleReview = ({review}) => {

        const handleSubmit = (event) => {
                event.preventDefault()
        }


return (
        <li key={review.review_id} className="review">
                <Link to={`/reviews/${review.review_id}`} onSubmit={handleSubmit}>
                <h2>{review.title}</h2>
                </Link>
                <img src={review.review_img_url} alt={review.title}/>
                <p>Written by: {review.owner}</p>
                <p>Created at: {review.created_at}</p>
                <p>Votes: {review.votes}</p>
        </li>
    )
}

export default SingleReview