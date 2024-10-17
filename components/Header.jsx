import { View, Image, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10,
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 100,    
    },
    image: {
        width:100,
        height:100,
        borderRadius:50,
        overflow:'hidden',

    },
    counter: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign:'center'
    },
    text: {
        fontSize: 24,
        fontWeight: '400',
    }
})

function MyHeader() {
    return (
        
        <View style={styles.wrapper}>
            <View>
                <Image source={{ uri: 'https://www.colormusic.cl/wp-content/uploads/2024/09/waifuMia-10.jpg' }} 
                style={styles.image}/>
            </View>
            <View>
                <Text style={styles.counter}>122</Text>
                <Text style={styles.text}>post</Text>
            </View>
            <View>
                <Text style={styles.counter}>1,8M</Text>
                <Text style={styles.text}>follower</Text>
            </View>
            <View>
                <Text style={styles.counter}>104</Text>
                <Text style={styles.text}>seguiti</Text>
            </View>

        </View>
    )
}

export default MyHeader