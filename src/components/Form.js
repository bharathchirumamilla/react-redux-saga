import React,{useState} from 'react';
import './styles.css';
import TableList from './TableList';
import {AddRecords} from '../actions/actions'
import { connect } from 'react-redux';

const Form = (props) => {
    const [records, setRecords] = useState(props.recordsData);

    const[name, setName] = useState('');
    const[id, setId] = useState('');
    const[address, setAddress] = useState('');

    function addFields(){
        let data = {
            "Name": name,
            "Id": id,
            "Address": address
        }

        if(name &&  id &&  address !== ""){
            let Format  = [...records, data];
            setName('');
            setId('');
            setAddress('');
            setRecords(Format);
            props.addRecords(Format);
        }else{
            alert('Fields should not be empty');
        }
       
    }

    return(
        <div>
           <div className="FormContainer">
           <div className="Content"><label>Name:</label><input type = "text" onChange={(e) => { setName(e.target.value) }} value = {name.length >= 1 ? name : props.editRecord ? props.editRecord[0].Name : name}/> </div> 
            <div className="Content"><label>ID:</label><input type = "text" onChange={(e) => { setId(e.target.value) }} value = {id.length >= 1 ? id : props.editRecord? props.editRecord[0].Id : id}/></div>
           <div className="Content"><label>Address:</label> <input type = "text"  onChange={(e) => { setAddress(e.target.value) }} value = {address.length >= 1 ? address : props.editRecord ? props.editRecord[0].Address : address}/></div>
           <div className="buttonContent"><button onClick={addFields}>click here</button></div>
           { records.length >= 1 && <div>
                <div className="TableContainer"><TableList data={props.recordsData}/></div>
           </div>}
        </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
      toDoList: state.toDoList,
      records: state.records,
      editRecord: state.editRecord,
      recordsData: state.recordsData
    };
  };

const mapDispatchToProps = {
    addRecords: (data) => AddRecords(data)
};




export default connect(mapStateToProps, mapDispatchToProps)(Form);