import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Orders from "../Screens/Admin/Order"
import Products from "../Screens/Admin/Products"
import ProductForm from "../Screens/Admin/ProductForm"
import Categories from "../Screens/Admin/Categories"
import Users from "../Screens/Admin/Users"

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Products"
                component={Products}
                options={{
                    title: 'Products',
                    headerTitleStyle: {
                        fontFamily: "nunito_semi_bold"
                      }
                }}
            />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen
             name="Orders" 
             component={Orders} 
             options={{
                title: 'Orders',
                headerTitleStyle: {
                    fontFamily: "nunito_bold"
                  }
            }}/>
            <Stack.Screen
             name="ProductForm" 
             component={ProductForm} 
             options={{
                title: 'Add Product',
                headerTitleStyle: {
                    fontFamily: "nunito_bold"
                  }
            }}
             />
        </Stack.Navigator>
    )
}
export default function AdminNavigator() {
    return <MyStack />
}