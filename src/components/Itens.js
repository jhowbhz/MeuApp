
import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Itens extends Component {
        render() {
            return(
                <Image uri={ this.uri } />
        )
    }
}