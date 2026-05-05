import { Layout } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function WinterJackets() {
  const products = [
    {
      id: "wj-1",
      name: "Kids Waterproof Winter Jacket",
      category: "Winter Jackets",
      image: "/img-winter-jacket.png",
      link: "/winter-jackets"
    },
    {
      id: "wj-2",
      name: "Insulated Puffer Jacket",
      category: "Winter Jackets",
      image: "/img-puffer-jacket.png",
      link: "/winter-jackets"
    },
    {
      id: "wj-3",
      name: "Fleece-Lined Winter Coat",
      category: "Winter Jackets",
      image: "/img-fleece-coat.png",
      link: "/winter-jackets"
    },
    {
      id: "wj-4",
      name: "Hooded Rain Jacket",
      category: "Winter Jackets",
      image: "/img-rain-jacket.png",
      link: "/winter-jackets"
    },
    {
      id: "wj-5",
      name: "Thermal Winter Coat",
      category: "Winter Jackets",
      image: "/img-thermal-coat.png",
      link: "/winter-jackets"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-serif mb-6">Winter Jackets</h1>
          <p className="text-xl font-light text-primary-foreground/80">Properly waterproof. Properly warm. Built to handle the worst of the British winter.</p>
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
          <span className="text-accent uppercase tracking-widest font-medium text-sm mb-4 block">The Complete Setup</span>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">The Winter Kit</h2>
          <p className="text-muted-foreground font-light text-lg mb-8">
            Combine our flagship waterproof winter jacket with thermal layers and waterproof boots. Everything they need for the coldest months, curated for maximum warmth and durability.
          </p>
          <Link
            href="/bundles"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-accent transition-colors group"
          >
            Explore the Winter Kit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
