import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employeeCount, setEmployeeCount] = useState(3);

  return (
    <>
      <Header />

      <main>
        <h2>Employee List</h2>

        <h3>Total Employees: {employeeCount}</h3>

        <button
          onClick={() =>
            setEmployeeCount(employeeCount + 1)
          }
        >
          Add Employee
        </button>

        <EmployeeCard
          name="Janani"
          role="Frontend Developer"
          salary="50000"
        />

        <EmployeeCard
          name="Rahul"
          role="Backend Developer"
          salary="60000"
        />

        <EmployeeCard
          name="Priya"
          role="UI Designer"
          salary="45000"
        />
      </main>

      <Footer />
    </>
  );
}

export default App;