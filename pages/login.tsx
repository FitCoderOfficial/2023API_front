import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 

type LoginMail = {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: LoginMail) => {
    const res = await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password
    });

    console.log(res);
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <i className="icon-left"></i> 홈으로
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">로그인</h2>
            <p className="form-block__description">홀리플렉스에 오신 것을 환영합니다<br/>
          지금 회원가입하신 후 다양한 서비스를 만나보세요</p>
            
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="이메일" 
                  type="text" 
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }

                {errors.email && errors.email.type === 'pattern' && 
                  <p className="message message--error">Please write a valid email</p>
                }
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="비밀번호" 
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="keepSigned" 
                      id="check-signed-in" 
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>로그인 상태 유지</p>
                  </label>
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">비밀번호 찾기</a>
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>페이스북</button>
                <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> 지메일</button>
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">로그인</button>

              <p className="form__signup-link">아직 회원이 아니신가요? <a href="/register">회원가입</a></p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default LoginPage
  