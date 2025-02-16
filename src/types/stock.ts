export interface StockMovement {
  id: string;
  semillaId: string;
  tipo: 'entrada' | 'salida' | 'perdida' | 'ajuste';
  cantidad: number;
  motivo: string;
  fecha: string;
  usuario: string;
}

export interface StockSummary {
  disponible: number;
  reservado: number;
  enTransito: number;
  perdidas: number;
}

export interface LoteSemilla {
  id: string;
  semillaId: string;
  numero: string;
  cantidad: number;
  fechaIngreso: Date;
  fechaCaducidad: Date;
  proveedor: string;
  certificacion?: string;
}
