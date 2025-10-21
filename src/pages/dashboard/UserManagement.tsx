import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Plus, MoreVertical, Edit, UserX, UserCheck, Shield, Users, Crown } from "lucide-react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  employeeId: string;
  role: string;
  status: "Active" | "Inactive";
}

const UserManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "Dr. Ramesh Kumar", email: "vc@university.edu", employeeId: "EMP001", role: "Management (VC)", status: "Active" },
    { id: "2", name: "Sunita Gupta", email: "director.cs@university.edu", employeeId: "EMP002", role: "Director", status: "Active" },
    { id: "3", name: "Vikram Rathore", email: "placement.head.cs@university.edu", employeeId: "EMP003", role: "Placement Vertical Head", status: "Active" },
    { id: "4", name: "Anjali Desai", email: "placement.director@university.edu", employeeId: "EMP004", role: "Placement Director", status: "Active" },
    { id: "5", name: "Rahul Singh", email: "placement.officer.cs@university.edu", employeeId: "EMP005", role: "Placement Officer", status: "Active" },
  ]);

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      id: String(users.length + 1),
      name: "New User",
      email: "newuser@university.edu",
      employeeId: `EMP00${users.length + 1}`,
      role: "Placement Officer",
      status: "Active",
    };
    setUsers([...users, newUser]);
    setShowAddModal(false);
    toast.success("User added successfully!");
  };

  const getRoleIcon = (role: string) => {
    if (role.includes("Management") || role.includes("VC")) return Crown;
    if (role.includes("Director")) return Shield;
    return Users;
  };

  const getRoleColor = (role: string) => {
    if (role.includes("Management") || role.includes("VC")) return "text-purple-600 bg-purple-500/10";
    if (role.includes("Director")) return "text-blue-600 bg-blue-500/10";
    if (role.includes("Vertical Head")) return "text-orange-600 bg-orange-500/10";
    return "text-primary bg-primary/10";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Manage Portal Users</h1>
          <p className="text-muted-foreground mt-1">Control access and permissions</p>
        </div>
        <Button onClick={() => setShowAddModal(true)} className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add New User
        </Button>
      </div>

      {/* Role Info Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4 border-l-4 border-l-purple-600">
          <div className="flex items-center gap-3 mb-2">
            <Crown className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold">Management (VC, Dean)</h3>
          </div>
          <p className="text-sm text-muted-foreground">View/Read access to analytics and reports</p>
        </Card>
        <Card className="p-4 border-l-4 border-l-blue-600">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Director</h3>
          </div>
          <p className="text-sm text-muted-foreground">View/Read access for department data</p>
        </Card>
        <Card className="p-4 border-l-4 border-l-primary">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Placement Team</h3>
          </div>
          <p className="text-sm text-muted-foreground">Full CRUD access for placements</p>
        </Card>
      </div>

      {/* Users Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Full Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Email ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Employee ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Role/Designation</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {users.map((user) => {
                const RoleIcon = getRoleIcon(user.role);
                return (
                  <tr key={user.id} className="hover:bg-muted/50 transition-smooth">
                    <td className="px-6 py-4 font-semibold">{user.name}</td>
                    <td className="px-6 py-4 text-sm">{user.email}</td>
                    <td className="px-6 py-4 text-sm font-mono">{user.employeeId}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <RoleIcon className={`w-4 h-4 ${getRoleColor(user.role)}`} />
                        <span className="text-sm font-medium">{user.role}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        className={
                          user.status === "Active"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {user.status}
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
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          {user.status === "Active" ? (
                            <DropdownMenuItem className="text-destructive">
                              <UserX className="w-4 h-4 mr-2" />
                              Deactivate
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem className="text-primary">
                              <UserCheck className="w-4 h-4 mr-2" />
                              Activate
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Add User Modal */}
      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddUser} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter full name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email ID</Label>
              <Input id="email" type="email" placeholder="user@university.edu" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employee-id">Employee ID</Label>
              <Input id="employee-id" placeholder="EMP###" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Assign Role</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="management">
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-purple-600" />
                      Management (VC, Dean, Pro VC)
                    </div>
                  </SelectItem>
                  <SelectItem value="director">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-600" />
                      Director
                    </div>
                  </SelectItem>
                  <SelectItem value="vertical-head">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange-600" />
                      Placement Vertical Head
                    </div>
                  </SelectItem>
                  <SelectItem value="placement-director">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Placement Director
                    </div>
                  </SelectItem>
                  <SelectItem value="placement-officer">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Placement Officer
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                Different roles have different access levels and permissions
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                Create User
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowAddModal(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserManagement;
