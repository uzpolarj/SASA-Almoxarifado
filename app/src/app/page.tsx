import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">SASA</h1>
        <p className="text-slate-600 mb-8 text-lg">
          Sistema de Apoio à Separação de Almoxarifado
        </p>
        
        <div className="grid grid-cols-1 gap-4">
          <button className="w-full py-4 px-6 bg-blue-600 text-white rounded-2xl font-semibold text-lg shadow-md active:scale-95 transition-transform">
            📦 Iniciar Separação
          </button>
          <button className="w-full py-4 px-6 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-semibold text-lg active:scale-95 transition-transform">
            ✅ Realizar Conferência
          </button>
          <button className="w-full py-4 px-6 bg-slate-100 text-slate-600 rounded-2xl font-semibold text-lg active:scale-95 transition-transform">
            📊 Relatório de Divergências
          </button>
        </div>
      </div>
      <p className="mt-8 text-slate-400 text-sm">Versão MVP 0.1 - Mobile First</p>
    </main>
  );
}
