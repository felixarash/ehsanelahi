'use client'
import styles from '@/app/page.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function CertificationsSection() {
  const certifications = [
    'Registered Nurse License',
    'BLS Certification',
    'ACLS Certification',
    'PALS Certification',
  ]

  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <section id="certifications" className={styles.section}>
          <h2 className="text-center mb-4">Certifications</h2>
          <Row>
            {certifications.map((cert, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div className={styles.certificationsList}>
                  <p className="text-center mb-0">{cert}</p>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  )
}
