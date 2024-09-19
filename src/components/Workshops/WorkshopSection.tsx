import { Container } from '@material-ui/core';
import React from 'react';
import Workshops from './Workshops';

const title1 = 'Data Structures and Algorithms';
const image1 = 'images/DSA.png';
const tag1 = 'Workshop';
const date1 = 'September 21st-22nd, 2024';
const about1 =
  "Programming is like any other sport. You might know the rules, but you have to play to learn. ISTE SC MANIT is here with a workshop on Data Structures and Algorithms to take you a step toward becoming a better programmer. Beginning with arrays to implementation of linked lists and complex graph algorithms. This course gives an insight into the world of stacks, queues and much more to expand your critical thinking and problem-solving abilities. So, all curious and prying minds out there, register in our engrossing workshop and blaze into the all-important domain of Data Structures and Algorithms.";
const description1 =
  "Data is everywhere. Hence, its organization too, is essential. DSA is not only the basic building block for developing algorithmic and logical thinking, but it also enables us to solve real-world problems effectively. Forming a crucial part of any technical interview and its application also extends to booming fields like Artificial Intelligence and Machine Learning, which makes it quite pivotal to learn.";
const point1 = [
  ' Introduction.',
  ' Understanding the importance.',
  ' Understanding different Data Structures.',
  ' Solving problems.',
  ' Discussing and implementing Algorithms.',
];
const instructor1=`Mr. Yash Dwivedi`;

const title2 = 'Web Development Workshop';
const image2 = 'images/webd.png';
const tag2 = 'Workshop';
const date2 = 'September 14th-15th, 2024';
const about2 =
  "Websites surround us whenever we enter the space of our laptops and mobiles. Thus, it becomes essential to know how to build, manage and maintain websites. This workshop includes comprehensive sessions covering HTML, CSS, JavaScript, and more, led by expert instructors. Practical hands-on exercises will empower participants to create responsive and visually appealing websites. Additionally, discussions on the latest trends and emerging technologies in web development will keep participants up-to-date with industry standards. Networking opportunities and collaborative projects will foster a supportive learning environment, making this workshop an invaluable resource for anyone looking to enhance their web development skills.";

  // 'Leaping towards an advanced future, ISTE SC MANIT brings to you the workshop on Machine learning. Beginning with the fundamentals of Python by performing various loops, functions, and attributes of Python this course condenses to a multitude of knowledge and provides you with a concise understanding of machine learning theory and application. You will be able to code your image-to-text conversion program as well as your chatbot by the conclusion of the workshop. So, all you young enquiring brains out there, sign up for this premium workshop and harness the power of data in novel ways by developing smart machine learning algorithms.';
const description2 = `Web development refers to the skill set that enables an individual to be able to design and create a set of webpages called Website .Web development is one of the fastest rising careers and most demanded skill set.
In the modern age, having a strong online presence is critical for businesses to attract and retain customers. Web development has thus become the backbone of marketing, trading
and analysis. Thus, web development is a crucial skill to persuade in the rapidly advancing tech-world.`;

  // 'Bill Gates believes that "A breakthrough in machine learning would be worth ten Microsoft”. Thus, there is no compelling reason to additionally portray the significance of machine learning in this Computer Aided world. Machine Learning has given us self-driving cars, intuitive speech recognition, and an incomprehensibly worked-on grasp of the human genome in the preceding decade. Machine learning is so normal nowadays that you likely use it countless times each day without acknowledging it. ';
const point2 = [
  'Introduction.',
  'Tech stacks used in web development',
  'The MERN tech stack.',
  'Making things work together.',
  'Career Prospects.',
  // 'Basics of Python: Loops, Functions, Attributes',
];
const instructor2=`Mr. Rupesh Kumar`;

const workshopSection = () => {
  return (
    <Container maxWidth='lg'>
      <section className='workshop-section'>
        <div className='title'>
          <h2>
            <span>Workshops</span>ISTE SC MANIT
          </h2>
        </div>
        <Workshops
          title={title2}
          image={image2}
          tag={tag2}
          date={date2}
          about={about2}
          description={description2}
          points={point2}
          instructor={instructor2}
        />
        <Workshops
          title={title1}
          image={image1}
          tag={tag1}
          date={date1}
          about={about1}
          description={description1}
          points={point1}
          instructor={instructor1}
        />
      </section>
    </Container>
  );
};

export default workshopSection;
