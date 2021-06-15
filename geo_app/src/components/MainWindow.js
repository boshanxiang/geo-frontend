import { Component } from 'react'
import LeftScroll from './LeftScroll'
import CenterMaps from './CenterMaps'
import RightPanel from './RightPanel'

const baseURL = 'http://localhost:3003'

class MainWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [
                {
                    name: "Bo's Bakery",
                    description: "Not a bad bakery, great sourdough.",
                    rating: 3,
                    location: "12345"
                }, {
                    name: "Ian's Eatery",
                    description: "A perfect lunch spot.",
                    rating: 5,
                    location: "25853"
                }, {
                    name: "Hannah's Hamburger Stand",
                    description: "Good food and ambience.",
                    rating: 4,
                    location: "09852"
                }, {
                    name: "Daniele's Diner",
                    description: "Great diner food.",
                    rating: 5,
                    location: "98301"
                }, {
                    name: "Ben's Bar",
                    description: "Perfect late-night dive spot with live music.",
                    rating: 4,
                    location: "18395"
                }
            ],
            newReview: false,
            updateReview: false,
            showReview: true,
            displayedReview: {},
        }
        this.getReviews = this.getReviews.bind(this)
    }

    componentDidMount() {
        this.getReviews();
        this.toggleShowReview();
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
            updateReview: false,
            showReview: true
        })
    }

    toggleShowReview = () => {
        let updateDisplayedReview
        if (this.state.reviews.length < 1) {
            updateDisplayedReview = { name: "Reviewed Restaurant", rating: 5, description: "Description of your experience.", location: "Location" }
        } else {
            updateDisplayedReview = this.state.reviews[0]
        }
        this.setState({
            newReview: false,
            updateReview: false,
            showReview: true,
            displayedReview: updateDisplayedReview
        })
    }

    toggleNewReview = () => {
        this.setState({
            newReview: true,
            updateReview: false,
            showReview: false
        })
    }

    toggleUpdateReview = () => {
        this.setState({
            newReview: false,
            updateReview: true,
            showReview: false
        })
    }

    handleAddReview = (review) => {
        const updatedReviews = [...this.state.reviews, review]
        this.setState({
            displayedReview: review,
            reviews: updatedReviews,
            newReview: false,
            updateReview: false,
            showReview: true
        })
    }

    deleteReview = (id) => {
        fetch(`${baseURL}/reviews/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json())
            .then(resJson => {
                this.setState({
                    reviews: this.state.reviews.filter(review => review._id !== resJson.deleted_review._id
                    )
                })
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
            updateReview: false,
            showReview: true
        })

    }

    render() {
        return (
            <div className="mainwindow">
                < LeftScroll reviews={this.state.reviews} getDisplayedReview={this.getDisplayedReview} toggleNewReview={this.toggleNewReview} />
                < CenterMaps />
                < RightPanel showReview={this.state.showReview} newReview={this.state.newReview} updateReview={this.state.updateReview} displayedReview={this.state.displayedReview} handleAddReview={this.handleAddReview} toggleUpdateReview={this.toggleUpdateReview} deleteReview={this.deleteReview} handleUpdateReview={this.handleUpdateReview} />
            </div>
        )
    }
}

export default MainWindow