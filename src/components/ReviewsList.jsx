import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios";
import SingleReview from './SingleReview';

const ReviewsList = () => {

  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get("https://nc-games-no2.onrender.com/api/reviews")
    .then(({data}) => {
      setReviewsList(data)
      setIsLoading(false)
    });
  })

  if (isLoading) {
    return <p>Loading reviews...</p>
  }

  return (
    <>
    <h2 id='review-header'>Reviews</h2>
    <ul>
      {reviewsList.map((review) => {
        return <SingleReview key={review.review_id} review={review}/>
      })}
    </ul>
    </>
  )

}

export default ReviewsList