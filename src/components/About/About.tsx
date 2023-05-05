import './about.css'
import folder from '../../assets/folder.png'
import book from '../../assets/book.png'
import devotional from '../../assets/devotional.png'
import earth from '../../assets/earth.png'
const About = () => {

  const about = [
    {
      id: 1,
      title: 'Folders',
      image: folder,
      desc: 'Easily create folders to organize different prayers'
    },
    {
      id: 2,
      title: 'Devotional',
      image: devotional,
      desc: 'Meditate daily on a devotional provided by @triedbyfire'
    },
    {
      id: 3,
      title: 'Community',
      image: earth,
      desc: 'Share prayers and pray for one another through the Community page'
    },
    {
      id: 4,
      title: 'Gospel of Jesus',
      image: book,
      desc: 'Get introduced to Jesus and take the next step'
    }
  ]
  return (
    <main className='about-container'>
      <section className='about-left'>
        {about.map((a) => (
          <div key={a.id} className='about-item'>
            <img className='items-image' src={a.image} alt="" />
            <h2>{a.title}</h2>
            <p>{a.desc}</p>
          </div>
        ))}
      </section>
      <section className='about-right'>
        right
      </section>
    </main>
  )
}

export default About