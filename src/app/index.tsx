import { Link, router } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Header from "./components/Header";
import CustomButton from "./components/Button";

export default function Page() {
  return (
    <View className="flex-1 items-center top-36 h-screen">
      <Link className="relative" href={"/(screens)/processos/processos-disponiveis"}>IR PARA PROCESSOS</Link>
    </View>
  );
}
