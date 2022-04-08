import React, {useState} from 'react';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Welcome from './Components/Welcome/Welcome'
import Footer from './Components/Footer/Footer'
import Navigation from './Components/Nav/Navigation';
import Menu from './Components/Menu/Menu'
import './styles.scss'

//This app function returns our app components
function App(){
    const [menu, setMenu] = useState(false)

    return (
        <div className="app">
            <Navigation menu={menu} setMenu={setMenu}/>
            <Menu menu={menu} setMenu={setMenu}/>
            <div className="sections">
                <Welcome />
                <Projects/>
                <About/>
                <Footer />
            </div>
        </div>
    )
}

export default App;