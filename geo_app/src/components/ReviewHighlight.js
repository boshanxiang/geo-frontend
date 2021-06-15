import { Component } from 'react'

class ReviewHighlight extends Component {

    render() {
        return (
            <div class="reviewhighlight">
                <tr onClick = {() => this.props.getDisplayedReview(this.props.review)} >
                    <td className = "scrollUnderline">{this.props.review.name}</td>
                    <td>&nbsp;</td>
                    <td>{this.props.review.rating}</td>
                </tr>
            </div>
        )
    }
}

export default ReviewHighlight