import axios from "axios"
import { useEffect, useState } from "react"

const DeleteComment = ({comment, loggedInUser, setDeleteSuccessful, setComments}) => {

    const [deleting, setDeleting] = useState(false)

    // useEffect(() => {
    //     if (loggedInUser === comment.author) {
    //         axios.delete(`https://nc-games-no2.onrender.com/api/comments/${comment.comment_id}`)
    //         .then(()=>
    //         setDeleting(false),
    //         setDeleteSuccessful(true),
    //         console.log("delete successful"))
    //     }
    // }, [deleting])

    const handleDeletion = () => {
        if (loggedInUser === comment.author) {
                axios.delete(`https://nc-games-no2.onrender.com/api/comments/${comment.comment_id}`)
                .then(({data})=>
                setComments((currComments) => {
                    return currComments.slice(1)
                }),
                setDeleting(false),
                setDeleteSuccessful(true),                    
                console.log("delete successful"))
            }
    }
    

    return (
        <>
        {/* <button onClick={() => setDeleting(true)}>Delete this comment</button> */}
        <button id="delete-button" onClick={handleDeletion}>Delete this comment</button>
        { deleting ? <p>Deleting comment...</p> : null }
        </>
    )
}


export default DeleteComment