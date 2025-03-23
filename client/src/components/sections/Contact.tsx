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
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/80 text-white text-sm font-medium mb-4">Spread the boundary love</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Learn, build, make it real</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your approach to change? Get in touch to start your journey from fixed to flow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              className="bg-gray-900 p-8 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Get in touch
              </h3>
              
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
                            {...field} 
                            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-primary"
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
                            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-primary"
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
                            className="min-h-[120px] bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-primary" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 bg-primary hover:bg-primary/90 text-white font-semibold transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  What you'll learn and practice
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      title: "Adaptability Skills",
                      description: "Learn techniques to quickly adjust to new situations and environments"
                    },
                    {
                      title: "Change Leadership",
                      description: "Guide others through transitions with confidence and clarity"
                    },
                    {
                      title: "Growth Mindset",
                      description: "Develop a positive approach to challenges and obstacles"
                    },
                    {
                      title: "Stress Resilience",
                      description: "Build strategies to thrive under pressure and uncertainty"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-amber-50 p-5 rounded-lg text-black">
                      <h4 className="font-bold mb-2 text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Ready to transform?</h3>
                <p className="text-gray-400 mb-6">Our programs have helped hundreds of professionals and teams thrive in changing environments.</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">93%</p>
                    <p className="text-sm text-gray-400">Success rate</p>
                  </div>
                  <div className="h-12 w-px bg-gray-800"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">2.8x</p>
                    <p className="text-sm text-gray-400">ROI increase</p>
                  </div>
                  <div className="h-12 w-px bg-gray-800"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">5wk</p>
                    <p className="text-sm text-gray-400">Average timeline</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
