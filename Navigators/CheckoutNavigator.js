import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// Screens
import Checkout from '../Screens/Cart/Checkout/Checkout'
import Payment from '../Screens/Cart/Checkout/Payment'
import Confirm from '../Screens/Cart/Checkout/Confirm';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarLabelStyle: { fontSize: 16 },
            tabBarActiveTintColor: '#e91e63',
            // tabBarItemStyle: { width: 100 },
            tabBarItemStyle: { fontFamily: 'nunito_bold' },
            tabBarStyle: { backgroundColor: 'powderblue' },
          }}
        >
            <Tab.Screen
             name="Shipping" 
             component={Checkout}
             options={{
                title: 'Shipping',
                headerTitleStyle: {
                    fontFamily: "nunito_bold"
                  }
            }}
             />
            <Tab.Screen
             name="Payment" 
             component={Payment} 
             />
            <Tab.Screen name="Confirm" component={Confirm} />
        </Tab.Navigator>
    );
}

export default function CheckoutNavigator() {
    return <MyTabs />
}