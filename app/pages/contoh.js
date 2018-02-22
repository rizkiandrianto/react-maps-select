import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'components/head';

export default class Contoh extends Component {
    render() {
        return (
            <div>
                <Head title="==== CONTOH ===" description="Ini adalah halaman Contoh"/>
                <div className="hero">
                    <p>Halaman Contoh</p>
                </div>
            </div>
        );
    }
}