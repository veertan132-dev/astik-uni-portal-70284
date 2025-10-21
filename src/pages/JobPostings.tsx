import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Briefcase, MoreVertical, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const JobPostings = () => {
  const jobs = [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      departments: ["B.Tech CS", "M.Tech CS"],
      status: "Active",
      hiredCount: 12,
      deadline: "12/31/2024",
    },
    {
      title: "Mechanical Design Engineer",
      company: "AutoMotive Inc",
      departments: ["B.Tech Mechanical"],
      status: "Active",
      hiredCount: 8,
      deadline: "11/30/2024",
    },
    {
      title: "Business Analyst",
      company: "Consulting Group",
      departments: ["MBA", "BBA"],
      status: "Completed",
      hiredCount: 5,
      deadline: "10/15/2024",
    },
    {
      title: "Electronics Engineer",
      company: "Circuit Solutions",
      departments: ["B.Tech Electronics"],
      status: "Active",
      hiredCount: 6,
      deadline: "12/15/2024",
    },
    {
      title: "Civil Project Manager",
      company: "BuildRight",
      departments: ["B.Tech Civil"],
      status: "Active",
      hiredCount: 3,
      deadline: "1/20/2025",
    },
    {
      title: "Data Scientist",
      company: "DataTech",
      departments: ["B.Tech CS", "M.Tech CS"],
      status: "Active",
      hiredCount: 10,
      deadline: "12/20/2024",
    },
    {
      title: "Biotech Researcher",
      company: "BioLife Labs",
      departments: ["B.Tech Biotech"],
      status: "Draft",
      hiredCount: 0,
      deadline: "2/28/2025",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Manage Job Postings</h1>
            <p className="text-muted-foreground">Create and track placement opportunities</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Briefcase className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by Job Title or Company..."
              className="pl-10"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Jobs Table */}
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Job Title</TableHead>
                <TableHead className="font-semibold">Company</TableHead>
                <TableHead className="font-semibold">Department(s)</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Hired Count</TableHead>
                <TableHead className="font-semibold">Deadline</TableHead>
                <TableHead className="font-semibold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      {job.departments.map((dept, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {dept}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        job.status === "Active"
                          ? "default"
                          : job.status === "Completed"
                          ? "secondary"
                          : "outline"
                      }
                      className={
                        job.status === "Active"
                          ? "bg-success"
                          : job.status === "Draft"
                          ? "bg-warning text-white"
                          : ""
                      }
                    >
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold">{job.hiredCount}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {job.deadline}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobPostings;
