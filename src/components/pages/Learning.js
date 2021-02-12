import React from 'react';
import Skills from '../sections/Skills';

const Learning = () => {
  return (
    <>
      <div className='header'>
        <h1>What I'm Learning</h1>
        <h2>.NET 5 | ASP.NET Core | React </h2>
      </div>

      <p>
        Although I began my journey with Javascript, I now focus on learning and
        mastering ASP.NET Core for general web development, especially REST
        APIs.
      </p>

      <p>
        My current goal is to continue to develop a strong expertise in the
        creation of APIs by learning clean architecure and best practices from
        experts in the field. It is my ambition to eventually have a strong
        proficiency in the full environment of ASP.NET Core including MVC web
        applications, Razor pages and Blazor apps.
      </p>

      <p>
        While I focus on web development, I'm eager to expand beyond the browser
        - anything that involves the development of software interests me. I
        plan on picking up Xamarin in the near future and Unity to develop games
        as a side hobby.
      </p>

      <Skills />
    </>
  );
};

export default Learning;
