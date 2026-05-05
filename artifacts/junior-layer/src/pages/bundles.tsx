import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Bundles() {
  const bundles = [
    {
      id: "bundle-1",
      name: "The Winter Kit",
      description: "Everything they need for the coldest months.",
      image: "/img-winter-jacket.png",
      includes: [
        "1x Waterproof Winter Jacket",
        "1x Thermal Winter Coat",
        "1x Winter Boots",
        "2x Thermal Base Layers"
      ]
    },
    {
      id: "bundle-2",
      name: "The School Kit",
      description: "Smart, sensible, and phenomenally durable.",
      image: "/img-school-coat.png",
      includes: [
        "1x Classic School Coat",
        "1x Lightweight Rain Jacket",
        "1x Pair Formal School Shoes",
        "3x Cotton School Polos"
      ]
    },
    {
      id: "bundle-3",
      name: "The Everyday Kit",
      description: "Comfortable staples for weekend adventures.",
      image: "/img-everyday-hoodie.png",
      includes: [
        "2x Cotton Hoodie Sets",
        "3x Cotton T-Shirts",
        "2x Jogger Tracksuit Bottoms",
        "1x Everyday Trainers"
      ]
    },
    {
      id: "bundle-4",
      name: "School Essentials Kit",
      description: "The absolute basics, perfectly executed.",
      image: "/img-bundle-flatlay.png",
      includes: [
        "1x All-Weather School Coat",
        "1x Pair Formal School Shoes",
        "5x Durable Ankle Socks",
        "1x Water-Resistant Backpack Cover"
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-32 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <span className="text-accent uppercase tracking-widest font-medium text-sm mb-6 block">Curated Collections</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">Simplify Their Wardrobe</h1>
          <p className="text-xl font-light text-primary-foreground/80 max-w-2xl mx-auto">
            Carefully assembled kits that take the guesswork out of preparing for a new term or a change in season. High-quality layers designed to work together.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 space-y-32">
        {bundles.map((bundle, idx) => (
          <div key={bundle.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}>
            <div className="w-full md:w-1/2">
              <div className="aspect-square bg-card overflow-hidden rounded-md relative">
                <img 
                  src={bundle.image} 
                  alt={bundle.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-serif text-primary mb-4">{bundle.name}</h2>
              <p className="text-lg text-muted-foreground font-light mb-8">{bundle.description}</p>
              
              <div className="bg-card p-8 rounded-sm border border-border/50">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {bundle.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <Check size={18} className="text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
