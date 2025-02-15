import scssHeader from './header.module.scss';

import Version from '../../components/Version';
const Header = () => {
  return (
    <header>
      <h1 className={scssHeader.headerContent}>La French Stack</h1>
      <Version />
    </header>
  );
};
export default Header;
