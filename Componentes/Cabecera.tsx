import { View, Text, StyleSheet, Image } from "react-native";

export const Cabecera = () => {
    return (
        <View style={estilos.contenedor}>
            <Image
                source={require('../assets/cocinero.png')}
                style={estilos.imagen}
            />
            <Text style={estilos.titulo}>Recetas</Text>
            <Text style={estilos.descripcion}>
                La aplicación permite a los usuarios agregar nuevas recetas,
                ver la lista de recetas disponibles, ver los detalles de una
                receta específica y eliminar recetas existentes.
            </Text>
            
        </View>
    );
};

const estilos = StyleSheet.create({
    contenedor: { padding: 15, alignItems: 'center' },
    titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
    descripcion: { textAlign: 'center', color: '#444', marginBottom: 8 },
    dueno: { fontSize: 12, color: '#888' },
    imagen: { width: 100, height: 100, marginBottom: 8 },
});
