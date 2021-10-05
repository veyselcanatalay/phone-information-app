import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {RootState} from '../store/index';
import { Container, Row, Col } from 'react-grid-system';
import { DataTable } from 'primereact/datatable';
import {Column} from 'primereact/column';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import './List.css';

function imgTemplate(rowData:any){
    return(
    <img height="250px" src={rowData.photo}/>
    )
}
function List () {
    const listPhones = useAppSelector((state: RootState) => state.phones)
    console.log(listPhones)
    return (
    <div className="List">
        <Container>
            <Row>
                <Col sm={12}>
            <div className="phonesList">
            <DataTable value={listPhones}>
                <Column header='photo' body={imgTemplate}></Column>
                <Column field="name" header="Name"></Column>
                <Column field="announced" header="Announced"></Column>
                <Column field="battery" header="Battery"></Column>
                <Column field="memory" header="Memory"></Column>
                <Column field="cpu" header="Cpu"></Column>
                <Column field="gpu" header="Gpu"></Column>
                <Column field="colors" header="Colors"></Column>
            </DataTable>  
            </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
  }
  
  export default List;