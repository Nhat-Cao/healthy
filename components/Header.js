'use client';
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { HamburgerIcon, CloseIcon, RibbonIcon, RecordIcon, InfoIcon } from './Icon';
import DropdownMenu from './DropdownMenu';
import NotificationIndicator from './NotificationIndicator';

export default function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  // close on outside click
  useEffect(() => {
    function onDoc(e) {
      if (!menuRef.current || !btnRef.current) return;
      if (menuRef.current.contains(e.target) || btnRef.current.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <header className="bg-[#414141] text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 relative">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-2xl font-bold text-orange-400"><img src='/asset/image/logo.png' atl="logo"/></Link>
          
        </div>

        <div className="flex items-center gap-6 relative">
          <div className="hidden md:flex space-x-6 text-sm text-gray-200">
            <Link href="/my-record" className="hover:underline flex items-center gap-3">
              <RecordIcon />
              <span>自分の記録</span>
            </Link>
            <Link href="#" className="hover:underline flex items-center gap-3">
              <RibbonIcon />
              <span>チャレンジ</span>
            </Link>
            <Link href="#" className="hover:underline flex items-center gap-3 relative">
              <InfoIcon />
              <span>お知らせ</span>
              <NotificationIndicator />
            </Link>
          </div>
          {/* Desktop: icon shows dropdown on click, aligned right under button */}
          <button
            ref={btnRef}
            onClick={() => setOpen(v => !v)}
            className="hidden md:inline-flex cursor-pointer pl-20"
            aria-label="menu"
          >
            <span className="text-lg pointer-events-none">
              {open ? <CloseIcon /> : <HamburgerIcon />}
            </span>
          </button>

          {/* Dropdown menu anchored to right of button */}
          {open && <DropdownMenu menuRef={menuRef} />}
        </div>
      </div>
    </header>
  )
}
