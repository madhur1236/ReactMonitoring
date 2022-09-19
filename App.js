import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React from 'react';
import axios from 'axios';
import {getUsersList} from './services/APIs/UserAPI';

export default function App() {
    const callGetUserAPI = () => {
       getUsersList()
         .then(response => {
            console.log("Response", response?.data);
       })
       .catch(error => {
         console.log("Error",error);
       });
    };

    return (
        <View>
            <SafeAreaView>
                <Button title={'Fetch'} onPress={() => {
                    callGetUserAPI();
                }} />
            </SafeAreaView>
        </View>
    );
}