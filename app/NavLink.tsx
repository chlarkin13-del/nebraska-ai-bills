"use client";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="nav-link text-xs sm:text-sm font-medium px-2 sm:px-3 py-1.5 rounded-md transition-colors"
      style={{ color: "#3B7CB8" }}
    >
      {children}
    </a>
  );
}
