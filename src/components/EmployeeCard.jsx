function EmployeeCard({ name, role, salary }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Salary: ₹{salary}</p>
    </div>
  );
}

export default EmployeeCard;