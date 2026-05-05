import { Layout } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function SchoolWear() {
  const products = [
    {
      id: "sw-1",
      name: "Kids School Coat",
      category: "School Wear",
      image: "https://images.unsplash.com/photo-1627961730030-cb64c76b9ea2?q=80&w=600&auto=format&fit=crop",
      link: "/school-wear"
    },
    {
      id: "sw-2",
      name: "Lightweight School Jacket",
      category: "School Wear",
      image: "https://images.unsplash.com/photo-1627961730030-cb64c76b9ea2?q=80&w=600&auto=format&fit=crop",
      link: "/school-wear"
    },
    {
      id: "sw-3",
      name: "Blazer Style School Jacket",
      category: "School Wear",
      image: "https://images.unsplash.com/photo-1627961730030-cb64c76b9ea2?q=80&w=600&auto=format&fit=crop",
      link: "/school-wear"
    },
    {
      id: "sw-4",
      name: "School Uniform Jacket",
      category: "School Wear",
      image: "https://images.unsplash.com/photo-1627961730030-cb64c76b9ea2?q=80&w=600&auto=format&fit=crop",
      link: "/school-wear"
    },
    {
      id: "sw-5",
      name: "Rainproof School Coat",
      category: "School Wear",
      image: "https://images.unsplash.com/photo-1627961730030-cb64c76b9ea2?q=80&w=600&auto=format&fit=crop",
      link: "/school-wear"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-serif mb-6">School Wear</h1>
          <p className="text-xl font-light text-primary-foreground/80">Smart enough for the classroom, durable enough for the playground.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map(p => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>

      <section className="bg-card py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-accent uppercase tracking-widest font-medium text-sm mb-4 block">Term Time Sorted</span>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">The School Kit</h2>
          <p className="text-muted-foreground font-light text-lg mb-8">
            Two robust school jackets and a pair of our legendary formal school shoes. Designed to last the entire academic year without falling apart at the seams.
          </p>
          <Link 
            href="/bundles" 
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-accent transition-colors group"
          >
            Explore the School Kit 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
