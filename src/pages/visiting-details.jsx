import { Navigate } from "react-router-dom";

const VisitingDetails = () => {
  const isAlreadyConfigured = localStorage.getItem("visiting_details");

  if (isAlreadyConfigured) {
    <Navigate to="/drink" />;
  }

  return <div></div>;
};

export default VisitingDetails;
