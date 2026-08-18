import { createContext } from "react";
import { Receta } from "../modelos/Receta";

export const ContextReceta = createContext({
    recetas: [] as Receta[],
    agregarReceta: (receta: Receta) => { },
    eliminarReceta: (id: string) => { },

    recetaSeleccionada: null as Receta | null,
    buscarReceta: (id: string) => { },
    limpiarSeleccion: () => { },

    mostrarMensajeEliminado: false,
    cerrarMensajeEliminado: () => { },
});
