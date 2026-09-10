export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Visão Geral do Armazém</h1>
        <p className="text-slate-500 text-sm">Acompanhe os indicadores operacionais em tempo real.</p>
      </div>

      {/* Cards de Métricas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-slate-500 text-xs font-semibold uppercase">Total de Itens</span>
          <p className="text-2xl font-bold text-slate-800 mt-1">1,420</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-slate-500 text-xs font-semibold uppercase">Ocupação das Posições</span>
          <p className="text-2xl font-bold text-blue-600 mt-1">78%</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-slate-500 text-xs font-semibold uppercase">Pendentes de Recebimento</span>
          <p className="text-2xl font-bold text-amber-600 mt-1">5 Lotes</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-slate-500 text-xs font-semibold uppercase">Alertas de Estoque Baixo</span>
          <p className="text-2xl font-bold text-red-600 mt-1">2 SKUs</p>
        </div>
      </div>
    </div>
  );
}