import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Users,
  Briefcase,
  BarChart3,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  Home,
  UserCog,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Students", path: "/dashboard/students" },
    { icon: Briefcase, label: "Job Postings", path: "/dashboard/jobs" },
    { icon: UserCog, label: "User Management", path: "/dashboard/users" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-navy text-white flex flex-col">
        <div className="p-6 border-b border-navy-light">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold">astikLearn</h1>
              <p className="text-xs text-primary">for Universities</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-navy-light rounded-lg p-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-sm font-semibold">
              IT
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate">IIT Bombay</div>
              <div className="flex items-center gap-1 text-xs text-primary">
                <span>Verified</span>
                <CheckCircle2 className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-300 hover:bg-navy-light hover:text-white"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-navy-light">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-white hover:bg-navy-light"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>

          <div className="mt-4 p-3 bg-navy-light rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">RK</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium truncate">Dr. Rajesh Kumar</div>
                <div className="text-xs text-gray-400">Placement Officer</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
