import { Component } from 'react';
import StarRatings from 'react-star-ratings';
class ReviewHighlight extends Component {

    render() {
        return (
            <div class="reviewhighlight">
                <tr onClick={() => this.props.getDisplayedReview(this.props.review)} >
                    <td className="scrollUnderline">{this.props.review.name}</td>
                    <td>&nbsp;</td>
                    <StarRatings className="stars" rating={this.props.review.rating} starDimension="40px" starRatedColor="yellow" />
                </tr>
            </div>
        )
    }
}

export default ReviewHighlight