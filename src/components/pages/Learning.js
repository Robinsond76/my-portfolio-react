import React from 'react';
import Skills from '../sections/Skills';

const Learning = () => {
  return (
    <>
      <div className='header'>
        <h1>What I'm Learning</h1>
        <h2>.NET 5 | Typescript | React </h2>
      </div>

      <p>
        Currently I focus on improving my proficiency with React, Typescript and
        .NET APIs by learning clean architecure and best practices from experts
        in the field.
      </p>

      <p>
        Although I began my journey with Javascript, C# is my preferred
        programming language. It is my ambition to eventually have a strong
        proficiency in the full environment of .NET including MVC web
        applications, Razor pages and Blazor apps.
      </p>

      <p>
        While I focus on web development, I'm eager to expand beyond the browser
        - anything that involves the development of software interests me. I
        plan on picking up .NET MAUI in the near future and Unity to develop
        games as a side hobby.
      </p>

      <Skills />
    </>
  );
};

export default Learning;
