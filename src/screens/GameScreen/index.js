import { View, Text, Pressable, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GameScreen = ({ navigation }) => {
    const [coins, setCoins] = useState(21);

    useEffect(() => {
        console.log('Latest Coins State ', coins);
        if (coins <= 0) {
            // Alert.alert('The AI wins, try again');
            navigation.navigate('PlayAgainScreen')
        }
       
    }, [coins])


    const handlePress = (n) => {
        
        if (coins <= 6) {
            // var coint = coins;
            // coint = coint - n
            // console.log('Temp coins', coint);
            console.log('Less than 6');
            switch (n) {
                case 4:
                    setCoins(coins-n-1)
                    console.log('Temp coins 4', n);

                    return;
                case 3:
                    setCoins(coins-n-2)
                    console.log('Temp coins 3', n);

                    return;
                case 2:
                    setCoins(coins-n-3)
                    console.log('Temp coins 2', n);

                    return;
                case 1:
                    setCoins(coins-n-4)
                    console.log('Temp coins 1', n);

                    return;
                
            
                default:
                    break;
            }
            // console.log('Less than or equal to 5', coins);
            // setCoins(coins - n)
        }
        else {
            console.log('Triggered with human turn coins', coins);
            // setCoins(coins - n);
            console.log('AI turn coins left', coins);
            if (n === 1) {
                setCoins(coins - 2)
                console.log('Equals to 1', coins);
            } else {
                setCoins(coins - 2*n + 1)
                console.log('Not 1 but ', coins);
            }
            console.log('AI turn ends with coins left', coins);
        }
        // console.log('Updated coins count ', coins);
    }



    return (
        <View style={{
            // backgroundColor: 'pink',
            flex: 1,
            padding: wp(10),
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    coins !== undefined && coins >= 1 ? [...Array(coins)].map((item, index) => (
                        <Coin key={`${index}_${index}`} uid={index} />
                    )) : (
                        <Text>No coins</Text>
                    )
                }
            </View>










            <View style={{
                // backgroundColor: 'skyblue',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                {/* <Pressable style={{
                    width: wp(15),
                    height: wp(15),
                    marginTop: wp(3),
                    marginLeft: wp(3),
                    backgroundColor: 'skyblue',
                    borderRadius: wp(15),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>4</Text>
                </Pressable> */}

                <HumanButton handlePress={handlePress} hit={4} />
                <HumanButton handlePress={handlePress} hit={3} />
                <HumanButton handlePress={handlePress} hit={2} />
                <HumanButton handlePress={handlePress} hit={1} />
            </View>
        </View>
    )
}

const Coin = (props) => {
    return (
        <View style={{
            width: wp(13),
            height: wp(13),
            marginTop: wp(3),
            marginLeft: wp(3),
            backgroundColor: 'gold',
            borderRadius: wp(10),
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>{`${props.uid + 1}`}</Text>
        </View>
    )
}


const HumanButton = (props) => {
    return (
        <Pressable
            onPress={() => props.handlePress(props.hit)}
            style={{
                width: wp(15),
                height: wp(15),
                marginTop: wp(3),
                marginLeft: wp(3),
                backgroundColor: 'skyblue',
                borderRadius: wp(15),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text>{props.hit}</Text>
        </Pressable>
    )
}

export default GameScreen