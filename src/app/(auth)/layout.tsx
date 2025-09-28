"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
  { href: '/forget-password', label: 'Forgot Password' },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
    }) {
    const pathname = usePathname();
  return (
    <div>
      <nav>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                return (
                    <Link
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                        key={link.href}
                        href={link.href}
                        style={{ marginRight: 15 }}>
                    {link.label}
                  </Link>
                );
              })}
      </nav>
      {children}
    </div>
  );
}
