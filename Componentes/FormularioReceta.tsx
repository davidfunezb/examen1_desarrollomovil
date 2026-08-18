import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useReceta } from "../Providers/ProviderReceta";
import { Receta } from "../modelos/Receta";

export const FormularioReceta = () => {
    const [nombre, setNombre] = useState('');
    const [ingrediente1, setIngrediente1] = useState('');
    const [ingrediente2, setIngrediente2] = useState('');
    const [ingrediente3, setIngrediente3] = useState('');
    const [ingrediente4, setIngrediente4] = useState('');
    const [ingrediente5, setIngrediente5] = useState('');
    const [fecha, setFecha] = useState('');







    const { recetas, agregarReceta } = useReceta();

    const manejarAgregar = () => {
        if (nombre.trim() === '') {
            return;
        }

        const maximoId = recetas.reduce((max, r) => Math.max(max, parseInt(r.id) || 0), 0);

        const nuevaReceta: Receta = {
            id: (maximoId + 1).toString(),
            nombre: nombre,
            ingrediente1: ingrediente1,
            ingrediente2: ingrediente2,
            ingrediente3: ingrediente3,
            ingrediente4: ingrediente4,
            ingrediente5: ingrediente5,
            fecha: fecha
        };

        agregarReceta(nuevaReceta);

        setNombre('');
        setIngrediente1('');
        setIngrediente2('');
        setIngrediente3('');
        setIngrediente4('');
        setIngrediente5('');
        setFecha('');
    };

    return (
        <View style={estilos.contenedor}>
            <TextInput
                style={estilos.input}
                placeholder="Nombre Receta"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={estilos.input}
                placeholder="Ingrediente 1"
    value={ingrediente1}
    onChangeText={setIngrediente1}
/>
<TextInput
    style={estilos.input}
    placeholder="Ingrediente 2"
    value={ingrediente2}
    onChangeText={setIngrediente2}
/>
<TextInput
    style={estilos.input}
    placeholder="Ingrediente 3"
    value={ingrediente3}
    onChangeText={setIngrediente3}
/>
<TextInput
    style={estilos.input}
    placeholder="Ingrediente 4"
    value={ingrediente4}
    onChangeText={setIngrediente4}
/>
<TextInput
    style={estilos.input}
    placeholder="Ingrediente 5"
    value={ingrediente5}
    onChangeText={setIngrediente5}
/>
  
  <TextInput
    style={estilos.input}
    placeholder="fecha"
    value={fecha}
    onChangeText={setFecha}
/>




            <Button title="Agregar" onPress={manejarAgregar} />
        </View>
    );
};

const estilos = StyleSheet.create({
    contenedor: { padding: 15 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
        marginBottom: 10,
    },
});