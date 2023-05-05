import './navbar.css'
import prayer from '../../assets/prayerhands.png'
import { AiOutlineDownload } from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav>
      <section className='navbar-logo'>
        <img className='navbar-icon' src={prayer} alt="" />
        <h1 className='navbar-header'>Prayse</h1>
      </section>
      <ul className='nav-list'>
        <li>About</li>
        <li>Fuctionalities</li>
        <li>Contact</li>
        <li className='download-link'>
          <span>Download</span>
          <AiOutlineDownload size={25} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar