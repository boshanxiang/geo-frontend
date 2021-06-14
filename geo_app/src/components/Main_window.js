import { Component } from 'react'
import Left_scroll from './Left_scroll'
import Center_maps from './Center_maps'
import Right_panel from './Right_panel'

const baseURL = 'http://localhost:3003'

class Main_window extends Component {
    constructor(props) {
        super(props)
        this.state = {
          reviews: [],
          newReview: false,
          editReview: false,
          showReview: true,
          displayedReview: {},
        }
        this.getReviews = this.getReviews.bind(this)
    }

    componentDidMount() {
        this.getReviews()
    }

    getReviews() {
        fetch(baseURL + '/reviews')
            .then(data => { return data.json() }, err => console.log(err))
            .then(parsedData => this.setState({ reviews: parsedData }), err => console.log(err))
    }

    getDisplayedReview = (review) => {
        this.setState({
            displayedReview: review,
            newReview: false,
            editReview: false,
            showReview: true
        })
    }
    
    toggleShowReview = () => {
        let updateDisplayedReview
        if (this.state.reviews.length < 1) {
            updateDisplayedReview = {name: "Reviewed Restaurant", rating: 5, description: "Description of your experience.", location: "Location"}
        } else {
            updateDisplayedReview = this.state.reviews[0]
        }
        this.setState({
            newReview: false,
            editReview: false,
            showReview: true,
            displayedReview: updateDisplayedReview
        })
    }

    toggleNewReview = () => {
        this.setState({
            newReview: true,
            editReview: false,
            showReview: false
        })
    }

    toggleEditReview = () => {
        this.setState({
            newReview: false,
            editReview: true,
            showReview: false
        })
    }

    handleAddReview = (review) => {
        const updatedReviews = [...this.state.reviews, review]
        this.setState({
            displayedReview: review,
            reviews: updatedReviews,
            newReview: false,
            editReview: false,
            showReview: true
        })
    }

    deleteReview = (id) => {
        fetch(`${baseURL}/reviews/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type" : "application/json"
            },
          }).then(res => res.json())
          .then(resJson => { 
              this.setState({reviews: this.state.reviews.filter(review => review._id !== resJson.deleted_review._id
              )})
        })
        this.toggleShowReview()
    }

    handleUpdateReview = (updatedReview) => {
        const copyReviews = [...this.state.reviews]
        const index = this.state.reviews.findIndex(review => review._id === updatedReview._id)
        copyReviews[index] = updatedReview
        this.setState({
            reviews: copyReviews,
            displayedReview: updatedReview,
            ewReview: false,
            editReview: false,
            showReview: true
        })
        
    }

    render() {
        return (
            <div>
                < Left_scroll reviews = {this.state.reviews} getDisplayedReview = {this.getDisplayedReview} toggleNewReview = {this.toggleNewReview} />
                < Center_maps />
                < Right_panel showReview = {this.state.showReview} newReview = {this.state.newReview} editReview = {this.state.editReview} displayedReview = {this.state.displayedReview} handleAddReview = {this.handleAddReview} toggleEditReview = {this.toggleEditReview} deleteReview = {this.deleteReview} handleUpdateReview = {this.handleUpdateReview}/>
            </div>
        )
    }
}

export default Main_window