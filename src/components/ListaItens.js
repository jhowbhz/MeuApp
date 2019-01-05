
import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import axios from 'axios';

export default class ListaItens extends Component {
    constructor(props) {
        super(props);
        this.state = {Planetas: []};
    }

    componentWillMount() {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=HUGgX0vI7GOvvllFHHfI5M39HRLklSGfADdXeXmj')
        .then( response => { this.setState( { Planetas:response.data.photos} ) })
        .catch( () => { console.log('error ao recuperar os dados')} );
    }

    render() {
        return(
            <View>
                <Text style={styles.top}>Fotos do Rover Curiosity NASA </Text>
                <ScrollView>
                        { this.state.Planetas.map( plan => { return ( <Image style={styles.img} key={ plan.id } source={ { uri:plan.img_src } } /> ) } )}
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    topo: {
        paddingLeft: 10,
    },
    top:{
        fontSize:40,
    },
    img:{
        width:500,
        height:200
    }
}