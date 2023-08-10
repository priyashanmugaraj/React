What is props?
--------------
  Its nothing but properties,suppose if you want to send dynamic data to the functional component ,we need send data as props.
  props nothing but normal arguments to the functions.

config driven ui
----------------
  ui can be controlled by config data is konow as config driven ui.


2 types of import
-----------------
1] named exports  --> you have share multiple things from the same file.
   export const component 
   import {component} from 'component

2] default exports ---> every file/module always should have atleast one export.
   export default component
   import component from 'component

hook
---------
normal javascript utlity function which is given us by react.
 types of react hook
 1] useState()
 2] useEffect()


 using react hook function to change normal js variable to super powerful react variable.using react state hook to rerender the react component.

 how to use that
 ---------------
   const [listOfRestaurants,setListOfRestaurants] = useState()
   listOfRestaurants---> normal variable
   setListOfRestaurants- is a callback function whenever listOfRestaurants is changed this callback function wil be triggered.

how it wiil be works?
----------------------
  React using react fiber --> it will uses diff algorithm to find out differnce between old virtual dom and the 
  new virtual dom . Virtual Dom  is nothing but actual representation of the actual Dom,it is an javascript object.
  React is very efficient in rerendering the dom manipulations.It keeps  a track on state variable and sunc between
  data layer and the ui layer.


Seperation of Concerns
------------------------
  Each and small thing have a different projects ,this is know as microservice architecture.
  
Monolithic architecture
---------------------------
  Everything (ui,api,dbconnections,jsp,sms,sockets...) under a single project is know as Monolithic
  architecture.

optional chaining
-------------------
  if anyone can access object property or function is undefined finally its evaluates to undefined 
  it does not throw error using optional chaining.

  How to create a child route
  ----------------------------
  1] first We need to install react library  which is react router dom
  2] second we need to import createBrowserRouter function in app/main component
  3] using that fn we can provide defination for our child route for corresponding path what should i render it.
  4] nest i want to provide this configuation for that i will use RouterProvider component that will imported from
  react router dom.
  5] using that i can  able to render different child route based on different path.

  Error handling
  ---------------
    For that we can use a error react hook that is useRouteError imported from react route dom
    using that hook we can specify the detailed information about that error  based on that different path
  
  2 types of Routing
  ------------------
  1] Client Side Routing --> without refreshing the page we can able to render different component in single page.
  2] Server Side Routing --> We cand make the api call to get that page and render the whole page.

  How to link to different page in react
  -----------------------------------------
  using Link component that can be imported from react route dom
  using that we can move to differnt component without refreshing the whole page based on the path for that
  we will be using outlet component that also imported from react route dom


