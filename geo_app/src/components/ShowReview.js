import { Component } from 'react'

class ShowReview extends Component {
    render() {
        return (
            <div class="showreview">
                <h1>Show Review</h1>
                <h3>{this.props.displayedReview.name}</h3>
                <h4>{this.props.displayedReview.rating}</h4>
                <h5>{this.props.displayedReview.description}</h5>
            </div>
        )
    }
}

export default ShowReview 