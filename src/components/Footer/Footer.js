'use client'
import styles from './Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start">
            <h4>Muhammad Ehsan Elahi Minhas</h4>
            <p>Registered Nurse</p>
          </Col>
          <Col md={4} className="text-center my-3 my-md-0">
            <p>© 2025 All rights reserved</p>
            <p>Developed by <a href="https://aequortech.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Aequortech Ctrl</a></p>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <p>BSN Graduate</p>
            <p>Saifee School of Nursing</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
