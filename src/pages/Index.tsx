import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Users,
  Briefcase,
  TrendingUp,
  Target,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">astikLearn</h1>
              <p className="text-xs text-primary">for Universities</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Benefits</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <Link to="/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Empower Your Students,<br />
              <span className="text-primary">Boost Your Placements</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track student progress, manage placements, and connect with top employers—all in one comprehensive platform designed for universities.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Login to Portal
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-primary">50+ Universities</span> Across India
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features for Campus Placements</h2>
            <p className="text-xl text-muted-foreground">Everything you need to manage placements efficiently</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-xl transition-shadow border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor student progress and placement status in real-time with comprehensive dashboards.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Unified Job Portal</h3>
              <p className="text-sm text-muted-foreground">
                Centralized platform for all job postings and student applications.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Placement Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Detailed insights and analytics to improve placement strategies.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free for Students</h3>
              <p className="text-sm text-muted-foreground">
                No cost for students to access the platform and apply for jobs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Why Choose astikLearn?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Streamlined Process</h3>
                    <p className="text-sm text-muted-foreground">
                      Simplify placement management with automated workflows and intuitive interfaces.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Better Outcomes</h3>
                    <p className="text-sm text-muted-foreground">
                      Increase placement rates with data-driven insights and strategic planning tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Industry Connections</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with leading companies and expand placement opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Dedicated Support</h3>
                    <p className="text-sm text-muted-foreground">
                      24/7 support team ready to assist with any questions or issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Universities</div>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">36K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </Card>
              <Card className="p-6 text-center">
                <Briefcase className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Job Postings</div>
              </Card>
              <Card className="p-6 text-center">
                <BarChart3 className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Ready to Transform Your Campus Placements?</h2>
            <p className="text-xl text-gray-300">
              Join leading universities and provide your students with the best placement opportunities.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">astikLearn</h3>
                  <p className="text-xs text-primary">for Universities</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering universities to boost student placements.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Documentation</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2025 astikLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
