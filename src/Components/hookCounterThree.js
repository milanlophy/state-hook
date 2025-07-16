import React, { useState } from "react";

console.log("useState with object...");

export function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" }); // passing object || NOTE: A state variable can be a string, boolean, number, object or an array
  return (
    <div>
      <form>
        {/* <input type='text' value={name.firstName} onChange={e=> setName({firstName: e.target.value})} /> */} 
        {/* <input type='text' value={name.lastName} onChange={e => setName({lastName: e.target.value})} /> */}    {/* we are setting a new object with only lastName, so react replaces the whole name object with lastname only , hence firstname is removed. To solve we need to preserve the existing state by copying it. So use spread operator. */}

        <input type="text" placeholder="First Name:"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}  //  first copies every property in name object and then change the first name with new value 
        />
        <input type="text" placeholder="Last Name:"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}  // First make replica of name then change the lastname property to new value 
        />

        <h2> Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>     {/* This is displayed to show what exactly happens.  */}
      </form>
    </div>
  );
}
  
