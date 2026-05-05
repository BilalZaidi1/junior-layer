import { motion } from "framer-motion";
import { Link } from "wouter";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  link: string;
}

export function ProductCard({ name, category, image, link }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex flex-col gap-4 cursor-pointer"
    >
      <Link href={link} className="absolute inset-0 z-10">
        <span className="sr-only">View {name}</span>
      </Link>
      
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-card rounded-md">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
      </div>
      
      <div className="flex flex-col items-center text-center space-y-1">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{category}</span>
        <h3 className="text-lg font-serif text-primary">{name}</h3>
      </div>
    </motion.div>
  );
}
