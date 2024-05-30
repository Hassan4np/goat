import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.png"

export default function Header() {
  return (
    <div className="header position-absolute w-full z-3">
      <Container>
        <Row>
          <Col xs={12} >
          <div className="header-content px-3">
            <nav className="d-flex justify-content-between align-items-center py-3">
              <ul className="navitem d-flex  ">
                <li><a href="#">DPT</a></li>
                <li><a href="#">Community</a></li>
              </ul>
              <div className="logo"><img src={logo} alt="" /></div>
              <button className="btn me-4">Buy Goat</button>
            </nav>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
