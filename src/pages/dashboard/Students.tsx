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
import { Search, Plus, Upload, MoreVertical, Eye, Edit, Trash2, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap, Code, X } from "lucide-react";
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
  tenthMarks?: string;
  twelfthMarks?: string;
  ugMarks?: string;
  skills?: string[];
}

const Students = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const [students, setStudents] = useState<Student[]>([
    { srn: "CS2024001", name: "Priya Sharma", department: "Computer Science", year: 2024, phone: "+91 9876543210", email: "priya@college.edu", status: "Placed", cgpa: "8.9", address: "Mumbai, Maharashtra", company: "Google", package: "₹42 LPA", tenthMarks: "95%", twelfthMarks: "92%", ugMarks: "8.9 CGPA", skills: ["React", "Node.js", "Python", "AWS"] },
    { srn: "EC2024005", name: "Rahul Verma", department: "Electronics", year: 2024, phone: "+91 9876543211", email: "rahul@college.edu", status: "Placed", cgpa: "8.7", address: "Pune, Maharashtra", company: "Microsoft", package: "₹38 LPA", tenthMarks: "93%", twelfthMarks: "90%", ugMarks: "8.7 CGPA", skills: ["C++", "Java", "Cloud Computing"] },
    { srn: "ME2024010", name: "Anjali Singh", department: "Mechanical", year: 2024, phone: "+91 9876543212", email: "anjali@college.edu", status: "Unplaced", cgpa: "8.5", address: "Delhi, India", tenthMarks: "91%", twelfthMarks: "88%", ugMarks: "8.5 CGPA", skills: ["AutoCAD", "SolidWorks", "MATLAB"] },
    { srn: "CS2024015", name: "Kartik Bose", department: "Computer Science", year: 2024, phone: "+91 9876543213", email: "kartik@college.edu", status: "Placed", cgpa: "9.1", address: "Bangalore, Karnataka", company: "Amazon", package: "₹45 LPA", tenthMarks: "96%", twelfthMarks: "94%", ugMarks: "9.1 CGPA", skills: ["JavaScript", "TypeScript", "React", "MongoDB"] },
    { srn: "CV2024020", name: "Neha Gupta", department: "Civil", year: 2024, phone: "+91 9876543214", email: "neha@college.edu", status: "Unplaced", cgpa: "8.3", address: "Chennai, Tamil Nadu", tenthMarks: "89%", twelfthMarks: "86%", ugMarks: "8.3 CGPA", skills: ["Revit", "Staad Pro", "Civil 3D"] },
    { srn: "CS2025003", name: "Aditya Mehta", department: "Computer Science", year: 2025, phone: "+91 9876543215", email: "aditya@college.edu", status: "Unplaced", cgpa: "8.8", address: "Kolkata, West Bengal", tenthMarks: "94%", twelfthMarks: "91%", ugMarks: "8.8 CGPA", skills: ["Python", "Django", "PostgreSQL"] },
    { srn: "EC2025007", name: "Sneha Patel", department: "Electronics", year: 2025, phone: "+91 9876543216", email: "sneha@college.edu", status: "Placed", cgpa: "8.6", address: "Ahmedabad, Gujarat", company: "Intel", package: "₹35 LPA", tenthMarks: "92%", twelfthMarks: "89%", ugMarks: "8.6 CGPA", skills: ["VLSI", "Embedded Systems", "IoT"] },
    { srn: "ME2025011", name: "Arjun Reddy", department: "Mechanical", year: 2025, phone: "+91 9876543217", email: "arjun@college.edu", status: "Unplaced", cgpa: "8.4", address: "Hyderabad, Telangana", tenthMarks: "90%", twelfthMarks: "87%", ugMarks: "8.4 CGPA", skills: ["CAD", "CAM", "Thermodynamics"] },
    { srn: "CS2025016", name: "Divya Krishnan", department: "Computer Science", year: 2025, phone: "+91 9876543218", email: "divya@college.edu", status: "Placed", cgpa: "9.0", address: "Kochi, Kerala", company: "Flipkart", package: "₹40 LPA", tenthMarks: "95%", twelfthMarks: "93%", ugMarks: "9.0 CGPA", skills: ["Machine Learning", "Data Science", "Python"] },
    { srn: "BT2024008", name: "Rohan Das", department: "Biotech", year: 2024, phone: "+91 9876543219", email: "rohan@college.edu", status: "Unplaced", cgpa: "8.2", address: "Jaipur, Rajasthan", tenthMarks: "88%", twelfthMarks: "85%", ugMarks: "8.2 CGPA", skills: ["Molecular Biology", "Genetics", "Bioinformatics"] },
  ]);

  const [editedStudent, setEditedStudent] = useState<Student | null>(null);

  const handleUploadCSV = () => {
    const newStudents: Student[] = [
      { srn: "CS2025025", name: "Amit Kumar", department: "Computer Science", year: 2025, phone: "+91 9999999991", email: "amit@college.edu", status: "Unplaced", cgpa: "8.7", address: "Noida, UP", tenthMarks: "92%", twelfthMarks: "90%", ugMarks: "8.7 CGPA", skills: ["Java", "Spring Boot"] },
      { srn: "EC2025030", name: "Pooja Desai", department: "Electronics", year: 2025, phone: "+91 9999999992", email: "pooja@college.edu", status: "Unplaced", cgpa: "8.5", address: "Surat, Gujarat", tenthMarks: "90%", twelfthMarks: "88%", ugMarks: "8.5 CGPA", skills: ["Circuit Design", "PCB"] },
    ];
    setStudents([...students, ...newStudents]);
    setShowUploadModal(false);
    toast.success("CSV uploaded successfully! 2 new students added.");
  };

  const handleEditSave = () => {
    if (editedStudent) {
      setStudents(students.map(s => s.srn === editedStudent.srn ? editedStudent : s));
      setSelectedStudent(editedStudent);
      setEditMode(false);
      toast.success("Student profile updated successfully!");
    }
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
      <Card className="p-4 border-2 border-primary/20">
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
      <Card className="overflow-hidden border-2 border-primary/20">
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
                        <DropdownMenuItem onClick={() => {
                          setSelectedStudent(student);
                          setEditedStudent(student);
                        }}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                          setSelectedStudent(student);
                          setEditedStudent(student);
                          setEditMode(true);
                        }}>
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

      {/* Student Profile Side Sheet */}
      <Sheet open={!!selectedStudent} onOpenChange={() => {
        setSelectedStudent(null);
        setEditMode(false);
      }}>
        <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <span>{editMode ? "Edit Student Profile" : "Student Profile"}</span>
              {!editMode && selectedStudent && (
                <Button size="sm" onClick={() => setEditMode(true)} className="bg-primary hover:bg-primary/90">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              )}
            </SheetTitle>
          </SheetHeader>
          {editedStudent && (
            <div className="space-y-6 py-6">
              {/* Header Section */}
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border-2 border-primary/20">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary ring-4 ring-primary/20">
                  {editedStudent.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1">
                  {editMode ? (
                    <Input 
                      value={editedStudent.name} 
                      onChange={(e) => setEditedStudent({...editedStudent, name: e.target.value})}
                      className="text-2xl font-bold mb-2"
                    />
                  ) : (
                    <h2 className="text-2xl font-bold mb-1">{editedStudent.name}</h2>
                  )}
                  <p className="text-muted-foreground mb-2">{editedStudent.srn}</p>
                  <Badge
                    className={
                      editedStudent.status === "Placed"
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }
                  >
                    {editedStudent.status}
                  </Badge>
                </div>
              </div>

              {/* Contact Information */}
              <Card className="p-6 border-2 border-primary/20">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    {editMode ? (
                      <Input value={editedStudent.email} onChange={(e) => setEditedStudent({...editedStudent, email: e.target.value})} />
                    ) : (
                      <p className="font-medium">{editedStudent.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    {editMode ? (
                      <Input value={editedStudent.phone} onChange={(e) => setEditedStudent({...editedStudent, phone: e.target.value})} />
                    ) : (
                      <p className="font-medium">{editedStudent.phone}</p>
                    )}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Address</Label>
                    {editMode ? (
                      <Input value={editedStudent.address} onChange={(e) => setEditedStudent({...editedStudent, address: e.target.value})} />
                    ) : (
                      <p className="font-medium">{editedStudent.address}</p>
                    )}
                  </div>
                </div>
              </Card>

              {/* Academic Details */}
              <Card className="p-6 border-2 border-primary/20">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Academic Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Department</Label>
                    <p className="font-medium">{editedStudent.department}</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Graduation Year</Label>
                    <p className="font-medium">{editedStudent.year}</p>
                  </div>
                  <div className="space-y-2">
                    <Label>10th Marks</Label>
                    {editMode ? (
                      <Input value={editedStudent.tenthMarks} onChange={(e) => setEditedStudent({...editedStudent, tenthMarks: e.target.value})} />
                    ) : (
                      <p className="font-medium">{editedStudent.tenthMarks}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>12th Marks</Label>
                    {editMode ? (
                      <Input value={editedStudent.twelfthMarks} onChange={(e) => setEditedStudent({...editedStudent, twelfthMarks: e.target.value})} />
                    ) : (
                      <p className="font-medium">{editedStudent.twelfthMarks}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>UG Marks/CGPA</Label>
                    {editMode ? (
                      <Input value={editedStudent.ugMarks} onChange={(e) => setEditedStudent({...editedStudent, ugMarks: e.target.value})} />
                    ) : (
                      <p className="font-medium">{editedStudent.ugMarks}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Current CGPA</Label>
                    {editMode ? (
                      <Input value={editedStudent.cgpa} onChange={(e) => setEditedStudent({...editedStudent, cgpa: e.target.value})} />
                    ) : (
                      <p className="font-medium">{editedStudent.cgpa}</p>
                    )}
                  </div>
                </div>
              </Card>

              {/* Skills */}
              <Card className="p-6 border-2 border-primary/20">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {editedStudent.skills?.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-sm bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Placement Details */}
              {editedStudent.status === "Placed" && editedStudent.company && (
                <Card className="p-6 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Placement Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Company</Label>
                      {editMode ? (
                        <Input value={editedStudent.company} onChange={(e) => setEditedStudent({...editedStudent, company: e.target.value})} />
                      ) : (
                        <p className="font-medium">{editedStudent.company}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>Package</Label>
                      {editMode ? (
                        <Input value={editedStudent.package} onChange={(e) => setEditedStudent({...editedStudent, package: e.target.value})} />
                      ) : (
                        <p className="font-medium">{editedStudent.package}</p>
                      )}
                    </div>
                  </div>
                </Card>
              )}

              {/* Placement Status Update */}
              <Card className="p-6 border-2 border-primary/20">
                <h3 className="font-bold text-lg mb-4">Update Placement Status</h3>
                <Select 
                  value={editedStudent.status} 
                  onValueChange={(value: "Placed" | "Unplaced") => setEditedStudent({...editedStudent, status: value})}
                  disabled={!editMode}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Placed">Placed</SelectItem>
                    <SelectItem value="Unplaced">Unplaced</SelectItem>
                  </SelectContent>
                </Select>
              </Card>

              {/* Action Buttons */}
              {editMode && (
                <div className="flex gap-3 pt-4">
                  <Button onClick={handleEditSave} className="flex-1 bg-primary hover:bg-primary/90">
                    Save Changes
                  </Button>
                  <Button 
                    onClick={() => {
                      setEditMode(false);
                      setEditedStudent(selectedStudent);
                    }} 
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

export default Students;
