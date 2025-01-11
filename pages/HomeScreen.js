import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/userSlice'

export default function HomeScreen() {
    const { user, error, loading } = useSelector((state) => state.users)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [])

    useEffect(() => {
        if (error) {
            alert(error)
        }
    }, [error])


    return (
        <View style={{ flex: 1, padding: 30 }}>

            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Text style={{ fontSize: 22 }}>{user.name}</Text>
                    <ProfileCard />
                </>
            )}

        </View>
    )
}

const styles = StyleSheet.create({})