function Footer() {
  return (
    <div className='py-5 bg-dark'>
      <div className='container'>
        <p className='m-0 text-center text-white'>
          Copyright &copy; {new Date().getFullYear()} Tejahang Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
