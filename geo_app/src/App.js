import { Component } from 'react'
import Header from './components/Header'
import MainWindow from './components/MainWindow'
import Footer from './components/Footer'

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
