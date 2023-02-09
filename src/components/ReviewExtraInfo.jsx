import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import Comments from "./Comments";
const dayjs = require("dayjs")

const ReviewExtraInfo = () => {
    const {review_id} = useParams();

    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://nc-games-no2.onrender.com/api/reviews/${review_id}`)
        .then(({data}) => {
            setReview(data)
            setIsLoading(false)
        })
    }, [review_id]);

    if (isLoading) {
        return <p>Loading review...</p>
      };

      const dateTime = dayjs(review.created_at).format("DD-MM-YYYY hh:mm");

    return (
        <div className="review-info">
        <h1>{review.title}</h1>
        <h3>Written by: {review.owner}</h3>
        <time>Created at: {dateTime}</time>
        <p>Category: {review.category}</p>
        <p>Votes: {review.votes}</p>
        <img src={review.review_img_url} alt={review.title}></img>
        <p>{review.review_body}</p>
        <Comments review_id={review_id}/>
        </div>
        
    )


}

export default ReviewExtraInfo