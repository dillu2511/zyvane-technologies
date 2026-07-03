import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Zyvane Technologies',
  description: 'Explore our past work, case studies, and successful enterprise software deployments.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
