import { createSlice, current, nanoid } from "@reduxjs/toolkit";



const initialState = {
    // todos : [{id : 1, text : "hello world", compeleted : false, editAble : false}]
    
    todos : JSON.parse(localStorage.getItem('todos')) || []  // todos array of objects

}


export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload,
                compeleted : false,
                editAble : false
            }
            state.todos.push(todo)
            let data = JSON.stringify(current(state.todos));
            // console.log(current(state.todos));
            localStorage.setItem('todos', data);
        },

        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },

        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            // console.log(text, id);
            const indexToUpdate = state.todos.findIndex((todo) => todo.id === id);
            if (indexToUpdate !== -1) {
                state.todos[indexToUpdate].text = newText;
                localStorage.setItem("todos", JSON.stringify(state.todos));
            }
        },

        toggleComplete : (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload);
            // console.log("print    "+state.todos[index].compeleted)
            if (index !== -1) {
                state.todos[index].compeleted = !state.todos[index].compeleted;
                if(state.todos[index].editAble){
                    state.todos[index].editAble = !state.todos[index].editAble;
                    localStorage.setItem('todos', JSON.stringify(state.todos));
                }
            }
        },

        isEditAble : (state,action)=>{
            const {id} = action.payload
            const index = state.todos.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                state.todos[index].editAble = !state.todos[index].editAble;
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
           
       
        },

    }
})


export const {addTodo, removeTodo, updateTodo, toggleComplete, isEditAble} = todoSlice.actions

export default todoSlice.reducer

