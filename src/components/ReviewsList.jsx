import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SingleReview from './SingleReview';
import gamesAPI from '../utils/api';

const ReviewsList = () => {

  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("category");

  useEffect(() => {
    setIsLoading(true)
    axios.get( categoryName ?
      `https://nc-games-no2.onrender.com/api/reviews?category=${categoryName}`
      : "https://nc-games-no2.onrender.com/api/reviews")
    .then(({data}) => {
      setReviewsList(data)
      setIsLoading(false)
    });
  }, [categoryName])

  if (isLoading) {
    return <p>Loading reviews...</p>
  }

  return (
    <>
    <h2 id='reviews-title'>Reviews</h2>
    <h3>Browse through the reviews written by fellow board game lovers.</h3>
    <h4>Click on review titles to read more!</h4>
    <ul>
      {reviewsList.map((review) => {
        return <SingleReview key={review.review_id} review={review}/>
      })}
    </ul>
    </>
  )

}

export default ReviewsList