import { View, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width

function Post () {
    return (
        <View style={{
            flex: 1,
            minWidth: '30%',
            maxWidth: '30%',
            aspectRatio: '1/1',
            backgroundColor: 'orange',
            borderWidth: '1px'
        }}>
        </View>
    )
}

export default Post