import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Zyvane | Our Mission & Team',
  description: 'Learn about Zyvane Technologies, our mission to engineer intelligence and deliver scalable custom software solutions for modern enterprises.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
