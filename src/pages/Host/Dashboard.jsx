import { Outlet } from "react-router-dom";

function Dashboard() {
	return (
		<>
      <h2>Dashboard</h2>
      <Outlet />
		</>
	);
}

export default Dashboard;
