import React from 'react';
import { AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import "./edit.css";

function Edit ({ skillId, rating, favorited, onRatingChange, onFavoritedChange, editMode }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="ratingStar">
      {editMode && (
        <span title="Adicione esta competência à sua skill!"
          className={favorited ? 'filledHeart' : 'emptyHeart'}
          onClick={() => onFavoritedChange(skillId, !favorited)}
        >
          {favorited ? <AiFillHeart /> : <AiOutlineHeart />}
        </span>
      )}
      {stars.map((star) => (
        <span title="Avalie seu nível técnico!"
          key={star}
          onClick={() => editMode && onRatingChange(skillId, star)}
          className={editMode && star <= rating ? 'filled' : 'empty'}
        >
          {star <= rating ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
}

export default Edit;
