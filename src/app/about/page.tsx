import { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/section';

export const metadata: Metadata = {
  title: 'About Us - ROI Agency',
  description: 'Learn about ROI Agency, our mission, values, and the team behind our strategic digital solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Section>
        <SectionHeader
          preTitle="About Us"
          title="Driving Digital Success"
          subtitle="We're a team of strategic thinkers, creative problem-solvers, and data-driven professionals committed to maximizing your business ROI."
          align="left"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with data-driven insights and strategic digital solutions that deliver measurable, sustainable growth and exceptional return on investment.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading partner for businesses seeking to transform their digital presence and achieve market leadership through innovative strategies and proven methodologies.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground">Core Values</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Data-Driven Decision Making</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Client Success Focus</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Innovation & Excellence</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Transparency & Trust</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-3xl">R</span>
                </div>
                <h4 className="text-xl font-bold text-foreground">ROI Agency</h4>
                <p className="text-muted-foreground">Established 2024</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-background rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">3x</div>
                  <div className="text-sm text-muted-foreground">Average ROI Increase</div>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
