import { Link, router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
    title: string
}

export default function Header({ title }: HeaderProps) {
    return (
        <View className="flex-row items-center">
            <TouchableOpacity onPress={() => router.push('/')}>
                <Image className="w-12 h-12" resizeMode="contain" source={require("src/assets/imgs/header-logo.png")} />
            </TouchableOpacity>
            <Text className="text-xl font-semibold ml-3">{title} </Text>
        </View>
    );
}