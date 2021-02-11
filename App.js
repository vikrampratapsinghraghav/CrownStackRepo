import React, { Component, useState, useEffect, useMemo } from 'react';
import {
    AppRegistry, View, Text, Image
} from 'react-native';
import SongList from './SongList';
import Splash from './Splash';

export default function App() {
    const [count, setcount] = useState(10)
    
    return (
        <View style={{flex: 1}}>
            
            <Splash />
        </View>
    )

}


AppRegistry.registerComponent('Myproject', () => Myproject);