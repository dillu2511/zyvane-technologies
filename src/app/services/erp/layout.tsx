import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Resource Planning (ERP) Solutions',
  description: 'Custom ERP software development to streamline your business operations and automate core workflows.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
