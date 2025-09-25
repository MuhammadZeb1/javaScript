function User(props) {
  console.log(props)
  return (
    <div style={{color:props.color}}>
      User {props.name}
      {props.color}
      {props.children}
    </div>
  )
}
export default User