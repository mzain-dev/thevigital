"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageSquare, Loader2 } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';
import { appendLeadDataToFormData } from '@/lib/lead-tracking';
import { SERVICES_SUMMARY } from '@/lib/constants';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Contact Form already uses new FormData(e.currentTarget)
    // No need to JSON stringify it since the API route now expects FormData
    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`.trim(),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };
    
    // Override name to be the combined explicitly
    formData.set('name', data.name);
    
    // Append lead tracking data
    appendLeadDataToFormData(formData, 'Contact Page Form');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        let errorMessage = 'Failed to send message.';
        try {
          const errorData = await response.json();
          if (errorData.error) errorMessage = errorData.error;
        } catch (e) {
          // Fallback if not JSON
        }
        throw new Error(errorMessage);
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        {success ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
            <h3 className="font-semibold">Message sent successfully!</h3>
            <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
            <Button variant="outline" className="mt-4" onClick={() => setSuccess(false)}>
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-800 p-3 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" required placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" required placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required placeholder="john@company.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" placeholder="Your Company Name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service">Service Interest</Label>
              <select 
                id="service" 
                name="service"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a service</option>
                {SERVICES_SUMMARY.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="message"
                placeholder="Tell us about your business goals and how we can help..."
                rows={5}
              />
            </div>
            
            <div className="pt-2">
              <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />
            </div>
            
            <Button size="lg" className="w-full py-6 bg-primary hover:bg-[#4411ab] group" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <MessageSquare className="w-4 h-4 mr-2" />
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
