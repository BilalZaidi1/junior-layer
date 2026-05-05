import { Layout } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Footwear() {
  const products = [
    {
      id: "fw-1",
      name: "School Shoes Black Formal",
      category: "Footwear",
      image: "/img-school-shoes.png",
      link: "/footwear"
    },
    {
      id: "fw-2",
      name: "Everyday Trainers",
      category: "Footwear",
      image: "/img-boots-trainers.png",
      link: "/footwear"
    },
    {
      id: "fw-3",
      name: "Winter Boots",
      category: "Footwear",
      image: "/img-winter-boots.jpg",
      link: "/footwear"
    },
    {
      id: "fw-4",
      name: "Waterproof Boots",
      category: "Footwear",
      image: "/img-waterproof-boots.jpg",
      link: "/footwear"
    },
    {
      id: "fw-5",
      name: "Slip-On Shoes",
      category: "Footwear",
      image: "/img-slip-on-shoes.jpg",
      link: "/footwear"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-serif mb-6">Kids Footwear</h1>
          <p className="text-xl font-light text-primary-foreground/80">Supportive, comfortable, and built to survive the playground.</p>
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
          <span className="text-accent uppercase tracking-widest font-medium text-sm mb-4 block">Head to Toe</span>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">The Footwear Kit</h2>
          <p className="text-muted-foreground font-light text-lg mb-8">
            Take the stress out of shoe shopping. A bundle containing one formal pair for school, one waterproof pair for winter, and comfortable trainers for weekends.
          </p>
          <Link
            href="/bundles"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-accent transition-colors group"
          >
            Explore the Footwear Kit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
