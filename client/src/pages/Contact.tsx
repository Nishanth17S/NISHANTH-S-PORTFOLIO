import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            GET IN TOUCH
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full box-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">Let's Collaborate</h2>
            <p className="text-muted-foreground mb-8">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or how we can build something amazing together.
            </p>

            <div className="space-y-6">
              <Card className="bg-muted/10 border-primary/20 hover:bg-muted/20 transition-colors">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary box-glow">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">Email</h3>
                    <p className="text-muted-foreground text-sm">hello@neondev.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/10 border-primary/20 hover:bg-muted/20 transition-colors">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary box-glow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">Location</h3>
                    <p className="text-muted-foreground text-sm">San Francisco, CA</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/10 border-primary/20 hover:bg-muted/20 transition-colors">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent box-glow">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">Availability</h3>
                    <p className="text-muted-foreground text-sm">Open for freelance</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="bg-muted/10 backdrop-blur-md border-primary/20 p-6 shadow-2xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-display">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/50" />
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
                        <FormLabel className="text-white font-display">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/50" />
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
                        <FormLabel className="text-white font-display">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="min-h-[120px] bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white font-display uppercase tracking-wider box-glow h-12">
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
