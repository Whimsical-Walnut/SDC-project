/* eslint-disable */

import React from 'react';
import RatingsApp from './components/ratingsAndReviews/ratingsApp.jsx'
import ProductMainView from './components/productDetail/productMainView.jsx';
import RelatedProductsMainView from './components/relatedProducts/relatedProductsMainView.jsx';
// IMPORT YOUR TOP LEVEL COMPONENTS HERE
import QuestionMaster from './components/questionsAndAnswers/QuestionMaster.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widget_id: "0" // 1 = product detail, 2 = related product, 3 = q&a, 4 = reviews
    }
    this.widgetSelect = this.widgetSelect.bind(this);
  }

  widgetSelect(e) {
    e.preventDefault();
    this.setState({
      widget_id: e.target.value
    });
  }

  render() {
    return (
      <div>
        <button id="clear" value="0" onClick={this.widgetSelect}>CLEAR</button>
        <button value="1" onClick={this.widgetSelect}>Product Detail</button>
        <button value="2" onClick={this.widgetSelect}>Related Products</button>
        <button value="3" onClick={this.widgetSelect}>Questionable Answers</button>
        <button value="4" onClick={this.widgetSelect}>Ratings and Reviews</button>
        {
          this.state.widget_id === "1" &&
          <div className="productDetail">
            RENDER PRODUCT DETAIL HERE
            <ProductMainView />
          </div>
        } {
          this.state.widget_id === "2" &&
          // <div>RENDER RELATED PRODUCTS HERE</div>
          <RelatedProductsMainView />
        } {
          this.state.widget_id === "3" &&
          <QuestionMaster />
        } {
          this.state.widget_id === "4" &&
          <div>
            RENDER RATINGS AND REVIEWS HERE
            <RatingsApp />
          </div>
        }
      </div>
    );
  }
}

export default App;
