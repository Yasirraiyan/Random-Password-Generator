<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p id="currentTime"></p>
      <script src="script.js"></script>
      <h1>Generate a Random Password</h1> 
      <br>
      <br>
      <label for="Password">Password
      </label>
      <input type="text" placeholder="password">
      <br>
      <br>
      <button onclick="createpassword()">Generate Password</button>
      <script>
        const passwordBox=document.getElementById("password");
        const length=12;
        const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase="abcdefghijklmnopqrstuvwxyz";
        const number="0123456789";
        function createpassword()
        {
          let password="";
          password+=uppercase[Math.floor(Math.Random()*uppercase.length)];
          password+=lowercase[Math.floor(Math.Random()*lowercase.length)];
          password+=number[Math.floor(Math.Random()*number.length)];
          password+=symbol[Math.floor(Math.Random()*symbol.length)];
          while(length<password.length)
          {
            password+=allChars[Math,floor(Math.Random()*allChars.length)];
          }
          passwordBox.value=password;
          
        }
      </script>
      
  </body>
