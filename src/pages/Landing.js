import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
          A cutting-edge online platform designed to revolutionize the job search and recruitment experience. 
          Jobster connects job seekers with potential employers, offering an intuitive interface that streamlines 
          the application process. Our application features advanced search functionalities, allowing users to filter
           opportunities by industry, location, and job type, ensuring that every candidate finds the right fit for their
            skills and aspirations. Employers can easily post job openings, manage applications, and connect with top talent, 
            enhancing their hiring process. With Jobster, we aim to bridge the gap between talent and opportunity, empowering 
            individuals to pursue their career goals while providing businesses with the resources they need to build exceptional
             teams.


          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
