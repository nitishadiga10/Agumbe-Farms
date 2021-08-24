import ReactDOM from "react-dom";
import { Notification, Div, NavLink } from "./StyledItems";

const NotificationBar = () => {
  return ReactDOM.createPortal(
    <Div>
      <Notification>
        <h4>Product Added to the Cart</h4>
        <NavLink to="/cart" className="viewcart">
          <h4>View Cart</h4>
        </NavLink>
      </Notification>
    </Div>,
    document.body
  );
};

export default NotificationBar;
