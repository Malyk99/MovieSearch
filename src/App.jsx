import './App.css'

function App() {
  return (
   <div>
     <p>Hello World</p>
     <Text string="Hello" />
     <Text string="World"/>
   </div>
   
  )
}

function Text({string}) {
  return (
    <div>
      <h1>{string}</h1>
    </div>
  )
}

function Component() {
  return (
    //<div></div>//need to be a parent can't have more than one parent div in the return statement
    //using fragment you can solve the issue
    <>
      <div></div>
      <div></div>
    </>
  )
}

export default App
