const initState = {
    toduList: [
        { id: 1, name: 'Phùng Đăc Qúy', priority: 'Medium' },
        { id: 2, name: 'Nông đức thịnh', priority: 'Hight' },
        { id: 3, name: 'Mã văn cường', priority: 'Low' },
    ],
};

const rootReducer = (state = initState, action) => {
    console.log({ state: state });

    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                toduList: [...state.toduList, action.payload],
            };
        default:
            return state;
    }
};
export default rootReducer;
