import ResumeImg from '../assets/resume.jpg'
import ResumePdf from '../resume/Ragul.R.pdf'
const Resume = () => {
  return (
    <div id='Resume'>
      <div className="flex flex-col md:flex-row bg-header font-about-font">
        <div className="md:w-1/2 flex justify-center">
          <img className='w-[300px] m-10' src={ResumeImg} alt="about img" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h3 className="text-white underline text-4xl text-yellow-500 font-bold m-2 ml-20 mt-5">
            Resume
          </h3>
          <div className="flex flex-col justify-center py-5 text-white text-justify mb-20 md:mr-10 m-5">
            <p> You can view my resume here.</p>
            <p className='mt-5'><a href={ResumePdf} target="_blank" className='btn'>Download 🗂️</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
