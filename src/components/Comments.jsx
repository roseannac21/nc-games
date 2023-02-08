import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Comments = ({review_id}) => {
    
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://nc-games-no2.onrender.com/api/reviews/${review_id}/comments`)
        .then(({data}) => {
            setComments(data)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) {
        return <p>Loading comments...</p>
      }

    return (
        <>
        <h2>Comments</h2>
        { comments.length === 0 ? <p>No comments to display</p> : null }
        <ul>
            {comments.map((comment) => {
             return (
              <li key={comment.comment_id} className="comment">
                <p>{comment.body}</p>
                <p>Written by: {comment.author}</p>
                <time>Created at: {comment.created_at}</time>
                <p>Votes: {comment.votes}</p>
              </li>
              )
            })}
        </ul>
        </>
    )
}

export default Comments