import React, { Component } from 'react';
import Head from 'next/head';
import MapsCaller from 'components/MapsCaller';

export default class Home extends Component {
  state = {
    renderScript: false,
    center: null
  }

  submit = this.submit.bind(this)

  changeHandler = this.changeHandler.bind(this)

  componentDidMount() {
    if (typeof document !== 'undefined') {
      const mapScript = document.querySelectorAll('#map_script').length;
      if (mapScript < 1) {
        this.setState({
          renderScript: true
        });
      }
    }
  }

  changeHandler(maps, data) {
    this.setState({
      center: data.center
    });
  }

  submit() {
    const { center } = this.state;
    console.log('lat: ', center.lat(), ', lng: ', center.lng()); //eslint-disable-line
  }

  render() {
    const { renderScript } = this.state;

    return (
      <div>
        <Head>
          {/* Ini buat panggil scriptnya, bisa dimana aja, ini hanya contoh.
          Kalo di next JS, kira2 perlu sedikit "diakali", karena rendernya di server */}
          {renderScript && (
            <script
              id="map_script"
              async
              defer
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCp4UWva8TxNvKoc33HepYBa16CUaOmHZM&v=3.exp&libraries=geometry,drawing,places"
              type="text/javascript"
            />
          )}
        </Head>
        <MapsCaller onChange={this.changeHandler} />
        <button type="button" onClick={this.submit}>Submit</button>
      </div>
    );
  }
}
