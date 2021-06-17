import { Component } from 'react'
import ReviewHighlight from './ReviewHighlight'

class LeftScroll extends Component {
    render() {
        return (
            <div className="leftscroll flexitem">
                <h1>Restaurants <svg onClick = {() => this.props.toggleNewReview()} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" style={{verticalAlign: "middle", marginLeft: "10px"}} className="bi bi-plus-circle" viewBox="0 0 22 22">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg></h1> 
                <div className="restaurant-list">
                    {
                        this.props.reviews.map((review) => {
                            return <ReviewHighlight key = {review._id} review = {review} getDisplayedReview = {this.props.getDisplayedReview} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default LeftScroll