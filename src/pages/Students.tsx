import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Eye,
  MoreVertical,
  Users,
  FileText,
  X,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Students = () => {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const students = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.sharma@iitb.ac.in",
      phone: "+91 98765 43210",
      department: "Computer Science",
      batch: "2024",
      cgpa: "8.5",
      status: "Active - Seeking Placement",
      skills: ["Python", "Machine Learning", "Tensorflow"],
      location: "Mumbai, Maharashtra",
      registrations: 12,
      applications: 8,
    },
    {
      id: 2,
      name: "Rahul Kumar",
      email: "rahul.kumar@iitb.ac.in",
      phone: "+91 98765 43211",
      department: "Information Technology",
      batch: "2024",
      cgpa: "9.2",
      status: "Placed",
      skills: ["Java", "Spring Boot", "AWS"],
      location: "Delhi, India",
      registrations: 15,
      applications: 10,
    },
    {
      id: 3,
      name: "Anjali Verma",
      email: "anjali.verma@iitb.ac.in",
      phone: "+91 98765 43212",
      department: "Data Science",
      batch: "2024",
      cgpa: "8.8",
      status: "Active - Seeking Placement",
      skills: ["Python", "SQL", "Tableau"],
      location: "Bangalore, Karnataka",
      registrations: 10,
      applications: 6,
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>Dashboard</span>
              <span>›</span>
              <span className="text-foreground">Students</span>
            </div>
            <h1 className="text-3xl font-bold">Students</h1>
            <p className="text-muted-foreground">Manage student profiles and placement readiness</p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="bg-primary hover:bg-primary/90">
              + Add Student
            </Button>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Import CSV
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total Students</div>
                <div className="text-2xl font-bold">847</div>
                <div className="text-xs text-muted-foreground">Active profiles</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Registered Students<br />Updated today</span>
              <span className="text-sm font-medium text-success">+12 this week</span>
            </div>
          </Card>

          <Card className="p-6 border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Placement Ready</div>
                <div className="text-2xl font-bold">456</div>
                <div className="text-xs text-muted-foreground">Eligible students</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Ready for placements<br />2024-25 batch</span>
              <Badge className="bg-primary">Active</Badge>
            </div>
          </Card>

          <Card className="p-6 border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <Badge className="bg-success mb-1">85%</Badge>
                <div className="text-sm text-muted-foreground">Placement Rate<br />Last year success</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Overall performance<br />2023-24</span>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                View Report →
              </Button>
            </div>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students by name, department, or skills..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">View All →</Button>
        </div>

        {/* Students List */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Student Profiles</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">Filter</Button>
              <Button variant="ghost" size="sm">Sort</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {students.map((student) => (
              <Card key={student.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-lg font-semibold text-primary">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">{student.department} • {student.batch}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">CGPA</div>
                      <div className="text-lg font-bold text-primary">{student.cgpa}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Applications</div>
                      <div className="text-lg font-bold">{student.applications}</div>
                    </div>
                    <Badge className={student.status === "Placed" ? "bg-success" : "bg-primary"}>
                      {student.status}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Action
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSelectedStudent(student)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Profile View Dialog */}
      <Dialog open={!!selectedStudent} onOpenChange={() => setSelectedStudent(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-xl font-semibold text-primary">
                  {selectedStudent?.name?.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold">{selectedStudent?.name}</DialogTitle>
                  <p className="text-sm text-muted-foreground">{selectedStudent?.department} • {selectedStudent?.batch}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setSelectedStudent(null)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Quickview Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quickview</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">{selectedStudent?.cgpa}</div>
                  <div className="text-sm text-muted-foreground mt-1">CGPA</div>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">{selectedStudent?.registrations}</div>
                  <div className="text-sm text-muted-foreground mt-1">Registrations</div>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{selectedStudent?.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{selectedStudent?.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{selectedStudent?.location}</span>
                </div>
              </div>
            </div>

            {/* Expert Status */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Expert Status</h3>
              <Badge className={selectedStudent?.status === "Placed" ? "bg-success text-white" : "bg-primary text-white"}>
                {selectedStudent?.status}
              </Badge>
            </div>

            {/* Skills & Recommended Jobs */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Responsibilities (Optional)</h3>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-3">Technical Skills:</p>
                <div className="flex gap-2 flex-wrap">
                  {selectedStudent?.skills?.map((skill: string, i: number) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t">
              <Button variant="outline" className="flex-1">
                Send Message
              </Button>
              <Button variant="outline" className="flex-1">
                Export Profile
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Save Notes
              </Button>
              <Button variant="outline">Next</Button>
              <Button variant="outline" onClick={() => setSelectedStudent(null)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default Students;
