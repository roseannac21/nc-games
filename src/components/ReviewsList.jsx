import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SingleReview from "./SingleReview";
import ErrorHandler from "./ErrorHandler";
import gamesAPI from "../utils/api";

const ReviewsList = ({ errState, setErrState }) => {
  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");

  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("category");

  useEffect(() => {
    gamesAPI
      .get(
        categoryName
          ? `/reviews?sort_by=${sortBy}&order=${orderBy}&category=${categoryName}`
          : `/reviews?sort_by=${sortBy}&order=${orderBy}`
      )
      .then(({ data }) => {
        setReviewsList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrState(true);
      });
  }, [sortBy, orderBy, categoryName]);

  if (isLoading) {
    return <p>Loading reviews...</p>;
  } else if (errState) {
    return (
      <>
        <ErrorHandler />
      </>
    );
  }

  return (
    <>
      <h2 id="reviews-title">Reviews</h2>
      <h3>Browse through the reviews written by fellow board game lovers.</h3>
      <h4>Click on a review to read more!</h4>
      <p>Sort by: {sortBy}</p>
      <button class="clicked" onClick={() => setSortBy("created_at")}>
        Date/Time (default)
      </button>
      <button class="clicked" onClick={() => setSortBy("comment_count")}>
        Number of Comments
      </button>
      <button class="clicked" onClick={() => setSortBy("votes")}>
        Number of Votes
      </button>
      <p>Order: {orderBy}</p>
      <button class="clicked" onClick={() => setOrderBy("desc")}>
        Descending (default)
      </button>
      <button class="clicked" onClick={() => setOrderBy("asc")}>
        Ascending
      </button>
      {reviewsList.length === 0 ? <h3>No reviews</h3> : null}
      <ul>
        {reviewsList.map((review) => {
          return (
            <SingleReview
              key={review.review_id}
              review={review}
              setErrState={setErrState}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ReviewsList;
