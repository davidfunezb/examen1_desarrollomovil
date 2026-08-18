import { useState, useContext } from "react";
import { ContextReceta } from "../Contextos/ContextReceta";
import { Receta } from "../modelos/Receta";
import { ViewReact } from "../modelos/ViewReact";

export const ProviderReceta = ({ children }: ViewReact) => {

    const [recetas, setRecetas] = useState<Receta[]>([
        {
    id: '1',
    nombre: 'Sopa de frijoles',
    ingrediente1: 'frijoles',
    ingrediente2: 'cebolla',
    ingrediente3: 'cilantro',
    ingrediente4: 'sal',
    ingrediente5: 'agua',
    fecha: '10/08/2026',
},
    ]);

    const [recetaSeleccionada, setRecetaSeleccionada] = useState<Receta | null>(null);
    const [mostrarMensajeEliminado, setMostrarMensajeEliminado] = useState(false);

    const agregarReceta = (receta: Receta) => {
        setRecetas(prev => [...prev, receta]);
    };

    const eliminarReceta = (id: string) => {
        setRecetas(prev => prev.filter(r => r.id !== id));
        if (recetaSeleccionada?.id === id) {
            setRecetaSeleccionada(null);
        }
        setMostrarMensajeEliminado(true);
    };

    const buscarReceta = (id: string) => {
        const encontrada = recetas.find(r => r.id === id);
        setRecetaSeleccionada(encontrada ?? null);
    };

    const limpiarSeleccion = () => {
        setRecetaSeleccionada(null);
    };

    const cerrarMensajeEliminado = () => {
        setMostrarMensajeEliminado(false);
    };

    return (
        <ContextReceta.Provider value={{
            recetas,
            agregarReceta,
            eliminarReceta,
            recetaSeleccionada,
            buscarReceta,
            limpiarSeleccion,
            mostrarMensajeEliminado,
            cerrarMensajeEliminado,
        }}>
            {children}
        </ContextReceta.Provider>
    );
};

export const useReceta = () => useContext(ContextReceta);
