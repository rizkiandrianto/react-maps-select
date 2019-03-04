/* global google */

import React, { Component } from 'react';
import { func, node, number } from 'prop-types';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';

const CustomMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.center}
    onBoundsChanged={props.onBoundsChanged}
    ref={props.onMapMounted}
    options={{
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false
    }}
    center={props.dragged ? null : props.center}
    onDragStart={props.onDragStart}
    onDragEnd={props.onDragEnd}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
    >
      <input value={props.searchValue} onChange={props.onSearchChange} />
    </SearchBox>
    <Marker position={props.origin} />
  </GoogleMap>
));

export default class Maps extends Component {
  static propTypes = {
    containerElement: node,
    loadingElement: node,
    mapElement: node,
    onChange: func,
    latitude: number,
    longitude: number
  }

  static defaultProps = {
    containerElement: <div style={{ height: '400px' }} />,
    loadingElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
    onChange: null,
    latitude: null,
    longitude: null
  }

  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: props.latitude || -6.301375,
        lng: props.longitude || 106.653209
      },
      dragged: false,
      geocode: null,
      bounds: null,
      searchValue: ''
    };
    this.onBoundsChanged = this.onBoundsChanged.bind(this);
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
  }

  componentDidMount() {
    this.onDragEnd();
    navigator.geolocation.getCurrentPosition((result) => {
      if (result) {
        const lat = result.coords.latitude;
        const lng = result.coords.longitude;
        this.setState({
          center: {
            lat,
            lng
          }
        });
      }
    }, (error) => {
      throw error;
    }, { timeout: 10000 });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.latitude && nextProps.longitude) {
      this.setState({
        center: {
          lat: nextProps.latitude,
          lng: nextProps.longitude
        }
      });
    }
  }

  onChange() {
    const { onChange } = this.props;
    const { center, geocode, bounds } = this.state;
    if (onChange) {
      onChange(this.map, {
        center,
        geocode,
        bounds
      });
    }
  }

  onDragStart() {
    this.setState({
      dragged: true
    });
  }

  onDragEnd() {
    this.setState({
      dragged: false
    });
    const { center } = this.state;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ latLng: center }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const geocode = results[0];
        this.setState({
          geocode
        }, () => {
          this.onChange();
        });
      }
    });
  }

  onPlacesChanged() {
    const places = this.searchBox.getPlaces();
    const { center: centerState } = this.state;
    const center = places[0] ? places[0].geometry.location : centerState;

    this.setState({
      center,
      searchValue: places[0].name
    }, () => {
      this.onDragEnd();
    });
  }

  onBoundsChanged() {
    this.setState({
      center: this.map.getCenter(),
      bounds: this.map.getBounds()
    }, () => {
      this.onChange();
    });
  }

  changeSearch(e) {
    if (e && e.target) {
      this.setState({
        searchValue: e.target.value
      });
    }
  }

  render() {
    const {
      bounds,
      center,
      dragged,
      searchValue
    } = this.state;
    return (
      <CustomMap
        onMapMounted={(map) => { this.map = map; }}
        {...this.props}
        center={center}
        origin={center}
        onBoundsChanged={this.onBoundsChanged}
        onPlacesChanged={this.onPlacesChanged}
        onSearchBoxMounted={(e) => { this.searchBox = e; }}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        dragged={dragged}
        bounds={bounds}
        searchValue={searchValue}
        onSearchChange={this.changeSearch}
      />
    );
  }
}
