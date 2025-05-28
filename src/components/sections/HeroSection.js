'use client'
import Image from 'next/image'
import styles from '@/app/page.module.css'
import { useEffect } from 'react'

export default function HeroSection() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.heroContent} ${styles.fadeIn}`}>
        <div className={styles.profileImage}>
          <Image
            src="/profile.jpg"
            alt="Professional Headshot"
            width={1200}
            height={1200}
            priority
            quality={100}
            placeholder="blur"
            blurDataURL="/profile.jpg"
            className={styles.avatarImage}
          />
        </div>
        <h1>Muhammad Ehsan Elahi Minhas, BSN, RN</h1>
        <h2>Registered Nurse - Pediatric Department</h2>
        <p>Dedicated healthcare professional specializing in pediatric care at Aga Khan University Hospital</p>
        <a href="/nurse-cv.pdf" download className={styles.cvButton}>
          Download CV
        </a>
      </div>
    </section>
  )
}
