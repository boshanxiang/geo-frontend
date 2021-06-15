import { Component } from 'react'
import ShowReview from './ShowReview'
import UpdateReview from './UpdateReview'
import NewReview from './NewReview'

class RightPanel extends Component {
    render() {
        return (
            <div class="rightpanel flexitem">
                <h1> Right Panel </h1>
                <button onClick = {() => this.props.toggleUpdateReview()}>EDIT</button>
                <button onClick = {() => this.props.deleteReview(this.props.displayedReview._id)}>DELETE</button>
                {
                    this.props.showReview ? < ShowReview displayedReview = {this.props.displayedReview} /> : <></>
                }
                {
                    this.props.updateReview ? < UpdateReview displayedReview = {this.props.displayedReview} handleUpdateReview = {this.props.handleUpdateReview} /> : <> </>
                }
                {
                    this.props.newReview ? < NewReview handleAddReview = {this.props.handleAddReview} /> : <></>
                }
            </div>
        )
    }
}

export default RightPanel