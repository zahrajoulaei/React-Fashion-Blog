import "./App.css";
import Footer from "./components/footer/footer";
import Article from "./components/article/article";
import Header from "./components/header/header"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Article />
      </main>
      <Footer />
    </>
  );
}

