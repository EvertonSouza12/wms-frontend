import { Product, WarehouseLocation, InventoryItem } from '../../types/wms';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    sku: 'SKU-1001',
    name: 'Caixa de Papelão P (30x30x30)',
    barcode: '7891234567890',
    category: 'Embalagens',
    unit: 'CX',
    minStock: 50,
  },
  {
    id: 'p2',
    sku: 'SKU-1002',
    name: 'Fita Adesiva Industrial 50m',
    barcode: '7899876543210',
    category: 'Insumos',
    unit: 'UN',
    minStock: 20,
  },
];

export const mockLocations: WarehouseLocation[] = [
  { id: 'l1', code: 'A-01-01-1', aisle: 'A', rack: '01', level: '01', position: '1', type: 'STORAGE', isOccupied: true },
  { id: 'l2', code: 'A-01-01-2', aisle: 'A', rack: '01', level: '01', position: '2', type: 'STORAGE', isOccupied: false },
  { id: 'l3', code: 'REC-01', aisle: 'REC', rack: '00', level: '00', position: '1', type: 'RECEIVING', isOccupied: true },
];

export const mockInventory: InventoryItem[] = [
  {
    id: 'inv1',
    productId: 'p1',
    product: mockProducts,
    locationId: 'l1',
    location: mockLocations,
    quantity: 120,
    lotNumber: 'LOTE-2026-08',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'inv2',
    productId: 'p2',
    product: mockProducts[3],
    locationId: 'l3',
    location: mockLocations[4],
    quantity: 15,
    lotNumber: 'LOTE-2026-09',
    updatedAt: new Date().toISOString(),
  },
];