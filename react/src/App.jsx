import { createElement } from "react"

createElement
function App() {

  // return (
  //   <>
  //     <h1>hello</h1>
  //   </>
  // )

  return createElement("div",{id:"my"}, "hello my")
}

export default App
