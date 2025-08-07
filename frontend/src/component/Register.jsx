import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState("");
  const [DOB, setDOB] = useState("");
  const [fullname, setFullname] = useState("");
  const [mothername, setMothername] = useState("");
  const [IP, setIP] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [product, setProduct] = useState("");
  const [state1, setState1] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [data, setData] = useState([]);

  // ✅ GET Data from Backend
  const GetData = () => {
    axios
      .get("https://mern-crud-app-h1mn.onrender.com/getuserdata")
      .then((res) => {
        console.log("Fetched data:", res.data);
        const users = res.data.data; // ✅ Corrected line
        if (Array.isArray(users)) {
          setData(users);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  // ✅ POST Data
  const PostData = () => {
    if (!user || !DOB || !fullname) {
      alert("Please fill required fields: User, DOB, Full Name");
      return;
    }

    const payload = {
      user,
      DOB,
      fullname,
      mothername,
      IP,
      hobbies,
      product,
      state: state1,
      city,
      postalcode,
    };

    axios
      .post("https://mern-crud-app-h1mn.onrender.com/register", payload)
      .then((res) => {
        alert(res.data.message);
        GetData();
        resetForm();
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        alert(error?.response?.data?.message || "Something went wrong!");
      });
  };

  // ✅ DELETE User
  const Delete = (id) => {
    axios
      .delete(`https://mern-crud-app-h1mn.onrender.com/deleteuser/${id}`)
      .then((res) => {
        alert(res.data.message);
        GetData();
      })
      .catch((error) => {
        alert(error?.response?.data?.message || "Delete failed!");
      });
  };

  const resetForm = () => {
    setUser("");
    setDOB("");
    setFullname("");
    setMothername("");
    setIP("");
    setHobbies("");
    setProduct("");
    setState1("");
    setCity("");
    setPostalcode("");
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 p-6">
      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-10 underline decoration-purple-500">
        🎉 Register Users (CRUD)
      </h1>

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-purple-200">
        <div className="flex flex-col space-y-4">
          <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="User *" className="input border-purple-300 focus:ring-2 focus:ring-purple-400" />
          <input value={DOB} onChange={(e) => setDOB(e.target.value)} type="date" className="input border-purple-300 focus:ring-2 focus:ring-purple-400" />
          <input value={IP} onChange={(e) => setIP(e.target.value)} type="text" placeholder="Last Access IP" className="input border-purple-300 focus:ring-2 focus:ring-purple-400" />
          <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" placeholder="Full Name *" className="input border-purple-300 focus:ring-2 focus:ring-purple-400" />
          <select value={hobbies} onChange={(e) => setHobbies(e.target.value)} className="input border-purple-300 focus:ring-2 focus:ring-purple-400">
            <option value="">Select Hobbies</option>
            <option value="A">Coding</option>
            <option value="B">Open Source Contribution</option>
            <option value="C"> Problem Solving</option>
            <option value="D">UI/UX Design</option>
            <option value="E">Participating in Hackathons</option>
          </select>
        </div>

        <div className="flex flex-col space-y-4">
          <input value={mothername} onChange={(e) => setMothername(e.target.value)} type="text" placeholder="Mother Name" className="input border-purple-300 focus:ring-2 focus:ring-purple-400" />
          <input value={state1} onChange={(e) => setState1(e.target.value)} type="text" placeholder="State" className="input border-purple-300 focus:ring-2 focus:ring-purple-400" />
          <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" className="input border-purple-300 focus:ring-2 focus:ring-purple-400" />
          <input value={postalcode} onChange={(e) => setPostalcode(e.target.value)} type="number" placeholder="Postal Code" className="input border-purple-300 focus:ring-2 focus:ring-purple-400" />
          <select value={product} onChange={(e) => setProduct(e.target.value)} className="input border-purple-300 focus:ring-2 focus:ring-purple-400">
            <option value="">Select Product</option>
            <option value="macbook">MacBook</option>
            <option value="iwatch">iWatch</option>
            <option value="iphone">iPhone</option>
            <option value="ipad">iPad</option>
            <option value="headphone">Headphone</option>
          </select>
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-center mt-8">
        <button onClick={PostData} className="bg-purple-600 hover:bg-purple-700 transition-all duration-200 text-white font-medium px-8 py-3 rounded-full shadow-lg">
          ➕ Add User
        </button>
      </div>

      {/* Table Section */}
      <div className="mt-12 overflow-x-auto max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
        <table className="min-w-full text-sm text-center table-auto">
          <thead className="bg-purple-600 text-white text-[15px]">
            <tr>
              <th className="p-3">User</th>
              <th className="p-3">DOB</th>
              <th className="p-3">Mother Name</th>
              <th className="p-3">IP</th>
              <th className="p-3">Full Name</th>
              <th className="p-3">Hobbies</th>
              <th className="p-3">Product</th>
              <th className="p-3">State</th>
              <th className="p-3">City</th>
              <th className="p-3">Postal Code</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((elem) => (
                <tr key={elem._id} className="border-t hover:bg-purple-50 transition-all">
                  <td className="p-3">{elem.user}</td>
                  <td className="p-3">{elem.DOB}</td>
                  <td className="p-3">{elem.mothername}</td>
                  <td className="p-3">{elem.IP}</td>
                  <td className="p-3">{elem.fullname}</td>
                  <td className="p-3">{elem.hobbies}</td>
                  <td className="p-3">{elem.product}</td>
                  <td className="p-3">{elem.state}</td>
                  <td className="p-3">{elem.city}</td>
                  <td className="p-3">{elem.postalcode}</td>
                  <td className="p-3">
                    <Link to={`edit/${elem._id}`}>
                      <button className="text-blue-600 hover:underline">Edit</button>
                    </Link>
                  </td>
                  <td className="p-3">
                    <button className="text-red-600 hover:underline" onClick={() => Delete(elem._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="p-6 text-gray-500 font-medium">
                  🚫 No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Register;
