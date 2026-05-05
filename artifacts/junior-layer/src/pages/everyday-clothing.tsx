import { Layout } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function EverydayClothing() {
  const products = [
    {
      id: "ec-1",
      name: "Hoodie Set",
      category: "Everyday Wear",
      image: "/img-everyday-hoodie.png",
      link: "/everyday-clothing"
    },
    {
      id: "ec-2",
      name: "Cotton T-Shirt Pack",
      category: "Everyday Wear",
      image: "/img-tshirt-pack.png",
      link: "/everyday-clothing"
    },
    {
      id: "ec-3",
      name: "Jogger Tracksuit Set",
      category: "Everyday Wear",
      image: "/img-jogger-set.png",
      link: "/everyday-clothing"
    },
    {
      id: "ec-4",
      name: "Pyjama Set",
      category: "Everyday Wear",
      image: "/img-pyjama-set.png",
      link: "/everyday-clothing"
    },
    {
      id: "ec-5",
      name: "Sweatshirt Set",
      category: "Everyday Wear",
      image: "/img-sweatshirt-set.png",
      link: "/everyday-clothing"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-serif mb-6">Everyday Wear</h1>
          <p className="text-xl font-light text-primary-foreground/80">Soft, comfortable staples for weekends and lounging.</p>
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
          <span className="text-accent uppercase tracking-widest font-medium text-sm mb-4 block">Weekend Comfort</span>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">The Everyday Kit</h2>
          <p className="text-muted-foreground font-light text-lg mb-8">
            The foundation of their weekend wardrobe. A versatile mix of hoodies, tees, and joggers in coordinating muted tones.
          </p>
          <Link
            href="/bundles"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-accent transition-colors group"
          >
            Explore the Everyday Kit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
