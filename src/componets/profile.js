import React from "react";

const Profile = () => {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src="https://via.placeholder.com/150"
            alt="Avatar"
          />
          <div>
            <p className="text-lg font-semibold">Nombre: Juan Pérez</p>
            <p className="text-gray-500">Email: juan@example.com</p>
            <p className="text-gray-600">Edad: 30 años</p>
            <p className="text-gray-600">País: México</p>
          </div>
        </div>
      </div>
    );
  };
export default Profile