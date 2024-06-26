import { Col, Container, Row } from "react-bootstrap";
import bottonImg from "../../src/assets/img/banner-button-right-img.png";

export default function Banner() {
  return (
    <div className="banner">
      <Container>
        <div className="banner-wrapper ">
          <Row>
            <Col
              xs={12}
              className="justify-content-center alig-items-center d-flex"
            >
              <div className="banner-content px-3 text-center">
              <div className="d-flex align-items-center justify-content-between copy-text position-absolute z-1">
              <strong  className="text">0xba3...........3476</strong>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1261_2473)">
                  <path
                    d="M21.653 23.3789C22.0508 23.3789 22.4322 23.2208 22.7135 22.9395C22.9948 22.6581 23.153 22.2767 23.153 21.8789V9.87891C23.153 9.48108 22.9948 9.09966 22.7135 8.81836C22.4322 8.53706 22.0508 8.37891 21.653 8.37891H17.153V3.87891C17.153 3.48108 16.9948 3.09966 16.7135 2.81836C16.4322 2.53705 16.0508 2.37891 15.653 2.37891H3.65295C3.25513 2.37891 2.87371 2.53705 2.59241 2.81836C2.3111 3.09966 2.15295 3.48108 2.15295 3.87891V15.8789C2.15295 16.2767 2.3111 16.6581 2.59241 16.9395C2.87371 17.2208 3.25513 17.3789 3.65295 17.3789H8.15295V21.8789C8.15295 22.2767 8.3111 22.6581 8.59241 22.9395C8.87371 23.2208 9.25513 23.3789 9.65295 23.3789H21.653ZM21.653 24.8789H9.65295C8.8573 24.8789 8.09447 24.5629 7.53186 24.0002C6.96925 23.4376 6.65295 22.6746 6.65295 21.8789V18.8789H3.65295C2.8573 18.8789 2.09447 18.5629 1.53186 18.0002C0.969251 17.4376 0.652954 16.6746 0.652954 15.8789V3.87891C0.652954 3.08326 0.969251 2.32018 1.53186 1.75757C2.09447 1.19496 2.8573 0.878906 3.65295 0.878906H15.653C16.4486 0.878906 17.2114 1.19496 17.774 1.75757C18.3367 2.32018 18.653 3.08326 18.653 3.87891V6.87891H21.653C22.4486 6.87891 23.2114 7.19496 23.774 7.75757C24.3367 8.32018 24.653 9.08326 24.653 9.87891V21.8789C24.653 22.6746 24.3367 23.4376 23.774 24.0002C23.2114 24.5629 22.4486 24.8789 21.653 24.8789Z"
                    fill="#0A1A03"
                  />
                  <path
                    d="M9.65295 8.37891C9.25513 8.37891 8.8736 8.53694 8.59229 8.81825C8.31099 9.09955 8.15295 9.48108 8.15295 9.87891V21.8789C8.15295 22.2767 8.31099 22.6583 8.59229 22.9396C8.8736 23.2209 9.25513 23.3789 9.65295 23.3789H21.653C22.0508 23.3789 22.4323 23.2209 22.7136 22.9396C22.9949 22.6583 23.153 22.2767 23.153 21.8789V9.87891C23.153 9.48108 22.9949 9.09955 22.7136 8.81825C22.4323 8.53694 22.0508 8.37891 21.653 8.37891H9.65295ZM9.65295 6.87891H21.653C22.4486 6.87891 23.2117 7.19498 23.7743 7.75759C24.3369 8.32019 24.653 9.08326 24.653 9.87891V21.8789C24.653 22.6746 24.3369 23.4376 23.7743 24.0002C23.2117 24.5628 22.4486 24.8789 21.653 24.8789H9.65295C8.8573 24.8789 8.09424 24.5628 7.53163 24.0002C6.96902 23.4376 6.65295 22.6746 6.65295 21.8789V9.87891C6.65295 9.08326 6.96902 8.32019 7.53163 7.75759C8.09424 7.19498 8.8573 6.87891 9.65295 6.87891Z"
                    fill="#0A1A03"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1261_2473">
                    <rect
                      width="24.002"
                      height="24"
                      fill="white"
                      transform="translate(0.652283 0.878906)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
                <h1>$ goat</h1>
                <p>Goat Coin is not just another meme coin it's a movement. </p>
                <button className="btn">Buy Now</button>
                <div className="position-absolute z-2 bottom-img">
                  <img src={bottonImg} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
