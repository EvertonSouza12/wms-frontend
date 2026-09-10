export function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      {/* Campo de Busca Rápida / Bipagem */}
      <div className="flex items-center gap-2 w-96">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Bipar ou buscar por SKU, Lote ou Endereço..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800"
          />
          <span className="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
        </div>
      </div>

      {/* Perfil e Alertas */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
          🔔
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            OP
          </div>
          <div className="text-xs">
            <p className="font-semibold text-slate-800">Operador Armazém</p>

          </div>
        </div>
      </div>
    </header>
  );
}