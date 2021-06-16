import { Component } from 'react'

const baseURL = 'http://localhost:3003'

class NewReview extends Component {
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

    setLatLng = () => {
       this.setState({
            lat: this.props.lat,
            lng: this.props.lng
        }, () => console.log(this.state)) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setUserLocation(this.state.name, this.setLatLng)
        fetch(`${baseURL}/reviews`, {
            method: "POST",
            body: JSON.stringify({ name: this.state.name, description: this.state.description, rating: this.state.rating, lat: this.state.lat, lng: this.state.lng }),
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