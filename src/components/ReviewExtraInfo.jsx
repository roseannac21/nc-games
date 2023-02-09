import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import gamesAPI from "../utils/api";
import Votes from "./Votes";
import Comments from "./Comments";
const dayjs = require("dayjs")

const ReviewExtraInfo = () => {
    const {review_id} = useParams();


    const [review, setReview] = useState({});    
    const [likeCount, setLikeCount] = useState(0)


    useEffect(() => {
        gamesAPI.get(`/reviews/${review_id}`)
        .then(({data}) => {
            setReview(data)
            setLikeCount(data.votes)
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
        <Votes setLikeCount={setLikeCount} likeCount = {likeCount} review={review}/>
        <img src={review.review_img_url} alt={review.title}></img>
        <p>{review.review_body}</p>
        <Comments review_id={review_id}/>
        </div>
        
    )


}

export default ReviewExtraInfo