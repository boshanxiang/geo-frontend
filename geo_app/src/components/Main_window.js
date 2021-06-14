import { Component } from 'react'
import Left_scroll from './Left_scroll'
import Center_maps from './Center_maps'
import Right_panel from './Right_panel'

const baseURL = 'http://localhost:3003'

class Main_window extends Component {
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
                < Left_scroll reviews = {this.state.reviews} />
                < Center_maps />
                < Right_panel />
            </div>
        )
    }
}

export default Main_window