import React, { Component } from 'react';
import data_loaded from '../actions/data_loaded';
import { connect } from 'react-redux';
import Fav from './Fav';
import Base from './Base';
import { formatVisibleValue } from '../middleware/computeRates';

class Rates extends Component {

  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this);
  }

  createTable(ratesList) {
    // let tbody = [];

    let tbody = ratesList.map((row, index) => {
      let visibleValue = formatVisibleValue(row.value, row.relation);
      let item = (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.code}</td>
          <td>{row.str_code}</td>
          <td>{visibleValue.value}</td>
          <td>{visibleValue.relation}</td>
          <td><Fav isFavorite={row.isFavorite} name={row.name}/></td>
          <td><Base isBase={row.isBase} name={row.name}/></td>
        </tr>
      );
      return item;
      // tbody.push(item);
    });
    return tbody;
  }

  componentDidMount() {
    fetch('http://localhost:8000').then((response) => {
      return response.json();
    }).then((data) => {
      this.props.dispatch(data_loaded(data.data));
    })
  }

  render() {
    const { ratesList } = this.props;

    return(
      <div className="row rates">
        <div className="col d-flex justify-content-center">
          <table>
            <thead>
              <tr>
                <td className="clmn-1">Наименование валюты</td>
                <td>Цифровой код</td>
                <td>Буквенный код</td>
                <td>Курс к базовой ваалюте</td>
                <td>Единиц</td>
                <td>Добавить/Убрать в избранное</td>
                <td>Сделать базовой</td>
                </tr>
            </thead>
            <tbody>
              {this.createTable(ratesList)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ratesList: state.ratesList
  }
}

export { Rates };
export default connect(mapStateToProps)(Rates);
