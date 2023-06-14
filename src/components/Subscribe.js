function Subscribe() {
  return (
    <div className='py-5 bg-info'>
      <div className='container px-4 px-lg-5 mt-5'></div>
      <div className='container position-relative'>
        <div className='row justify-content-center'>
          <div className='col-xl-6'>
            <h2 className='mb-4'>Sign up now for weekly updates!</h2>

            <form
              className='form-subscribe'
              id='contactFormFooter'
              data-sb-form-api-token='API_TOKEN'
            >
              {/* <!-- Email address input--> */}
              <div className='row'>
                <div className='col'>
                  <input
                    className='form-control form-control-lg'
                    id='emailAddressBelow'
                    type='email'
                    placeholder='Email Address'
                    data-sb-validations='required,email'
                  />
                </div>
                <div className='col-auto'>
                  <button
                    className='btn btn-primary btn-lg'
                    id='submitButton'
                    type='submit'
                  >
                    Subscribe!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
