import React from 'react';
import {useState} from "react";
import { useAppDispatch, useAppSelector } from '../store';
import {RootState} from '../store/index';
import { Container, Row, Col } from 'react-grid-system';
import Table from 'react-bootstrap';
import { DataTable } from 'primereact/datatable';
import {Column} from 'primereact/column';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { Chart } from 'primereact/chart';

function Graphic () {
    const listSales = useAppSelector((state: RootState) => state.sales)
    var ObjFromData: {[k: string]: any} = {};
    ObjFromData.LG = [];
    ObjFromData.Apple = [];
    ObjFromData.Huawei = [];
    //x ekseni sıralama
    for(let num=0;num<=30;num++){
        ObjFromData['Apple'][num]={
            counter:0,
            totalAmount:0
        };
        ObjFromData['LG'][num]={
            counter:0,
            totalAmount:0
        };
        ObjFromData['Huawei'][num]={
            counter:0,
            totalAmount:0
        };

    }
   for(let sale of listSales){
    let brand:string='Apple';
    if (sale.tel_model.includes('LG')){
    brand='LG';
    }
    if (sale.tel_model.includes('Huawei')){
        brand='Huawei';
        }
         let dateBuffer:any = new Date(sale.date).getUTCDate();
         ObjFromData[brand][dateBuffer]={
             counter: ObjFromData[brand][dateBuffer].counter+1,
             totalAmount: ObjFromData[brand][dateBuffer].counter+sale.sales_amount
         }
        }
   const lineData = {
    labels:Array.from({length: 31}, (_, i) => i + 1)
        ,
    datasets:[
        //y ekseni veri değerleri
        {
            label: 'Apple',
            data: ObjFromData['Apple'].map((data:any)=>data.totalAmount),
            fill: true,
            tension: .4,
            borderColor: '#42A5FF'
    
        },
        {
            label: 'Huawei',
            data: ObjFromData['Huawei'].map((data:any)=>data.totalAmount),
            fill: true,
            tension: .4,
            borderColor: '#ff0000'
    
        },
        {
            label: 'LG',
            data: ObjFromData['LG'].map((data:any)=>data.totalAmount), 
            fill: true,
            tension: .4,
            borderColor: '#00ff00'
    
        }

    ]
}
console.log(ObjFromData)
let basicOptions = {
    fill:false,
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        }
    }
};
    return (
    <div className="List">
        <Container>

            <Row>
                <Col sm={12}>

                {
                    listSales.length>1?
                <Chart type="line" data={lineData} options={basicOptions} />
                        :''
                }

                </Col>            
            </Row>
        </Container>
    </div>
    );
  }
  
  export default Graphic;