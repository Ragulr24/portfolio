import ecommerce from "../assets/ecommerce-websites.jpg";
import junior from '../assets/junior.jpeg';
import senior from '../assets/senior-developer.png'
const Project = () => {
  // const ecommerceLink = '';
  return (
    <div className="flex flex-col justify-center bg-content text-white" id="Project">
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
        <div className="flex flex-col md:flex-row justify-between px-10 gap-5 mb-6">
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={ecommerce} />
            <div className="project-desc">
              <p className="text-center py-5"> An e-commerce website. Built with MERN Stack.</p>
              <div className="flex justify-center">
              <a className="btn" target="_blank" href="https://github.com/Ragulr24/ecommerce">View Project</a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={junior} />
            <div className="project-desc">
            <p className="text-center md:py-2 text-black font-bold">Junior Developer in FR8 [May 2022 - Oct 2022]</p>
              <ul>
                <li className="list-disc pl-2">
                Acquired in-depth knowledge of web architecture.
                </li>
                <li className="list-disc pl-2">
                Designed and implemented reusable React UI components.
                </li>
              </ul>
              
               <p className="md:py-6">
                <b>TechStack used: </b>React.js, JavaScript (ES6+), HTML, CSS, RESTful APIs,Version Control.
                </p> 
             
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={senior} />
            <div className="project-desc ">
              <p className="text-center md:py-2 text-black font-bold">Senior Developer in FR8 [Oct 2022 - Oct 2023]</p>
              <ul>
                <li className="list-disc pl-2">
                Developed dynamic, user-centric web applications.
                </li>
                <li className="list-disc pl-2">
                Collaborated with cross-functional teams in Agile environments.
                </li>
              </ul>
               <p className="md:py-6">
                <b>TechStack used: </b>React.js, JavaScript (ES6+), Redux, HTML, CSS, RESTful APIs,Version Control.
                </p> 
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
