const Header = ({ isLogin, children, headerClass }) => {
  
  return (
    <header className={`header ${isLogin ? 'header_open' : ''} ${headerClass}`}>
      {children}
    </header >
  );
}

export default Header;