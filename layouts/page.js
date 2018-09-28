import Head from '../components/meta';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Page = (props) => (
  <div>
    <Head pageTitle={props.pageTitle}/>
    <Nav />
    {props.children}
    <Footer />
  </div>
);

export default Page;