import { Col, Container, Row } from "react-bootstrap";

export default function Banner() {
  return (
    <div className="banner">
      <Container>
        <div className="banner-wrapper ">
          <Row>
            <Col xs={12} className="justify-content-center alig-items-center d-flex">
              <div className="banner-content px-3 text-center">
                <h1>$ goat</h1>
                <p>Goat Coin is not just another meme coin it's a movement. </p>
                <button  className="btn" >Buy Now</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
