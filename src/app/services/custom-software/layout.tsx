import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bespoke Custom Software Development Services',
  description: 'End-to-end custom software development, modern web apps, and highly scalable cloud architectures.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
