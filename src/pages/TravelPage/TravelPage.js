import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SvgIcon from "@mui/material/SvgIcon";
import Chevron from "../../../src/assets/Icons/Flights_Down_Chevron_Icon.svg";
import Calender from "../../../src/assets/Icons/Flights_Calendar_Icon.svg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import "./TravelPage.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import OpenSans from "../../assets/Fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export default function TravelPage(children) {
	// const [passengers, setPassengers] = React.useState("");

	// const handleChange = (event) => {
	// 	setPassengers(event.target.value);
	// };

	const [departDate, setDepartValue] = React.useState(dayjs(Date.now()));
	const [returnDate, setReturnValue] = React.useState(dayjs(Date.now()));
  const [rangeDate,setRangeValue] = React.useState([null, null]);

	const handleDepartChange = (newValue) => {
		setDepartValue(newValue);
	};

	const handleReturnChange = (newValue) => {
		setReturnValue(newValue);
	};

	const theme = createTheme({
		typography: {
			fontFamily: "OpenSans, Arial",
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: `
          @font-face {
            font-family: 'OpenSans';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('OpenSans'), local('OpenSans-Regular'), url(${OpenSans}) format('ttf');
          }
        `,
			},
		},
	});

	function ChevronIcon(props) {
		return (
			<SvgIcon {...props}>
				<path
					d="M7.37821 9.45233L0.257567 2.33165C-0.0858557 1.98823 -0.0858557 1.43145 0.257567 1.08807L1.08808 0.257559C1.43091 -0.0852778 1.98655 -0.0859376 2.33019 0.256093L8.00002 5.89935L13.6698 0.256093C14.0134 -0.0859376 14.5691 -0.0852778 14.9119 0.257559L15.7424 1.08807C16.0859 1.43149 16.0859 1.98826 15.7424 2.33165L8.62183 9.45233C8.27841 9.79571 7.72163 9.79571 7.37821 9.45233Z"
					fill="black"
				/>
			</SvgIcon>
		);
	}

	function CalenderIcon(props) {
		return (
			<SvgIcon {...props}>
				<path
					d="M4.625 9H3.375C3.16875 9 3 8.83125 3 8.625V7.375C3 7.16875 3.16875 7 3.375 7H4.625C4.83125 7 5 7.16875 5 7.375V8.625C5 8.83125 4.83125 9 4.625 9ZM8 8.625V7.375C8 7.16875 7.83125 7 7.625 7H6.375C6.16875 7 6 7.16875 6 7.375V8.625C6 8.83125 6.16875 9 6.375 9H7.625C7.83125 9 8 8.83125 8 8.625ZM11 8.625V7.375C11 7.16875 10.8312 7 10.625 7H9.375C9.16875 7 9 7.16875 9 7.375V8.625C9 8.83125 9.16875 9 9.375 9H10.625C10.8312 9 11 8.83125 11 8.625ZM8 11.625V10.375C8 10.1688 7.83125 10 7.625 10H6.375C6.16875 10 6 10.1688 6 10.375V11.625C6 11.8312 6.16875 12 6.375 12H7.625C7.83125 12 8 11.8312 8 11.625ZM5 11.625V10.375C5 10.1688 4.83125 10 4.625 10H3.375C3.16875 10 3 10.1688 3 10.375V11.625C3 11.8312 3.16875 12 3.375 12H4.625C4.83125 12 5 11.8312 5 11.625ZM11 11.625V10.375C11 10.1688 10.8312 10 10.625 10H9.375C9.16875 10 9 10.1688 9 10.375V11.625C9 11.8312 9.16875 12 9.375 12H10.625C10.8312 12 11 11.8312 11 11.625ZM14 3.5V14.5C14 15.3281 13.3281 16 12.5 16H1.5C0.671875 16 0 15.3281 0 14.5V3.5C0 2.67188 0.671875 2 1.5 2H3V0.375C3 0.16875 3.16875 0 3.375 0H4.625C4.83125 0 5 0.16875 5 0.375V2H9V0.375C9 0.16875 9.16875 0 9.375 0H10.625C10.8312 0 11 0.16875 11 0.375V2H12.5C13.3281 2 14 2.67188 14 3.5ZM12.5 14.3125V5H1.5V14.3125C1.5 14.4156 1.58438 14.5 1.6875 14.5H12.3125C12.4156 14.5 12.5 14.4156 12.5 14.3125Z"
					fill="black"
				/>
			</SvgIcon>
		);
	}

	// const useStyles = makeStyles((theme) => ({
	//   iconOpen: {
	//     transform: 'rotate(0deg)',
	//   },
	// }));

	const options = [
		{ label: "1", id: 1 },
		{ label: "2", id: 2 },
		{ label: "3", id: 3 },
		{ label: "4", id: 4 },
		{ label: "5", id: 5 },
		{ label: "6", id: 6 },
		{ label: "7", id: 7 },
		{ label: "8", id: 8 },
		{ label: "9", id: 9 },
	];

	const styles = {
		//style for font size
		resize: {
			fontSize: 16,
		},
	};

	const themebutton = createTheme({
		typography: {
			button: {
				textTransform: "none",
				fontSize: 16,
				fontFamily: "OpenSans, Arial",
			},
		},
	});

	const themeInputs = createTheme({
		typography: {
			input: {
				fontSize: 16,
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				className="travel-form"
				sx={{ display: "flex", flexWrap: "wrap", fontFamily: "OpenSans" }}>
				<h2 className="travel-form__heading">Book a Flight Now</h2>
				<ThemeProvider theme={themeInputs}>
					<div className="travel-form__destinations">
						<TextField
							id="departure"
							sx={{ mr: 3, width: "50%", height: 70, borderRadius: 0 }}
							className="travel-form__input"
							inputProps={{ style: { fontSize: 16 } }}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<SvgIcon sx={{ width: 16, height: 16 }}>
											<path
												d="M14.3911 0.109954L1.39815 6.10675C-0.100889 6.80643 0.398792 9.00516 1.99783 9.00516H7.49495V14.5023C7.49495 16.1013 9.69368 16.6013 10.3934 15.102L16.3902 2.10899C16.8898 0.909319 15.5905 -0.390039 14.3911 0.109954Z"
												fill="black"
											/>
										</SvgIcon>
									</InputAdornment>
								),
							}}
						/>
						<TextField
							id="arrival"
							sx={{ width: "50%", height: 70 }}
							className="travel-form__input"
							inputProps={{ style: { fontSize: 16 } }}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<SvgIcon style={{ fontSize: 16, height: 16, width: 16 }}>
											<path
												d="M5.38337 15.6772C0.842812 9.09472 0 8.41915 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41915 11.1572 9.09472 6.61662 15.6772C6.31865 16.1076 5.68131 16.1076 5.38337 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z"
												fill="black"
											/>
										</SvgIcon>
									</InputAdornment>
								),
							}}
						/>
					</div>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<div className="travel-form__dates">
							<DesktopDatePicker
								label="Depart Date"
								id="departDate"
								inputFormat="MM/DD/YYYY"
								value={departDate}
								onChange={handleDepartChange}
								renderInput={(params) => (
									<TextField sx={{ mr: 3, width: "33%" }} {...params} />
								)}
							/>

							<DesktopDatePicker
								label="Return Date"
								id="returnDate"
								inputFormat="MM/DD/YYYY"
								value={returnDate}
								onChange={handleReturnChange}
								renderInput={(params) => (
									<TextField sx={{ mr: 3, width: "33%" }} {...params} />
								)}
							/>
							{/* <TextField
								label="Return Date"
								id="returnDate"
								sx={{ mr: 3, width: "33%" }}
								InputLabelProps={{ shrink: true }}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<SvgIcon>
												<path
													d="M4.625 9H3.375C3.16875 9 3 8.83125 3 8.625V7.375C3 7.16875 3.16875 7 3.375 7H4.625C4.83125 7 5 7.16875 5 7.375V8.625C5 8.83125 4.83125 9 4.625 9ZM8 8.625V7.375C8 7.16875 7.83125 7 7.625 7H6.375C6.16875 7 6 7.16875 6 7.375V8.625C6 8.83125 6.16875 9 6.375 9H7.625C7.83125 9 8 8.83125 8 8.625ZM11 8.625V7.375C11 7.16875 10.8312 7 10.625 7H9.375C9.16875 7 9 7.16875 9 7.375V8.625C9 8.83125 9.16875 9 9.375 9H10.625C10.8312 9 11 8.83125 11 8.625ZM8 11.625V10.375C8 10.1688 7.83125 10 7.625 10H6.375C6.16875 10 6 10.1688 6 10.375V11.625C6 11.8312 6.16875 12 6.375 12H7.625C7.83125 12 8 11.8312 8 11.625ZM5 11.625V10.375C5 10.1688 4.83125 10 4.625 10H3.375C3.16875 10 3 10.1688 3 10.375V11.625C3 11.8312 3.16875 12 3.375 12H4.625C4.83125 12 5 11.8312 5 11.625ZM11 11.625V10.375C11 10.1688 10.8312 10 10.625 10H9.375C9.16875 10 9 10.1688 9 10.375V11.625C9 11.8312 9.16875 12 9.375 12H10.625C10.8312 12 11 11.8312 11 11.625ZM14 3.5V14.5C14 15.3281 13.3281 16 12.5 16H1.5C0.671875 16 0 15.3281 0 14.5V3.5C0 2.67188 0.671875 2 1.5 2H3V0.375C3 0.16875 3.16875 0 3.375 0H4.625C4.83125 0 5 0.16875 5 0.375V2H9V0.375C9 0.16875 9.16875 0 9.375 0H10.625C10.8312 0 11 0.16875 11 0.375V2H12.5C13.3281 2 14 2.67188 14 3.5ZM12.5 14.3125V5H1.5V14.3125C1.5 14.4156 1.58438 14.5 1.6875 14.5H12.3125C12.4156 14.5 12.5 14.4156 12.5 14.3125Z"
													fill="black"
												/>
											</SvgIcon>
										</InputAdornment>
									),
								}}
							/> */}
							{/* <FormControl sx={{ m: 1, width: "33%" }}>
					<InputLabel id="passengers">Passengers</InputLabel>
					<Select
						labelId="passengers"
						id="passengers-select"
						value={passengers}
						label="Passengers"
						onChange={handleChange}
						// IconComponent={()=> <ChevronIcon/>}
						IconComponent={(_props) => {
							return (
								<div
									style={{
										position: "absolute",
										cursor: "pointer",
										pointerEvents: "none",
										right: 16,
										height: "10px",
										width: "16px",
										transform: "rotate(0deg)",
									}}>
									<ChevronIcon />
								</div>
							);
						}}>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
					</Select>
				</FormControl> */}
							<Autocomplete
								disablePortal
								id="passengers"
								options={options}
								sx={{ width: "33%" }}
								renderInput={(params) => (
									<TextField
										{...params}
										InputLabelProps={{ shrink: true }}
										label="Passengers"
									/>
								)}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<ChevronIcon />
										</InputAdornment>
									),
								}}
							/>
						</div>
					</LocalizationProvider>
					<div className="travel-form__CTA">
						<ThemeProvider theme={themebutton}>
							<Button
								sx={{
									width: 182,
									height: 50,
									bgcolor: "#005078",
									borderRadius: 0,
								}}
								variant="contained">
								Search
							</Button>
						</ThemeProvider>
					</div>
				</ThemeProvider>
			</Box>
		</ThemeProvider>
	);
}
