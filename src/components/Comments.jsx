import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Comments = ({review_id}) => {
    
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://nc-games-no2.onrender.com/api/reviews/${review_id}/comments`)
        .then(({data}) => {
            setComments(data)
            setIsLoading(false)
        })
    }, [review_id]);

    if (isLoading) {
        return <p>Loading...</p>
      }

    return (
        <>
        {/* <ul> */}
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
        {/* </ul> */}
        </>
    )
}

export default Comments