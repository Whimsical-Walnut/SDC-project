import React from 'react';

class SortOptions extends React.Component {
  constructor(props) {
    super(props)
    this.totalReviews = this.totalReviews.bind(this);
  }

  totalReviews(obj){
    var total = Number(obj.false) + Number(obj.true);
    return total
  }

  render() {
    return(
      <div style={{
        fontWeight: 'bold'
      }}>{`${this.totalReviews(this.props.metaData.recommended)} reviews, sorted by most`}
        <select style={{
          width: '20%',
          border: 'none',
          textAlign: 'center',
          borderRadius: '5px',
          boxShadow: '5px 5px 5px teal',
          cursor: 'pointer'
        }}>
          <option value="0">Relevant</option>
          <option value="1">Helpful</option>
          <option value="2">Recent</option>
        </select>
      </div>
    )
  }
}

export default SortOptions