"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, User, FileText, Upload, Calendar, Clock, CheckCircle } from 'lucide-react';

interface ScheduleCallPopupProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedService?: string;
}

export function ScheduleCallPopup({ isOpen, onOpenChange, preSelectedService = '' }: ScheduleCallPopupProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: preSelectedService,
    date: '',
    time: '',
    description: '',
    file: null as File | null
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update service field when preSelectedService prop changes
  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  // Service options for the form
  const serviceOptions = [
    { value: 'performance-marketing', label: 'Performance Marketing' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'seo-optimization', label: 'SEO That Matters' },
    { value: 'crm-automation', label: 'CRM & Marketing Automation' },
    { value: 'graphic-design', label: 'Graphic Design / Branding' },
    { value: 'ai-agents', label: 'AI Agents for Business' },
    { value: 'other', label: 'Other' }
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  // Form handling functions
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    if (!formData.description.trim()) newErrors.description = 'Project description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const closeModal = () => {
    onOpenChange(false);
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: preSelectedService,
      date: '',
      time: '',
      description: '',
      file: null
    });
    setErrors({});
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[95vh] overflow-y-auto mx-auto p-0 sm:p-6 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <DialogHeader className="px-3 sm:px-6 pt-4 sm:pt-0">
          <DialogTitle className="text-lg sm:text-2xl font-bold text-center">
            Schedule Your Free Consultation
          </DialogTitle>
          <DialogDescription className="text-center text-xs sm:text-base mt-1">
            Fill out the form below and we'll get back to you within 24 hours
          </DialogDescription>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="text-center py-4 sm:py-8 px-3 sm:px-6">
            <div className="flex justify-center mb-3 sm:mb-4">
              <CheckCircle className="w-10 h-10 sm:w-16 sm:h-16 text-green-500" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-2">Consultation Booked!</h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-base">
              Thank you for scheduling your consultation. We'll contact you within 24 hours to confirm your appointment.
            </p>
            <Button onClick={closeModal} className="w-full text-sm sm:text-base">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 px-3 sm:px-6 pb-4 sm:pb-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                  <User className="w-3 h-3 sm:w-4 sm:h-4" />
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`h-9 sm:h-10 text-sm sm:text-base ${errors.fullName ? 'border-red-500' : ''}`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="email" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`h-9 sm:h-10 text-sm sm:text-base ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`h-9 sm:h-10 text-sm sm:text-base ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Service Selection */}
            <div className="space-y-1 sm:space-y-2">
              <Label className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                Service Interested In *
              </Label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleInputChange('service', value)}
              >
                <SelectTrigger className={`h-9 sm:h-10 text-sm sm:text-base ${errors.service ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-xs text-red-500">{errors.service}</p>
              )}
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="date" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  Preferred Date *
                </Label>
                <Input
                  id="date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className={`h-9 sm:h-10 text-sm sm:text-base ${errors.date ? 'border-red-500' : ''}`}
                />
                {errors.date && (
                  <p className="text-xs text-red-500">{errors.date}</p>
                )}
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  Preferred Time *
                </Label>
                <Select
                  value={formData.time}
                  onValueChange={(value) => handleInputChange('time', value)}
                >
                  <SelectTrigger className={`h-9 sm:h-10 text-sm sm:text-base ${errors.time ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && (
                  <p className="text-xs text-red-500">{errors.time}</p>
                )}
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="description" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                Project Description *
              </Label>
              <Textarea
                id="description"
                placeholder="Tell us about your project, goals, and any specific requirements..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className={`min-h-[70px] sm:min-h-[100px] text-sm sm:text-base ${errors.description ? 'border-red-500' : ''}`}
              />
              {errors.description && (
                <p className="text-xs text-red-500">{errors.description}</p>
              )}
            </div>

            {/* File Upload */}
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="file" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
                Upload Files (Optional)
              </Label>
              <div className="relative">
                <div className="relative">
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex items-center h-8 sm:h-10 w-full rounded-md border border-input bg-background px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary text-primary-foreground rounded text-xs font-normal hover:bg-primary/90 transition-colors duration-200">
                      Choose File
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG (Max 10MB)
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 sm:py-4 px-3 sm:px-6 text-sm sm:text-lg font-bold bg-primary hover:bg-[#4411ab] shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 sm:h-5 sm:w-5 border-b-2 border-white mr-1.5 sm:mr-3"></div>
                  <span className="text-xs sm:text-base">Booking Your Consultation...</span>
                </>
              ) : (
                'Book My Consultation'
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
