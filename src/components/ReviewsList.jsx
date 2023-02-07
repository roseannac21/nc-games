import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import SingleReview from './SingleReview';
import gamesAPI from '../utils/api';

const ReviewsList = () => {

  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    gamesAPI.get("/reviews")
    .then(({data}) => {
      setReviewsList(data)
      setIsLoading(false)
    });
  }, [])

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