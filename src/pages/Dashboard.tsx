import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  Briefcase,
  Trophy,
  Shield,
  FileText,
  Calendar,
  TrendingUp,
  Search,
  Bell,
  HelpCircle,
  User,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const recentApplications = [
    { name: "Priya Sharma", role: "Software Engineer at Googsoft", time: "2 hours ago", status: "New" },
    { name: "Anjali Singh", role: "Applied to Data Analyst at Microsoft", time: "4 days ago", status: "Reviewed" },
    { name: "Kartik Bose", role: "Financial Analyst at PWC", time: "1 day ago", status: "New" },
    { name: "Neha Gupta", role: "Product Manager at Filiprk", time: "1 day ago", status: "Review" },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              Good Morning, Dr. Kumar 👋
            </h1>
            <p className="text-muted-foreground mt-1">Saturday, October 18, 2025</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students, jobs, companies..."
                className="pl-10"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-muted-foreground">+12% vs last year</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Holt Hallstainer</div>
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold">36,847</div>
                <div className="text-sm text-muted-foreground mt-1">Total Students</div>
                <div className="text-xs text-muted-foreground">24 hours ago</div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-destructive">+2 expiring soon</span>
                    <div className="text-sm text-muted-foreground">Job Ready Students</div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold">47</div>
                <div className="text-sm text-muted-foreground mt-1">Active Job Posts</div>
                <div className="text-xs text-muted-foreground">+5 pending month</div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-primary/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Trophy className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <Badge variant="destructive" className="mb-1">5</Badge>
                    <div className="text-sm text-muted-foreground">placement rate (2024-25)</div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-primary">722</div>
                <div className="text-sm text-muted-foreground mt-1">
                  <span className="text-success font-medium">+8%</span> vs proling month
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-muted-foreground">+5 new today</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Review <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-primary/20">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Post New Job</h3>
            <p className="text-sm text-muted-foreground mb-2">Job Ready Students</p>
            <div className="mt-4">
              <div className="text-3xl font-bold">53.5%</div>
              <p className="text-xs text-muted-foreground">13 Issues agy</p>
              <Button size="sm" variant="outline" className="mt-3 border-primary text-primary hover:bg-primary hover:text-white">
                Review <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </Card>

          <Card className="p-6 border-primary/20">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Review</h3>
            <p className="text-sm text-muted-foreground mb-2">Applications</p>
            <Badge variant="destructive" className="mb-2">23</Badge>
            <div className="mt-4">
              <h4 className="font-medium mb-1">Update Students</h4>
              <p className="text-sm text-muted-foreground mb-2">Manage student profiles</p>
              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Review <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </Card>

          <Card className="p-6 border-primary/20">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Schedule</h3>
            <p className="text-sm text-muted-foreground mb-2">Deadliness - Microsoft</p>
            <div className="mt-4">
              <h4 className="font-medium mb-1">Schedule Interviews</h4>
              <p className="text-sm text-muted-foreground mb-2">View detailed partners</p>
              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Review <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Applications</h2>
              <span className="text-sm text-muted-foreground">22.28M ADility</span>
            </div>
            <div className="space-y-4">
              {recentApplications.map((app, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-sm font-semibold">
                      {app.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm">{app.name}</h3>
                      <p className="text-sm text-muted-foreground truncate">{app.role}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={app.status === "New" ? "default" : "secondary"}
                        className={app.status === "New" ? "bg-primary" : ""}
                      >
                        {app.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{app.time}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Today's Interviews</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-4 bg-primary/5 rounded-r-lg">
                  <div className="font-semibold text-lg mb-2">10:00 AM</div>
                  <div className="text-sm text-muted-foreground">45 mins</div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Rahul Verma</div>
                      <div className="text-sm text-muted-foreground">Data Analyst = Microsoft</div>
                    </div>
                  </div>
                </div>

                <Card className="p-4 bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">Add Company</div>
                      <div className="text-sm text-muted-foreground">Vlsna Comylsttnst = Analytics</div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    Join Video Call
                  </Button>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
