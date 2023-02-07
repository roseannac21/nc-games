import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import gamesAPI from "../utils/api";
import Votes from "./Votes";

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

    return (
        <>
        <h1>{review.title}</h1>
        <h3>Written by: {review.owner}</h3>
        <p>Created at: {review.created_at}</p>
        <p>Category: {review.category}</p>
        <Votes setLikeCount={setLikeCount} likeCount = {likeCount} review={review}/>
        <img src={review.review_img_url} alt={review.title}></img>
        <p>{review.review_body}</p>
        </>
    )


}

export default ReviewExtraInfo