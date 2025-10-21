import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Users, Briefcase, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">astikLearn</h1>
              <p className="text-xs text-primary">for Universities</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-smooth">Features</a>
            <a href="#benefits" className="text-sm hover:text-primary transition-smooth">Benefits</a>
            <a href="#partners" className="text-sm hover:text-primary transition-smooth">Partners</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Futures.<br />
              Connecting Talent.
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Your Gateway to Unmatched Campus Placements
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track student progress, manage placements, and connect with top employers—all in one platform.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Streamlined Campus Placement Management
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything you need to manage placements efficiently and effectively
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Centralized Data</h3>
              <p className="text-sm text-muted-foreground">
                Manage all student information in one secure platform
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Job Posting</h3>
              <p className="text-sm text-muted-foreground">
                Post and manage job opportunities effortlessly
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Track placement trends with powerful insights
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">User Management</h3>
              <p className="text-sm text-muted-foreground">
                Flexible role-based access control system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Unlock Your Career Potential
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Benefits that set us apart
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 rounded-lg border bg-card">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Access to Top Employers</h3>
                <p className="text-muted-foreground">
                  Connect students with leading companies across industries
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-lg border bg-card">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Real-Time Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor application status and placement progress live
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-lg border bg-card">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Comprehensive Reports</h3>
                <p className="text-muted-foreground">
                  Generate detailed placement reports and analytics
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-lg border bg-card">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Seamless Workflow</h3>
                <p className="text-muted-foreground">
                  Streamlined process from application to placement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Over 50+ universities across India trust astikLearn
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["IIT Bombay", "NIT Trichy", "BITS Pilani", "VIT Vellore", "SRM University", "MIT Manipal", "RVCE Bangalore", "DTU Delhi"].map((college) => (
              <div
                key={college}
                className="h-24 rounded-lg border bg-background flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <p className="font-semibold text-sm text-muted-foreground hover:text-foreground">
                  {college}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-darker text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary">Twitter</a></li>
                <li><a href="#" className="hover:text-primary">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            © 2025 astikLearn. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
