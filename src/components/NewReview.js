import { Component } from 'react'
import { MapDetailsContext } from "./Context/MapDetailsContext"

let baseURL;

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    // "https://morning-river-69185.herokuapp.com/" in this case is the *API* url
    baseURL = 'https://morning-river-69185.herokuapp.com';
}


class NewReview extends Component {
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
        fetch(`${baseURL}/reviews`, {
            method: "POST",
            body: JSON.stringify({ name: this.state.name, description: this.state.description, rating: this.state.rating, lat: this.context.lat, lng: this.context.lng }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(resJson => {
                this.props.handleAddReview(resJson)
                this.setState({
                    name: "",
                    description: "",
                    rating: undefined,
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
                <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.title} placeholder="Restaurant Name" />
                <input type="number" id="rating" name="rating" onChange={this.handleChange} value={this.state.rating} placeholder="Rating" min="0" max="5" />
                <textarea type="textarea" rows="10" id="description" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Description"> </textarea>
                <input type="text" id="location" name="location" onChange={this.handleChange} value={this.state.location} placeholder="Location" />
                <input type="submit" value="Save Review" />
            </form>
        )
    }
}

export default NewReview

// referenced https://www.pluralsight.com/guides/executing-promises-in-a-react-component to structure promise in react