const Layout = ({ children }) => {
  return (
    <div className="bg-white w-full h-full flex flex-col overflow-x-hidden">
      {children}
    </div>
  );
};

export default Layout;
