import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, Plus, MoreVertical, Eye, Edit, XCircle, Briefcase, Calendar, Users, Upload, FileText, Building2 } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface Job {
  id: string;
  title: string;
  company: string;
  logo?: string;
  departments: string[];
  status: "Active" | "Completed" | "Draft";
  applicants: number;
  deadline: string;
  description?: string;
  skills?: string[];
  studentStatus?: string[];
  eligibility?: {
    tenth?: string;
    twelfth?: string;
    ug?: string;
    specificSkills?: string[];
  };
}

const Jobs = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [editJob, setEditJob] = useState<Job | null>(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [postJobStep, setPostJobStep] = useState(1);
  const [newJob, setNewJob] = useState<Partial<Job>>({
    title: "",
    company: "",
    description: "",
    departments: [],
    skills: [],
    status: "Active",
    studentStatus: ["All"],
    eligibility: {},
  });

  const companyLogos: { [key: string]: string } = {
    "Google": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    "Microsoft": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b",
    "Amazon": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "Tesla": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  };

  const [jobs, setJobs] = useState<Job[]>([
    { id: "1", title: "Software Engineer", company: "Google", logo: companyLogos["Google"], departments: ["Computer Science"], status: "Active", applicants: 145, deadline: "2025-11-30", description: "Full-stack development role", skills: ["React", "Node.js", "Python"], studentStatus: ["All"], eligibility: { tenth: "75%", twelfth: "75%", ug: "7.5 CGPA" } },
    { id: "2", title: "Data Analyst", company: "Microsoft", logo: companyLogos["Microsoft"], departments: ["Computer Science", "Electronics"], status: "Active", applicants: 98, deadline: "2025-11-25", description: "Work with big data and analytics", skills: ["Python", "SQL", "Power BI"], studentStatus: ["Unplaced"], eligibility: { tenth: "70%", twelfth: "70%", ug: "7.0 CGPA" } },
    { id: "3", title: "Product Manager", company: "Amazon", logo: companyLogos["Amazon"], departments: ["Computer Science", "MBA"], status: "Active", applicants: 124, deadline: "2025-12-10", description: "Lead product strategy", skills: ["Product Management", "Agile"], studentStatus: ["All"], eligibility: { tenth: "80%", twelfth: "80%", ug: "8.0 CGPA" } },
    { id: "4", title: "Mechanical Engineer", company: "Tesla", logo: companyLogos["Tesla"], departments: ["Mechanical"], status: "Active", applicants: 67, deadline: "2025-12-05", description: "Design and development", skills: ["AutoCAD", "SolidWorks"], studentStatus: ["Unplaced"], eligibility: { tenth: "75%", twelfth: "75%", ug: "7.5 CGPA" } },
  ]);

  const handlePostJob = () => {
    if (postJobStep === 1) {
      setPostJobStep(2);
    } else {
      const job: Job = {
        id: String(jobs.length + 1),
        title: newJob.title || "New Position",
        company: newJob.company || "New Company",
        logo: companyLogos[newJob.company || ""],
        departments: newJob.departments || [],
        status: (newJob.status as "Active" | "Draft") || "Active",
        applicants: 0,
        deadline: newJob.deadline || "2025-12-31",
        description: newJob.description,
        skills: newJob.skills,
        studentStatus: newJob.studentStatus,
        eligibility: newJob.eligibility,
      };
      setJobs([job, ...jobs]);
      setShowPostModal(false);
      setPostJobStep(1);
      setNewJob({
        title: "",
        company: "",
        description: "",
        departments: [],
        skills: [],
        status: "Active",
        studentStatus: ["All"],
        eligibility: {},
      });
      toast.success("Job posted successfully!");
    }
  };

  const handleEditSave = () => {
    if (editJob) {
      setJobs(jobs.map(j => j.id === editJob.id ? editJob : j));
      setSelectedJob(null);
      setEditJob(null);
      toast.success("Job updated successfully!");
    }
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
      <Card className="p-4 border-2 border-primary/20">
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
        <Card className="p-6 border-2 border-primary/20 hover:shadow-lg transition-all">
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
        <Card className="p-6 border-2 border-orange-500/20 hover:shadow-lg transition-all">
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
        <Card className="p-6 border-2 border-red-500/20 hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expiring Soon</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-red-600">Within 7 days</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Jobs Table */}
      <Card className="overflow-hidden border-2 border-primary/20">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Company</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Job Title</th>
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
                    <div className="flex items-center gap-3">
                      {job.logo ? (
                        <img src={job.logo} alt={job.company} className="h-8 object-contain" />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-primary" />
                        </div>
                      )}
                      <span className="font-semibold">{job.company}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold">{job.title}</div>
                    {job.description && (
                      <div className="text-xs text-muted-foreground mt-1">{job.description}</div>
                    )}
                  </td>
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
                        <DropdownMenuItem onClick={() => setSelectedJob(job)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                          setSelectedJob(job);
                          setEditJob(job);
                        }}>
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

      {/* Post Job Modal - 2 Steps */}
      <Dialog open={showPostModal} onOpenChange={(open) => {
        setShowPostModal(open);
        if (!open) {
          setPostJobStep(1);
          setNewJob({
            title: "",
            company: "",
            description: "",
            departments: [],
            skills: [],
            status: "Active",
            studentStatus: ["All"],
            eligibility: {},
          });
        }
      }}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Post New Job - Step {postJobStep} of 2</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {postJobStep === 1 && (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title *</Label>
                    <Input 
                      id="job-title" 
                      placeholder="e.g., Software Engineer" 
                      value={newJob.title}
                      onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input 
                      id="company" 
                      placeholder="e.g., Google" 
                      value={newJob.company}
                      onChange={(e) => setNewJob({...newJob, company: e.target.value})}
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Job Description *</Label>
                  <Textarea 
                    id="description" 
                    rows={4} 
                    placeholder="Describe the role, responsibilities, and requirements"
                    value={newJob.description}
                    onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <Upload className="w-4 h-4 text-muted-foreground" />
                    <Label className="text-sm text-muted-foreground cursor-pointer hover:text-primary">
                      Or upload PDF job description
                      <Input type="file" accept=".pdf" className="hidden" />
                    </Label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Department(s) Applicable *</Label>
                    <div className="space-y-2">
                      {["Computer Science", "Electronics", "Mechanical", "Civil", "MBA"].map((dept) => (
                        <div key={dept} className="flex items-center gap-2">
                          <Checkbox 
                            checked={newJob.departments?.includes(dept)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setNewJob({...newJob, departments: [...(newJob.departments || []), dept]});
                              } else {
                                setNewJob({...newJob, departments: newJob.departments?.filter(d => d !== dept)});
                              }
                            }}
                          />
                          <Label className="text-sm">{dept}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skills">Job Required Skills *</Label>
                    <Input 
                      id="skills" 
                      placeholder="e.g., React, Node.js (comma separated)"
                      onChange={(e) => setNewJob({...newJob, skills: e.target.value.split(',').map(s => s.trim())})}
                    />
                  </div>
                </div>
              </>
            )}

            {postJobStep === 2 && (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status *</Label>
                    <Select 
                      value={newJob.status}
                      onValueChange={(value) => setNewJob({...newJob, status: value as "Active" | "Draft"})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Draft">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Application Deadline *</Label>
                    <Input 
                      id="deadline" 
                      type="date"
                      value={newJob.deadline}
                      onChange={(e) => setNewJob({...newJob, deadline: e.target.value})}
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Student Status *</Label>
                  <div className="flex gap-4">
                    {["All", "Placed", "Unplaced"].map((status) => (
                      <div key={status} className="flex items-center gap-2">
                        <Checkbox 
                          checked={newJob.studentStatus?.includes(status)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setNewJob({...newJob, studentStatus: [...(newJob.studentStatus || []), status]});
                            } else {
                              setNewJob({...newJob, studentStatus: newJob.studentStatus?.filter(s => s !== status)});
                            }
                          }}
                        />
                        <Label className="text-sm">{status}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Eligibility Criteria *</Label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tenth">10th Marks</Label>
                      <Input 
                        id="tenth" 
                        placeholder="e.g., 75%"
                        onChange={(e) => setNewJob({...newJob, eligibility: {...newJob.eligibility, tenth: e.target.value}})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twelfth">12th Marks</Label>
                      <Input 
                        id="twelfth" 
                        placeholder="e.g., 75%"
                        onChange={(e) => setNewJob({...newJob, eligibility: {...newJob.eligibility, twelfth: e.target.value}})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ug">UG Marks/CGPA</Label>
                      <Input 
                        id="ug" 
                        placeholder="e.g., 7.5 CGPA"
                        onChange={(e) => setNewJob({...newJob, eligibility: {...newJob.eligibility, ug: e.target.value}})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specific-skills">Specific Skills Required</Label>
                    <Input 
                      id="specific-skills" 
                      placeholder="e.g., Python, Java (comma separated)"
                      onChange={(e) => setNewJob({...newJob, eligibility: {...newJob.eligibility, specificSkills: e.target.value.split(',').map(s => s.trim())}})}
                    />
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-3 pt-4">
              {postJobStep === 2 && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setPostJobStep(1)}
                  className="flex-1"
                >
                  Back
                </Button>
              )}
              <Button 
                onClick={handlePostJob} 
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                {postJobStep === 1 ? "Next" : "Save Job"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* View/Edit Job Details Sheet */}
      <Sheet open={!!selectedJob} onOpenChange={() => {
        setSelectedJob(null);
        setEditJob(null);
      }}>
        <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <span>{editJob ? "Edit Job" : "Job Details"}</span>
              {!editJob && selectedJob && (
                <Button size="sm" onClick={() => setEditJob(selectedJob)} className="bg-primary hover:bg-primary/90">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              )}
            </SheetTitle>
          </SheetHeader>
          {selectedJob && (
            <div className="space-y-6 py-6">
              <Card className="p-6 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-start gap-4 mb-4">
                  {selectedJob.logo ? (
                    <img src={selectedJob.logo} alt={selectedJob.company} className="h-12 object-contain" />
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-1">{editJob ? <Input value={editJob.title} onChange={(e) => setEditJob({...editJob, title: e.target.value})} /> : selectedJob.title}</h2>
                    <p className="text-lg text-muted-foreground">{editJob ? <Input value={editJob.company} onChange={(e) => setEditJob({...editJob, company: e.target.value})} /> : selectedJob.company}</p>
                  </div>
                </div>
                <Badge
                  className={
                    selectedJob.status === "Active"
                      ? "bg-primary text-white"
                      : selectedJob.status === "Completed"
                      ? "bg-muted text-muted-foreground"
                      : "bg-orange-500/10 text-orange-600"
                  }
                >
                  {selectedJob.status}
                </Badge>
              </Card>

              <Card className="p-6 border-2 border-primary/20">
                <h3 className="font-bold text-lg mb-4">Job Description</h3>
                {editJob ? (
                  <Textarea value={editJob.description} onChange={(e) => setEditJob({...editJob, description: e.target.value})} rows={4} />
                ) : (
                  <p className="text-muted-foreground">{selectedJob.description}</p>
                )}
              </Card>

              <Card className="p-6 border-2 border-primary/20">
                <h3 className="font-bold text-lg mb-4">Details</h3>
                <div className="grid gap-4">
                  <div>
                    <Label>Departments</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedJob.departments.map((dept, index) => (
                        <Badge key={index} variant="outline">{dept}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Required Skills</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedJob.skills?.map((skill, index) => (
                        <Badge key={index} className="bg-primary/10 text-primary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Applicants</Label>
                      <p className="font-semibold text-lg">{selectedJob.applicants}</p>
                    </div>
                    <div>
                      <Label>Deadline</Label>
                      <p className="font-semibold text-lg">{selectedJob.deadline}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-primary/20">
                <h3 className="font-bold text-lg mb-4">Eligibility Criteria</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label>10th Marks</Label>
                    <p className="font-semibold">{selectedJob.eligibility?.tenth || "N/A"}</p>
                  </div>
                  <div>
                    <Label>12th Marks</Label>
                    <p className="font-semibold">{selectedJob.eligibility?.twelfth || "N/A"}</p>
                  </div>
                  <div>
                    <Label>UG Marks/CGPA</Label>
                    <p className="font-semibold">{selectedJob.eligibility?.ug || "N/A"}</p>
                  </div>
                </div>
              </Card>

              {editJob && (
                <div className="flex gap-3 pt-4">
                  <Button onClick={handleEditSave} className="flex-1 bg-primary hover:bg-primary/90">
                    Save Changes
                  </Button>
                  <Button 
                    onClick={() => setEditJob(null)} 
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Jobs;
