const SingleReview = ({review}) => {
return (
        <li key={review.review_id} className="review">
                <h2>{review.title}</h2>
                <img src={review.review_img_url} alt={review.title}/>
        </li>
    )
}

export default SingleReview