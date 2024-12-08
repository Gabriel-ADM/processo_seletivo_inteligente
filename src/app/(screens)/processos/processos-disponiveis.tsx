import { Alert, FlatList, Image, SafeAreaView, Share, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import CustomButton from "@/app/components/Button";
import { useState } from "react";

export default function ProcessoDisponiveis() {
    const [processos, setProcessos] = useState([
        { id: '1', href: '/processo-seletivo', title: 'Processo Seletivo 1' },
        { id: '2', href: '/processo-seletivo', title: 'Processo Seletivo 2' },
        { id: '3', href: '/processo-seletivo', title: 'Processo Seletivo 3' },
    ])

    return (
        <SafeAreaView className="flex-1 items-center top-20">
            <CustomButton
                img={require("src/assets/imgs/profile-checked.png")}
                title="Acompanhe suas Inscrições"
                textStyle="flex-1 pl-1 font-medium text-xl text-center"
                handlePress={() => { router.replace('(screens)/inscricoes/acompanhe-inscricoes') }}
                containerStyle="w-80 mb-14 bg-gray-200"
                buttonStyle="flex-row w-70 p-8"
                imageStyle="h-16 w-16 bg-gray-200"
            />
            <FlatList
                className="w-80 p-1 py-3 bg-gray-200 flex-grow-0"
                data={processos}
                renderItem={ProcessoListado}
                keyExtractor={(item) => item.id} />
        </SafeAreaView>
    )
}

function ProcessoListado({ item }) {
    const onShare = async () => {
        try {
            await Share.share({
                title: `Processo Seletivo${item.title}`,
                url: `${item.href}`,
                message: "Dê uma olhada nessa oportunidade no IFB!"
            });
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };
    return (
        <View className="m-5 flex-row items-center justify-between">
            <TouchableOpacity
                className="relative flex-row items-center w-32"
                onPress={() => router.push('/(screens)/processos/processo-seletivo')}>
                <Image source={require('src/assets/imgs/processo-listado.png')} />
                <Text className="font-semibold text-xl px-3">{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onShare}>
                <Image source={require('src/assets/imgs/share.png')} />
            </TouchableOpacity>
        </View>
    )
}