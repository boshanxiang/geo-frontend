import { Component } from 'react'
import Review_highlight from './Review_highlight'

class Left_scroll extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {
                            this.props.reviews.map((review) => {
                                return <Review_highlight key = {review._id} review = {review} />
                            })
                        }
                        
                    </tbody>
                </table>
                < Review_highlight />
            </div>
        )
    }
}

export default Left_scroll