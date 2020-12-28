import { RENDER_TODO_LIST, EDIT_RECORD, DELETE_RECORD, LIST_RECORDS, RENDER_RECORDS_LIST} from '../actions/actions';

// ... initialState ...
const initialState = {
    records: [],
    editRecord: {},
    recordsData: []
}

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_RECORDS_LIST:
      return {
        ...state,
        recordsData: action.recordsData
      };
      case LIST_RECORDS:
          return {
            ...state,
            recordsData: action.payload
      };
      case DELETE_RECORD: 
      return {
          ...state,
          recordsData: state.recordsData.filter(e => e.Id !== action.payload)

      };
      case EDIT_RECORD: 
      return {
          ...state,
          editRecord: state.recordsData.filter(e => e.Id === action.payload)

      };
      default: return {state };
    // ... case ADD_TODO, and default ... :
  }
}