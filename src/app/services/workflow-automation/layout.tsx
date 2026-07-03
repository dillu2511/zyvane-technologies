import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workflow Automation & Robotic Process Automation',
  description: 'Automate repetitive tasks, integrate third-party APIs, and build internal tools to save thousands of hours.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
