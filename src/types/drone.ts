interface Drone {
  id: string;
  nombre: string;
  estado: string;
  bateria: number;
  semillasRestantes: number;
  capacidadSemillas: number;
  ubicacion: { lat: number; lng: number };
  misionActual?: {
    tipo: string;
    progreso: number;
  };
}
