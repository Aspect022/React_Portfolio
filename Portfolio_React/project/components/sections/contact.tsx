"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { MailIcon, PhoneIcon, MapPinIcon, Loader2 } from "lucide-react";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name:    data.name,
        email:   data.email,
        subject: data.subject,
        message: data.message,
      },
      PUBLIC_KEY
    );

    console.log('Email sent:', result.text);
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out — I'll get back to you soon.",
    });
    form.reset();
  } catch (err) {
    console.error('Send error:', err);
    toast({
      title: 'Oops!',
      description: 'Something went wrong. Please try again later.',
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="container px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you!
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-5">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p className="mt-2 text-muted-foreground">
              Feel free to reach out through any of these channels or use the contact form.
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <MailIcon className="mr-4 h-5 w-5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">jayeshrl2005@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <PhoneIcon className="mr-4 h-5 w-5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 9449945462</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPinIcon className="mr-4 h-5 w-5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Bangalore,Karnataka,India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium">Availability</h4>
              <p className="mt-1 text-muted-foreground">
                I'm currently available for freelance work and open to discussing
                full-time opportunities. My typical response time is within 24-48 hours.
              </p>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jayesh RL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jayeshrl2005@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Inquiry" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Hello! I'm interested in discussing a potential project..."
                          className="min-h-32 resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                
                <FormDescription className="text-center text-sm">
                  Your information will never be shared with any third party.
                </FormDescription>
              </form>
            </Form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}