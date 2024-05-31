import { Col, Container, Row } from "react-bootstrap";

export default function How_to_buy() {
  return (
    <div className="how-to-buy">
      <Container>
        <div className="how-to-buy-wrapper">
          <Row>
            <Col xs={12}>
              <div className="how-to-buy-wrapper-title">
                <h3>How to buy</h3>
              </div>
            </Col>
            <Col xs={9} className="offset-3">
              <div className="how-to-buy-wrapper-content ">
               <Row>
                <Col xs={12} md={6} className="item" >
                <div className="how-to-buy-wrapper-content-cards card1">
                  <h5>Create a wallet</h5>
                  <p>Download Phantom from the app store or google play store for free. Desktop users, download the Phantom Google Chrome extension</p>
                </div>
                </Col>
                <Col xs={12} md={6} className="item" >
                <div className="how-to-buy-wrapper-content-cards card2">
                  <h5>Deposit Funds</h5>
                  <p>Choose your exchange and deposit funds easily. Most exchanges accept bank transfers, cards, or crypto. Just follow their instructions.</p>
                </div>
                </Col>
                <Col xs={12} md={6} className="item" >
                <div className="how-to-buy-wrapper-content-cards card3">
                  <h5>Place An Order</h5>
                  <p>In the exchange's trading section, select your meme coin's pair, enter the amount, and review before confirming.</p>
                </div>
                </Col>
                <Col xs={12} md={6} className="item" >
                <div className="how-to-buy-wrapper-content-cards card4">
                  <h5>Withdraw Goat Coin</h5>
                  <p>Download Phantom from the app store or google play store for free. Desktop users, download the Phantom Google Chrome extension</p>
                </div>
                </Col>
               </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
