
import 'date-fns';
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const App = () => {
const [name, setName] = useState("");
const [selectedDate, setSelectedDate] = useState(new Date());

const handleDateChange = (date) => {
  console.log(date);
  setSelectedDate(date);
};

return (
  <div>
	<div className='card'>
    <h3>Name : {name} </h3>
	<TextField
		value={name}
		label=""
		onChange={(e) => {
		setName(e.target.value);
		}}
	/>

  <h3>Date of Birth:</h3>
  <MuiPickersUtilsProvider utils={DateFnsUtils}>

<KeyboardDatePicker
  label=""
  format="dd/MM/yyyy"
  value={selectedDate}
  onChange={handleDateChange}
/>
</MuiPickersUtilsProvider>

<h3>Class:</h3>
      <select>
        <option selected value="Select any value">select any value</option>
        <option value="I">I</option>
        <option value="II">II</option>
        <option value="III">III</option>
        <option value="IV">IV</option>
        <option value="V">V</option>
        <option value="VI">VI</option>
        <option value="VII">VII</option>
        <option value="VIII">VIII</option>
        <option value="IX">IX</option>
        <option value="X">X</option>
        <option value="XI">XI</option>
        <option value="XII">XII</option>
        </select>
        
          <h3>Division:</h3>
        <select>
          <option selected value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          </select>
        
        <h3>Gender:</h3>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
      <div style={{
        marginLeft: "25%",
      }}
    >
        <button className='btn' alignment='center' margin='20%'>
          submit
        </button></div>
        </div>
  </div>
);
};

export default App;
