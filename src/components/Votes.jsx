import { useState } from "react"
import gamesAPI from "../utils/api";

const Votes = ({setLikeCount, likeCount, review}) => {
  
    const [err, setErr] = useState(null);

    const handleLike = () => {
        setLikeCount((currLikes) => {
            return currLikes +1;
        })
        setErr(null)
        gamesAPI.patch(`/reviews/${review.review_id}`, {inc_votes: 1})
        .catch((err) => {
            setLikeCount((currLikes) => currLikes-1)
            setErr(err)
        })
    }

    const handleDislike = () => {
        setLikeCount((currLikes) => {
            return currLikes -1;
        })
        setErr(null)
        gamesAPI.patch(`/reviews/${review.review_id}`, {inc_votes: -1})
        .catch((err) => {
            setLikeCount((currLikes) => currLikes+1)
            setErr(err)
        })
     }
    
    return (
        <>
        <button onClick={handleLike}>👍🏽</button>
        <button onClick={handleDislike}>👎🏽</button>
        <p>Votes: {likeCount}</p>
        {err ? <p>{err.message}</p> : null}
        </>
    )
}

export default Votes