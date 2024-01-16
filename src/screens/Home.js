import Footer from './Footer'
import '../css/Home.css'
import Nav from './Nav'

const Home = () => {
  return (
    <>
      <Nav />
      <div className='Main_home mt-4 '>
        <div className='Home_Image'>
          <img
            className=' mt-3 '
            src='https://cdn-icons-png.flaticon.com/512/9713/9713317.png'
            width='300'
            height='300'
          />
        </div>
        <p className=' m-lg-5 '>
          <strong>Introduction</strong> <br />
          Welcome to our company, where we redefine the boundaries of technology
          and innovation. As a premier provider of automation and infrastructure
          services, we are at the forefront of transforming businesses. Our
          solutions are designed to automate processes and build robust IT
          infrastructures, enabling businesses to achieve operational efficiency
          and sustainable growth. We understand the power of automation in
          today’s digital age and its role in eliminating manual tasks and
          enhancing productivity. Similarly, we recognize the importance of a
          strong and secure IT infrastructure that can support and drive
          business operations. Our team of dedicated professionals, with their
          extensive experience and deep understanding of industry trends, is
          committed to delivering tailored solutions that meet your specific
          business needs. Join us and experience the power of technology to
          drive your business forward.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Home
