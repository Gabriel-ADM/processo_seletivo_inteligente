import { SafeAreaView, Text, View, Image, FlatList } from "react-native";
import { router } from "expo-router";
import CustomButton from "@/app/components/Button";
import { useState } from "react";

export default function AcompanheInscricoes() {
    const [fasesProcesso, setFaseProcesso] = useState([
        { desc: "Início do Processo Seletivo", data: Date.now() },
        { desc: "Entrega de Documentos", data: Date.now() },
        { desc: "Validação de Documentação", data: Date.now() },
        { desc: "Fim do Processo Seletivo", data: Date.now() },
    ])
    return (
        <SafeAreaView className="flex-1 items-center justify-evenly">
            <View className="relative w-80 mb-8 bg-gray-200 flex-wrap py-8">
                <View className="flex-row w-70 p-2 items-center justify-between">
                    <Image
                        className={"h-16 w-16"}
                        source={require("src/assets/imgs/processo-listado.png")}
                    />
                    <Text className="flex-1 mr-4 p-2 font-medium text-2xl text-center">Fases do Processo</Text>
                </View>
                <FlatList data={fasesProcesso} renderItem={FaseProcesso} />
            </View>
            <CustomButton
                img={require("src/assets/imgs/doc-sheet.png")}
                title="Envie sua Documentação"
                textStyle="flex-1 pl-3 font-medium text-xl text-center"
                handlePress={() => { router.push('(screens)/inscricoes/enviar-doc') }}
                containerStyle="w-80 mb-16 bg-gray-200"
                buttonStyle="flex-row w-70 p-8"
                imageStyle="h-16 w-16 bg-gray-200"
            />
        </SafeAreaView >
    )
}

function FaseProcesso({ item }) {
    return (
        <View className="flex-row justify-between items-center px-3 py-2 border-b border-gray-300">
            <Text className="text-base font-normal">
                <Text className="font-extrabold text-xl mx-2">•</Text>
                {item.desc}</Text>
            <Text className="text-sm ">{formatDate(item.data)}</Text>
        </View>
    )
}

export function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}