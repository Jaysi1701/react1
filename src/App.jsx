import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const formattedEmployees = data.map((user) => ({
          id: user.id,
          name: user.name,
          role: user.company.bs,
          salary: 50000 + user.id * 5000,
        }));

        setEmployees(formattedEmployees);
      })
      .catch((error) =>
        console.log("Error:", error)
      );
  }, []);

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter(
        (employee) => employee.id !== id
      )
    );
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />

      <main>
        <h2>Employee Management</h2>

        <h3>Total Employees: {employees.length}</h3>

        <input
          type="text"
          placeholder="Search Employee"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

        {filteredEmployees.map((employee) => (
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