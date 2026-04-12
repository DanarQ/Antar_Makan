function DashboardDriver() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div>
      <h1>Dashboard Driver</h1>
      <p>Selamat datang, {user.name}!</p>
    </div>
  );
}

export default DashboardDriver;
