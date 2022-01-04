import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.svg";
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import Card from "./components/Card";
// import Clock from "./components/Clock";

// import Counter from "./components/Counter";

// function App() {
//   const [date, setDate] = useState(new Date());

//   function tick() {
//     setDate(new Date());
//   }

//   useEffect(() => {
//     const interval = setInterval(() => tick(), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className="App">
//         <h1>Realtime CLOCK</h1>
//         <hr />
//         <h1>{date.toLocaleTimeString()}</h1>
//       </div>
//       <br />
//       <div>
//         <Clock />
//       </div>
//     </>
//   );
// }

// export default App;

function Header() {
  return (
    // <header className="header">
    //   <h1>My First React app</h1>
    //   <img src={logo} className="App-logo" alt="logo" />
    //   {/* <Counter /> */}
    // </header>
    <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">
                About
              </a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link link-dark px-2">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <span className="fs-4">My First React App</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0">
            <input
              type="search"
              className="form-control"
              placeholder="Search.."
              aria-label="Search"
            />
          </form>
        </div>
      </header>
    </>
  );
}

function Content() {
  return (
    // <div className="content">
    //   <h3>"Ramai Sepi Bersama"</h3>
    //   <p>
    //     Seberapa jauh dari sini Tembok-tembok ini tak berarti Asal kulihat
    //     senyummu hari ini Mendengar keluhmu malam nanti Saat semua tak jelas
    //     arahnya Kita hanya punya bersama Lewati curam terjalnya dunia Ramai sepi
    //     ini milik bersama Ramai sepi ini milik bersama Kita sama-sama takkan
    //     kemana Selama kau ada, aku tak apa Apapun yang terjadi tidak apa Melihat
    //     tawa, tangis dan isak Mendengar kabar berbagai macamnya Kali ini kita
    //     belajar banyak Yang runtuh kita ulangi nantinya Saat semua tak jelas
    //     arahnya Kita hanya punya bersama Lewati curam terjalnya dunia Ramai sepi
    //     ini milik bersama Saat terasa berat-beratnya Ku tahu kau pun berjuang
    //     juga Hadapi semuanya langsung di muka Apapun yang terjadi tidak apa
    //     Setiap hari ku bersyukur, melihatmu Berselimut harapan Berbekal cerita
    //     Saat semua tak jelas arahnya Kita hanya punya bersama Lewati curam
    //     terjalnya dunia Ramai sepi ini milik bersama Ramai sepi ini milik
    //     bersama Kita sama-sama takkan kemana Selama kau ada, aku tak apa Apapun
    //     yang terjadi tidak apa
    //   </p>
    // </div>
    // <div className="p-5 mb-4 bg-light rounded-3 border">
    //   <div className="container-fluid py-5">
    //     <h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
    //     <p className="col-md-8 fs-4">
    //       Using a series of utilities, you can create this jumbotron, just like
    //       the one in previous versions of Bootstrap. Check out the examples
    //       below for how you can remix and restyle it to your liking.
    //     </p>
    //     <button className="btn btn-primary btn-lg" type="button">
    //       Example button
    //     </button>
    //   </div>
    // </div>
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap, Check out the
            examples below for how you can remix and restyle it to your liking
          </p>
          <button
            className="btn btn-primary btn-lg"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Click here to show Modal box
          </button>
        </div>
      </div>
      ;{/*Modal*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Model title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">This is my first modal box</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button className="btn btn-primary" data-bs-dismiss="modal">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    // <div className="footer">
    //   <p>&copy; Oki - 2022</p>
    // </div>
    <footer className="text-muted py-5 border-top">
      <div className="container">
        <p className="mb-1">This is My First React app in Bootstrap</p>
        <p className="mb-0">
          New to React <a href="https://reactjs.org"> Visit the homepage</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  // const [url] = useState("https://jsonplaceholder.typicode.com/todos");
  // const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState();

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((result) => setTodos(result));
  // }, []);

  // function getTodo(id) {
  //   fetch(url + `/${id}`)
  //     .then((response) => response.json())
  //     .then((result) => setTodo(result));
  // }

  //   const [name, setName] = useState("Budi");

  //   function changeName(e) {
  //     console.log(e);
  //     setName("Fikri");

  //     setName(name === "Budi" ? "Fikri" : "Budi");
  //   }
  return (
    <>
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />

      {/* //{" "}
      // <div className="App"> */}
      {/* //{" "}
      <p>
        // <code>{name}</code>
        //{" "}
      </p>
      // <button onClick={changeName}>Change name</button>
       */}
      {/* {todo && (
        <div>
          {todo.title} - {todo.userId} -{" "}
          {todo.completed ? "Completed" : "Pending"}
          <button onClick={() => setTodo()}>Go back</button>
        </div>
      )} */}
      {/* {!todo &&
        todos.map((todo) => (
          // <div key={todo.id}>
          //   <button onClick={() => getTodo(todo.id)}>
          //     {todo.title} by {todo.userId} -{" "}
          //     {todo.completed ? "Completed" : "Pending"}
          //   </button>
          // </div>
          <Card
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        ))} */}
      {/* // <Header />
        // <hr />
        // <Content />
        // <hr />
        // <Footer />
        //{" "}
      </div> */}
    </>
  );
}

export default App;
