import Item from './Item'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Form() {

    const [dataArr, setDataArr] = useState([
        { text: "Promener le chien", id: uuidv4() },
        { text: "Sport", id: uuidv4() },
        { text: "Coder avec React", id: uuidv4() }
    ]);

    const [stateInput, setStateInput] = useState();

    const deleteElement = id => {
        const filterState = dataArr.filter(item => {
            return item.id !== id;
        });

        setDataArr(filterState);
    }

    const linkedInput = e => {
        setStateInput(e);
    }

    const addTodo = e => {
        e.preventDefault();
        const newArr = [...dataArr];
        const newTodo = {};
        newTodo.text = stateInput;
        newTodo.id = uuidv4();

        newArr.push(newTodo);
        setDataArr(newArr);
        setStateInput('');
    }

    return (
        <div className='m-auto px-4 col-12 col-sm-10 col-lg-6'>
            <form onSubmit={e => addTodo(e)} className="mt-3">
                <label htmlFor="todo" className="mt-3">
                    Chose à faire
                </label>
                <input value={stateInput} onInput={e => linkedInput(e.target.value)} type="text" className="form-control" id="todo" />
                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>

            <h2>Liste des choses à faire</h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return (
                        <Item text={item.text} key={item.id} id={item.id} delFunc={deleteElement} />
                    )
                })}
            </ul>
        </div>
    )
}
