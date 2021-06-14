import { Component } from 'react'

class Review_highlight extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.review.name}</td>
                <td>{this.props.review.rating}</td>
            </tr>
        )
    }
}

export default Review_highlight