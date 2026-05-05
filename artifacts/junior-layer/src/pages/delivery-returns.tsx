import { Layout } from "@/components/layout";
import { Package, Truck, RefreshCw, HelpCircle } from "lucide-react";

export default function DeliveryReturns() {
  return (
    <Layout>
      <div className="bg-card py-24 px-6 border-b border-border/50">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-serif text-primary mb-6">Delivery & Returns</h1>
          <p className="text-xl font-light text-muted-foreground">
            Clear, simple policies designed around busy parents.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-4xl space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Delivery */}
          <div className="bg-background border border-border/50 p-8 rounded-sm">
            <div className="w-12 h-12 bg-card flex items-center justify-center rounded-full mb-6 text-secondary">
              <Truck size={24} />
            </div>
            <h2 className="text-2xl font-serif text-primary mb-4">UK Delivery</h2>
            <ul className="space-y-4 text-muted-foreground font-light">
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span>Standard (2-4 Working Days)</span>
                <span className="text-primary font-medium">Complimentary</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span>Next Day Delivery</span>
                <span className="text-primary font-medium">Premium Service</span>
              </li>
              <li className="pt-2 text-sm">
                Orders placed before 2pm Monday to Friday are dispatched the same day.
              </li>
            </ul>
          </div>

          {/* Returns */}
          <div className="bg-background border border-border/50 p-8 rounded-sm">
            <div className="w-12 h-12 bg-card flex items-center justify-center rounded-full mb-6 text-accent">
              <RefreshCw size={24} />
            </div>
            <h2 className="text-2xl font-serif text-primary mb-4">Returns Policy</h2>
            <p className="text-muted-foreground font-light mb-4">
              We offer a straightforward 30-day return window. If it doesn't fit or you're not completely happy, return it unworn and with tags attached.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>• Simple size exchanges within 14 days</li>
              <li>• Full refunds processed within 5-7 working days</li>
              <li>• Prepaid return labels included in every parcel</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-12 rounded-sm text-center">
          <HelpCircle size={32} className="mx-auto mb-6 text-accent" />
          <h2 className="text-3xl font-serif mb-4">Need help with an order?</h2>
          <p className="text-primary-foreground/80 font-light max-w-xl mx-auto mb-8">
            Our UK-based customer support team is on hand to help trace deliveries, arrange rapid exchanges, or answer any product questions.
          </p>
          <a href="/contact" className="inline-block bg-white text-primary px-8 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-accent hover:text-white transition-colors">
            Contact Support
          </a>
        </div>

      </div>
    </Layout>
  );
}
