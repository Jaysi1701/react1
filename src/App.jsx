import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Employee List</h2>

        <EmployeeCard
          name="Jaysi"
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