export const LOAD_RECORDS = 'LOAD_RECORDS';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';
export const EDIT_RECORD = 'EDIT_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';
export const LIST_RECORDS = 'LIST_RECORDS';
export const RENDER_RECORDS_LIST = 'RENDER_RECORDS_LIST';


// ... addToDo ...

export function loadRecords() {
  return {
    type: LOAD_RECORDS
  };
}

export function AddRecords(data) {
    return {
        type: LIST_RECORDS,
        payload: data
      };
}

export function EditRecord(val) {
    return {
        type: EDIT_RECORD,
        payload: val
    }
}

export function DeleteRecord(val) {
    return {
        type: DELETE_RECORD,
        payload: val
    }
}