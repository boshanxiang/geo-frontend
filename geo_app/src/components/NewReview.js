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
            <div className="newreview">
                <h1>New Review  </h1>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.title} placeholder="Restaurant Name" />
                    <br></br>
                    <label htmlFor="description"></label>
                    <input type="text" id="description" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Description" />
                    <br></br>
                    <label htmlFor="rating"></label>
                    <input type="number" id="rating" name="rating" onChange={this.handleChange} value={this.state.rating} placeholder="Rating" min="0" max="5" />
                    <br></br>
                    <input type="submit" value="Add Review" />
                </form>
            </div>
        )
    }
}

export default NewReview