import React, { Component } from 'react';
import { func } from 'prop-types';
import Maps from './Maps';

export default class MapsCaller extends Component {
  static propTypes = {
    onChange: func
  }

  state = {
    withMaps: false
  }

  checker = this.checker.bind(this);

  changeHandler = this.changeHandler.bind(this);

  componentDidMount() {
    this.interval = setInterval(this.checker, 100);
  }

  checker() {
    if (typeof window !== 'undefined' && window.google) {
      this.setState({
        withMaps: true
      }, () => {
        clearInterval(this.interval);
      });
    }
  }

  changeHandler(maps, data) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(maps, data);
    }
  }

  render() {
    const { withMaps } = this.state;
    if (withMaps) {
      return <Maps onChange={this.changeHandler} />;
    }

    return 'Loading Map...';
  }
}
