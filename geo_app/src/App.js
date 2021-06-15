import { Component } from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import Header from './components/Header'
import MainWindow from './components/MainWindow'
import Footer from './components/Footer'
// library.add(fab)

class App extends Component {
  render() {
    return (
      <div class="app">
        < Header />

        < MainWindow />

        < Footer />

      </div>
    )
  }
}


export default App
