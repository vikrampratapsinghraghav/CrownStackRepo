import React, { useEffect } from 'react'
import { useState } from 'react';
import { View, Text, Image,ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function SongList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://itunes.apple.com/search?term=Michael+jackson')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setData(json.results)

            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    if(loading)
    return <ActivityIndicator size="large" />
    return (
        <View style={{ flex: 1 }}>
            <FlatList
            keyExtractor={(item)=>item.trackId}
                data={data}
                renderItem={({ item }) => {
                    return <ItemRow {...item} />
                }}
            />
        </View>
    )
}

const ItemRow = ({ artworkUrl100, trackTimeMillis, trackName, collectionName }) => {

    return (
        <View style={{ flexDirection: 'row', padding: 16 }}>
            <Image
                source={{
                    uri: artworkUrl100,
                }}
                style={{ width: 80, height: 80 }}
            />
            <View style={{marginStart: 20 }}>
                <Text>
                    {trackName}
                </Text>
                <Text style={{marginVertical: 4}}>
                    {collectionName}
                </Text>
                <Text>
                    {milliToTime(trackTimeMillis)}
                </Text>

            </View>
        </View>
    )

}
const milliToTime = (millis) => {
   return `${ Math.trunc((millis / 1000)/60) } : ${Math.trunc((millis / 1000)%60)}` 
}