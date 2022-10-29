
function Bio(props) {
  

  return (

      <div style={{display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center'}}>
        <h1>{props.texto}</h1>
        <button style={{backgroundColor:'red', fontWeight: 'bolder'}}>Saiba mais</button>
      </div>

  )
}

export default Bio