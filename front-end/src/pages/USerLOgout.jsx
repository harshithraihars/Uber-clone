import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          localStorage.removeItem("token");
          console.log("done");
          navigate("/login");
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    handleLogout();
  }, [navigate]);

  return <div>UserLogout</div>;
};

export default UserLogout;
