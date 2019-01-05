
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import ListaItens from './src/components/ListaItens';

export default class MeuApp extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const teste = {teste:'pqp, deu certo'};
        console.log(teste);
        return(
            <View style={style.container}>
                <ListaItens />
            </View>
        )
    }
}

AppRegistry.registerComponent('MeuApp', () => MeuApp);

const style = StyleSheet.create({
    container: {
        padding: 10,
    },
})