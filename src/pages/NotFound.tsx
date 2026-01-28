import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 min-h-[70vh] flex items-center bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-xl mx-auto">
            <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl font-heading font-bold text-gold">404</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">
                  <ArrowLeft className="w-5 h-5" />
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
