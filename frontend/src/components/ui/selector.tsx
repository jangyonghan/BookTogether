import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { OutlinedInput } from "@mui/material";

interface CustomSelectProps {
  label?: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export default function BasicSelect({
  label,
  options,
  selectedValue,
  onChange,
}: CustomSelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={selectedValue}
          label="Room"
          onChange={handleChange}
          input={<OutlinedInput />}
        >
          {/* Placeholder 역할 */}
          {label && <MenuItem value="">{label}</MenuItem>}

          {/* 동적으로 MenuItem 생성 */}
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
