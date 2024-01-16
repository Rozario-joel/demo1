import Footer from './Footer'
import '../css/Home.css'
import Nav from './Nav'

const About = () => {
  return (
    // nav
    <>
      <Nav />

      <div className='Main_home mt-4 '>
        <div className='Home_Image'>
          <img
            className=' mt-3 '
            src='https://cdn-icons-png.flaticon.com/512/5692/5692284.png'
            width='300'
            height='300'
          />
        </div>
        <p className=' m-lg-5 '>
          <strong>About Us</strong> <br /> We are a leading provider of
          automation and infrastructure services, committed to delivering
          innovative solutions that drive efficiency and growth. Our expertise
          spans across various sectors, enabling us to provide tailored
          solutions that meet the unique needs of each client. Our automation
          services are designed to streamline operations, reduce manual tasks,
          and enhance productivity. We leverage cutting-edge technologies to
          automate processes, helping businesses to focus on strategic tasks and
          improve their bottom line. Our infrastructure services encompass the
          design, implementation, and management of IT infrastructure. We ensure
          robust, scalable, and secure infrastructure that supports and enhances
          your business operations. At our core, we believe in harnessing the
          power of technology to create value for our clients. Our team of
          dedicated professionals works tirelessly to understand your business
          needs and deliver solutions that propel you towards your goals. Join
          us on this journey of transformation and experience the difference we
          can make to your business.
        </p>
      </div>
      <Footer />
    </>
    //footer
  )
}

export default About
