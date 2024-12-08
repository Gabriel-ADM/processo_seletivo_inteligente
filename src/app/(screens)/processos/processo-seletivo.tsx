import { SafeAreaView } from "react-native";
import Header from "../../components/Header";
import { router } from "expo-router";
import CustomButton from "@/app/components/Button";

export default function ProcessoSeletivo() {
    return (
        <SafeAreaView className="flex-1 items-center top-14">
            <CustomButton
                img={require("src/assets/imgs/processo-listado.png")}
                title="Fases do Processo"
                textStyle="flex-1 pl-3 font-medium text-xl text-center"
                handlePress={() => { router.push('(screens)/processos/processos-disponiveis') }}
                containerStyle="w-80 mb-8 bg-gray-200"
                buttonStyle="flex-row w-70 p-8"
                imageStyle="h-16 w-16 bg-gray-200"
            />
            <CustomButton
                img={require("src/assets/imgs/doc-sheet.png")}
                title="Documentação"
                textStyle="flex-1 pl-3 font-medium text-xl text-center"
                handlePress={() => { router.push('(screens)/processos/processos-disponiveis') }}
                containerStyle="w-80 mb-8 bg-gray-200"
                buttonStyle="flex-row w-70 p-8"
                imageStyle="h-16 w-16 bg-gray-200"
            />
            <CustomButton
                img={require("src/assets/imgs/people-aligned.png")}
                title="Quantidade de Vagas"
                textStyle="flex-1 pl-3 font-medium text-xl text-center"
                handlePress={() => { router.push('(screens)/processos/processos-disponiveis') }}
                containerStyle="w-80 mb-8 bg-gray-200"
                buttonStyle="flex-row w-70 p-8"
                imageStyle="h-16 w-16 bg-gray-200"
            />
            <CustomButton
                img={require("src/assets/imgs/detailed-doc.png")}
                title="Editais"
                textStyle="flex-1 pl-3 font-medium text-xl text-center"
                handlePress={() => { router.push('(screens)/processos/processos-disponiveis') }}
                containerStyle="w-80 mb-8 bg-gray-200"
                buttonStyle="flex-row w-70 p-8"
                imageStyle="h-16 w-16 bg-gray-200"
            />
            <CustomButton
                img={require("src/assets/imgs/checked.png")}
                title="Resultados"
                textStyle="flex-1 pl-3 font-medium text-xl text-center"
                handlePress={() => { router.push('(screens)/processos/processos-disponiveis') }}
                containerStyle="w-80 mb-8 bg-gray-200"
                buttonStyle="flex-row w-70 p-8"
                imageStyle="h-16 w-16 bg-gray-200"
            />
        </SafeAreaView>
    )
}