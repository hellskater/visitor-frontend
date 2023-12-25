import { Button } from "../ui/button";

const Header = () => {
  const isAuthenticated = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("visiting_details");
    localStorage.removeItem("drink_details");
    window.location.href = "/login";
  };

  if (!isAuthenticated) return null;
  return (
    <div className="w-full flex justify-end p-5">
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Header;
