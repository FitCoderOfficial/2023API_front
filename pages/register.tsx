import Layout from '../layouts/Main';
import Link from 'next/link';

const RegisterPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <i className="icon-left"></i> 둘러보기
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">구매 회원가입</h2>
          <p className="form-block__description">홀리플렉스에 오신 것을 환영합니다<br/>
          지금 회원가입하신 후 다양한 서비스를 만나보세요</p>
          
          <form className="form">
            <div className="form__input-row">
              <input className="form__input" placeholder="이름" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" placeholder="이메일" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" type="Password" placeholder="비밀번호" />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                    <p>서비스 약관 및 개인 정보 보호 정책에 동의합니다</p>
                </label>
              </div>
            </div>

            <button type="button" className="btn btn--rounded btn--yellow btn-submit">회원가입</button>

            <p className="form__signup-link">
              <Link href="/login">
                이미 회원이신가요?
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  </Layout>
)
  
export default RegisterPage
  