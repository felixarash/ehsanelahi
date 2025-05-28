'use client'
import styles from '@/app/page.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function AboutSection() {
  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <section id="about" className={styles.section}>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className={styles.experienceCard}>
                <h2 className="text-center mb-4">About Me</h2>
                <p className="lead text-muted">
                  Registered Nurse with specialized training in pediatric care, currently serving at
                  Aga Khan University Hospital in Karachi. Graduate of Saifee School of Nursing with
                  a Bachelor of Science in Nursing (BSN). Committed to providing exceptional care to
                  young patients and their families.
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  )
}
