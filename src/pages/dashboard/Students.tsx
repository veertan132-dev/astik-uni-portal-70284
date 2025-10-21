import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, Plus, Upload, MoreVertical, Eye, Edit, Trash2, Mail, Phone, MapPin, Calendar, Award, Briefcase } from "lucide-react";
import { toast } from "sonner";

interface Student {
  srn: string;
  name: string;
  department: string;
  year: number;
  phone: string;
  email: string;
  status: "Placed" | "Unplaced";
  cgpa?: string;
  address?: string;
  company?: string;
  package?: string;
}

const Students = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const [students, setStudents] = useState<Student[]>([
    { srn: "CS2024001", name: "Priya Sharma", department: "Computer Science", year: 2024, phone: "+91 9876543210", email: "priya@college.edu", status: "Placed", cgpa: "8.9", address: "Mumbai, Maharashtra", company: "Google", package: "₹42 LPA" },
    { srn: "EC2024005", name: "Rahul Verma", department: "Electronics", year: 2024, phone: "+91 9876543211", email: "rahul@college.edu", status: "Placed", cgpa: "8.7", address: "Pune, Maharashtra", company: "Microsoft", package: "₹38 LPA" },
    { srn: "ME2024010", name: "Anjali Singh", department: "Mechanical", year: 2024, phone: "+91 9876543212", email: "anjali@college.edu", status: "Unplaced", cgpa: "8.5", address: "Delhi, India" },
    { srn: "CS2024015", name: "Kartik Bose", department: "Computer Science", year: 2024, phone: "+91 9876543213", email: "kartik@college.edu", status: "Placed", cgpa: "9.1", address: "Bangalore, Karnataka", company: "Amazon", package: "₹45 LPA" },
    { srn: "CV2024020", name: "Neha Gupta", department: "Civil", year: 2024, phone: "+91 9876543214", email: "neha@college.edu", status: "Unplaced", cgpa: "8.3", address: "Chennai, Tamil Nadu" },
    { srn: "CS2025003", name: "Aditya Mehta", department: "Computer Science", year: 2025, phone: "+91 9876543215", email: "aditya@college.edu", status: "Unplaced", cgpa: "8.8", address: "Kolkata, West Bengal" },
    { srn: "EC2025007", name: "Sneha Patel", department: "Electronics", year: 2025, phone: "+91 9876543216", email: "sneha@college.edu", status: "Placed", cgpa: "8.6", address: "Ahmedabad, Gujarat", company: "Intel", package: "₹35 LPA" },
    { srn: "ME2025011", name: "Arjun Reddy", department: "Mechanical", year: 2025, phone: "+91 9876543217", email: "arjun@college.edu", status: "Unplaced", cgpa: "8.4", address: "Hyderabad, Telangana" },
    { srn: "CS2025016", name: "Divya Krishnan", department: "Computer Science", year: 2025, phone: "+91 9876543218", email: "divya@college.edu", status: "Placed", cgpa: "9.0", address: "Kochi, Kerala", company: "Flipkart", package: "₹40 LPA" },
    { srn: "BT2024008", name: "Rohan Das", department: "Biotech", year: 2024, phone: "+91 9876543219", email: "rohan@college.edu", status: "Unplaced", cgpa: "8.2", address: "Jaipur, Rajasthan" },
  ]);

  const handleUploadCSV = () => {
    const newStudents: Student[] = [
      { srn: "CS2025025", name: "Amit Kumar", department: "Computer Science", year: 2025, phone: "+91 9999999991", email: "amit@college.edu", status: "Unplaced", cgpa: "8.7", address: "Noida, UP" },
      { srn: "EC2025030", name: "Pooja Desai", department: "Electronics", year: 2025, phone: "+91 9999999992", email: "pooja@college.edu", status: "Unplaced", cgpa: "8.5", address: "Surat, Gujarat" },
    ];
    setStudents([...students, ...newStudents]);
    setShowUploadModal(false);
    toast.success("CSV uploaded successfully! 2 new students added.");
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.srn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = departmentFilter === "all" || student.department === departmentFilter;
    const matchesStatus = statusFilter === "all" || student.status === statusFilter;
    return matchesSearch && matchesDept && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Student Database</h1>
          <p className="text-muted-foreground mt-1">Manage all student records</p>
        </div>
        <Button onClick={() => setShowUploadModal(true)} className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Students
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by Name, SRN, or Department..."
              className="pl-11"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Mechanical">Mechanical</SelectItem>
              <SelectItem value="Civil">Civil</SelectItem>
              <SelectItem value="Biotech">Biotech</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Placement Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Placed">Placed</SelectItem>
              <SelectItem value="Unplaced">Unplaced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Students Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">SRN</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Student Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Department</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Year</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Phone</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Placement Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredStudents.map((student) => (
                <tr key={student.srn} className="hover:bg-muted/50 transition-smooth">
                  <td className="px-6 py-4 text-sm font-mono">{student.srn}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold">{student.name}</div>
                    <div className="text-xs text-muted-foreground">{student.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">{student.department}</td>
                  <td className="px-6 py-4 text-sm">{student.year}</td>
                  <td className="px-6 py-4 text-sm">{student.phone}</td>
                  <td className="px-6 py-4">
                    <Badge
                      className={
                        student.status === "Placed"
                          ? "bg-primary/10 text-primary hover:bg-primary/20"
                          : "bg-muted text-muted-foreground hover:bg-muted"
                      }
                    >
                      {student.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-card border shadow-lg z-50">
                        <DropdownMenuItem onClick={() => setSelectedStudent(student)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t bg-muted/20">
          <p className="text-sm text-muted-foreground">
            Showing {filteredStudents.length} of {students.length} students
          </p>
        </div>
      </Card>

      {/* Upload CSV Modal */}
      <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Students</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Upload CSV File</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Select a CSV file containing student data
              </p>
              <Button onClick={handleUploadCSV} className="bg-primary hover:bg-primary/90">
                <Upload className="w-4 h-4 mr-2" />
                Choose File
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Student Profile Modal */}
      <Dialog open={!!selectedStudent} onOpenChange={() => setSelectedStudent(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Student Profile</DialogTitle>
          </DialogHeader>
          {selectedStudent && (
            <div className="space-y-6 py-4">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                  {selectedStudent.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">{selectedStudent.name}</h2>
                  <p className="text-muted-foreground mb-2">{selectedStudent.srn}</p>
                  <Badge
                    className={
                      selectedStudent.status === "Placed"
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }
                  >
                    {selectedStudent.status}
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{selectedStudent.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{selectedStudent.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">{selectedStudent.address}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Department</p>
                      <p className="font-medium">{selectedStudent.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Graduation Year</p>
                      <p className="font-medium">{selectedStudent.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">CGPA</p>
                      <p className="font-medium">{selectedStudent.cgpa}</p>
                    </div>
                  </div>
                </div>
              </div>

              {selectedStudent.status === "Placed" && selectedStudent.company && (
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Placement Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Company</p>
                        <p className="font-medium">{selectedStudent.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Package</p>
                        <p className="font-medium">{selectedStudent.package}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Students;
