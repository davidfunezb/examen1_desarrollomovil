import { useState } from "react";
import { View, Text, FlatList, Button, TextInput, StyleSheet, Modal } from "react-native";
import { useReceta } from "../Providers/ProviderReceta";
import { DetalleReceta } from "./DetalleReceta";

export const ListaRecetas = () => {
    const {
        recetas,
        eliminarReceta,
        buscarReceta,
        recetaSeleccionada,
        mostrarMensajeEliminado,
        cerrarMensajeEliminado,
    } = useReceta();

    const [numeroBuscado, setNumeroBuscado] = useState('');

    return (
        <View style={estilos.contenedor}>
            <Text style={estilos.titulo}>Listado de recetas</Text>

            <FlatList
                data={recetas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={estilos.fila}>
                        <Text style={estilos.celda}>Receta #{item.id}</Text>
                        <Text style={estilos.celda}>{item.nombre}</Text>
                        <Button title="Eliminar" color="#c0392b" onPress={() => eliminarReceta(item.id)} />
                    </View>
                )}
            />

            <View style={estilos.buscador}>
                <TextInput
                    style={estilos.input}
                    placeholder="Ingrese Nro. Receta"
                    value={numeroBuscado}
                    onChangeText={setNumeroBuscado}
                    keyboardType="default"
                />
                <Button title="Buscar" onPress={() => buscarReceta(numeroBuscado)} />
            </View>

            {recetaSeleccionada && <DetalleReceta />}

            <Modal visible={mostrarMensajeEliminado} transparent animationType="fade">
                <View style={estilos.fondoModal}>
                    <View style={estilos.cajaModal}>
                        <Text>Se eliminó el registro correctamente</Text>
                        <Button title="Cerrar" onPress={cerrarMensajeEliminado} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const estilos = StyleSheet.create({
    contenedor: { padding: 15 },
    titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    celda: { flexShrink: 1, marginRight: 8 },
    buscador: { marginTop: 15, marginBottom: 10 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
        marginBottom: 8,
    },
    fondoModal: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center' },
    cajaModal: { backgroundColor: 'white', padding: 20, borderRadius: 8, alignItems: 'center', gap: 10 },
});
