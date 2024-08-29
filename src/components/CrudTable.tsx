/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteOutlined, EditOutlined, FolderViewOutlined, FundViewOutlined } from "@ant-design/icons";
import { Popconfirm, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { exportToExcel, showErrors } from "../functions/helpers";
import { useState } from "react";
interface params {
    dataSource: any[]
    columns: any[]
    actions?: any[]
    route?: string
    mutations?: any
    defaultActions?: any[]
    exportExcel?:boolean | number 
    modal?: any ;
    record?: any ; 
    setRecord?:any 
    
}

/*
    mutations 
    ['delete' , 'view' , 'update'  ]

*/



function CrudTable({ 
    dataSource, 
    columns, 
    route, 
    mutations ,
    record , 
    setRecord = ()=>{},
    exportExcel = 0,
    defaultActions = [], 
    actions = []  }: params) {
        // console.log('m' ,mutations)

    const navigate = useNavigate() ;
    // const [record , setRecord] = useState();
    
    const [selected , setSelected ] = useState([]);
    const deleteSelected = async (ids:any[]=[])=>{
        try{
            // console.log('.')
            if(ids?.length > 0 )
                mutations.delete(ids);
            else
                mutations.delete(selected);
            // console.log('.')
        }catch(err){
            // console.log(err)
            showErrors(err);
        }
    }

    [
        {
            title:'view',
            icon: <FolderViewOutlined></FolderViewOutlined> ,
            handler(record:any) {
                navigate(`${route}/${record.id}`)
            },
            render:(record)=>{
                return <>
                <FolderViewOutlined></FolderViewOutlined> 
                </>
            }
        },
        {
            title:'delete',
            icon :  <DeleteOutlined></DeleteOutlined> ,
            handler (record:any)  {        
                // console.log('rec',record);
                mutations.delete(record.id);
            },
            render(record:any){
                // console.log('render');
                return    <Popconfirm
                    onConfirm={()=>deleteSelected([_.id])}
                    title='هل أنت متأكد'
                >
                    <li className="list-inline-item"
                    >
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" className="px-2 text-danger" aria-label="Delete" data-bs-original-title="Delete"><i className="far fa-trash-alt"></i> </a>
                    </li>
            </Popconfirm>
            }
        },
        {
            title:'update',
            icon: <EditOutlined></EditOutlined> ,
            render:(record:any)=>{
                return <>
                    <li className="list-inline-item">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" className="px-2 text-primary" aria-label="Edit" data-bs-original-title="Edit"><i className="bx bx-pencil font-size-18"></i></a>
                    </li>
                </>
            }
            // handler(record:any) {
            //     console.log('no',record);
            //     // navigate(`${route}/${record.id}/edit`)
            // },
        },
    ].map((action:any)=>{
        let override = 0;
        actions?.map((overrideAction:any)=>{
            if(overrideAction.title == action.title ) {
                override = 1;
            }
        })
        if(override){
            return ;
        }
        let showDefaultAction = 0 ; 
        defaultActions?.map((defaultAction:any)=>{
            if(defaultAction == action.title ){
                showDefaultAction= 1;
            }
        })
        if(showDefaultAction)
            actions = [...actions , action] ;
  
    }) 


    const actionsColumn: any[] = [

        {
            title: 'العمليات',
            fixed: 'right',
            width: 200,
            // key: 'action',
            render: ( _: any, record : any ) => {
                // console.log(_ , record) ;
                return (<>
                    <td>
                        <ul className="list-inline mb-0">  
                            {
                                actions?.map((action: any) => {                            
                                    if (action?.render) {
                                        // return <>
                                        //     <div onClick={setRecord()}>

                                        //     </div>
                                        // </>
                                        return action?.render(record);
                                    }
                                    else {
                                        
                                        return <a onClick={() =>{ 
                                            action?.handler(record)
                                            setRecord(record)
                                        } }> {action?.render(record)} </a>
                                    }
                                })
                            }
                        </ul>
                    </td>
                </>
                );
                
            }
        }

    ]

    columns = [...columns, ...actionsColumn]

    return <>
        <div>
         
              <div className="row" style={{ marginBottom:'0rem' }}> 
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex flex-wrap align-items-center mb-3">
                                                
                                       
                                                <div className="ms-auto">
                                                    <div className="dropdown">
                                                        {
                                                            selected?.length >0 ? 
                                                            <Popconfirm
                                                                onConfirm={deleteSelected}
                                                                className="btn btn-danger btn-rounded waves-effect waves-light m-2"
                                                                title="هل أنت متأكد"
                                                            >
                                                                حذف المختار
                                                            </Popconfirm>
                                                            :
                                                            <></>
                                                        }
                                                       
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mx-n4" data-simplebar style={{maxHeight: '332px'}}>
                                                <div className="table-responsive">
                                                    <table className="table table-striped table-centered align-middle table-nowrap mb-0 table-check">
                                                        <thead>
                                                            <tr>
                                                                <th style={{width: '30px'}}>
                                                                    <div className="form-check font-size-16">
                                                                        <input type="checkbox" name="check" className="form-check-input" id="checkAll"
                                                                            onClick={(e)=>{
                                                                                // console.log(e.target.checked )
                                                                                if(e.target.checked){
                                                                                    setSelected([...dataSource?.map((_)=>_.id)])
                                                                                }
                                                                                else{
                                                                                    setSelected([]);
                                                                                }
                                                                            }}
                                                                        />
                                                                        <label className="form-check-label" htmlFor="checkAll"></label>
                                                                    </div>
                                                                </th>
                                                                <th>#</th>
                                                             
                                                                {
                                                                    columns?.map((column)=>{
                                                                        return <>
                                                                            <th> {column.title } </th>
                                                                        </>
                                                                    })
                                                                }
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                dataSource?.map((record:any, index:number)=>{
                                                                    return <>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="form-check font-size-16">
                                                                                    <input type="checkbox" className="form-check-input"
                                                                                        checked={selected.includes(record.id)}
                                                                                        onClick={(e)=>{
                                                                                            // console.log(e.target.checked, record.id )
                                                                                            if(!e.target.checked && selected.includes(record.id)){
                                                                                                let _ = [...selected]; 
                                                                                                _.splice(_.indexOf(record?.id) , 1 );
                                                                                                // console.log(_);
                                                                                                setSelected(_);
                                                                                            }
                                                                                            else if(e.target.checked && !selected.includes(record?.id)){
                                                                                                // console.log('add')
                                                                                                let _ = [...selected , record.id ];
                                                                                                setSelected(_ );
                                                                                                // console.log(_);
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                    <label className="form-check-label"></label>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                {index+1}
                                                                            </td>
                                                                            {
                                                                                columns?.map((column:any)=>{
                                                                                    return <>
                                                                                    <td onClick={()=>{
                                                                                        setRecord(record);
                                                                                        console.log('clicked' , record)
                                                                                        }} >
                                                                                        {
                                                                                            
                                                                                            column.key ? 
                                                                                                <> {record[column.key]} </>
                                                                                                :
                                                                                                <> {column?.render(record)} </>

                                                                                        }
                                                                                    </td>
                                                                                    </>
                                                                                })
                                                                            }
                                                                          
                                                                        </tr>
                                                                    </>
                                                                })
                                                            }
                                               
                                                            
                                               
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                       
                                    </div>
                                </div>

                          
                        </div>
                        <div>
                            {/* {modal && <Modal record={record}  ></Modal> } */}
                        </div>

        </div>
    </>
}


export default CrudTable;