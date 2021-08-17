import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>About Page</h1><br /><br /><br /><br />
        {/* <h1>KNOW MORE ABOUT ME!</h1> */}
        <h2>A quick learner and problem-solver!</h2><br />
        <p class="lead mb-5">
          I'm Janvi Arora, a third year Computer Science Engineering
          student. I'm from Morinda, Punjab. <br /><br />
          I think computer science is omnipresent i.e. it is present in
          almost every field and I have invested my last two years in
          developing my software skills. I have been consistently working
          hard to improve my communication, programming and problem-solving
          skills. I also create clean, professional and functional websites. <br /><br />
          I consider myself as a very focused person and always work
          towards my goals in a very efficient manner. I'm a tireless seeker of knowledge , a team player
          and
          very optimistic at tough times. I believe in having a good time while doing what I love and I do
          love what I do. I'm capable within a wide range of tactical and big-picture tasks.

        </p>
      </div>
      <Link className="btn btn-outline-primary mr-4 mb-4" to="mailto: jjanvi.arora18@gmail.com">Gmail</Link>
      <Link className="btn btn-outline-primary mr-4 mb-4" to="https://www.linkedin.com/in/janvi-arora-ja06660">LinkedIn</Link>
      <Link className="btn btn-outline-primary mr-4 mb-4" to="https://github.com/janviaroraa">GitHub</Link>
    </div>

  );
};

export default About;
