import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { CircleUser, Brain, Lightbulb, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-full mb-6 text-sm font-medium"
            >
              Embrace change
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Learn, build, make it real</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready to transform your approach to change? Get in touch to start your 
              journey from fixed to flow.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - Contact form */}
          <motion.div 
            className="bg-gray-900 p-8 rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6">Get in touch</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="bg-gray-800 border-gray-700 focus:border-red-500 text-white" 
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="you@example.com" 
                          className="bg-gray-800 border-gray-700 focus:border-red-500 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="text-gray-300">How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project or question..." 
                          className="min-h-[120px] bg-gray-800 border-gray-700 focus:border-red-500 text-white" 
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full py-6 bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Right column - What you'll learn */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-6">Beyond Business</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-amber-50 text-gray-800 p-4 rounded-lg border-0">
                  <h4 className="font-bold mb-2">Fixed to Flow Newsletter</h4>
                  <p className="text-sm">Thoughts and practices for living through change with intention</p>
                </Card>

                <Card className="bg-amber-50 text-gray-800 p-4 rounded-lg border-0">
                  <h4 className="font-bold mb-2">Reinvention Stories</h4>
                  <p className="text-sm">Real-life stories of transformation, resilience, and reinvention.</p>
                </Card>

                <Card className="bg-amber-50 text-gray-800 p-4 rounded-lg border-0">
                  <h4 className="font-bold mb-2">Cozy Sessions</h4>
                  <p className="text-sm">Small, intimate, dinners to discuss big topics.</p>
                </Card>

                <Card className="bg-amber-50 text-gray-800 p-4 rounded-lg border-0">
                  <h4 className="font-bold mb-2">Stress Resilience</h4>
                  <p className="text-sm">Build strategies to thrive under pressure and uncertainty</p>
                </Card>
              </div>
            </motion.div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;