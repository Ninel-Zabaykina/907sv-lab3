export const ACTION_TYPES = {
    ADD: 'add',
    DELETE: 'del',
    CHECKED: 'checked',
    FILTER: 'filter'
};
export const initialState = [];

/**
 * @param {type: string, payload: any} action
 * @param prevState
 */
export default function reducer(action, prevState = initialState) {
    switch (action.type) {
        case ACTION_TYPES.ADD: {
            const newEl = {
                id: Math.random().toString(),
                title: action.payload,
                isChecked: false
            };
            return [...prevState, newEl];
        }
        case ACTION_TYPES.DELETE: {
            return [...prevState.filter(list => list.id !== action.payload)];
        }

        case ACTION_TYPES.CHECKED: {
            return [
                ...prevState.map(function (list) {
                    if (list.id === action.payload) {
                        return { ...list, isChecked: !list.isChecked };
                    }
                    return list;
                })
            ];
        }
        case ACTION_TYPES.FILTER: {
            return { ...prevState, isChecked: !filteredList().isChecked };
        }
        default:
            return [...prevState];
    }
}

export function filteredList({ list, mark }) {
   if (!mark) return list;

    return list.filter(list => list.isChecked);
}
