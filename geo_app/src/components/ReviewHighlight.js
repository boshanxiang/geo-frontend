import { Component } from 'react';
import StarRatings from 'react-star-ratings';
class ReviewHighlight extends Component {

    render() {
        return (
            <tr className="reviewhighlight" onClick={() => this.props.getDisplayedReview(this.props.review)} >
                <td className="scrollUnderline">{this.props.review.name}</td>
                <td>&nbsp;</td>
                <StarRatings className="stars" rating={this.props.review.rating} starDimension="40px" starRatedColor="yellow" />
            </tr>
        )
    }
} <StarRatings className="stars" rating={this.props.review.rating} starDimension="40px" starRatedColor="yellow" />

export default ReviewHighlight