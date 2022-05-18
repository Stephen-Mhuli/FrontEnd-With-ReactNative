import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";

const CartItem = (props) => {
  const data = props.item.item;
  return (
    <ListItem style={styles.listItem} key={Math.random()} avatar>
      <Left>
        <Thumbnail
        source={require('../../assets/images/maize.jpeg')}
          // source={{
          //   uri: data.image
          //     ? data.image
          //     : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
          // }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text style={styles.itemTextStyle}>{data.name}</Text>
        </Left>
        <Right>
          <Text style={styles.itemTextStyle}>{data.price} TZS</Text>
        </Right>
      </Body>
    </ListItem>
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
      fontSize: 16
    }
})

export default CartItem;
