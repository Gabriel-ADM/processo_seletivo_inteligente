import InputFile from "@/app/components/InputPhoto";
import { SafeAreaView } from "react-native";

export default function EnviarDocumentacao(){
    
    return(
        <SafeAreaView className="flex-1 items-center">
            <InputFile></InputFile>
        </SafeAreaView >
    )
}