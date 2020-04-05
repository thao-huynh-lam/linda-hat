import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div className="row">
                <div className="col-md-4">
                    <label color="black">Price Sort
                        <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                                <option value="">Select</option>
                                <option value="lowestprice">Ascending</option>
                                <option value="highestprice">Descending</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label > Size Filter
                        <select className="form-control" value={this.props.size} onChange={this.props.handleSizeChange}>
                                <option value="">ALL</option>
                                <option value="x">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                   
                </div>
                
            </div>
        )
    }
}
