import React from "react";
import AuthLayout from "../layout/AuthLayout";
import RegisterForm from "../components/RegisterForm";

const Register: React.FC = () => {
  return (
    <AuthLayout
      title="Create an Account"
      subtitle="Join Swiftcart to start shopping with ease"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
