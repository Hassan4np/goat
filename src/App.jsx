import About from "./component/About";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Roadmap from "./component/Roadmap";
import How_to_buy from "./component/How_to_buy";
import Tokenomics from "./component/Tokenomics";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <How_to_buy />
      <Tokenomics/>
      <Roadmap />
      <Footer />
    </>
  );
}

export default App;
