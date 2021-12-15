import Loading from "./MyComponents/Loading.jsx";
import Header from "./MyComponents/Header.jsx";
import Starter from "./MyComponents/Starter.jsx";
import MainContent1 from "./MyComponents/MainContent-1.jsx";
import MainContent2 from "./MyComponents/MainContent-2.jsx";
import MainContent3 from "./MyComponents/MainContent-3.jsx";
import MainContent4 from "./MyComponents/MainContent-4.jsx";
import MainContent5 from "./MyComponents/MainContent-5.jsx";
import MainContent6 from "./MyComponents/MainContent-6.jsx";
import Footer from "./MyComponents/Footer.jsx";
import "./MyComponents/css/whatsapp.css";

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" ></link>
      <a
        href="https://wa.me/message/IQKHO7Q5FO4HO1"
        class="whatsapp_float fab fa-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        
      </a>
      <Loading />
      <Header />
      <Starter />
      <MainContent1 />
      <MainContent2 />
      <MainContent3 />
      <MainContent4 />
      <MainContent5 />
      <MainContent6 />
      <Footer />
    </div>
  );
}

export default App;
