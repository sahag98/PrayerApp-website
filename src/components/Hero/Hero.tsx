import './hero.css'
import phone from '../../assets/phone.png'
const Hero = () => {
  return (
    <main className='hero-container'>
      <section className='hero-header'>
        <h1 className='hero-title'>Welcome to our prayer list app!</h1>
        <p className='hero-desc'>
          With our app, you can easily create and manage your personal prayer list,
          helping you stay organized and focused in your spiritual walk with God.
        </p>
        <button className='dwnld-button'>Get Started Now</button>
      </section>
      <img className='hero-img' src={phone} alt="app-image" />
    </main>
  )
}

export default Hero