import { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        this.setState({ [e.currentTarget.id]: e.currentTarget.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${baseURL}/reviews/${this.props.displayedReview._id}`, {
            method: "PUT",
            body: JSON.stringify({ name: this.state.name, description: this.state.description, rating: this.state.rating, location: this.state.location }),
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
            }).catch(error => console.lof({ "Error": error }))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Restaurant Name" />
                <input type="number" id="rating" name="rating" onChange={this.handleChange} value={this.state.rating} placeholder="Rating" />
                <textarea type="textarea" rows="10" id="description" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Description"></textarea>
                <input type="text" id="location" name="location" onChange={this.handleChange} value={this.state.location} placeholder="Location" />
                <input type="submit" value="Save Changes" />
            </form>
        )
    }
}

export default UpdateReview