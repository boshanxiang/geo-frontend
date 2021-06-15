import { Component } from 'react'

const baseURL = 'http://localhost:3003'

class New_review extends Component {
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

    handleChange = (e) => {
        this.setState({[e.currentTarget.id]: e.currentTarget.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${baseURL}/reviews`, {
            method: "POST",
            body: JSON.stringify({name: this.state.name, description: this.state.description, rating: this.state.rating, location: this.state.location}),
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
            <>
                <h1>New_review  </h1>
                <form onSubmit = {this.handleSubmit} >
                    <label htmlFor = "name"></label>
                    <input type = "text" id = "name" name = "name" onChange = {this.handleChange} value = {this.state.title} placeholder = "Restaurant Name" />
                    <label htmlFor = "description"></label>
                    <input type = "text" id = "description" name = "description" onChange = {this.handleChange} value = {this.state.description} placeholder = "Description" />
                    <label htmlFor = "rating"></label>
                    <input type = "number" id = "rating" name = "rating" onChange = {this.handleChange} value = {this.state.rating} placeholder = "Rating" />
                    <label htmlFor = "location"></label>
                    <input type = "text" id = "location" name = "location" onChange = {this.handleChange} value = {this.state.location} placeholder = "Location" />
                    <input type = "submit" value = "Add Review" />
                </form>
            </>
        )
    }
}

export default New_review  