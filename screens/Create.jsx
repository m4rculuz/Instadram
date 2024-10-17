import { View, Text, Image } from "react-native";
import MyButton from "../components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import Input from "../components/Input";

const containerStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1'
}

const imageContainerStyle = {
    width: 400,
    height: 400,
    backgroundColor: 'red'
}

function Create() {

    const [img, setImg] = useState(null)
    const [description, setDescription] = useState('')

    async function openCamera() {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!permissionResult.granted) {
            alert('DAMMI I PERMESSI O TI SPACCO LA FACCIA')
            return;
        }

        console.log('ABBIAMO I PERMESSI')

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        const image = result.assets[0].uri
        setImg(image)

    }

    function deleteImage() {
        setImg(null)
    }

    function publishPost() {
        console.log("PUBBLICA")
        const post = {
            name: "waifuMiaa",
            image: img,
            description: description
        }
        console.log(post)
    }


    return (
        <View style={containerStyle}>
            {!img && <MyButton title={"Apri Fotocamera"}
                onPress={openCamera}
            />}
            {!!img && <View>

                <View style={imageContainerStyle}>
                    <Image
                        source={{ uri: img }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>

                <Input
                    placeholder={"descrizione"}
                    onChange={setDescription}
                />

                <MyButton
                    title={"Pubblica"}
                    onPress={publishPost}
                />

                <MyButton
                    title="Elimina"
                    onPress={deleteImage}

                />

            </View>}

        </View>

    )
}

export default Create