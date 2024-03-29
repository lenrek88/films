import { InputLabel, NativeSelect, FormControl } from "@mui/material";
export default function Select({ label, data, setSelect }) {
  function selectChangeHandler(event) {
    setSelect(event.target.value);
  }

  return (
    <>
      <FormControl fullWidth sx={{ marginBottom: "15px", marginTop: "10px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {label}
        </InputLabel>
        <NativeSelect
          onChange={selectChangeHandler}
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          {data.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
}
