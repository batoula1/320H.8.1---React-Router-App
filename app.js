import "./App.css";
import image1 from "./assets/blog-image-1.jpg";
import image2 from "./assets/blog-image-2.jpg";
import Header from "./Components/Header";
import Article from "/Components/Article";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Article
          imgSrc={image1}
          imgAlt={"Woman walking off screen to the right"}
        />
        <Article
          imgSrc={image2}
          imgAlt={"Woman walking off screen to the right"}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;