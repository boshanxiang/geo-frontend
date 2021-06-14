import { Component } from 'react'
import Header from './components/Header'
import Main_window from './components/Main_window'

const baseURL = 'http://localhost:3003'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      newReview: false,
      editReview: false,
      showReview: true,
      displayedReview: {},
    }
    this.getReviews = this.getReviews.bind(this)
  }

  componentDidMount() {
    this.getReviews()
  }
  getReviews() {
    fetch(baseURL + '/reviews')
      .then(data => { return data.json() }, err => console.log(err))
      .then(parsedData => this.setState({ reviews: parsedData }), err => console.log(err))
  }

  render() {
    return (
      <div>
        < Header />

        < Main_window />

      </div>
    )
  }
}


export default App
