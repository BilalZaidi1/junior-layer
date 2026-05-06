import { Layout } from "@/components/layout";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-card py-24 px-6 border-b border-border/50">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-serif text-primary mb-6">Get in Touch</h1>
          <p className="text-xl font-light text-muted-foreground">
            Whether you need sizing advice or help with an order, our UK team is here.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-primary mb-8">We're here to help</h2>
              <p className="text-muted-foreground font-light text-lg mb-8">
                Our support team is based in the UK and operates Monday to Friday, 9am to 5pm. We aim to respond to all queries within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-sm text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email Support</h3>
                  <p className="text-muted-foreground font-light mb-2">For detailed queries and order support.</p>
                  <a href="mailto:info@juniorlayer.com" className="text-accent hover:underline">info@juniorlayer.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-sm text-primary shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground font-light mb-2">For quick questions and sizing advice.</p>
                  <span className="text-primary font-medium">+44 (0) 7700 900077</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-sm text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Head Office</h3>
                  <p className="text-muted-foreground font-light">
                    Junior Layer Ltd<br />
                    14 Heritage Way<br />
                    Manchester<br />
                    M1 4AB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background border border-border p-8 md:p-12 rounded-sm shadow-sm">
            <h3 className="text-2xl font-serif text-primary mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-primary">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-card border border-border px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-primary">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-card border border-border px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-primary">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-card border border-border px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-primary">Subject</label>
                <select 
                  id="subject" 
                  className="w-full bg-card border border-border px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors"
                >
                  <option>Order Enquiry</option>
                  <option>Sizing Question</option>
                  <option>Returns & Exchanges</option>
                  <option>General Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-card border border-border px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-accent h-14 rounded-none uppercase tracking-widest text-sm font-semibold">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
}
