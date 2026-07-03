import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HIPAA Compliant Healthcare Software Development',
  description: 'Secure, HIPAA-compliant healthcare tech, EHR integrations, and telemedicine platform development.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
