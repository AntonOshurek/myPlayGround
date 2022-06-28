import { Profil } from "./profil"

export function Profils(props) {

  const {profils, removeProfil} = props;

  return (
    <ul className='test-data'>
      {profils.map(profil => (
        <Profil name={profil.name} id={profil.id} key={profil.id} removeProfil={removeProfil}/>
      ))}
    </ul>
  )
}
