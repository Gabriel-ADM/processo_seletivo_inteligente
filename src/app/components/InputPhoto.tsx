import { ImageSourcePropType, TextInput, View } from "react-native";

interface InputPhoto {
    img?: ImageSourcePropType
}
export default function InputFile({ img: imgInput }: InputPhoto) {
    return (
        <View>
            <TextInput></TextInput>
        </View>
    )
}