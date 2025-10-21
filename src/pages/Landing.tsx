import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Users, Briefcase, CheckCircle, ArrowRight, Sparkles, Zap, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-primary/3 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-light flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-teal-light bg-clip-text text-transparent">astikLearn</h1>
              <p className="text-xs text-primary font-semibold">for Universities</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-smooth">Features</a>
            <a href="#benefits" className="text-sm hover:text-primary transition-smooth">Benefits</a>
            <a href="#partners" className="text-sm hover:text-primary transition-smooth">Partners</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all hover:shadow-lg">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-primary to-teal-light hover:shadow-xl transition-all">
                Sign Up
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-40 right-10 animate-bounce delay-300">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rotate-12"></div>
        </div>
        <div className="absolute bottom-40 left-10 animate-bounce delay-700">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Trusted by 50+ Universities</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent animate-fade-in">
                Empowering Futures.
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-teal-light to-blue-600 bg-clip-text text-transparent animate-fade-in delay-200">
                Connecting Talent.
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-4 animate-fade-in delay-300">
              Your Gateway to Unmatched Campus Placements
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in delay-400">
              Track student progress, manage placements, and connect with top employers—all in one powerful platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-500">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-primary via-teal-light to-blue-600 hover:shadow-2xl transition-all text-lg px-10 py-7 group">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-10 py-7">
                  View Demo
                  <Zap className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto animate-fade-in delay-700">
              <div className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-teal-light bg-clip-text text-transparent mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Universities</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent mb-2">10K+</p>
                <p className="text-sm text-muted-foreground">Students Placed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-teal-light to-blue-600 bg-clip-text text-transparent mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-gradient-to-b from-background via-card to-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Streamlined Campus Placement
              </span>
              <br />
              Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage placements efficiently and effectively
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: "Centralized Data", desc: "Manage all student information in one secure platform", color: "from-blue-500 to-blue-600" },
              { icon: Briefcase, title: "Job Posting", desc: "Post and manage job opportunities effortlessly", color: "from-primary to-teal-light" },
              { icon: TrendingUp, title: "Analytics", desc: "Track placement trends with powerful insights", color: "from-orange-500 to-orange-600" },
              { icon: Shield, title: "Security", desc: "Enterprise-grade security and data protection", color: "from-purple-500 to-purple-600" },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group relative text-center p-8 rounded-2xl border border-transparent hover:border-primary/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 shadow-lg group-hover:shadow-xl transition-all`}>
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <Icon className={`w-10 h-10 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} style={{WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
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
