import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Slider } from "@mui/material";
const SliderComponent = ({
  label,
  min,
  max,
  value,
  steps,
  onChange,
  defaultValue,
  unit,
  amount
}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle2" textAlign="left">
          {label}
        </Typography>
        <Typography variant="h5" textAlign="left">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        aria-label="Default"
        defaultValue={defaultValue}
        value={value}
        valueLabelDisplay="auto"
        step={steps}
        marks
        min={min}
        max={max}
        onChange={onChange}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
