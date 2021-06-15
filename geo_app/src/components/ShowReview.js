import { Component } from 'react'
import StarRatings from 'react-star-ratings';

class ShowReview extends Component {
    render() {
        return (
            <div className="showreview">
                <h1>Show Review</h1>
                <h3>{this.props.displayedReview.name}</h3>
                <h4>{this.props.displayedReview.rating}</h4>
                <h5>{this.props.displayedReview.description}</h5>
                <div class="stars">
                    <StarRatings rating={this.props.displayedReview.rating} starDimension="40px" starRatedColor="yellow" />
                </div>
            </div>
        )
    }
}

export default ShowReview