import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building, Globe, Phone, MapPin, Upload, Plus, ChevronDown, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [expandedDegree, setExpandedDegree] = useState<string | null>(null);

  const degrees = [
    {
      name: "B.Tech",
      departments: ["Computer Science", "Electronics & Communication", "Mechanical", "Civil", "Biotech"],
    },
    {
      name: "M.Tech",
      departments: ["Computer Science", "VLSI Design", "Structural Engineering"],
    },
    {
      name: "MBA",
      departments: ["Finance", "Marketing", "Human Resources", "Operations"],
    },
    {
      name: "BBA",
      departments: ["General Management", "International Business"],
    },
  ];

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setShowEditModal(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your university profile and configuration</p>
      </div>

      {/* College Profile */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">College Profile</h2>
          <Button onClick={() => setShowEditModal(true)} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Edit Profile
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Building className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">College Name</p>
                <p className="font-semibold">IIT Bombay</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">Official Website</p>
                <p className="font-semibold">www.iitb.ac.in</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">Contact Phone</p>
                <p className="font-semibold">+91 22 2576 4000</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-semibold">Powai, Mumbai, Maharashtra 400076, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Upload className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">College Logo</p>
                <div className="w-20 h-20 mt-2 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building className="w-10 h-10 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Degrees & Departments */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Manage Degrees & Departments</h2>
            <p className="text-sm text-muted-foreground mt-1">Configure academic programs offered</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Plus className="w-4 h-4 mr-1" />
              Add Degree
            </Button>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Plus className="w-4 h-4 mr-1" />
              Add Department
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {degrees.map((degree) => (
            <div key={degree.name} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedDegree(expandedDegree === degree.name ? null : degree.name)}
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-smooth"
              >
                <div className="flex items-center gap-3">
                  {expandedDegree === degree.name ? (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                  <span className="font-semibold">{degree.name}</span>
                  <span className="text-sm text-muted-foreground">
                    ({degree.departments.length} departments)
                  </span>
                </div>
              </button>
              {expandedDegree === degree.name && (
                <div className="p-4 pt-0 bg-muted/20">
                  <div className="grid md:grid-cols-2 gap-2">
                    {degree.departments.map((dept, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 rounded bg-background border"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{dept}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* General Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">General Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold">Email Notifications</h3>
              <p className="text-sm text-muted-foreground">Receive updates about placements</p>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold">Security Settings</h3>
              <p className="text-sm text-muted-foreground">Manage password and access</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold">Data Export</h3>
              <p className="text-sm text-muted-foreground">Download placement reports</p>
            </div>
            <Button variant="outline" size="sm">Export</Button>
          </div>
        </div>
      </Card>

      {/* Edit Profile Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit College Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveProfile} className="space-y-4 py-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">College Name</Label>
                <Input id="edit-name" defaultValue="IIT Bombay" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-website">Website</Label>
                <Input id="edit-website" defaultValue="www.iitb.ac.in" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-phone">Contact Phone</Label>
              <Input id="edit-phone" defaultValue="+91 22 2576 4000" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-address">Full Address</Label>
              <textarea
                id="edit-address"
                rows={3}
                defaultValue="Powai, Mumbai, Maharashtra 400076, India"
                className="w-full px-3 py-2 border rounded-md resize-none"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-logo">College Logo</Label>
              <Input id="edit-logo" type="file" accept="image/*" />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                Save Changes
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowEditModal(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Settings;
