import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevOps & Cloud Infrastructure Services',
  description: 'Secure, scalable cloud deployments, CI/CD pipelines, and Kubernetes orchestration by Zyvane Technologies.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
