import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Row, Spin, Empty } from "antd"; // Using Ant Design's Empty component for better no-data message
import DoctorList from "../../components/DoctorList";
import "../../styles/extrenal.css";
const UsersDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllDoctorsUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/v1/user/getAllDoctorsUsers");
      console.log("API Response:", res);

      if (res.data.success && res.data.data) {
        setDoctors(res.data.data);
      } else {
        setDoctors([]);
      }
      setLoading(false);
    } catch (error) {
      console.log("Error fetching doctors:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllDoctorsUsers();
  }, []);

  return (
    <Layout>
      <div className="doc-banner">
        <h1>Welcome to Our Medical Services: Your Health, Our Priority</h1>
        <p>
          Providing the best care for you and your loved ones. Trusted by
          professionals, loved by patients.
        </p>
      </div>

      <div className="doctors-section">
        <h4 className="section-title text-center"> Meet Our Doctors</h4>
        {loading ? (
          <div className="loading-spinner">
            <Spin size="large" />
          </div>
        ) : (
          <div className="doctors-list">
            {doctors.length > 0 ? (
              <Row gutter={[16, 16]}>
                {doctors.map((doctor) => (
                  <DoctorList key={doctor._id} doctor={doctor} />
                ))}
              </Row>
            ) : (
              <Empty
                description="No approved doctors found"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UsersDoctors;
