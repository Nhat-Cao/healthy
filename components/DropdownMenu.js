import MenuItem from './MenuItem';

const menuItems = [
  { href: '/my-record', label: '自分の記録' },
  { href: '/', label: '体重グラフ' },
  { href: '#', label: '目標' },
  { href: '#', label: '選択中のコース' },
  { href: '/column', label: 'コラム一覧' },
  { href: '#', label: '設定' },
];

export default function DropdownMenu({ menuRef }) {
  return (
    <div ref={menuRef} className="absolute right-0 top-full mt-2 w-56 bg-gray-500 text-white rounded shadow-lg ring-1 ring-black ring-opacity-5 z-50">
      <ul className="divide-y divide-gray-600">
        {menuItems.map((item) => (
          <MenuItem key={item.label} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  );
}