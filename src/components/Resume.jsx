import resume from "../assets/Rajeshwaran_V_CV.pdf";

const Resume = () => {
  return (
    <div className="mt-10 flex flex-wrap flex-col border border-yellow-700 items-center  rounded-lg px-4 py-4 justify-evenly mb-16">
      <p className="text-4xl text-center font-semibold">
        Download resume for details
      </p>
      <a href={resume} target="_blank">
        <button className="bg-red-900 px-6 py-2 font-semibold mt-4 rounded-2xl text-lg hover:bg-white hover:text-red-900 transition duration-300 ease-in-out">
          Download
        </button>
      </a>
    </div>
  );
};

export default Resume;
