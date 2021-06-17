import { Component } from 'react'
import {Map, GoogleApiWrapper, InfoWindow, Marker} from "google-maps-react"
import CurrentLocation from './Map';

const API_KEY = process.env.REACT_APP_API_KEY;

const mapStyles = {
    width: '100%',
    height: '65%',
}

export class MapContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      showingInfoWindow: true,
      selectedPlace: props,
      activeMarker: marker
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  handleMapClick = () => {
    this.setState({center: this.props.currentCenter})
  }

    render() {
        return (
            <div>
                <h1>Map Location</h1>
                <CurrentLocation
                    centerAroundCurrentLocation
                    google={this.props.google}
                    center={this.props.currentCenter}
                    onClick={() => this.handleMapClick()}
                >
                {/* <CurrentLocation
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={this.props.currentCenter}
                > */}
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Current Location'}
                        />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                        >
                        <h4>{this.state.selectedPlace.name}</h4>
                    </InfoWindow>
                </CurrentLocation>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer)
