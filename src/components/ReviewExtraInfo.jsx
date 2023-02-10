import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import gamesAPI from "../utils/api";
import Votes from "./Votes";
import Comments from "./Comments";
import ErrorHandler from "./ErrorHandler";
const dayjs = require("dayjs")

const ReviewExtraInfo = ({loggedInUser, setErrState, errState}) => {

    const {review_id} = useParams();

    const [review, setReview] = useState({});    
    const [likeCount, setLikeCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    // const [errState, setErr] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        gamesAPI.get(`/reviews/${review_id}`)
        .then(({data}) => {
            setErrState(false)
            setReview(data)
            setLikeCount(data.votes)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false) 
            setErrState(true)
            })
    }, [review_id]);
    
    if (isLoading) {
        return <p>Loading review...</p>
    } else if (errState) {
        return (
        <>
        <ErrorHandler/>
        <p>Review ID doesn't exist</p>
        </>
        )
    } else {

    const dateTime = dayjs(review.created_at).format("DD-MM-YYYY hh:mm");

    return (
        <div className="review-info">
        <h1>{review.title}</h1>
        <h3>Written by: {review.owner}</h3>
        <time>Created at: {dateTime}</time>
        <p>Category: {review.category}</p>
        <Votes setLikeCount={setLikeCount} likeCount = {likeCount} review={review} setErrState={setErrState}/>
        <img src={review.review_img_url} alt={review.title}></img>
        <p id="review-body">{review.review_body}</p>
        <Comments review_id={review_id} loggedInUser={loggedInUser} setErrState={setErrState}/>
        </div>
        
    )
    }

}

export default ReviewExtraInfo