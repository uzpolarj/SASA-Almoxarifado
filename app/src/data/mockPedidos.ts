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
    codigo: 'S-100',
    descricao: 'Soro Fisiológico 0.9% 500ml',
    qtdSolicitada: 12,
    unidade: 'Frasco',
    lotesSistema: [
      { lote: 'L2026-01', qtd: 8 },
      { lote: 'L2026-02', qtd: 4 },
    ],
  },
  {
    id: '2',
    codigo: 'D-200',
    descricao: 'Dipirona Sódica 500mg/ml',
    qtdSolicitada: 5,
    unidade: 'Ampola',
    lotesSistema: [
      { lote: 'L2026-03', qtd: 5 },
    ],
  },
  {
    id: '3',
    codigo: 'O-300',
    descricao: 'Oxigênio Medicinal (Cilindro)',
    qtdSolicitada: 2,
    unidade: 'Unid',
    lotesSistema: [
      { lote: 'OX-99', qtd: 2 },
    ],
  },
];
