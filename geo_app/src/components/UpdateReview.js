import { Component } from 'react'

const baseURL = 'http://localhost:3003'

class UpdateReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            rating: undefined,
            location: "",
            address: "",
            url: "",
            phone: "",
            email: ""
        }
    }

    componentDidMount() {
        this.setReviewToUpdate()
    }

    setReviewToUpdate = () => {
        this.setState({
            name: this.props.displayedReview.name,
            description: this.props.displayedReview.description,
            rating: this.props.displayedReview.rating,
            location: this.props.displayedReview.location,
        })
    }

    handleChange = (e) => {
        this.setState({[e.currentTarget.id]: e.currentTarget.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${baseURL}/reviews/${this.props.displayedReview._id}`, {
            method: "PUT",
            body: JSON.stringify({name: this.state.name, description: this.state.description, rating: this.state.rating, location: this.state.location}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(resJson => {
            this.props.handleUpdateReview(resJson)
            this.setState({
                name: "",
                description: "",
                rating: 0,
                location: "",
                address: "",
                url: "",
                phone: "",
                email: ""
            })
        }).catch(error => console.lof({"Error": error}))
    }
    
    render() {
        return (
            <div className="updatereview">
                <h1>Update review  </h1>
                <form onSubmit = {this.handleSubmit} >
                    <label htmlFor = "name"></label>
                    <input type = "text" id = "name" name = "name" onChange = {this.handleChange} value = {this.state.name} placeholder = "Restaurant Name" />
                    <label htmlFor = "description"></label>
                    <input type = "text" id = "description" name = "description" onChange = {this.handleChange} value = {this.state.description} placeholder = "Description" />
                    <label htmlFor = "rating"></label>
                    <input type = "number" id = "rating" name = "rating" onChange = {this.handleChange} value = {this.state.rating} placeholder = "Rating" />
                    <label htmlFor = "location"></label>
                    <input type = "text" id = "location" name = "location" onChange = {this.handleChange} value = {this.state.location} placeholder = "Location" />
                    <input type = "submit" value = "Update Review" />
                </form>
            </div>
        )
    }
}

export default UpdateReview  