import React, {useState} from 'react';
import About from './About/About'
import Projects from './Projects/Projects';
import Welcome from './Welcome/Welcome'
import Footer from './Footer/Footer'
import Navigation from './Nav&Footer/Navigation';
import Menu from './Menu/Menu'
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