import React from 'react';

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">About me</h1>
      <img 
        src="profile.jpg" 
        alt="Profile"
        className="w-40 h-40 rounded-full mb-4" // Use your desired size
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Zachary Cygan</h2>
        <p>
        Hello! My name is Zachary Cygan and I am 24 years old studying to be a developer. 
        I currently have a bachelors degree in psychology with a minor in business 
        administration and decided to make a career change to development. I have experience 
        in javascript, node, react, mysql, nosqul, and much more. I have taken an interest in 
        coding outside of classes to perfect my skills, but also to create webpages or applications
        that have a use to me or somebody around me. In my free time, I like to play video games. 
        I usually play World of Warcraft, but I enjoy playing other games like Hallow Knight.
        </p>
      </div>
    </div>
  );
}
