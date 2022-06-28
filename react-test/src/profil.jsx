export function Profil(props) {

  const { name, removeProfil, id } = props

  return (
    <li className='test-data__item'>
      <h2 className='test-data__name'>{name}</h2>
      <button className="button neumorphic neumorphic-button"
        onClick={() => removeProfil(id)}
        >DELETE</button>
    </li>
  )
}
