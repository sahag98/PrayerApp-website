import './hero.css'
import phone from '../../assets/phone.png'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from 'react';
const Hero = () => {

  return (
    <main className='hero-container'>
      <div className='hero-section'>
        <section className='hero-header'>
          <h1 className='hero-title'>Welcome to our prayer list app!</h1>
          <p className='hero-desc'>
            With our app, you can easily create and manage your personal prayer list,
            helping you stay organized and focused in your spiritual walk with God.
          </p>
          <button className='dwnld-button'>Get Started Now</button>
        </section>
        <div className='hero-right'>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 300, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#FFD68A"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img className='hero-img' src={phone} alt="app-image" />
        </div>
      </div>
    </main>
  )
}

export default Hero