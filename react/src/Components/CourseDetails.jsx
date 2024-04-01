import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import CountUp from 'react-countup';

const Sidebar = styled(animated.div)`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #f5f5f5;
  padding: 20px;
  overflow: auto;
`;

const CourseTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CourseLanguage = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Trainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TrainerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const EnrollButton = styled(animated.button)`
  display: block;
  width: 100%;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #0056b3;
  }
`;

const CourseDetails = ({ course }) => {
  const sidebarStyle = useSpring({ from: { marginRight: -300 }, to: { marginRight: 0 } });
  const buttonStyle = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 });

  return (
    <Sidebar style={sidebarStyle}>
      <CourseTitle>{course.title}</CourseTitle>
      <CourseLanguage>{course.language}</CourseLanguage>
      <Trainer>
        <TrainerImage src={course.trainer.image} alt={course.trainer.name} />
        {course.trainer.name}
      </Trainer>
      <EnrollButton style={buttonStyle}>Enroll Now</EnrollButton>
      <h2>
        <CountUp end={course.enrolled} /> students enrolled
      </h2>
    </Sidebar>
  );
};

export default CourseDetails;