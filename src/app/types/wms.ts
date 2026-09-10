// 1. Produto / Item do Catálogo
export interface Product {
  id: string;
  sku: string;          // Código único de controle (ex: "PROD-1001")
  name: string;
  description?: string;
  barcode: string;      // Código de barras para bipagem
  category: string;
  unit: 'UN' | 'CX' | 'KG' | 'PALLET';
  minStock: number;     // Alerta de estoque mínimo
}

// 2. Localização Física no Armazém (Endereço)
export interface WarehouseLocation {
  id: string;
  code: string;         // Endereço completo (ex: "A-02-03-1")
  aisle: string;        // Rua (ex: "A")
  rack: string;         // Prateleira/Estante (ex: "02")
  level: string;        // Nível/Altura (ex: "03")
  position: string;     // Posição (ex: "1")
  type: 'PICKING' | 'STORAGE' | 'RECEIVING' | 'SHIPPING';
  isOccupied: boolean;
}

// 3. Item em Estoque (Produto + Localização + Lote/Quantidade)
export interface InventoryItem {
  id: string;
  productId: string;
  product?: Product;
  locationId: string;
  location?: WarehouseLocation;
  quantity: number;
  lotNumber: string;    // Número do Lote
  expirationDate?: string;
  updatedAt: Date;
}

// 4. Movimentação de Estoque
export type MovementType = 'INBOUND' | 'OUTBOUND' | 'TRANSFER';

export interface StockMovement {
  id: string;
  productId: string;
  sourceLocationId?: string; // Nulo se for Entrada (Inbound)
  targetLocationId?: string; // Nulo se for Saída (Outbound)
  quantity: number;
  type: MovementType;
  performedBy: string;
  createdAt: Date;
}