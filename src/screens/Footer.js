import '../css/Footer.css'
import '../css/Nav.css'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaBlog,
  FaYoutubeSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='Main_footer mt-4'>
      <h6 className=' text-center '>Contact us on</h6>
      <div className='Icon_cnt ml-4'>
        <ul className='Icon_nav '>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open('https://www.instagram.com', '_blank')
            }}
          >
            <FaFacebookSquare />
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open('https://www.instagram.com', '_blank')
            }}
          >
            <FaInstagramSquare />
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open('https://www.instagram.com', '_blank')
            }}
          >
            <FaBlog />
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open('https://www.instagram.com', '_blank')
            }}
          >
            <FaYoutubeSquare />
          </div>
        </ul>
      </div>
    </div>
  )
}
export default Footer
