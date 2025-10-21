import { Users, Briefcase, Trophy, Building2, TrendingUp, Clock, FileCheck, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const DashboardHome = () => {
  const stats = [
    {
      title: "Total Students",
      value: "36,847",
      icon: Users,
      trend: "+12% vs last year",
      subtitle: "14 hours ago",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Active Jobs",
      value: "47",
      icon: Briefcase,
      trend: "+2 expiring soon",
      subtitle: "+5 pending month",
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      title: "Students Placed",
      value: "722",
      icon: Trophy,
      trend: "+8% vs pooling month",
      subtitle: "placement rate (2024-25)",
      color: "bg-primary/10 text-primary",
      badge: "5 new today",
    },
  ];

  const placementData = [
    { dept: "CS", placements: 250 },
    { dept: "Mech", placements: 150 },
    { dept: "ECE", placements: 200 },
    { dept: "Civil", placements: 112 },
    { dept: "Bio", placements: 100 },
  ];

  const trendData = [
    { month: "Jan", rate: 65 },
    { month: "Feb", rate: 68 },
    { month: "Mar", rate: 72 },
    { month: "Apr", rate: 75 },
    { month: "May", rate: 78 },
    { month: "Jun", rate: 82 },
    { month: "Jul", rate: 85 },
    { month: "Aug", rate: 88 },
  ];

  const statusData = [
    { name: "Placed", value: 722, color: "#1AB394" },
    { name: "Unplaced", value: 442, color: "#E5E7EB" },
  ];

  const recentApplications = [
    { name: "Priya Sharma", role: "Apfitware Engineer at Goosoft", time: "2 hours ago", status: "New" },
    { name: "Anjali Singh", role: "Applied to Data Analyst at Microsoft", time: "4 hours ago", status: "Reviewed" },
    { name: "Kartik Bose", role: "Financial Analyst at PWC", time: "day ago", status: "New" },
    { name: "Neha Gupta", role: "Product Manager at Flipk|k", time: "day ago", status: "Review" },
  ];

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            Good Morning, Dr. Kumar 👋
          </h1>
          <p className="text-muted-foreground mt-1">Saturday, October 18, 2025</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-premium transition-smooth">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {stat.badge && (
                    <span className="bg-destructive text-destructive-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      {stat.badge}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary font-medium">{stat.trend}</span>
                    {index === 0 && <TrendingUp className="w-4 h-4 text-primary" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                </div>
                {index === 2 && (
                  <Button size="sm" className="mt-4 w-full bg-primary hover:bg-primary/90">
                    Review →
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 border-2 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Post New Job</h3>
              <p className="text-sm text-muted-foreground mb-3">Job Ready Students</p>
              <div className="text-2xl font-bold mb-1">53.5%</div>
              <p className="text-xs text-muted-foreground mb-3">13 Issues agy</p>
              <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Review →
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileCheck className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold">Review</h3>
                <span className="bg-destructive text-destructive-foreground text-xs font-semibold px-2 py-1 rounded-full">
                  23
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Applications</p>
              <h4 className="font-semibold mb-1">Update Students</h4>
              <p className="text-sm text-muted-foreground mb-3">Manage student profiles</p>
              <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Review →
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Schedule</h3>
              <p className="text-sm text-muted-foreground mb-3">Destinitites - Microsoft</p>
              <h4 className="font-semibold mb-1">Schedule Interviews</h4>
              <p className="text-sm text-muted-foreground mb-3">View detailed partners</p>
              <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Review →
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts & Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Charts */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Placements by Department (Year 2024)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={placementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="dept" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip />
                <Bar dataKey="placements" fill="#1AB394" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Placement Rate Trend (Last 8 Months)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#1AB394" strokeWidth={3} dot={{ fill: "#1AB394", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Recent Applications</h3>
              <span className="text-xs text-muted-foreground">22.28M ADility</span>
            </div>
            <div className="space-y-3">
              {recentApplications.map((app, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary text-white text-sm">
                      {app.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm">{app.name}</h4>
                    <p className="text-xs text-muted-foreground truncate">{app.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{app.time}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        app.status === "New" ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                      }`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Today's Interviews</h3>
            <div className="space-y-4">
              <div className="p-4 border-2 border-primary/30 rounded-lg bg-primary/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold">10:00 AM</span>
                  <span className="text-xs text-muted-foreground">Oct 18</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">45 mins</p>
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary text-white">RV</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-sm">Rahul Verma</h4>
                    <p className="text-xs text-muted-foreground">Data Analyst = Microsoft</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-primary/30 rounded-lg bg-primary/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Add Company</h4>
                    <p className="text-xs text-muted-foreground">Vista Comyllstnet = Analytics</p>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Join Video Call
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
