import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Zyvane | Hire Custom Software Developers',
  description: 'Get in touch with Zyvane Technologies to discuss your next custom software, AI, or enterprise tech project.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
