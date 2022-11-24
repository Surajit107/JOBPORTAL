import React from "react";
import { Link } from "react-router-dom";
import { CURRENCY } from "../../baseUrl/common";
import image from "../../assets/images/blog-image-2-940x460.jpg"

const JobCard = (props) => {
  const { title, salary_min, category_1, category_2, id } = props;
  return (
    <div className="col-md-4 mt-4">
      <div className="trainer-item">
        <div className="image-thumb">
          <img src={image} alt={title} />
        </div>
        <div className="down-content">
          <span>{CURRENCY}{salary_min}</span>

          <h4>{title}</h4>
          <p>{category_1} &nbsp;/&nbsp; {category_2}</p>

          <ul className="social-icons">
            <li>
              <Link to={`/jobdetails/${id}`}>+ View More</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
