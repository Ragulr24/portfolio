import ecommerce from "../assets/ecommerce-websites.jpg";
const Project = () => {
  return (
    <div className="flex flex-col justify-center bg-content text-white">
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h3 className="text-white underline text-4xl text-yellow-500 font-bold">
            Project & Work Experience
          </h3>
          <div className="py-5">
            <b>
              These are my Project and prior work experience. I have built these
              with REACT, TailwindCSS, and MERN. Check them out.
            </b>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between px-10 gap-5">
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={ecommerce} />
            <div className="project-desc">
              <p className="text-center py-5">Hi Im Ragul R</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={ecommerce} />
            <div className="project-desc">
              <p className="text-center py-5">Hi Im Ragul R</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={ecommerce} />
            <div className="project-desc">
              <p className="text-center py-5">Hi Im Ragul R</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
