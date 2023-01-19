import Layout from '../layouts/Main';
import Link from 'next/link';

const RegisterPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <i className="icon-left"></i> Back to store
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">구매 회원가입</h2>
          <p className="form-block__description">홀리플렉스에 오신 것을 환영합니다<br/>
          지금 회원가입하신 후 다양한 서비스를 만나보세요</p>
          
          <form className="form">
            <div className="form__input-row">
              <input className="form__input" placeholder="First Name" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" placeholder="Last Name" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" placeholder="Email" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" type="Password" placeholder="Password" />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                    <p>I agree to the Google Terms of Service and Privacy Policy</p>
                </label>
              </div>
            </div>

            <button type="button" className="btn btn--rounded btn--yellow btn-submit">Sign up</button>

            <p className="form__signup-link">
              <Link href="/login">
                Are you already a member?
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  </Layout>
)
  
export default RegisterPage
  