import React from 'react';
import DataGrid from 'devextreme-react/data-grid';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

type IProps = {}

export class DXPDataGrid extends React.Component {

    constructor(props: IProps) {
        super(props);
        this.state = { valami: [], loading: false };
    }


    render() {
        return (
          <DataGrid
            dataSource="./customers.json"
            defaultColumns={columns}
            showBorders={true}
          />
        );
      }

}
