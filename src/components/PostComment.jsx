import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const PostComment = (review_id) => {

const [commentData, setCommentData] = useState("");

const [submitted, setSubmitted] = useState(false);

useEffect(() => {
    if(submitted) {
        const postComment = () => {
            axios.post(`https://nc-games-no2.onrender.com/api/reviews/${review_id}`, commentData)
            .catch((err) => {
                console.log(err)
            })
        };
        postComment()
    }
}, [commentData, submitted])
}

export default PostComment