import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [DOB, setDOB] = useState("");
  const [fullname, setFullname] = useState("");
  const [mothername, setMothername] = useState("");
  const [IP, setIP] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [product, setProduct] = useState("");
  const [state1, setState1] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState(0);
  const [data, setData] = useState([]);

  const EditData = () => {
    let payload = {
      user,
      DOB,
      mothername,
      IP,
      fullname,
      hobbies,
      product,
      state: state1,
      city,
      postalcode,
    };
    axios
      .put(`https://mern-crud-app-h1mn.onrender.com/updateuser/${id}`, payload)
      .then((res) => {
        console.log(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        ✏️ Update User Data
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-4">
          <input
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="User"
            className="input border p-2 rounded"
          />
          <input
            onChange={(e) => setDOB(e.target.value)}
            type="text"
            placeholder="Enter your DOB"
            className="input border p-2 rounded"
          />
          <input
            onChange={(e) => setIP(e.target.value)}
            type="text"
            placeholder="Enter your last access IP"
            className="input border p-2 rounded"
          />
          <input
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            placeholder="Enter your full name"
            className="input border p-2 rounded"
          />
          <select
            onChange={(e) => setHobbies(e.target.value)}
            className="input border p-2 rounded"
          >
            <option>Hobbies</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
            <option value="e">E</option>
          </select>
        </div>

        <div className="flex flex-col space-y-4">
          <input
            onChange={(e) => setMothername(e.target.value)}
            type="text"
            placeholder="Enter your mother name"
            className="input border p-2 rounded"
          />
          <input
            onChange={(e) => setState1(e.target.value)}
            type="text"
            placeholder="Enter your state"
            className="input border p-2 rounded"
          />
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter your city"
            className="input border p-2 rounded"
          />
          <input
            onChange={(e) => setPostalcode(e.target.value)}
            type="number"
            placeholder="Enter your postal code"
            className="input border p-2 rounded"
          />
          <select
            onChange={(e) => setProduct(e.target.value)}
            className="input border p-2 rounded"
          >
            <option>Products</option>
            <option value="macbook">MacBook</option>
            <option value="iwatch">iWatch</option>
            <option value="iphone">iPhone</option>
            <option value="ipad">iPad</option>
            <option value="headphone">Headphone</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={EditData}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow"
          type="submit"
        >
          🔁 Update
        </button>
      </div>
    </div>
  );
};

export default Edit;
