import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Building2, Briefcase, TrendingUp, Users, Lock, Mail } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side - Dark */}
      <div className="hidden lg:flex lg:w-1/2 bg-navy text-white p-8 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">astikLearn</h1>
              <p className="text-sm text-primary">for Universities</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Empower Your<br />Students, Boost Your<br />Placements
            </h2>
            
            <p className="text-lg text-gray-300 max-w-md">
              Track student progress, manage placements, and connect with top employers—all in one platform.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-navy-light rounded-xl p-4 border border-primary/20">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Real-Time Tracking</h3>
                <p className="text-xs text-gray-400">16k+ Registered</p>
              </div>

              <div className="bg-navy-light rounded-xl p-4 border border-primary/20">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Unified Job Portal</h3>
                <p className="text-xs text-gray-400">18y+ Inter Regular</p>
              </div>

              <div className="bg-navy-light rounded-xl p-4 border border-primary/20">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Placement Analytics</h3>
                <p className="text-xs text-gray-400">18k+ Registeration</p>
              </div>

              <div className="bg-navy-light rounded-xl p-4 border border-primary/20">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Free for All Students</h3>
                <p className="text-xs text-gray-400">13y+ Inter Regular</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-sm text-gray-400">Trusted by 50+ Universities Across India</p>
        </div>
      </div>

      {/* Right Side - White */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background overflow-y-auto">
        <div className="w-full max-w-md space-y-6">
          <div className="flex lg:hidden items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">astikLearn</h1>
              <p className="text-xs text-primary">for Universities</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">University Portal Login</h2>
            <p className="text-sm text-muted-foreground">Sign in to access your placement dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">University Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-primary" />
                <Input
                  id="email"
                  type="email"
                  placeholder="University Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-primary" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  Remember me $(expires)
                </label>
              </div>
              <span className="text-sm text-muted-foreground">32</span>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Sign In to Portal
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">OR</span>
              </div>
            </div>

            <div className="bg-secondary/50 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-sm">i</span>
                  </div>
                  <span className="font-medium text-sm">New to AstikLearn?</span>
                  <span className="text-sm text-muted-foreground">15</span>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                  <Link to="/signup">Request Demo →</Link>
                </Button>
              </div>
            </div>
          </form>

          <p className="text-sm text-center text-muted-foreground">
            Need assistance? Contact your IT administrator or{" "}
            <a href="#" className="text-primary underline">AstikLearn Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
