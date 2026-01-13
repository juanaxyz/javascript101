import Header from "./header";
import Footer from "./footer";
import Counter from "./Counter";
import Login from "./login";
import { useState } from "react";

function App() {
  const [islogin, setIsLogin] = useState(false);
  

  return (
    <div className="main justify-center">
      {/* parent props */}
      <Header name="juana" />
      <br />
      {islogin ? <Counter /> : <Login login={setIsLogin} />}

      {/* <Counter/> */}
      <br />
      <Footer />
    </div>
  );
}

export default App;
