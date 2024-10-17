import { ScrollView, Text } from "react-native"
import Container from "../components/Container"
import { useSessionContext } from "../utils/context"
import HomePost from "../components/HomePost"

function Home() {

    const value = useSessionContext()

    return (
        <ScrollView>
            <Container>
                <Text>INSTADRAM</Text>

                {value.posts.map( (post, i) => (
                    <HomePost
                    key={i}
                    name={post.name}
                    image={post.image}
                    description={post.description}
                />
                )) }

            </Container>
        </ScrollView>

    )
}

export default Home