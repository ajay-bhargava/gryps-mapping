import FlickeringGrid from '@ui/components/ui/flickering-grid';
import type React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
