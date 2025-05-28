'use client'
import styles from '@/app/page.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'

export default function ContactSection() {
  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <section id="contact" className={styles.section}>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className={styles.contactInfo}>
                <h2 className="text-center mb-4">Contact</h2>
                <p className="text-center mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  <a href="mailto:ehsan23Oct@gmail.com" className={styles.emailLink}>
                    ehsan23Oct@gmail.com
                  </a>
                </p>
                <p className="text-center">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Karachi, Sindh, Pakistan
                </p>
                <div className={styles.socialLinks}>
                  <a href="https://www.linkedin.com/in/muhammad-ehsan-elahi-minhas-b079601b1/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://x.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />
                  </a>
                  <a href="https://www.youtube.com/@nucleusnursing" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  )
}
