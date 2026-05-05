import { Layout } from "@/components/layout";

export default function About() {
  return (
    <Layout>
      <div className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=2000&auto=format&fit=crop" 
            alt="Children in outdoor clothing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-primary-foreground mb-6">Our Story</h1>
          <p className="text-xl text-primary-foreground/80 font-light max-w-2xl mx-auto">
            Creating reliable, weather-proof clothing for children who love the outdoors.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-p:font-light mx-auto">
          <h2>The Problem with Kids Clothing</h2>
          <p>
            Junior Layer began when two parents realised they were buying three winter coats a year. One would lose its waterproofing after the first wash, the zip would break on the second, and the third would inevitably be outgrown before spring.
          </p>
          <p>
            The options were either cheap fast fashion that ended up in landfill, or technical mountain-climbing gear that was excessive for the school run and priced accordingly.
          </p>
          
          <div className="my-16 pl-8 border-l-4 border-accent">
            <p className="text-2xl font-serif text-primary leading-relaxed !m-0">
              "We didn't need our kids equipped for Everest. We just needed a coat that could survive a British playground in November."
            </p>
          </div>

          <h2>Our Approach</h2>
          <p>
            We focus exclusively on children aged 2 to 14. We don't make adult clothing. We don't make baby grows. We make the specific gear required for those active years when clothes take the most punishment.
          </p>
          <p>
            Every Junior Layer jacket, shoe, and sweatshirt is tested rigorously. We use reinforced stitching on knees and elbows, proper hydrostatic-head rated waterproofing, and robust zippers that small hands can actually operate.
          </p>

          <h2>Built to Last</h2>
          <p>
            Our core philosophy is durability. A Junior Layer coat should last a child a full year, and then be sturdy enough to hand down to a younger sibling. We build 'grow-room' into our patterns—slightly longer cuffs that can be folded back, generous hems, and adjustable waistbands.
          </p>
          <p>
            Premium doesn't mean flashy. It means reliable, thoughtful construction. It's the peace of mind knowing that when you send them out the door on a rainy morning, they'll come home dry.
          </p>
        </div>
      </div>
    </Layout>
  );
}
