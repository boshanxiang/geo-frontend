import { Component } from 'react'
import StarRatings from 'react-star-ratings';

class ShowReview extends Component {
    render() {
        return (
            <div className="showreview">
                <h3 className="restaurantName">{this.props.displayedReview.name}</h3>
                <div class="stars">
                    <StarRatings rating={this.props.displayedReview.rating} starDimension="15px" starSpacing="1px" starRatedColor="yellow" />
                </div>
                <h5>{this.props.displayedReview.description}</h5>
            </div>
        )
    }
}

export default ShowReview