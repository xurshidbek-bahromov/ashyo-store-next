"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const user = {
    name: "Muhammad Ali",
    email: "muhammad@example.com",
    phone: "+998 90 123 45 67",
    location: "Toshkent, O‘zbekiston",
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card className="shadow-xl border border-gray-200">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
          <p className="text-muted-foreground">{user.email}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-600">Telefon:</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-600">Manzil:</span>
            <span>{user.location}</span>
          </div>
          <div className="flex justify-end pt-4">
            <Button variant="default">Ma’lumotlarni tahrirlash</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
