import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - ROI Agency',
  description: 'Explore real success stories and case studies showcasing how we\'ve helped businesses achieve exceptional ROI and growth.',
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
