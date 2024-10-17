import { ScrollView, Text } from "react-native"
import Container from "../components/Container"
import MyHeader from "../components/Header"
import Post from "../components/Post"
import { View } from "react-native-web"
import { useSessionContext } from "../utils/context"
import MyButton from "../components/Button"


function Profile() {

    function logout() {
        console.log('logout')
        value.setSession(null)
    }

    const value = useSessionContext()

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Container>
                <Text>waifuMiia</Text>
                <Text>{value.name}</Text>
                <Text>{value.age}</Text>
                {!!value.session && <Text>Ciao, {value.session.username}</Text>}
                <MyButton onPress={value.logout} title={"LOGOUT"} />
                <MyHeader />

                <View style={{
                    justifyContent: 'center',
                    backgroundColor: 'red',
                    maxWidth: '100%',
                    gap: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>

                    <Post />
                    <Post />
                    <Post />
                    <Post />

                </View>

            </Container>
        </ScrollView>


    )
}

export default Profile