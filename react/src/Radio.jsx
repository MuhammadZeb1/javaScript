import React from "react";

function Radio() {
  const [gender, setGender] = React.useState("female");
  const [city, setCity] = React.useState("");
  return (
    <>
      <h1>select your gender</h1>
      <div>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        //   defaultChecked
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        //   checked={gender == "female"}
            defaultChecked
        />
        <label htmlFor="female">Female</label>
      </div>
      <h1>your gender is {gender}</h1>
      <hr />
      <div>
        <select onChange={(e) => setCity(e.target.value)} name="city" id="" defaultValue={"lahore"}>
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
            <option value="quetta">Quetta</option>
            <option value="peshawar">Peshawar</option>
        </select>
        <h1>your city is {city}</h1>
      </div>
    </>
  );
}

export default Radio;
