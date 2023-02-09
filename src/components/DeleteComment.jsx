import axios from "axios"
import { useState } from "react"

const DeleteComment = ({comment_id}) => {

    const [deleting, setDeleting] = useState(false)
    const [deleteSuccessful, setDeleteSuccessful] = useState(false)

    
    const handleDeletion = () => {
        setDeleting(true)
        axios.delete(`https://nc-games-no2.onrender.com/api/comments/${comment_id}`)
        .then(()=>
        setDeleting(false),
        setDeleteSuccessful(true),
        console.log("delete successful"))
    }

    return (
        <>
        <button onClick={handleDeletion}>Delete this comment</button>
        { deleting ? <p>Deleting comment...</p> : null }
        { deleteSuccessful ? <p>Comment deleted!</p> : null}
        </>
    )
}

export default DeleteComment