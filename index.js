
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import ListaItens from './src/components/ListaItens';

export default class MeuApp extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const teste = {teste:'pqp, deu certo'};
        console.log(teste);
        return(
            <ListaItens />
        )
    }
}

AppRegistry.registerComponent('MeuApp', () => MeuApp);