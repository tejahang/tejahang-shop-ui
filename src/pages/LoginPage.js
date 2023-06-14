import './../assets/auth.css';

import LoginForm from './../components/LoginForm';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

function LoginPage() {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}
export default LoginPage;
