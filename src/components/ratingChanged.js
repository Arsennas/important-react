import React,{useState} from 'react';
import ReactStars from 'react-rating-stars-component';

const Rating = () => {

const [reiting,setReiting] = useState(5)

const RatingChanged = (newRating) => {
  setReiting(newRating);
}
  return (
    <div className='ratingChanged'>
      <ReactStars
        count={5}
        onChange={RatingChanged}
        size={24}
        activeColor="#ffd700"
        value={reiting}
      />
      <h1>оценка:{reiting}</h1>
    </div>
  )
}
export default Rating;