import "./MainWindow.css";
function MainWindow(props) {
  return (
    <div className="container">
      <div className="container_header">
        <div className="container_header_logo">
          <h1 className="logo">DaKiSon</h1>
        </div>
        <div className="container_header_user">
          <h2>
            Welcome,<span>{props.name}</span>
          </h2>
          <button className="container_header_user_button" onClick={props.Logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
export default MainWindow;
