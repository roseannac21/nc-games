import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import SingleReview from './SingleReview';
import gamesAPI from '../utils/api';

const ReviewsList = () => {

  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");

  let url = "/reviews"

  if (sortBy && orderBy) {
    url = url.concat(`?sort_by=${sortBy}&order=${orderBy}`)
  }

  useEffect(() => {
    setIsLoading(true)
    gamesAPI.get(url)
    .then(({data}) => {
      setReviewsList(data)
      setIsLoading(false)
    });
  }, [sortBy, orderBy])

  if (isLoading) {
    return <p>Loading reviews...</p>
  }

  return (
    <>
    <h2 id='reviews-title'>Reviews</h2>
    <h3>Browse through the reviews written by fellow board game lovers.</h3>
    <h4>Click on a review to read more!</h4>
    <p>Sort by: {sortBy}, {orderBy}</p>
    <button class="clicked" onClick={() => setSortBy("created_at")}>Date/Time (default)</button>
    <button class="clicked" onClick={() => setSortBy("comment_count")}>Number of Comments</button>
    <button class="clicked" onClick={() => setSortBy("votes")}>Number of Votes</button>
    <p>Order:</p>
    <button class="clicked" onClick={() => setOrderBy("desc")}>Descending (default)</button>
    <button class="clicked" onClick={() => setOrderBy("asc")}>Ascending</button>
    <ul>
      {reviewsList.map((review) => {
        return <SingleReview key={review.review_id} review={review}/>
      })}
    </ul>
    </>
  )

}

export default ReviewsList