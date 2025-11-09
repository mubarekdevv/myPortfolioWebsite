"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // You can integrate with your preferred form handling service here
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-800 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #00f5ff 2px, transparent 2px),
                           radial-gradient(circle at 80% 20%, #ff00ff 2px, transparent 2px),
                           radial-gradient(circle at 40% 40%, #00ff00 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life and create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Get In Touch
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              I'm always interested in hearing about new projects and
              opportunities. Whether you're a company looking to hire, or
              someone with an exciting idea, I'd love to connect with you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-accent/10 p-4 rounded-xl border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300 backdrop-blur-sm">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white group-hover:text-accent transition-colors duration-300">
                    Email
                  </h4>
                  <p className="text-gray-300">mubarek.dev@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-accent/10 p-4 rounded-xl border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300 backdrop-blur-sm">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white group-hover:text-accent transition-colors duration-300">
                    Phone
                  </h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-accent/10 p-4 rounded-xl border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300 backdrop-blur-sm">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white group-hover:text-accent transition-colors duration-300">
                    Location
                  </h4>
                  <p className="text-gray-300">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-accent/10 p-4 rounded-xl border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300 backdrop-blur-sm">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white group-hover:text-accent transition-colors duration-300">
                    Response Time
                  </h4>
                  <p className="text-gray-300">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-2xl border-0 bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12 bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent backdrop-blur-sm"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-slate-900 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_26px_rgba(0,245,255,0.6)]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
