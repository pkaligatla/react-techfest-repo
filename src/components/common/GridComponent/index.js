import React from "react";
import CardComponent from "../CardComponent";
import propTypes from 'prop-types';
import {
  Row,
  Col
} from "reactstrap";

import Icon from "../Icon";
import "./index.scss";

class GridComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: 'active',
      list: ''
    }
  }
  gridView() {
    this.setState({
      grid: 'active',
      list: ''
    })
  }
  listView() {
    this.setState({
      grid: '',
      list: 'active'
    })
  }
  render() {
    const { listView, isCart, productsList, onRemoveItem } = this.props;
    return (
      <section className={`product-grid ${listView || this.state.list==='active' ? 'list-view': ''}`}>
        <Row>
          {!isCart ? 
          <Col md={12}>
            <section className="grid-header">
              <p className="title">Products</p>
              <ul className="list-inline view">
                <li className="list-inline-item" onClick={this.gridView.bind(this)}><Icon iconName="th" iconType="solid" className={`grid ${this.state.grid}`}></Icon></li>
                <li className="list-inline-item" onClick={this.listView.bind(this)}><Icon iconName="list" iconType="solid" className={`list ${this.state.list}`}></Icon></li>
              </ul>
            </section>
          </Col>
           : null }
          {productsList.length > 0 ? (
            productsList.map(product => 
              <Col md={listView || this.state.list==='active' ? 12 : 4} key={product.id}>
                <CardComponent {...product} isCart={isCart} isListView={listView || this.state.list==='active'} onRemoveItem={onRemoveItem} itemId={product.productId}/>
              </Col>
            ))
           : 
            null
          }
        </Row>
      </section>
    );
  }
}

GridComponent.propTypes = {
  listView: propTypes.bool,
  isCart: propTypes.bool,
  productsList: propTypes.array
}

export default GridComponent;
