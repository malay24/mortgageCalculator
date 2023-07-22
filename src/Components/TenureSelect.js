import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
const TenureSelect = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, loanTenure: e.target.value });
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="tenure-label">Tenure</InputLabel>
        <Select
          labelId="Tenure"
          id="tenure"
          defaultValue={data.loanTenure}
          value={data.loanTenure}
          label="Tenure"
          onChange={handleChange}
        >
          <MenuItem value={5}>5 Years</MenuItem>
          <MenuItem value={10}>10 Years</MenuItem>
          <MenuItem value={15}>15 Years</MenuItem>
          <MenuItem value={20}>20 Years</MenuItem>
          <MenuItem value={25}>25 Years</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
export default TenureSelect;
