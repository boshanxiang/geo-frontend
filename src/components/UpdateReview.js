import { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MapDetailsContext} from "./Context/MapDetailsContext"

const baseURL = 'http://localhost:3003'

class UpdateReview extends Component {
    static contextType = MapDetailsContext // use this.context to access context
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            rating: undefined,
            lat: "",
            lng: "",
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
        })
    }

    handleChange = (e) => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value })
    }

    setLatLng = async () => {
        await this.context.setUserLocation(this.state.name)
        this.setState({
            lat: this.context.lat,
            lng: this.context.lng
        }, () => console.log(this.state)) 
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        await this.setLatLng()
        fetch(`${baseURL}/reviews/${this.props.displayedReview._id}`, {
            method: "PUT",
            body: JSON.stringify({ name: this.state.name, description: this.state.description, rating: this.state.rating, lat: this.context.lat, lng: this.context.lng }),
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
                    lat: "",
                    lng: "",
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

// referenced https://www.pluralsight.com/guides/executing-promises-in-a-react-component to structure promise in react