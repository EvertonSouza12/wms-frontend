'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Dashboard', href: '/', icon: '📊' },
  { name: 'Estoque / Posições', href: '/inventory', icon: '📦' },
  { name: 'Entradas', href: '/inbound', icon: '📥' },
  { name: 'Saídas', href: '/outbound', icon: '📤' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen border-r border-slate-800">
      {/* Logotipo do WMS */}
      <div className="h-16 flex items-center justify-center border-b border-slate-800 px-6">
        <span className="text-xl font-bold tracking-wider text-blue-400">
          WMS
        </span>
      </div>

      {/* Navegação Principal */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Status do Armazém */}
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 p-3 rounded-lg text-xs text-slate-400">
          <p className="font-semibold text-slate-200">Armazém Central</p>
          <p>Status: <span className="text-emerald-400 font-medium">Operacional</span></p>
        </div>
      </div>
    </aside>
  );
}
