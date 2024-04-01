import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Course from './ui/course';

const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const CoursesSlider = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  scroll-snap-type: x mandatory;  
`;

const ViewMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  background: orange;
  color: white;
  cursor: pointer;
`;

const CoursesSection = () => {
    const courses = [
        {
          title: 'Intro to Python',
          description: 'Dive into the world of Python programming.',
          views: 123,
          image: '../../public/images/python.jpg',
          rating: 4.5
        },
        {
          title: 'Calculus Basics',
          description: 'Learn the fundamentals of calculus.',
          views: 456,
          image: '../../public/images/calculus.jpg',
          rating: 4.0
        },
        {
          title: 'Physics for Beginners',
          description: 'Start your journey into the world of physics.',
          views: 789,
          image: '../../public/images/physics.jpg',
          rating: 4.2
        },
        {
          title: 'Biology Essentials',
          description: 'Get started with the basics of biology.',
          views: 321,
          image: '../../public/images/biology.jpg',
          rating: 4.7
        },
        {
          title: 'Engineering 101',
          description: 'An introduction to the world of engineering.',
          views: 654,
          image: '../../public/images/engineering.jpg',
          rating: 4.3
        },
        {
          title: 'Advanced JavaScript',
          description: 'Master the art of JavaScript programming.',
          views: 987,
          image: '../../public/images/javascript.png',
          rating: 4.4
        },
        {
          title: 'Algebra in Depth',
          description: 'Explore the powerful concepts of algebra.',
          views: 135,
          image: '../../public/images/algebra.jpg',
          rating: 4.6
        },
        {
          title: 'Chemistry Fundamentals',
          description: 'Learn the basics of chemistry.',
          views: 246,
          image: '../../public/images/chemistry.jpg',
          rating: 4.5
        }
      ];

  const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={animation}>
      <SectionTitle>Newly Posted Courses That Aligns Best With Your Educational Goals</SectionTitle>
      <CoursesSlider>
        {courses.map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </CoursesSlider>
      <ViewMoreButton>View More</ViewMoreButton>
    </animated.div>
  );
};

export default CoursesSection;