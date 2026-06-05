import {
  ColumnDirective, ColumnsDirective, GridComponent,
  Inject, Page
} from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

import './App.css'

function App() {

  const selectionOptions = {
    mode: 'Cell',
    type: 'Multiple',
    cellSelectionMode: 'BoxWithBorder',
    enableToggle: false
  }
  return <div style={{ padding: '20px' }}>
    <GridComponent dataSource={data} allowPaging={true} pageSettings={{ pageSize: 7 }}
      selectionSettings={selectionOptions}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100'
          textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='100'
          format='C2' textAlign="Right" />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100'
          format='yMd' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
  </div>
}

export default App
