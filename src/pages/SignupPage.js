import './../assets/auth.css';

import SignupForm from '../components/SignupForm';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

function SignupPage() {
  return (
    <div>
      <Navbar />
      <SignupForm />
      <Footer />
    </div>
  );
}
export default SignupPage;
