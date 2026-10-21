export interface ItemPedido {
  id: string;
  codigo: string;
  descricao: string;
  qtdSolicitada: number;
  unidade: string;
  lotesSistema: {
    lote: string;
    qtd: number;
  }[];
}

export const mockPedidos: ItemPedido[] = [
  {
    id: '1',
    codigo: '12345',
    descricao: 'Soro Fisiológico 0.9% 500ml',
    qtdSolicitada: 10,
    unidade: 'Frasco',
    lotesSistema: [
      { lote: 'LOT123', qtd: 6 },
      { lote: 'LOT456', qtd: 4 },
    ],
  },
  {
    id: '2',
    codigo: '67890',
    descricao: 'Dipirona Sódica 500mg/ml',
    qtdSolicitada: 5,
    unidade: 'Ampola',
    lotesSistema: [
      { lote: 'LOT789', qtd: 5 },
    ],
  },
];
