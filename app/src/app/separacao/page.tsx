"use client";
import React, { useState } from 'react';
import { mockPedidos } from '@/data/mockPedidos';

export default function SeparacaoPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLotes, setSelectedLotes] = useState<Record<string, number>>({});
  
  const item = mockPedidos[currentIndex];

  const handleLoteChange = (lote: string, qtd: number) => {
    setSelectedLotes(prev => ({ ...prev, [lote]: qtd }));
  };

  const validarItem = () => {
    const totalSeparado = Object.values(selectedLotes).reduce((a, b) => a + b, 0);
    if (totalSeparado !== item.qtdSolicitada) {
      alert(`Quantidade incorreta! Solicitado: ${item.qtdSolicitada}, Separado: ${totalSeparado}`);
      return;
    }
    
    const lotesUsados = Object.keys(selectedLotes);
    const lotesSistema = item.lotesSistema.map(l => l.lote);
    const temDivergencia = lotesUsados.some(l => !lotesSistema.includes(l));

    if (temDivergencia) {
      alert(`⚠️ DIVERGÊNCIA: Lote físico não consta no sistema para o item ${item.descricao}`);
    }

    if (currentIndex < mockPedidos.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedLotes({});
    } else {
      alert("Separação concluída com sucesso!");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 pb-24">
      <div className="max-w-md mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Separação</h1>
          <p className="text-slate-500">Item {currentIndex + 1} de {mockPedidos.length}</p>
          <div className="w-full bg-slate-200 h-2 rounded-full mt-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all" 
              style={{ width: `${((currentIndex + 1) / mockPedidos.length) * 100}%` }}
            ></div>
          </div>
        </header>

        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200 mb-6">
          <div className="mb-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Código: {item.codigo}</span>
            <h2 className="text-xl font-semibold text-slate-800 leading-tight">{item.descricao}</h2>
            <p className="text-slate-500">Solicitado: <span className="font-bold text-slate-700">{item.qtdSolicitada} {item.unidade}</span></p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-slate-600">Selecione os lotes físicos:</p>
            {item.lotesSistema.map((ls, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <input 
                  type="checkbox" 
                  className="w-6 h-6 rounded-full text-blue-600" 
                  onChange={(e) => handleLoteChange(ls.lote, e.target.checked ? ls.qtd : 0)}
                />
                <span className="flex-1 font-mono font-medium text-slate-700">{ls.lote}</span>
                <span className="text-slate-500">{ls.qtd} {item.unidade}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-200">
              <input 
                type="text" 
                placeholder="Outro Lote..." 
                className="flex-1 p-2 bg-transparent border-b border-amber-300 outline-none text-sm"
                onChange={(e) => handleLoteChange(e.target.value, 1)}
              />
              <span className="text-xs text-amber-600 font-bold uppercase">Divergência</span>
            </div>
          </div>
        </div>

        <button 
          onClick={validarItem}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
        >
          Confirmar Item ✅
        </button>
      </div>
    </main>
  );
}
