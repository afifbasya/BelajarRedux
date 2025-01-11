import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Button() {
    const { user } = useSelector((state) => state.users)
    return (
        <View style={{ marginTop: 30, backgroundColor: 'red' }}>
            <Text style={{ fontSize: 20 }}> Button nya : {user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})