import React, { PureComponent } from "react";
import { connect } from "react-redux";
import deleteGoodFromCart from "../redux/actions/deleteAction";
import "../styles.css";

const mapDispatchToProps = (dispatch) => ({
  deleteGoodFromCart: (id) => {
    dispatch(deleteGoodFromCart(id));
  }
});
class CartItem extends PureComponent {  
  render() {
    const { title, price, id } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button className="delete-item-button deleteGood" onClick={() => this.props.deleteGoodFromCart(id)}>x</button>
      </div>
    );
  }
}


export default connect(null,mapDispatchToProps)(CartItem);