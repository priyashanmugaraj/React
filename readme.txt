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


 using react hook function to change normal js variable to super powerful react variable.using react state hook to rerender thereact component.

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
