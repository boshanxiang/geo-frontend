import { Component } from 'react'
import Review_highlight from './Review_highlight'

class Left_scroll extends Component {
    render() {
        return (
            <div>
                <h1>Left Scroll</h1> 
                <table>
                    <tbody>
                        <tr onClick = {() => this.props.toggleNewReview()}>
                            <td>New Review</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        {
                            this.props.reviews.map((review) => {
                                return <Review_highlight key = {review._id} review = {review} getDisplayedReview = {this.props.getDisplayedReview} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Left_scroll