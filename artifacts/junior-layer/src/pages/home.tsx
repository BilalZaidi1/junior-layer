import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Droplets, Clock } from "lucide-react";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Kids wearing Junior Layer clothing outdoors" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-accent-foreground/80 uppercase tracking-[0.2em] font-medium text-sm mb-6 block"
          >
            Premium Kids Clothing
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-primary-foreground mb-8 leading-tight"
          >
            Built for play. <br/> Tested for school.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl font-light mb-12"
          >
            The UK brand parents trust. Waterproof jackets that actually keep kids dry, school coats that last a full year, and bundles that make mornings easier.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/school-wear" 
              className="bg-accent text-primary-foreground px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              Explore School Wear
            </Link>
            <Link 
              href="/bundles" 
              className="bg-transparent border border-primary-foreground text-primary-foreground px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              View Bundles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-card py-12 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border/50">
            <div className="flex flex-col items-center p-6 gap-4">
              <ShieldCheck className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-primary">Durability Guaranteed</h3>
              <p className="text-muted-foreground font-light text-sm">Tested to withstand the rigours of playground wear and tear.</p>
            </div>
            <div className="flex flex-col items-center p-6 gap-4">
              <Droplets className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-primary">Properly Waterproof</h3>
              <p className="text-muted-foreground font-light text-sm">Technical fabrics that keep the rain out without feeling stiff.</p>
            </div>
            <div className="flex flex-col items-center p-6 gap-4">
              <Clock className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-primary">Built to Last</h3>
              <p className="text-muted-foreground font-light text-sm">Generous hems and smart fits that grow with them through the year.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif text-primary mb-4">Everyday Essentials</h2>
              <p className="text-muted-foreground font-light text-lg">Thoughtfully designed pieces that form the foundation of a reliable wardrobe.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/winter-jackets" className="group relative aspect-[4/5] overflow-hidden bg-muted">
              <img 
                src="/img-winter-jacket.png" 
                alt="Winter Jackets" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif text-primary-foreground mb-2">Winter Jackets</h3>
                <span className="text-primary-foreground/80 flex items-center gap-2 text-sm font-medium tracking-wide uppercase">
                  Discover <ArrowRight size={16} />
                </span>
              </div>
            </Link>
            
            <Link href="/school-wear" className="group relative aspect-[4/5] overflow-hidden bg-muted lg:-mt-8 lg:mb-8">
              <img 
                src="/img-school-coat.png" 
                alt="School Wear" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif text-primary-foreground mb-2">School Wear</h3>
                <span className="text-primary-foreground/80 flex items-center gap-2 text-sm font-medium tracking-wide uppercase">
                  Discover <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            <Link href="/everyday-clothing" className="group relative aspect-[4/5] overflow-hidden bg-muted">
              <img 
                src="/img-everyday-hoodie.png" 
                alt="Everyday Wear" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif text-primary-foreground mb-2">Everyday Wear</h3>
                <span className="text-primary-foreground/80 flex items-center gap-2 text-sm font-medium tracking-wide uppercase">
                  Discover <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            <Link href="/footwear" className="group relative aspect-[4/5] overflow-hidden bg-muted lg:-mt-8 lg:mb-8">
              <img 
                src="/img-school-shoes.png" 
                alt="Kids Footwear" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-serif text-primary-foreground mb-2">Footwear</h3>
                <span className="text-primary-foreground/80 flex items-center gap-2 text-sm font-medium tracking-wide uppercase">
                  Discover <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent uppercase tracking-widest font-medium text-sm mb-4 block">Signature Pieces</span>
            <h2 className="text-4xl font-serif text-primary mb-6">Parent Favourites</h2>
            <p className="text-muted-foreground font-light text-lg">The reliable staples that return season after season.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              id="1"
              name="Kids Waterproof Winter Jacket"
              category="Outerwear"
              image="/img-winter-jacket.png"
              link="/winter-jackets"
            />
            <ProductCard 
              id="2"
              name="Classic School Coat"
              category="School Wear"
              image="/img-school-coat.png"
              link="/school-wear"
            />
            <ProductCard 
              id="3"
              name="Cotton Hoodie Set"
              category="Everyday"
              image="/img-everyday-hoodie.png"
              link="/everyday-clothing"
            />
            <ProductCard 
              id="4"
              name="Sturdy School Shoes"
              category="Footwear"
              image="/img-school-shoes.png"
              link="/footwear"
            />
          </div>
        </div>
      </section>

      {/* The Bundle Highlight */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl" />
              <img 
                src="/img-bundle-flatlay.png" 
                alt="Clothing bundle laid out" 
                className="w-full h-full object-cover rounded-sm relative z-10"
              />
            </div>
            
            <div className="w-full lg:w-1/2 max-w-xl">
              <span className="text-accent uppercase tracking-widest font-medium text-sm mb-6 block">Simplify Mornings</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">The Complete School Kit</h2>
              <p className="text-primary-foreground/80 font-light text-lg mb-8 leading-relaxed">
                Everything they need for a full term, built to endure. One sturdy winter coat, two reinforced uniform jackets, and waterproof playground shoes. Curated to take the guesswork out of back-to-school preparation.
              </p>
              
              <ul className="space-y-4 mb-10 text-primary-foreground/90 font-light">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Premium durability standard
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Coordinated, sensible colours
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Grows with them sizing
                </li>
              </ul>

              <Link 
                href="/bundles" 
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-accent hover:text-white transition-colors group"
              >
                View The Kit 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section className="py-32 bg-background text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <ShieldCheck className="w-12 h-12 mx-auto text-accent mb-8" />
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8 leading-tight">
            "Junior Layer isn't about fast fashion. It's about a reliable coat hanging by the door, ready for whatever the British weather throws at it."
          </h2>
          <Link href="/about" className="text-primary border-b border-primary pb-1 uppercase tracking-widest text-sm font-medium hover:text-accent hover:border-accent transition-colors">
            Our Story
          </Link>
        </div>
      </section>
    </Layout>
  );
}
