import { Button } from "react-native";

const buttonStyle = {
    borderRadius: '4px'
}

function MyButton({title, onPress}){
    return (
        <Button 
            title={title}
            style={buttonStyle}
            onPress={onPress}
        />
    )
}

export default MyButton