interface InitialState {
  loading: boolean;
  error?: string;
}

const initialState: InitialState = {
  loading: false,
  error: "",
};
const employeeReducer = (state: InitialState = initialState, action: any) => {
  return state;
};

export default employeeReducer;
