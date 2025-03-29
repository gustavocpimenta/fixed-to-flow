import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";

import { Button } from "@/components/ui/button";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactAndBeyond = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left side - Contact Form */}
            <div className="lg:w-2/5 flex-shrink-0">
              <motion.div
                className="bg-slate-900 text-white p-8 md:p-10 rounded-xl shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <Badge className="bg-orange-600 hover:bg-orange-600 px-4 py-1 text-sm rounded-full mb-4">
                    Spread the boundary love
                  </Badge>
                  <h2 className="text-3xl font-bold mb-3">Get in touch</h2>
                  <p className="text-gray-300 mb-6">
                    Ready to transform your approach to change? Get in touch to start your journey from fixed to flow.
                  </p>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="text-left">
                          <FormLabel className="text-gray-300">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500"
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
                              placeholder="your.email@example.com" 
                              {...field} 
                              className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500"
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
                              className="min-h-[120px] bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500" 
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full px-6 py-5 mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-colors shadow-lg rounded-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </div>
            
            {/* Right side - Beyond Business */}
            <div className="lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className="mb-8">
                  <Badge className="bg-orange-600 hover:bg-orange-600 px-4 py-1 text-sm rounded-full mb-4">
                    2
                  </Badge>
                  <h2 className="text-3xl font-bold mb-3">What you'll learn and practice</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-cream-100 border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold">Adaptability Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Learn techniques to quickly adjust to new situations and environments</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-cream-100 border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold">Change Leadership</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Guide others through transitions with confidence and clarity</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-cream-100 border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold">Growth Mindset</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Develop a positive approach to challenges and obstacles</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-cream-100 border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold">Stress Resilience</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Build strategies to thrive under pressure and uncertainty</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8 bg-slate-900 text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Ready to transform?</h3>
                  <p className="text-gray-300 mb-6">Our programs have helped hundreds of professionals and teams thrive in changing environments.</p>
                  
                  <div className="flex flex-wrap gap-8 justify-between">
                    <div>
                      <p className="text-3xl text-orange-500 font-bold">93%</p>
                      <p className="text-sm text-gray-300">Success rate</p>
                    </div>
                    <div>
                      <p className="text-3xl text-orange-500 font-bold">2.8x</p>
                      <p className="text-sm text-gray-300">ROI increase</p>
                    </div>
                    <div>
                      <p className="text-3xl text-orange-500 font-bold">5wk</p>
                      <p className="text-sm text-gray-300">Average timeline</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndBeyond;