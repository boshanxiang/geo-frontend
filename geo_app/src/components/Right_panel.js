import { Component } from 'react'
import Show_review from './Show_review'
import Update_review from './Update_review'
import New_review from './New_review'

class Right_panel extends Component {
    render() {
        return (
            <div>
                <button onClick = {() => this.props.toggleEditReview()}>EDIT</button>
                <button onClick = {() => this.props.deleteReview(this.props.displayedReview._id)}>DELETE</button>
                {
                    this.props.showReview ? < Show_review displayedReview = {this.props.displayedReview} /> : <></>
                }
                {
                    this.props.editReview ? < Update_review displayedReview = {this.props.displayedReview} handleUpdateReview = {this.props.handleUpdateReview} /> : <> </>
                }
                {
                    this.props.newReview ? < New_review handleAddReview = {this.props.handleAddReview} /> : <></>
                }
            </div>
        )
    }
}

export default Right_panel