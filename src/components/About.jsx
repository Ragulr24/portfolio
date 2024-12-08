import Aboutimg from "../assets/about.png";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-header font-about-font">
      <div className="md:w-1/2">
        <img src={Aboutimg} alt="about img" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <h3 className="text-white underline text-4xl text-yellow-500 font-bold m-2">About Me</h3>
        <div className="flex justify-center py-5 text-white text-justify md:mr-10 m-5">
        <p>
          Dedicated and efficient senior developer with <b className='text-yellow-300'>1.6 years of experience
          in React.js, </b>specializing in logical flows within website development.
          Proven ability in optimizing web functionality, improving data
          retrieval, cross-browser compatibility, and enhancing workflow
          efficiencies seeking a challenging position to leverage expertise in&nbsp;
          <b className="text-yellow-300">React.js, JavaScript (ES6+), Typescript, Redux, and performance
          optimization,</b> while continuing to grow and share knowledge by guiding
          and collaborating with team members.
        </p>
        </div>
     
      </div>
    </div>
  );
};

export default About;
