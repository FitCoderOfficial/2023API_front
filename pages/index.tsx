import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import Info  from '../components/page-intro/info';
import Card  from '../components/page-intro/card';


const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />
      <Card />
      {/* < Info /> */}
      <ProductsFeatured />
      {/* <Subscribe /> */}
      <Footer />
    </Layout>
  )
}


export default IndexPage

