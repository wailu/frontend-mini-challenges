import { useState } from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import "./StarRating.css";

const DEFAULT_RATING_FACES = ["😢", "😞", "😐", "😀", "😎"];

type Props = {
  ratingFaces?: string[];
  onRate?: (rating: number) => void;
};

const StarRating = ({ ratingFaces = DEFAULT_RATING_FACES, onRate }: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  const starArray = (
    <div
      className="star-rating-array"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {[...Array(ratingFaces.length)].map((_, index) => (
        <div
          key={index}
          onClick={() => {
            setRating(index + 1);
            onRate?.(index + 1);
          }}
          onMouseEnter={() => setHoverRating(index + 1)}
        >
          {(isHovering && index < hoverRating) ||
          (!isHovering && index < rating) ? (
            <StarIcon
              fontSize="large"
              sx={{ color: "rgba(231, 198, 10, 0.685)" }}
            />
          ) : (
            <StarOutlineIcon fontSize="large" />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="star-rating">
      {starArray}
      <span className="star-rating-hint">Click to set the rating</span>
      <div className="star-rating-faces">{ratingFaces[rating - 1]}</div>
    </div>
  );
};

export default StarRating;
