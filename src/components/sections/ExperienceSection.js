'use client'
import styles from '@/app/page.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function ExperienceSection() {
  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <section id="experience" className={styles.section}>
          <h2 className="text-center mb-4">Clinical Experience</h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className={styles.experienceCard}>
                <h3>Senior ICU Nurse</h3>
                <p className="text-muted">Memorial Hospital</p>
                <p>2020 - Present</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className={styles.experienceCard}>
                <h3>ER Nurse</h3>
                <p className="text-muted">City General Hospital</p>
                <p>2018 - 2020</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  )
}
