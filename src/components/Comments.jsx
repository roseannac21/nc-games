import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";
const dayjs = require("dayjs")

const Comments = ({review_id}) => {
    
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [postSuccessful, setPostSuccessful] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://nc-games-no2.onrender.com/api/reviews/${review_id}/comments`)
        .then(({data}) => {
            setComments(data)
            setIsLoading(false)
        })
    }, [review_id, postSuccessful]);

    if (isLoading) {
        return <p>Loading comments...</p>
      }


    return (
        <>
        <h2>Comments</h2>
        { comments.length === 0 ? <p>No comments to display</p> : null }
        <ul>
        <PostComment review_id={review_id} setComments={setComments} setPostSuccessful={setPostSuccessful}/>
        {postSuccessful ? <p>Your comment was posted successfully!</p> : null}
            {comments.map((comment) => {
             const dateTime = dayjs(comment.created_at).format("DD-MM-YYYY hh:mm")
             return (
              <li key={comment.comment_id} className="comment">
                <p>{comment.body}</p>
                <p>Written by: {comment.author}</p>
                <time>Created at: {dateTime}</time>
                <p>Votes: {comment.votes}</p>
                <DeleteComment comment_id={comment.comment_id}/>
              </li>
              )
            })}
        </ul>
        </>
    )
}

export default Comments