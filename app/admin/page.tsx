import AddingFeed from "@/components/admindata/AddIngFeed";
import ViewIngredient from "@/components/admindata/ViewIngredient";
import React from "react";

const AdminPage = () => {
  return (
    <div>
      {/* adding ingredient */}
      <AddingFeed />
      {/* viewing ingredient */}
      <ViewIngredient />
    </div>
  );
};

export default AdminPage;
