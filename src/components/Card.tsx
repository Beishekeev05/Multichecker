import { Box, styled, Grid, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

const Card = () => {
	const { address } = useParams();
	const { data } = useAppSelector((state) => state.block);
	const datas = data.find((item: any) => item.address === address);
	const navigate = useNavigate();
	console.log(datas);
	return (
		<Container>
			<div style={{ position: "absolute", top: "10px", left: "10px" }}>
				<Button variant="contained" onClick={() => navigate(-1)}>
					Back
				</Button>
			</div>
			<Block>
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>
						<Typography variant="h6" color="white">
							Address
						</Typography>
						<Typography variant="h6" color="white">
							Balance
						</Typography>
						<Typography variant="h6" color="white">
							Is Wallet
						</Typography>
						<Typography variant="h6" color="white">
							Last Activity
						</Typography>
						<Typography variant="h6" color="white">
							Status
						</Typography>
						<Typography variant="h6" color="white">
							Interfaces
						</Typography>
					</Grid>
					{/*  */}
					<Grid item xs={12} md={6}>
						<Typography variant="h6" color="white">
							{datas?.address}
						</Typography>
						<Typography variant="h6" color="white">
							{new Intl.NumberFormat("ru-RU").format(datas?.balance)} $
						</Typography>
						<Typography variant="h6" color="white">
							{datas?.is_wallet ? "True" : "False"}
						</Typography>
						<Typography variant="h6" color="white">
							{new Date(datas?.last_activity * 1000).toLocaleString()}
						</Typography>
						<Typography variant="h6" color="white">
							{datas?.status}
						</Typography>
						{datas?.interfaces.map((item: any, index: number) => (
							<Typography key={index} variant="h6" color="white">
								{item}
							</Typography>
						))}
					</Grid>
				</Grid>
			</Block>
		</Container>
	);
};

export default Card;

const Container = styled(Box)(({}) => ({
	backgroundColor: "#10161e",
	width: "100%",
	minHeight: "100vh",
	height: "100%",
	padding: "50px",
	color: "white",
	display: "flex",
	justifyContent: "center",
	alignItems: "start",
}));

const Block = styled(Box)(({}) => ({
	width: "100%",
	maxWidth: "1200px",
	backgroundColor: "#1d2633",
	borderRadius: "20px",
	padding: "30px",
	display: "flex",
	flexDirection: "column",
	gap: "30px",
	boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
	overflow: "hidden",
}));
