import { Box, CircularProgress, Typography, styled } from "@mui/material";

const LoadingPage = () => {
	return (
		<LoadingContainer>
			<CircularProgress sx={{ color: "#4caf50", marginBottom: "20px" }} />
			<Typography variant="h6" sx={{ color: "#4caf50", fontWeight: "bold" }}>
				Loading, please wait...
			</Typography>
		</LoadingContainer>
	);
};

export default LoadingPage;

const LoadingContainer = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	height: "100vh",
	backgroundColor: "rgba(0,0,0,0.55)",
	color: "#333",
	textAlign: "center",
	position: "absolute",
	zIndex: "9999999999",
	width: "100%",
}));
