function DashboardUser() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div>
      <h1>Dashboard Pelanggan</h1>
      <p>Selamat datang, {user.name}!</p>
    </div>
  );
}

export default DashboardUser;
