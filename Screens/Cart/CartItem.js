import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";

const CartItem = (props) => {
  const data = props.item.item;


  const modalHandler = () => {
    console.log("modalHandler");
  }

  return (
    <TouchableOpacity>
    <ListItem style={styles.listItem} key={Math.random()} avatar>
      <Left>
        <Thumbnail
        // source={require('../../assets/images/maize.jpeg')}
          source={{
            uri: data.image
              ? data.image
              : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
          }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text style={styles.itemTextStyle}>{data.name}</Text>
        </Left>
        <Right>
           <TouchableOpacity onPress={modalHandler}>
              <Text style={styles.quantity}>1</Text>
           </TouchableOpacity> 
        </Right>
        <Right>
          <Text style={styles.itemTextStyle}>{data.price} TZS</Text>
        </Right>

      </Body>
    </ListItem>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemTextStyle: {
      fontFamily: "nunito_regular",
      fontSize: 16,
      
    },
    quantity: {
        fontFamily: "nunito_regular",
        fontSize: 12,
        backgroundColor: 'yellow',
        margin: 2,
        borderRadius: 50,
        padding: 10,
        marginRight: 25
    }
})

export default CartItem;
