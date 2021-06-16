import React, {Component} from "react"

const baseURL = 'http://localhost:3003'

export const MapDetailsContext = React.createContext({}) // for consumer AND provider. by ".createContext()"ing, I am stating that this information will be context available to provider and consumer

export class MapDetails extends Component { // for provider. gives provider the content of the context to make available to consumers
    constructor(props) {
        super(props)
        this.state = {
            locationName: "", 
            lat: "",
            lng: "",
            location: {}
        }
    }

    getMapsLocation = () => new Promise((resolve, reject) => {
        console.log(baseURL + "/maps/" + this.state.locationName)
        fetch(baseURL + "/maps/" + this.state.locationName)
            .then(data => {return data.json()}, error => console.log(error))
            .then(parsedData => this.setState({
                location: parsedData,
                lat: parsedData.candidates[0].geometry.location.lat,
                lng: parsedData.candidates[0].geometry.location.lng
            }, resolve, error => console.log(error))) // wait for fetch, wait for setState, then resolve
    })

    setUserLocation = (location) => new Promise((resolve, reject) => {
        this.setState({locationName: location}, (async () => {
            await this.getMapsLocation()
            resolve()
        })) // referenced https://reactjs.org/docs/react-component.html#setstate for second param of setState 
    }).catch(() => console.log("error occured in promise")) // wait for setState, then resolve

    render() {
        return (
            <MapDetailsContext.Provider value = {{...this.state,getMapsLocation: this.getMapsLocation, setUserLocation: this.setUserLocation}} >
                {this.props.children}
            </MapDetailsContext.Provider>
        )
    }
}

// to structure the above code I read through the context section under advanced guides https://reactjs.org/docs/context.html, to structure the file itself I referenced https://stackoverflow.com/questions/55448216/how-do-i-fetch-data-in-react-component-class-through-context-api/55448549
// someone w experience suggested making the default value of the context an empty object to prevent throwing an error and answered clarifying questions I had on syntax and on the logic behing providers and consumers after reading above resources