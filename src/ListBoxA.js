//import * as React from 'react';
import React, { Component, useState } from "react";
import '@progress/kendo-theme-default/dist/all.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as ReactDOM from 'react-dom';
import { ListBox, ListBoxToolbar, processListBoxData, processListBoxDragAndDrop } from '@progress/kendo-react-listbox';
const data = [{
  name: 'TRIGLICERIDOS',
  selected: true,
  value: 1
}, {
  name: 'COLESTEROL',
  selected: false,
  value: 2
}, {
  name: 'HDL COLESTEROL',
  selected: false,
  value: 3
}, {
  name: 'GLOBULOS BLANCOS',
  selected: false,
  value: 4
}, {
  name: 'LINFOCITOS',
  selected: false,
  value: 5
}, {
  name: 'MIXTOS ABSOLUTOS',
  selected: false,
  value: 6
}];
const SELECTED_FIELD = 'selected';

const ListBoxA = () => {

  const [state, setState] = React.useState({
    employees: data,
    developers: [],
    draggedItem: {}
  });

  const [startDate, setStartDate] = useState(new Date());

  const handleItemClick = (event, data, connectedData) => {
    setState({ ...state,
      [data]: state[data].map(item => {
        if (item.name === event.dataItem.name) {
          item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.nativeEvent.ctrlKey) {
          item[SELECTED_FIELD] = false;
        }

        return item;
      }),
      [connectedData]: state[connectedData].map(item => {
        item[SELECTED_FIELD] = false;
        return item;
      })
    });
  };

  const handleToolBarClick = e => {
    let toolName = e.toolName || '';
    let result = processListBoxData(state.employees, state.developers, toolName, SELECTED_FIELD);
    setState({ ...state,
      employees: result.listBoxOneData,
      developers: result.listBoxTwoData
    });
  };

  const handleDragStart = e => {
    setState({ ...state,
      draggedItem: e.dataItem
    });
  };

  const handleDrop = e => {
    let result = processListBoxDragAndDrop(state.employees, state.developers, state.draggedItem, e.dataItem, 'name');
    setState({ ...state,
      employees: result.listBoxOneData,
      developers: result.listBoxTwoData
    });
  };

  return (
  <div style={{ background: "#f5f5f5",textAlign: 'center'}} className='container row'>
        <div style={{background: "#f5f5f5"}} className='row justify-content-center'>
          <div style={{background: "#f5f5f5"}} className='col k-pr-2'>
            <h5>No asignados</h5>
            <ListBox style={{
          backgroundColor: "#f5f5f5",
          height: 300,
          width: '100%'
        }} data={state.employees} textField="name" selectedField={SELECTED_FIELD} onItemClick={e => handleItemClick(e, 'employees', 'developers')} onDragStart={handleDragStart} onDrop={handleDrop} toolbar={() => {
          return <ListBoxToolbar style={{background: "#f5f5f5"}} tools={['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom']} data={state.employees} dataConnected={state.developers} onToolClick={handleToolBarClick} />;
        }} />
          </div>
          <div style={{background: "#f5f5f5"}} className='col k-pl-0'>
            <h5>Asignados</h5>
            <ListBox style={{
          backgroundColor: "#f5f5f5",
          height: 300,
          width: '100%'
        }} data={state.developers} textField="name" selectedField={SELECTED_FIELD} onItemClick={e => handleItemClick(e, 'developers', 'employees')} onDragStart={handleDragStart} onDrop={handleDrop} />
          </div>
        </div>
      </div>);
};

export default ListBoxA;