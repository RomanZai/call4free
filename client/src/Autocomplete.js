import React , { useState }from "react";
import ReactAutocomplete from "react-autocomplete";
import { useLocations } from "./hooks/locations";

function MyInput (props) {
const [value, setValue] = useState ("");
const { locations, isLoading } = useLocations();

  function selectItem(code) {
      console.log(code);
      props.setLocation (locations.filter(item => item.code == code)[0])
  }
      return (
        <ReactAutocomplete
          items={locations}
          shouldItemRender={(item, value) => (item.country.toLowerCase().includes(value.toLowerCase())) 
            || (item.code.toString().includes(value)) || (value.startsWith(item.code.toString()))}
          getItemValue={item => item.code.toString()}
          renderItem={(item, highlighted) =>
            <div
              key={item.code}
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
            >
              {item.code + " " + item.country}
            </div>
          }
          value={value}
          onChange={e => setValue(e.target.value )}
          onSelect={value => selectItem(value)}
          inputProps={{ style: { width: '100%',height: '40px'}, placeholder: 'Please use internatioanl format'}}  
          wrapperStyle={{ width:  '100%'   }}
        />
      )
    }
  
  export default MyInput;