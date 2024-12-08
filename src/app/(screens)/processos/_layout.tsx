import Header from '@/app/components/Header';
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack >
      <Stack.Screen name='processos-disponiveis' options={{ title: "Processos Disponíveis", headerTitle:()=> <Header title='Processos Seletivos Disponíveis'/> }} />
      <Stack.Screen name='processo-seletivo' options={{ title: "Processo Seletivo", headerTitle:()=> <Header title='Processo Seletivo'/> }} />
    </Stack>
  );
}
