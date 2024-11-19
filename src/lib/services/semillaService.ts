import { Semilla } from '@/types/semillas';

export const semillaService = {
  async getSemillas(): Promise<Semilla[]> {
    // Simular llamada a API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            nombre: 'Cedro rojo',
            especie: 'Cedrela odorata',
            nombreComun: 'Cedro',
            stock: 1500,
            tasaGerminacion: 85,
            tiempoGerminacion: 15,
            profundidadSiembra: 2,
            espaciamiento: 3,
            temporadaSiembra: ['Octubre', 'Noviembre', 'Diciembre'],
            condicionesOptimas: {
              temperatura: { min: 20, max: 30 },
              humedad: { min: 60, max: 80 },
              tipoSuelo: ['Franco arenoso', 'Franco arcilloso']
            }
          },
          // Más semillas...
        ]);
      }, 1000);
    });
  },

  async getSemilla(id: string): Promise<Semilla> {
    // Simular llamada a API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          nombre: 'Cedro rojo',
          especie: 'Cedrela odorata',
          nombreComun: 'Cedro',
          stock: 1500,
          tasaGerminacion: 85,
          tiempoGerminacion: 15,
          profundidadSiembra: 2,
          espaciamiento: 3,
          temporadaSiembra: ['Octubre', 'Noviembre', 'Diciembre'],
          condicionesOptimas: {
            temperatura: { min: 20, max: 30 },
            humedad: { min: 60, max: 80 },
            tipoSuelo: ['Franco arenoso', 'Franco arcilloso']
          }
        });
      }, 500);
    });
  },

  async createSemilla(data: Partial<Semilla>): Promise<Semilla> {
    // Simular llamada a API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Math.random().toString(36).substr(2, 9),
          ...data,
        } as Semilla);
      }, 500);
    });
  },

  async updateSemilla(id: string, data: Partial<Semilla>): Promise<Semilla> {
    // Simular llamada a API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          ...data,
        } as Semilla);
      }, 500);
    });
  },

  async deleteSemilla(id: string): Promise<void> {
    // Simular llamada a API
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }
};
