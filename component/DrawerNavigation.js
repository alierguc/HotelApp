import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../pages/HomePage';
import EtkinliklerPage from '../pages/EtkinliklerPage';


const DrawerNavigator = createDrawerNavigator({
    Anasayfa:HomePage,
    Etkinlikler:EtkinliklerPage
});

export default DrawerNavigator;