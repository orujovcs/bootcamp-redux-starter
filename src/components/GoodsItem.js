import React, { PureComponent } from "react";
import addGoodToCart from "../redux/actions/action";
import store from "../redux/reducers/store";
import { connect } from "react-redux";
import "../styles.css";


class GoodsItem extends PureComponent {
  render() {
    const { title, description, price, id } = this.props;
    
    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button className="goods-item__add-to-card" onClick={() => this.props.addGoodToCart(id)}>Add to cart</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({  
  addGoodToCart: (id) => {
    dispatch(addGoodToCart(id))
  }
});

export default connect(null, mapDispatchToProps)(GoodsItem);