import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Users, IdCard, Briefcase, TrendingUp, Users as UsersIcon, Eye, EyeOff, Building } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Dark */}
      <div className="hidden lg:flex lg:w-1/2 gradient-navy p-12 flex-col justify-between text-white relative overflow-hidden">
        {/* Background Pattern */}
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
            Empower Your<br />Students, Boost Your<br />Placements
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-md">
            Track student progress, manage placements, and connect with top employers—all in one platform.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <IdCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Real-Time Tracking</h3>
              <p className="text-xs text-gray-400">16x of Tagsdiilar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Unified Job Portal</h3>
              <p className="text-xs text-gray-400">18y Inter Roqniiilar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Placement Analytics</h3>
              <p className="text-xs text-gray-400">18x fit Roqnililar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <UsersIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Free for All Students</h3>
              <p className="text-xs text-gray-400">13y Inter Roqniiilar</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 relative z-10">
          Trusted by 50+ Universities Across India
        </p>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
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
            <h1 className="text-3xl font-bold mb-2">University Portal Login</h1>
            <p className="text-muted-foreground">Sign in to access your placement dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">University Email</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <Input
                  id="email"
                  type="email"
                  placeholder="University Email"
                  className="pl-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-11 pr-11"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  Remember me $(exam)
                </label>
              </div>
              <span className="text-sm text-muted-foreground">32</span>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
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

            <div className="border rounded-lg p-4 bg-primary/5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-1 flex items-center justify-between">
                    New to AstikLearn?
                    <span className="text-xs text-muted-foreground">15</span>
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full mt-2 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => navigate("/signup")}
                  >
                    Request Demo →
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-sm text-center text-muted-foreground">
              Need assistance? Contact your IT administrator or{" "}
              <a href="#" className="text-primary hover:underline">
                AstikLearn Support
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
