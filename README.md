# React Jobly

This is a basic full-stack application for a job board. 
The backend is built with node express and the frontend is built with React.

## Setup

Go into the backend server and type this following command:

```
npm install
node server.js
```

The backend should now be starting on `http://localhost:3000/`

Now go into the frontend directory and run these following commands:

```
npm install
npm start
```


## Code example

The front-end is built using a simple react application with class-based components. To avoid prop-drilling down multiple components, we used React Context. 

```
import React from 'react';
const CurrentUser = React.createContext();

export default CurrentUser;
```


We also displayed multiple forms in one component. This is the code that accomplished this, it's a simple ternary operator that displays different forms.

```
    let form = this.state.signOrReg ?
      <LoginForm signIn={this.handleSignIn} /> : <RegisterForm register={this.handleRegister} />
```

Which was then added as a form here:
```
    return (
      <div className="container">
        <div className="mt-4 mb-1">
          <button className={this.state.signOrReg ? "btn btn-primary mr-1 active" : "btn btn-primary mr-1"} onClick={this.signUpChange}>Sign In</button>
          <button className={this.state.signOrReg ? "btn btn-primary ml-1" : "btn btn-primary ml-1 active"} onClick={this.registerChange}>Register</button>
        </div>
        <div className="card">
          {form}
        </div>
      </div>
    );
```

## Tests

No tests are written to this point. 

## Todos

- [ ] Create tests
- [ ] Refactor Class components with Hook components
- [ ] Reconfigure file hierarchy
- [ ] Add apply functionality


## Additional Information

This application is unifinished, but I would love to go back and reconfigure the application correctly.