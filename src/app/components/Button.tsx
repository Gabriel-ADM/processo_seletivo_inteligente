import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
    title: string
    handlePress: () => void,
    img?: ImageSourcePropType,
    buttonStyle: string,
    textStyle?: string,
    imageStyle?: string,
    containerStyle: string
}

export default function CustomButton({ title,
    handlePress,
    img,
    buttonStyle,
    textStyle,
    imageStyle,
    containerStyle
}: ButtonProps
) {
    return (
        <View className={`${containerStyle}`}>
            <TouchableOpacity
                className={`items-center ${buttonStyle}`}
                onPress={handlePress}
            >
                {img &&
                    <Image className={imageStyle} resizeMode="contain" source={img} />
                }
                <Text className={textStyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}