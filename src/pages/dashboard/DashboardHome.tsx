import { Users, Briefcase, Trophy, TrendingUp, Award, Target, ArrowUp, Sparkles, UserCheck, Clock, FileCheck, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DashboardHome = () => {
  const stats = [
    {
      title: "Total Students",
      value: "36,847",
      icon: Users,
      trend: "+12%",
      trendText: "vs last year",
      subtitle: "14 hours ago",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-600",
      badge: null,
    },
    {
      title: "Active Jobs",
      value: "47",
      icon: Briefcase,
      trend: "+5",
      trendText: "pending month",
      subtitle: "+2 expiring soon",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-600",
      badge: null,
    },
    {
      title: "Students Placed",
      value: "722",
      icon: Trophy,
      trend: "+8%",
      trendText: "vs pooling month",
      subtitle: "placement rate (2024-25)",
      color: "from-primary to-teal-light",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
      badge: "5",
    },
  ];

  const placementData = [
    { dept: "CS", placements: 250, target: 280 },
    { dept: "Mech", placements: 150, target: 180 },
    { dept: "ECE", placements: 200, target: 220 },
    { dept: "Civil", placements: 112, target: 140 },
    { dept: "Bio", placements: 100, target: 120 },
  ];

  const recentApplications = [
    { name: "Priya Sharma", role: "Software Engineer at Google", time: "2 hours ago", status: "New", color: "bg-primary" },
    { name: "Anjali Singh", role: "Data Analyst at Microsoft", time: "4 hours ago", status: "Reviewed", color: "bg-blue-600" },
    { name: "Kartik Bose", role: "Financial Analyst at PWC", time: "1 day ago", status: "New", color: "bg-primary" },
    { name: "Neha Gupta", role: "Product Manager at Flipkart", time: "1 day ago", status: "Review", color: "bg-orange-600" },
  ];

  return (
    <div className="space-y-8">
      {/* Greeting Section with Gradient Background */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-teal-light to-blue-600 p-8 text-white shadow-premium">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold flex items-center gap-3 mb-2">
              Good Morning, Dr. Kumar 
              <span className="text-5xl">👋</span>
            </h1>
            <p className="text-white/90 text-lg">Saturday, October 18, 2025</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-white/80">Overall Progress</p>
              <p className="text-3xl font-bold">+12%</p>
            </div>
            <Sparkles className="w-12 h-12 text-yellow-300" />
          </div>
        </div>
      </div>

      {/* Enhanced Stats Cards with Borders */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-primary" />
          Quick Overview
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center shadow-lg`}>
                      <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                    </div>
                    {stat.badge && (
                      <div className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        <Sparkles className="w-3 h-3" />
                        {stat.badge} new today
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                      {stat.value}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10">
                        <ArrowUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-primary">{stat.trend}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{stat.trendText}</span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                  </div>
                  
                  {index === 2 && (
                    <Button size="sm" className="mt-4 w-full bg-gradient-to-r from-primary to-teal-light hover:shadow-lg transition-all">
                      Review Details →
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Action Cards with Modern Design */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="relative p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-teal-light flex items-center justify-center shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">Post New Job</h3>
                <p className="text-sm text-muted-foreground mb-3">Job Ready Students</p>
                <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-teal-light bg-clip-text text-transparent">53.5%</div>
                <p className="text-xs text-muted-foreground mb-4">13 Issues ago</p>
                <Button size="sm" className="bg-gradient-to-r from-primary to-teal-light hover:shadow-lg transition-all">
                  Review →
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-blue-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
          <div className="relative p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-lg">Review</h3>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    23
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Applications</p>
                <h4 className="font-semibold mb-1">Update Students</h4>
                <p className="text-sm text-muted-foreground mb-4">Manage student profiles</p>
                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg transition-all">
                  Review →
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-orange-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
          <div className="relative p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">Schedule</h3>
                <p className="text-sm text-muted-foreground mb-3">Destinities - Microsoft</p>
                <h4 className="font-semibold mb-1">Schedule Interviews</h4>
                <p className="text-sm text-muted-foreground mb-4">View detailed partners</p>
                <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg transition-all">
                  Review →
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts & Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 shadow-premium hover:shadow-2xl transition-all border-2 border-primary/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Placements by Department
              </h3>
              <span className="text-sm text-muted-foreground">Year 2024</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={placementData}>
                <defs>
                  <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1AB394" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#1AB394" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="dept" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.2)' 
                  }}
                />
                <Bar dataKey="placements" fill="url(#colorBar)" radius={[12, 12, 0, 0]} />
                <Bar dataKey="target" fill="#E5E7EB" radius={[12, 12, 0, 0]} opacity={0.3} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <Card className="p-6 shadow-premium hover:shadow-2xl transition-all border-2 border-primary/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" />
                Recent Applications
              </h3>
              <span className="text-xs text-muted-foreground">22.28M Ability</span>
            </div>
            <div className="space-y-3">
              {recentApplications.map((app, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all cursor-pointer border border-transparent hover:border-primary/20"
                >
                  <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                    <AvatarFallback className={`bg-gradient-to-br ${app.color} text-white text-sm font-bold`}>
                      {app.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{app.name}</h4>
                    <p className="text-xs text-muted-foreground truncate">{app.role}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{app.time}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        app.status === "New" 
                          ? "bg-gradient-to-r from-primary to-teal-light text-white" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
