import { View, Text, Button, StyleSheet } from "react-native";
import { useReceta } from "../Providers/ProviderReceta";

export const DetalleReceta = () => {
    const { recetaSeleccionada, eliminarReceta, limpiarSeleccion } = useReceta();

    if (!recetaSeleccionada) {
        return null;
    }

    return (
        <View style={estilos.contenedor}>
            <Text style={estilos.titulo}>Detalle de la receta</Text>
            <Text style={estilos.campo}>Nro Receta: {recetaSeleccionada.id}</Text>
            <Text style={estilos.campo}>Nombre: {recetaSeleccionada.nombre}</Text>
            <Text style={estilos.campo}>Ingrediente 1: {recetaSeleccionada.ingrediente1}</Text>
            <Text style={estilos.campo}>Ingrediente 2: {recetaSeleccionada.ingrediente2}</Text>
            <Text style={estilos.campo}>Ingrediente 3: {recetaSeleccionada.ingrediente3}</Text>
            <Text style={estilos.campo}>Ingrediente 4: {recetaSeleccionada.ingrediente4}</Text>
            <Text style={estilos.campo}>Ingrediente 5: {recetaSeleccionada.ingrediente5}</Text>
            <Text style={estilos.campo}>Fecha: {recetaSeleccionada.fecha}</Text>

            <View style={estilos.botones}>
                <Button title="Volver" onPress={limpiarSeleccion} />
                <Button
                    title="Eliminar"
                    color="#c0392b"
                    onPress={() => eliminarReceta(recetaSeleccionada.id)}
                />
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    contenedor: { padding: 15, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, margin: 10 },
    titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
    campo: { marginBottom: 4 },
    botones: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
});
