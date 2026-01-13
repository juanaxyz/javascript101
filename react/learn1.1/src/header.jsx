// child props
// function Header(props) {
//   return (
//     <header>
//       <h1>my website</h1>
//       <h2>wellcome back, {props.name}</h2>

//       <nav>
//         <ul class="list-disc list-inside">
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">Service</a>
//           </li>
//           <li>
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;




// destructuring props
function Header({name}) {
  return (
    <header>
      <h1>my website</h1>
      <h2>wellcome back, {name}</h2>

      <nav>
        <ul class="list-disc list-inside">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
