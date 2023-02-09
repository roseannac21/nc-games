import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const PostComment = ({review_id, setComments, setPostSuccessful}) => {

const [commentData, setCommentData] = useState({
    author: "jessjelly",
    body: "" 
});

const [submitted, setSubmitted] = useState(false);
const [addingComment, setAddingComment] = useState(false)

useEffect(() => {
    if(submitted) {
        setAddingComment(true)
        const postComment = () => {
            // console.log(commentData)
            axios.post(`https://nc-games-no2.onrender.com/api/reviews/${review_id}/comments`, commentData)
            .then(({data}) => {
                const newComment = data.comment[0];
                setComments((currComments) => {
                    return [newComment, ...currComments]
                })
                setAddingComment(false);
                setCommentData((currCommentData) => {
                    return {...currCommentData, body:""}
                })
                setPostSuccessful(true)
            })
            .catch((err) => {
                console.log(err)
            })
        };
        postComment()
    }
}, [submitted, review_id])

const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

if (addingComment) {
    return <p>Adding your comment...</p>
}

return (
    <>
    <form id="form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Write your thoughts here"
        value={commentData.body}
        onChange={(event) => {
            setCommentData({...commentData, body:event.target.value})
        }} />
    <button>Add comment</button>
    </form>
    </>
)

}

export default PostComment