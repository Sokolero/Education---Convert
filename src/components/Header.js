import React from 'react';
import { connect } from 'react-redux';

const Header = ({ ratesList }) => {
  let baseName = 'Russian Ruble';

  if (!!ratesList[0]) {
    let baseValObject = ratesList.filter((object) => {
      return object.isBase;
    })

    if (!!baseValObject[0]) {
      baseName = baseValObject[0].name;
    }
  }

  return(
    <div className="row header">
      <div className="col-12">
        Курсы обмена валют от Центробанка РФ
      </div>
      <div className="col-12">Курс к базовой валюте: {baseName}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ratesList: state.ratesList
  }
}


export default connect(mapStateToProps)(Header);
