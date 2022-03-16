import s from './App.module.css';
import Header from './components/Header/Header'
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"

function App() {
  return (
      <div className={s.appWrapper}>
          <Header />
          <Content />
          <Footer />
      </div>

  );
}

export default App;