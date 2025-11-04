import Link from 'next/link';

export default function MenuItem({ href, children }) {
  const commonClasses = "block px-4 py-2 text-sm hover:bg-gray-50";
  
  if (href === '#') {
    return (
      <li>
        <a href="#" className={commonClasses}>{children}</a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className={commonClasses}>{children}</Link>
    </li>
  );
}