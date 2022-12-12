// Components
import { Header,  Footer } from '@components/shared';
import Header2 from '../Header/Header2';
import Footer2 from '../Footer/Footer2';
// styles
import s from './Layout.module.css';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={s.root}>
      <Header2 />
      <main className={s.content}>{children}</main>
      <Footer2 />
    </div>
  );
};

export default Layout;
