import './App.css'
import Counter from './counter'
import Batsman from './Batsman'
import Users from './Users'
import Friends from './Friends'
import Players from './Players'
import Posts from './Posts'
import { Suspense } from 'react'


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   return res.json();
// }

function App() {
      
  //const friendsPromise = fetchFriends();
  //const postPromise = fetchPosts();

  function handleClick() {
    alert("I am clicked")
  }

  const handleClick3 = () => {
    alert("Click 3")
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Players></Players>
      {/* <Suspense fallback ={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Suspense fallback={<h3>All posts are loading...</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense> */}

      <Batsman></Batsman>
      <Counter></Counter>
      

      {/* <button onClick={handleClick()}>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert("Clicked 2")
      }}>Click Me 2</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert("Click 4")}>Click Me 4</button>
      <button onClick={()=>handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
