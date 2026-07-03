import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Engineering & LLM Integration Services',
  description: 'Custom AI software development, machine learning engineering, and LLM integration for enterprise automation.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
