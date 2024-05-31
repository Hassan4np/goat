import About from "./component/About";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Roadmap from "./component/Roadmap";
import How_to_buy from "./component/How_to_buy";
import Tokenomics from "./component/Tokenomics";
import Commnimg from "./component/Commnimg";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Commnimg/>
      <About />
      <Commnimg/>
      <How_to_buy />
      <Commnimg/>
      <Tokenomics/>
      <Commnimg/>
      <Roadmap />
      <Footer />
    </>
  );
}

export default App;
