import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"

const ReviewExtraInfo = () => {
    const {review_id} = useParams();

    const [review, setReview] = useState({});

    useEffect(() => {
        axios.get(`https://nc-games-no2.onrender.com/api/reviews/${review_id}`)
        .then(({data}) => {
            setReview(data)
        })
    }, [review_id]);

    return (
        <>
        <h1>{review.title}</h1>
        <h3>Written by: {review.owner}</h3>
        <p>Created at: {review.created_at}</p>
        <p>Category: {review.category}</p>
        <p>Votes: {review.votes}</p>
        <img src={review.review_img_url} alt={review.title}></img>
        <p>{review.review_body}</p>
        </>
    )


}

export default ReviewExtraInfo