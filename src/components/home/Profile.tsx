import React from "react";

export default function Profile() {
  return (
    <main>
    <section id="home" className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800">
    <div className="md:w-1/2">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white text-black mb-4">Hello, I’m Achraf abdeslami </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-medium dark:text-gray-300 text-gray-600">
        Freelance UI Designer, Fullstack Developer, & Data Miner. I create seamless web experiences for end-users.
      </p>
    </div>
    {/* <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
      <img src="https://c0.wallpaperflare.com/preview/692/415/725/business-portrait-glasses-style.jpg" alt="Profile Picture" className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-indigo-500 object-cover">
    </div> */}
  </section>


  <section id="about" className="px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800">
    <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold mb-6 ">About Me</h2>
    <p className="text-lg sm:text-xl font-medium  dark:text-white text-black ">
      Hi, my name is Achraf abdeslami, a Fullstack Web Developer, UI Designer, and Mobile Developer. I have honed my skills in Web Development and advanced UI design principles, enabling me to create intuitive and visually appealing applications.
    </p>
  </section>

  <section id="services" className="px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800">
    <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold mb-6">The Services I Offer</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
   
      <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-6 flex flex-col items-center text-center">
        <i className="fas fa-paint-brush text-indigo-500 text-3xl mb-4"></i>
        <h3 className="text-black dark:text-white text-2xl font-semibold mb-2">UI & UX Designing</h3>
        <p className="text-black dark:text-white text-base">I design beautiful web interfaces with Figma and Adobe XD.</p>
      </div>

      <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-6 flex flex-col items-center text-center">
        <i className="fas fa-code text-indigo-500 text-3xl mb-4"></i>
        <h3 className="text-black dark:text-white text-2xl font-semibold mb-2">Web Development</h3>
        <p className="text-black dark:text-white text-base">I create stunning interfaces using HTML, CSS, JavaScript, and frameworks like Angular and ReactJS.</p>
      </div>
 
      <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-6 flex flex-col items-center text-center">
        <i className="fas fa-mobile-alt text-indigo-500 text-3xl mb-4"></i>
        <h3 className="text-black dark:text-white text-2xl font-semibold mb-2">Mobile Development</h3>
        <p className="text-black dark:text-white text-base">Expert in Flutter and React Native to build cross-platform mobile applications.</p>
      </div>
     
      <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-6 flex flex-col items-center text-center">
        <i className="fas fa-database text-indigo-500 text-3xl mb-4"></i>
        <h3 className="text-black dark:text-white text-2xl font-semibold mb-2">Web Scraping with Python</h3>
        <p className="text-black dark:text-white text-base">I can collect and manipulate content from the web using Python.</p>
      </div>
    </div>
  </section>
  </main>
  );
}
