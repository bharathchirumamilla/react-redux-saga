import React from 'react';

import {connect} from 'react-redux';
import {EditRecord, DeleteRecord } from '../actions/actions';

const TableList = (props) => {

    const editRecord = (ev) => {
        props.editRecord(ev);
    };

    const deleteRecord = (ev) => {
        props.deleteRecord(ev);
    };


    return(
        <div>
            <div className="tablename">Details of the Candidate</div>
            <table id="customers">
         <tbody>
             <th>
                 Id
             </th>
             <th>
                 Name
             </th>
             <th>
                 Address
             </th>
             <th>
                 Actions
             </th>
           {
                props.data.map((item,i) =>(
                   <tr>
                    {
                     <td>{item.Id}</td>
                    }
                     {
                     <td>{item.Name}</td>
                    }
                     {
                     <td>{item.Address}</td>
                    }
                    {
                        <td><button className="edit-button" onClick={() => { editRecord(item.Id) }} >Edit</button>/<button className="delete-button" onClick={() => { deleteRecord(item.Id) }} >Delete</button></td>
                    }
                   </tr>
                ))
           }
         </tbody>
       </table>


        {/* {data && data.map((item, index) => {
                  <tr key={item.Id}>
                  <td>{item.Id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Address}</td>
               </tr>
        })} */}
        </div>
        
    )
}

const mapDispatchToProps = {
    editRecord: (data) => EditRecord(data),
    deleteRecord: (data) =>  DeleteRecord(data)
};

export default connect(null, mapDispatchToProps)(TableList)
