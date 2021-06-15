import { Component } from 'react'

class ReviewHighlight extends Component {

    render() {
        return (
            <tr class="reviewhighlight" onClick = {() => this.props.getDisplayedReview(this.props.review)} >
                <td className = "scrollUnderline">{this.props.review.name}</td>
                <td>&nbsp;</td>
                <td>{this.props.review.rating}</td>
            </tr>
        )
    }
}

export default ReviewHighlight