interface InitialState {
  loading: boolean;
  error?: string;
}

const initialState: InitialState = {
  loading: false,
  error: "",
};

const adminReducer = (state: InitialState = initialState, action: any) => {
  return state;
};

export default adminReducer;
