import Header from '@/app/components/Header';
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack >
      <Stack.Screen name='acompanhe-inscricoes' options={{ title: "Acompanhe sua Inscrição", headerTitle: () => <Header title='Acompanhe sua Inscrição' /> }} />
      <Stack.Screen name='enviar-doc' options={{ title: "Enviar Documentação", headerTitle: () => <Header title='Envie sua Documentação' /> }} />
    </Stack>
  );
}
