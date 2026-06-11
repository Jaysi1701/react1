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

  const addEmployee = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: `Employee ${employees.length + 1}`,
      role: "Trainee",
      salary: 30000,
    };

    setEmployees([...employees, newEmployee]);
  };

  return (
    <>
      <Header />

      <main>
        <h2>Employee List</h2>

        <h3>Total Employees: {employees.length}</h3>

        <button onClick={addEmployee}>
          Add Employee
        </button>

        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            salary={employee.salary}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;