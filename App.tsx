import { useState } from "react";
import { View, Button, StyleSheet, ScrollView } from "react-native";
import { ProviderReceta } from "./Providers/ProviderReceta";
import { Cabecera } from "./Componentes/Cabecera";
import { FormularioReceta } from "./Componentes/FormularioReceta";
import { ListaRecetas } from "./Componentes/ListaRecetas";

export default function App() {
    const [vista, setVista] = useState<'agregar' | 'listar'>('listar');

    return (
        <ProviderReceta>
            <ScrollView contentContainerStyle={estilos.contenedor}>
                <Cabecera />

                <View style={estilos.tabs}>
                    <Button title="Agregar Receta" onPress={() => setVista('agregar')} />
                    <Button title="Listar Recetas" onPress={() => setVista('listar')} />
                </View>

                {vista === 'agregar' ? <FormularioReceta /> : <ListaRecetas />}
            </ScrollView>
        </ProviderReceta>
    );
}

const estilos = StyleSheet.create({
    contenedor: { flexGrow: 1, paddingBottom: 40, backgroundColor: '#fff' },
    tabs: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
});
