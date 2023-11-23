import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import InputAdornment from "@mui/material/InputAdornment"
import Radio from "@mui/material/Radio"
import Stack from "@mui/material/Stack"
import Switch from "@mui/material/Switch"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

type BtnColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"

function App() {
  return (
    <Stack spacing={3} sx={{ p: 3, width: 720 }}>
      <Typography variant="h2">
        Welcome to your <br />
        Plasmo Extension 12345
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="large" sx={{ mr: -1.5 }}>
                Contained
              </Button>
            </InputAdornment>
          )
        }}
      />
      <Stack direction={"row"} spacing={1}>
        {[
          "inherit",
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "error"
        ].map((btn) => (
          <Button
            variant="contained"
            color={btn as BtnColor}
            sx={{ textTransform: "capitalize" }}
            onClick={() => {
              console.log("dom", document)
            }}>
            {btn}
          </Button>
        ))}
      </Stack>
      abc
      <Stack direction={"row"} spacing={1}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Checkbox"
        />
        <FormControlLabel control={<Radio />} label="Radio" />
        <FormControlLabel control={<Switch defaultChecked />} label="Switch" />
      </Stack>
    </Stack>
  )
}

export default App
