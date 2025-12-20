"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, User, FileText, Upload, Calendar, Clock, CheckCircle } from 'lucide-react';

import { SERVICES_SUMMARY, TIME_SLOTS } from '@/lib/constants';

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  description: z.string().min(10, "Please provide more details"),
});

type FormData = z.infer<typeof formSchema>;

interface ScheduleCallPopupProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedService?: string;
}

export function ScheduleCallPopup({ isOpen, onOpenChange, preSelectedService = '' }: ScheduleCallPopupProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
    watch
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: preSelectedService,
      date: '',
      time: '',
      description: '',
    }
  });

  // Update service field when preSelectedService prop changes
  useEffect(() => {
    if (preSelectedService) {
      setValue('service', preSelectedService);
    }
  }, [preSelectedService, setValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form Data:', data);
    console.log('File:', file);
    setIsSubmitted(true);
  };

  const closeModal = () => {
    onOpenChange(false);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      setFile(null);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[95vh] overflow-y-auto mx-auto p-0 sm:p-6 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <DialogHeader className="px-3 sm:px-6 pt-4 sm:pt-0">
          <DialogTitle className="text-lg sm:text-2xl font-bold text-center">
            Schedule Your Free Consultation
          </DialogTitle>
          <DialogDescription className="text-center text-xs sm:text-base mt-1">
            Fill out the form below and we&apos;ll get back to you within 24 hours
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-4 sm:py-8 px-3 sm:px-6">
            <div className="flex justify-center mb-3 sm:mb-4">
              <CheckCircle className="w-10 h-10 sm:w-16 sm:h-16 text-green-500" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-2">Consultation Booked!</h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-base">
              Thank you for scheduling your consultation. We&apos;ll contact you within 24 hours to confirm your appointment.
            </p>
            <Button onClick={closeModal} className="w-full text-sm sm:text-base">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 px-3 sm:px-6 pb-4 sm:pb-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                  <User className="w-3 h-3 sm:w-4 sm:h-4" />
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  {...register('fullName')}
                  className={`h-9 sm:h-10 text-sm sm:text-base ${errors.fullName ? 'border-red-500' : ''}`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500">{errors.fullName.message}</p>
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
                  {...register('email')}
                  className={`h-9 sm:h-10 text-sm sm:text-base ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
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
                {...register('phone')}
                className={`h-9 sm:h-10 text-sm sm:text-base ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* Service Selection */}
            <div className="space-y-1 sm:space-y-2">
              <Label className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                Service Interested In *
              </Label>
              <Select
                value={watch('service')}
                onValueChange={(value) => setValue('service', value, { shouldValidate: true })}
              >
                <SelectTrigger className={`h-9 sm:h-10 text-sm sm:text-base ${errors.service ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES_SUMMARY.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-xs text-red-500">{errors.service.message}</p>
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
                  {...register('date')}
                  className={`h-9 sm:h-10 text-sm sm:text-base ${errors.date ? 'border-red-500' : ''}`}
                />
                {errors.date && (
                  <p className="text-xs text-red-500">{errors.date.message}</p>
                )}
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  Preferred Time *
                </Label>
                <Select
                  value={watch('time')}
                  onValueChange={(value) => setValue('time', value, { shouldValidate: true })}
                >
                  <SelectTrigger className={`h-9 sm:h-10 text-sm sm:text-base ${errors.time ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_SLOTS.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && (
                  <p className="text-xs text-red-500">{errors.time.message}</p>
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
                {...register('description')}
                className={`min-h-[70px] sm:min-h-[100px] text-sm sm:text-base ${errors.description ? 'border-red-500' : ''}`}
              />
              {errors.description && (
                <p className="text-xs text-red-500">{errors.description.message}</p>
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
                      {file ? 'File Selected' : 'Choose File'}
                    </span>
                    {file && <span className="ml-2 text-xs truncate">{file.name}</span>}
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
