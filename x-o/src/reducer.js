const initialState = {
    squares: ['', '', '', '', '', '', '', '', ''],
    xIsNext: true,
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};

