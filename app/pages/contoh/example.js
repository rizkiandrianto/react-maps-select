import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'components/head';

export default class Contoh extends Component {
    componentDidMount() {
        alert('test');
    }
    render() {
        return (
            <div>
                <Head title="contoh" description="Ini adalah halaman Contoh"/>
                <div className="hero">
                    <p>Contoh Subfolder</p>
                </div>
            </div>
        );
    }
}