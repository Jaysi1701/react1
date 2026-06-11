import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Janani",
      role: "Frontend Developer",
      salary: 50000,
    },
    {
      id: 2,
      name: "Rahul",
      role: "Backend Developer",
      salary: 60000,
    },
    {
      id: 3,
      name: "Priya",
      role: "UI Designer",
      salary: 45000,
    },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");

  const addEmployee = () => {
    if (!name || !role || !salary) {
      alert("Please fill all fields");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name,
      role,
      salary,
    };

    setEmployees([...employees, newEmployee]);

    setName("");
    setRole("");
    setSalary("");
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );

    setEmployees(updatedEmployees);
  };

  return (
    <>
      <Header />

      <main>
        <h2>Employee Management</h2>

        <h3>Total Employees: {employees.length}</h3>

        <div className="form-container">
          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />

          <button onClick={addEmployee}>
            Add Employee
          </button>
        </div>

        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            salary={employee.salary}
            onDelete={deleteEmployee}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;