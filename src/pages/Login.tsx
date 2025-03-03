import React from "react";
import AuthLayout from "../layout/AuthLayout";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your account to continue shopping"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
