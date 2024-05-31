import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <div className="about">
      <Container>
        <div className="about-wrapper">
          <Row>
            <Col xs={12}>
              <div className="about-wrapper-content">
                <div className="about-wrapper-content-text">
                  <h3 className="text-uppercase">About us</h3>
                  <p>At Goat Coin, we believe in the power of the community. That's why every transaction contributes towards impactful projects, charities, and initiatives chosen by you, the Goat Coin holders. Together, we can make a real difference while having fun in the crypto world.</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
