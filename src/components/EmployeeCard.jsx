function EmployeeCard({
  id,
  name,
  role,
  salary,
  onDelete,
}) {
  return (
    <div className="card">
      <h3>{name}</h3>

      <p>Role: {role}</p>

      <p>Salary: ₹{salary}</p>

      <button
        className="delete-btn"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default EmployeeCard;