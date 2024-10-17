import { View, Text, Image, TouchableOpacity } from "react-native"
import { Touchable } from "react-native-web"
import { useState } from "react"
import Icon from 'react-native-vector-icons/Ionicons'

const containerStyle = {
    width: '100%',
    marginBottom: 10,
    //backgroundColor: 'red'
}

const imageStyle = {
    width: '100%',
    aspectRatio: '1/1',
    backgroundColor: 'yellow'
}

const profileStyle = {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    overflow: 'hidden'
}

const profileContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 3
}

const descriptionStyle = {
    margin: 5,
    marginBottom: 15
}


function HomePost({ name, image, description }) {

    const [like, setLike] = useState(false)

    function toggleLike() {
        setLike(!like)
        console.log('LIKE')
    }

    return (
        <View style={containerStyle}>
            <View style={profileContainerStyle}>
                <View style={profileStyle}>
                    <Image
                        source={"https://www.colormusic.cl/wp-content/uploads/2024/09/waifuMia-10.jpg"}
                        style={{ height: '100%', width: '100%' }}
                    />
                </View>
                <Text>{name}</Text>

            </View>

            <View style={imageStyle}>
                <Image
                    source={image}
                    style={{ height: '100%', width: '100%' }}
                />
            </View>

            <View>
                <TouchableOpacity onPress={toggleLike}>
                    <Icon
                        name={like ? 'heart' : 'heart-outline'}
                        size={40}
                        color={like ? 'red' : 'grey'}
                    />
                </TouchableOpacity>
            </View>
            <View style={descriptionStyle}>
                <Text>{description}</Text>
            </View>

        </View>
    )
}

export default HomePost