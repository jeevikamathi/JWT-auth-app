import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3001/api/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch(() => {
        setMessage("Access denied");
      });
  }, []);

  return <h2>{message}</h2>;
};

export default Dashboard;
