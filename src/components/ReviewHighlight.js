import { Component } from 'react';
import StarRatings from 'react-star-ratings';
class ReviewHighlight extends Component {

    render() {
        return (
            <table>
                <tbody>
                    <tr className="reviewhighlight" onClick={() => this.props.getDisplayedReview(this.props.review)} >
                        <td><div className="restaurantName">{this.props.review.name}</div></td>
                    </tr>
                    <tr>
                        <StarRatings className="stars" rating={this.props.review.rating} starDimension="15px" starSpacing="1px" starRatedColor="yellow" />
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ReviewHighlight