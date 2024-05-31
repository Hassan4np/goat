import { Col, Container, Row } from "react-bootstrap";
import tokenimg from "../assets/img/token-button.png"
import cricken from "../assets/img/token-botton-cricle.png"
import token1 from "../assets/img/token2.png"
import token2 from "../assets/img/token1.png"
import token3 from "../assets/img/token3.png"

export default function ComingSoon() {
  return (
    <div className="token">
      <Container>
        <div className="token-wrapper">
          <Row>
            <Col xs={12}>
              <div className="token-wrapper-title">
                <h3>Tokenomics</h3>
              </div>
            </Col>
          </Row>
          <Row className="img-section">
            <Col xs={12} md={10} className="mx-auto">
              <div className="image position-relative z-1">
                <img className="crickel-img" src={tokenimg} alt="" />
                <div className="position-absolute z-2 token1"><img src={token1} alt="" /></div>
                <div className="position-absolute z-2 token2"><img src={token2} alt="" /></div>
                <div className="position-absolute z-2 token3"><img src={token3} alt="" /></div>
                <div className="position-absolute z-2 cricel"><img src={cricken} alt="" /></div>
              </div>
               
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
