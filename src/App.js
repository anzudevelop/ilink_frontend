import s from './App.module.css';
import './Fonts.css'
import Header from './components/Header/Header'
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"

function App(props) {
  return (
      <div>
          <Header name={ props.state.personData.name } surname={ props.state.personData.surname } img={ props.state.personData.profileImage }/>
          <Content state={ props.state }/>
          <Footer />
      </div>

  );
}

export default App;