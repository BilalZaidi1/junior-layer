import { Layout } from "@/components/layout";

export default function SizeGuide() {
  return (
    <Layout>
      <div className="bg-card py-24 px-6 border-b border-border/50">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-serif text-primary mb-6">Size Guide</h1>
          <p className="text-xl font-light text-muted-foreground">
            Our clothing is designed with 'grow-room' built in. For the best fit, we recommend selecting your child's current age.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-4xl space-y-24">
        {/* Clothing */}
        <section>
          <h2 className="text-3xl font-serif text-primary mb-8 border-b border-border pb-4">Clothing & Jackets (Age 2-14)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary text-primary">
                  <th className="py-4 px-4 font-semibold uppercase tracking-wider text-sm">Age/Size</th>
                  <th className="py-4 px-4 font-semibold uppercase tracking-wider text-sm">Height (cm)</th>
                  <th className="py-4 px-4 font-semibold uppercase tracking-wider text-sm">Chest (cm)</th>
                  <th className="py-4 px-4 font-semibold uppercase tracking-wider text-sm">Waist (cm)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground font-light divide-y divide-border">
                {[
                  { age: "2-3 Years", height: "92-98", chest: "53-55", waist: "51-53" },
                  { age: "3-4 Years", height: "98-104", chest: "55-57", waist: "53-54" },
                  { age: "5-6 Years", height: "110-116", chest: "59-61", waist: "55-57" },
                  { age: "7-8 Years", height: "122-128", chest: "63-66", waist: "58-60" },
                  { age: "9-10 Years", height: "134-140", chest: "69-72", waist: "62-64" },
                  { age: "11-12 Years", height: "146-152", chest: "75-79", waist: "66-68" },
                  { age: "13-14 Years", height: "158-164", chest: "82-86", waist: "70-72" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-primary">{row.age}</td>
                    <td className="py-4 px-4">{row.height}</td>
                    <td className="py-4 px-4">{row.chest}</td>
                    <td className="py-4 px-4">{row.waist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footwear */}
        <section>
          <h2 className="text-3xl font-serif text-primary mb-8 border-b border-border pb-4">Footwear (UK Sizing)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary text-primary">
                  <th className="py-4 px-4 font-semibold uppercase tracking-wider text-sm">UK Size</th>
                  <th className="py-4 px-4 font-semibold uppercase tracking-wider text-sm">EU Size</th>
                  <th className="py-4 px-4 font-semibold uppercase tracking-wider text-sm">Foot Length (cm)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground font-light divide-y divide-border">
                {[
                  { uk: "7 (Junior)", eu: "24", length: "14.6" },
                  { uk: "8 (Junior)", eu: "25.5", length: "15.6" },
                  { uk: "9 (Junior)", eu: "27", length: "16.5" },
                  { uk: "10 (Junior)", eu: "28", length: "17.4" },
                  { uk: "11 (Junior)", eu: "29", length: "18.3" },
                  { uk: "12 (Junior)", eu: "30.5", length: "19.1" },
                  { uk: "13 (Junior)", eu: "32", length: "20.0" },
                  { uk: "1 (Older)", eu: "33", length: "20.8" },
                  { uk: "2 (Older)", eu: "34.5", length: "21.7" },
                  { uk: "3 (Older)", eu: "35.5", length: "22.5" },
                  { uk: "4 (Older)", eu: "37", length: "23.3" },
                  { uk: "5 (Older)", eu: "38", length: "24.2" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-primary">{row.uk}</td>
                    <td className="py-4 px-4">{row.eu}</td>
                    <td className="py-4 px-4">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
}
