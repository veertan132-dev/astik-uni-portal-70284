import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, Plus, MoreVertical, Eye, Edit, XCircle, Briefcase, Calendar, Users } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

interface Job {
  id: string;
  title: string;
  company: string;
  departments: string[];
  status: "Active" | "Completed" | "Draft";
  applicants: number;
  deadline: string;
  description?: string;
}

const Jobs = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [jobs, setJobs] = useState<Job[]>([
    { id: "1", title: "Software Engineer", company: "Google", departments: ["Computer Science"], status: "Active", applicants: 145, deadline: "2025-11-30", description: "Full-stack development role" },
    { id: "2", title: "Data Analyst", company: "Microsoft", departments: ["Computer Science", "Electronics"], status: "Active", applicants: 98, deadline: "2025-11-25", description: "Work with big data and analytics" },
    { id: "3", title: "Mechanical Engineer", company: "Tesla", departments: ["Mechanical"], status: "Active", applicants: 67, deadline: "2025-12-05", description: "Design and development" },
    { id: "4", title: "Financial Analyst", company: "Goldman Sachs", departments: ["MBA", "Economics"], status: "Completed", applicants: 203, deadline: "2025-10-15" },
    { id: "5", title: "Product Manager", company: "Amazon", departments: ["Computer Science", "MBA"], status: "Active", applicants: 124, deadline: "2025-12-10", description: "Lead product strategy" },
    { id: "6", title: "Marketing Executive", company: "Unilever", departments: ["MBA", "BBA"], status: "Draft", applicants: 0, deadline: "2025-12-20" },
  ]);

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob: Job = {
      id: String(jobs.length + 1),
      title: "New Position",
      company: "New Company",
      departments: ["Computer Science"],
      status: "Active",
      applicants: 0,
      deadline: "2025-12-31",
    };
    setJobs([newJob, ...jobs]);
    setShowPostModal(false);
    toast.success("Job posted successfully!");
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Job Postings</h1>
          <p className="text-muted-foreground mt-1">Manage campus placements and external opportunities</p>
        </div>
        <Button onClick={() => setShowPostModal(true)} className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              className="pl-11"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Jobs</p>
              <p className="text-2xl font-bold">47</p>
              <p className="text-xs text-primary">+5 this month</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Applications</p>
              <p className="text-2xl font-bold">1,284</p>
              <p className="text-xs text-orange-600">+143 this week</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expiring Soon</p>
              <p className="text-2xl font-bold">112</p>
              <p className="text-xs text-red-600">+2 expiring soon</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Jobs Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Job Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Company</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Department(s)</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Applicants</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Deadline</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredJobs.map((job) => (
                <tr key={job.id} className="hover:bg-muted/50 transition-smooth">
                  <td className="px-6 py-4">
                    <div className="font-semibold">{job.title}</div>
                    {job.description && (
                      <div className="text-xs text-muted-foreground mt-1">{job.description}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">{job.company}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {job.departments.map((dept, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {dept}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      className={
                        job.status === "Active"
                          ? "bg-primary text-white"
                          : job.status === "Completed"
                          ? "bg-muted text-muted-foreground"
                          : "bg-orange-500/10 text-orange-600"
                      }
                    >
                      {job.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold">{job.applicants}</td>
                  <td className="px-6 py-4 text-sm">{job.deadline}</td>
                  <td className="px-6 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-card border shadow-lg z-50">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <XCircle className="w-4 h-4 mr-2" />
                          Close Job
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Post Job Modal */}
      <Dialog open={showPostModal} onOpenChange={setShowPostModal}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Post New Job</DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePostJob} className="space-y-4 py-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" placeholder="e.g., Software Engineer" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="e.g., Google" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea id="description" rows={4} placeholder="Describe the role, responsibilities, and requirements" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="departments">Department(s) Applicable</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="ec">Electronics</SelectItem>
                    <SelectItem value="me">Mechanical</SelectItem>
                    <SelectItem value="mba">MBA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="active">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline">Application Deadline</Label>
              <Input id="deadline" type="date" required />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                Save Job
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowPostModal(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Jobs;
