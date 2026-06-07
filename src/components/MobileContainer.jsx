const MobileContainer = ({ children }) => {
  return (
    <div className="app-wrapper">
      <div className="mobile-screen">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;