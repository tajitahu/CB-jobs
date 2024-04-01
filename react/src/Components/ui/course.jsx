import React from 'react';
import styled from 'styled-components';
import { FaEye, FaStar } from 'react-icons/fa';

const CourseCard = styled.div`
  min-width: 250px;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CourseTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const CourseViews = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const CourseRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: orange;
`;

const CourseStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Course = ({ title, description, views, image, rating }) => (
  <CourseCard>
    <CourseImage src={image} alt={title} />
    <CourseTitle>{title}</CourseTitle>
    <CourseDescription>{description}</CourseDescription>
    <CourseStats>
      <CourseRating>
        <FaStar /> {rating}
      </CourseRating>
      <CourseViews>
        <FaEye /> {views}
      </CourseViews>
    </CourseStats>
  </CourseCard>
);

export default Course;