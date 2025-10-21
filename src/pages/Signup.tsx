import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Upload, Building, Mail, Phone, MapPin, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Panel - Dark */}
      <div className="hidden lg:flex lg:w-1/2 gradient-navy p-8 xl:p-12 flex-col justify-between text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-white/20 rounded-lg rotate-45"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-16">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">astikLearn</h1>
              <p className="text-sm text-primary">for Universities</p>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Join the Future<br />of Campus<br />Placements
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-md">
            Create your university account and start managing placements more effectively.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Centralized Management</h3>
                <p className="text-sm text-gray-400">Manage all placement activities in one platform</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Student Success</h3>
                <p className="text-sm text-gray-400">Track and improve placement outcomes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Trusted Platform</h3>
                <p className="text-sm text-gray-400">Used by 50+ leading universities</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 relative z-10">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline font-semibold">
            Sign in here
          </Link>
        </p>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-background overflow-y-auto">
        <div className="w-full max-w-md py-6">
          <div className="mb-8 lg:hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">astikLearn</h1>
                <p className="text-xs text-primary">for Universities</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Your University's Account</h1>
            <p className="text-muted-foreground">Fill in the details to get started</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="college-name">College/University Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <Input
                  id="college-name"
                  type="text"
                  placeholder="Enter your college name"
                  className="pl-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Official Website</Label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <Input
                  id="website"
                  type="url"
                  placeholder="www.yourcolleg.edu"
                  className="pl-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Contact Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 1234567890"
                  className="pl-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="logo">College Logo</Label>
              <div className="relative">
                <Upload className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <Input
                  id="logo"
                  type="file"
                  accept="image/*"
                  className="pl-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Full Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-primary" />
                <textarea
                  id="address"
                  rows={3}
                  placeholder="Enter complete address"
                  className="w-full pl-11 pr-3 py-2 border rounded-md resize-none"
                  required
                />
              </div>
            </div>

            <div className="border-t pt-5">
              <h3 className="font-semibold mb-4">Admin Details</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <Input
                      id="admin-name"
                      type="text"
                      placeholder="Admin full name"
                      className="pl-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@college.edu"
                      className="pl-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2"/>
                    </svg>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create strong password"
                      className="pl-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2"/>
                    </svg>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm password"
                      className="pl-11"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
              Create Account
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
