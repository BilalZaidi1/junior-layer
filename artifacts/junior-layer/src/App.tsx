import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import WinterJackets from "@/pages/winter-jackets";
import SchoolWear from "@/pages/school-wear";
import EverydayClothing from "@/pages/everyday-clothing";
import Footwear from "@/pages/footwear";
import Bundles from "@/pages/bundles";
import SizeGuide from "@/pages/size-guide";
import DeliveryReturns from "@/pages/delivery-returns";
import About from "@/pages/about";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/winter-jackets" component={WinterJackets} />
      <Route path="/school-wear" component={SchoolWear} />
      <Route path="/everyday-clothing" component={EverydayClothing} />
      <Route path="/footwear" component={Footwear} />
      <Route path="/bundles" component={Bundles} />
      <Route path="/size-guide" component={SizeGuide} />
      <Route path="/delivery-returns" component={DeliveryReturns} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
