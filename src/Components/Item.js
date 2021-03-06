
export default function Item(props) {
  return (
    <div>
      <li className="border d-flex justify-content-between align-items-center p-2 m-2">
        <div className="p-3">{props.text}</div>
        <button onClick={() => props.delFunc(props.id)} className="btn btn-danger p-2 h-50">Supprimer</button>
      </li>
    </div>
  )
}
