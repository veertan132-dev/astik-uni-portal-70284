import { useState } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import {
  Users,
  LayoutDashboard,
  Briefcase,
  UserCog,
  Settings,
  LogOut,
  Bell,
  HelpCircle,
  Search,
  Menu,
  X,
  Building,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Students", href: "/dashboard/students", icon: Users },
    { name: "Job Listings", href: "/dashboard/jobs", icon: Briefcase },
    { name: "User Management", href: "/dashboard/users", icon: UserCog },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 gradient-navy text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo & College Info */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <h1 className="text-lg font-bold">astikLearn</h1>
                  <p className="text-xs text-primary">for Universities</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-4 p-3 bg-white/10 rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate">IIT Bombay</h3>
                <div className="flex items-center gap-1 text-xs text-gray-300">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                    active
                      ? "bg-primary text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-background border-b px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-foreground"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search students, jobs, companies..."
                  className="pl-11 pr-4"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white hidden sm:flex"
              >
                View All →
              </Button>
              <button className="relative p-2 hover:bg-muted rounded-lg transition-smooth">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-smooth">
                <HelpCircle className="w-5 h-5" />
              </button>
              
              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 hover:bg-muted rounded-lg p-2 transition-smooth">
                    <Avatar className="w-9 h-9 ring-2 ring-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-teal-light text-white text-sm font-bold">
                        RK
                      </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-semibold">Dr. Rajesh Kumar</p>
                      <p className="text-xs text-muted-foreground">Placement Officer</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground hidden md:block" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-card border shadow-lg z-50">
                  <div className="px-3 py-2 border-b">
                    <p className="text-sm font-semibold">Dr. Rajesh Kumar</p>
                    <p className="text-xs text-muted-foreground">placement.officer@iitb.ac.in</p>
                  </div>
                  <DropdownMenuItem onClick={() => navigate("/dashboard/settings")}>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Help & Support
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
