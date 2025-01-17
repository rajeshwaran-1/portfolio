import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-row flex-wrap md:flex-nowrap">
        <div className="w-full lg:w-[750px]">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Rajesh Waran
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Front End Developer
            </span>
            <p className="my-2 max-w-2xl py-6 font-normal text-base tracking-tighter">
              I am a dedicated front-end developer with a strong foundation in
              crafting dynamic and visually appealing web applications.
              Proficient in React.js and Tailwind CSS, I am continually
              enhancing my skill set by learning back-end technologies. Although
              I don't have professional experience in back-end development yet,
              I am eager to expand my expertise to become a well-rounded
              full-stack developer and contribute to innovative projects.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[380px] lg:p-8">
          <div className="flex justify-center ring-4 ring-white rounded-xl overflow-hidden">
            <img src={profile} alt="profile picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
