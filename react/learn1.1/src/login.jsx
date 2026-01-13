function Login({login}) {
  return (
    <div>
      <p>Nama</p>

      <input type="text" />
      <button onClick={()=>{login(true)}}>kirim</button>
    </div>
  );
}

export default Login;
