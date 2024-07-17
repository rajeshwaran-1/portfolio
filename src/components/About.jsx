import boy from "../assets/boy.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={boy} alt="about picture" />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <p className="text-base mt-10 my-2 max-w-lg py-6">
              I am a junior front-end developer with hands-on experience in
              React, Tailwind CSS, and utilizing APIs. My skill set also
              includes Python and SQL, allowing me to handle various aspects of
              web development efficiently. Beyond my technical abilities, I have
              a keen interest in mathematics and physics, constantly seeking to
              expand my knowledge in these fields. I am dedicated to maintaining
              a physically active lifestyle, which helps me stay focused and
              energized. My passion for continuous learning and personal growth
              drives me to stay updated with the latest industry trends and best
              practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
