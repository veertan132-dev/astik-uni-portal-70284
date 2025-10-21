import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserPlus, Edit, UserX } from "lucide-react";

const UserManagement = () => {
  const users = [
    {
      name: "Dr. Ramesh Kumar",
      email: "vc@university.edu",
      employeeId: "EMP001",
      role: "Management (VC)",
      roleIcon: "👨‍💼",
      roleBg: "bg-purple-500",
      status: "Active",
    },
    {
      name: "Sunita Gupta",
      email: "director.cs@university.edu",
      employeeId: "EMP002",
      role: "Director",
      roleIcon: "👁️",
      roleBg: "bg-blue-500",
      status: "Active",
    },
    {
      name: "Vikram Rathore",
      email: "placement.head.cs@university.edu",
      employeeId: "EMP003",
      role: "Placement Vertical Head",
      roleIcon: "📋",
      roleBg: "bg-success",
      status: "Active",
    },
    {
      name: "Anjali Desai",
      email: "placement.director@university.edu",
      employeeId: "EMP004",
      role: "Placement Director",
      roleIcon: "📌",
      roleBg: "bg-destructive",
      status: "Active",
    },
    {
      name: "Rahul Singh",
      email: "placement.officer.cs@university.edu",
      employeeId: "EMP005",
      role: "Placement Officer",
      roleIcon: "⚡",
      roleBg: "bg-warning",
      status: "Active",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Manage Portal Users</h1>
            <p className="text-muted-foreground">Control access and permissions for your team</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <UserPlus className="w-4 h-4 mr-2" />
            Add New User
          </Button>
        </div>

        {/* Users Table */}
        <div className="border rounded-lg bg-card">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Full Name</TableHead>
                <TableHead className="font-semibold">Email ID</TableHead>
                <TableHead className="font-semibold">Employee ID</TableHead>
                <TableHead className="font-semibold">Role/Designation</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="text-muted-foreground">{user.email}</TableCell>
                  <TableCell className="font-mono text-sm">{user.employeeId}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 ${user.roleBg} rounded-full flex items-center justify-center text-white`}>
                        {user.roleIcon}
                      </div>
                      <span className="font-medium">{user.role}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-success">{user.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <UserX className="w-4 h-4 mr-1" />
                        Deactivate
                      </Button>
                    </div>
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

export default UserManagement;
