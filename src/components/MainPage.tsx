import { Box, Button, styled } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getAllBlokchanes } from "../store/slice/moneyThunk";
import LoadingPage from "./Loading";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
	const dispatch = useAppDispatch();
	const { data, isLoading } = useAppSelector((state) => state.block);
	const [open, setOpen] = useState(false);
	const [text, setText] = useState("");
	const navigate = useNavigate();

	// Handle navigation to inner page
	const goToInnerPage = (address: string) => {
		navigate(`${address}/inner`);
	};

	const openModal = () => {
		setOpen((prev) => !prev);
	};

	const fetchBlockchanes = () => {
		const ids = text
			.split("\n")
			.map((item) => item.trim())
			.filter((item) => item !== "");

		dispatch(getAllBlokchanes({ ids, openModal }));
	};

	const handleCancel = () => {
		setOpen(false);
		setText("");
	};

	return (
		<>
			<Block>
				{isLoading && <LoadingPage />}
				{!open ? (
					<div>
						<Button
							onClick={openModal}
							variant="contained"
							sx={{ margin: "20px" }}>
							Click me
						</Button>
					</div>
				) : (
					<Width>
						<Blocks>
							<InputsBlock>
								<TextareaBlock
									placeholder="Enter wallet addresses, one per line"
									onChange={(e) => setText(e.target.value)}
									value={text}
								/>
								<Button
									onClick={fetchBlockchanes}
									sx={{ width: "250px" }}
									variant="contained">
									Send
								</Button>
								<Cansel onClick={handleCancel}>
									<p>Cancel</p>
								</Cansel>
							</InputsBlock>
						</Blocks>
					</Width>
				)}

				<MainBlock>
					{data.length ? (
						data.map((item: any) => (
							<BlockChanes
								onClick={() => goToInnerPage(item.address)}
								key={item.address}>
								<div
									style={{
										backgroundColor: "bisque",
										padding: "10px",
										borderRadius: "14px",
									}}>
									<p>Address: </p>
									<span
										style={{
											fontSize: "15px",
											wordBreak: "break-all",
											color: "grey",
										}}>
										{item.address}
									</span>
								</div>
								{item.interfaces.map((ite: any, index: number) => (
									<div
										key={index}
										style={{
											backgroundColor: "bisque",
											padding: "10px",
											borderRadius: "14px",
										}}>
										<p>Interface: </p>
										<span
											style={{
												fontSize: "15px",
												wordBreak: "break-all",
												color: "grey",
											}}>
											{ite}
										</span>
									</div>
								))}
								<div
									style={{
										backgroundColor: "bisque",
										padding: "10px",
										borderRadius: "14px",
									}}>
									<p>Balance: </p>
									<span
										style={{
											fontSize: "15px",
											wordBreak: "break-all",
											color: "grey",
										}}>
										{new Intl.NumberFormat("ru-RU").format(item.balance)} $
									</span>
								</div>
								<div
									style={{
										backgroundColor: "bisque",
										padding: "10px",
										borderRadius: "14px",
									}}>
									<p>Status: </p>
									<span
										style={{
											fontSize: "15px",
											wordBreak: "break-all",
											color: item.status === "active" ? "green" : "red",
										}}>
										{item.status === "active" ? "Активный" : "Не активный"}
									</span>
								</div>
								<div
									style={{
										backgroundColor: "bisque",
										padding: "10px",
										borderRadius: "14px",
									}}>
									<p>Last activity: </p>
									<span
										style={{
											fontSize: "15px",
											wordBreak: "break-all",
											color: "grey",
										}}>
										{new Date(item.last_activity * 1000).toLocaleString()}
									</span>
								</div>
								<div
									style={{
										backgroundColor: "bisque",
										padding: "10px",
										borderRadius: "14px",
									}}>
									<p>Wallet: </p>
									<span
										style={{
											fontSize: "15px",
											wordBreak: "break-all",
											color: "grey",
										}}>
										Кошелек активен: {item.is_wallet === true ? "Да" : "Нет"}
									</span>
								</div>
							</BlockChanes>
						))
					) : (
						<p>Пока данных нет</p>
					)}
				</MainBlock>
			</Block>
		</>
	);
};

export default MainPage;

const Block = styled(Box)(() => ({
	width: "100%",
	minHeight: "100vh",
	height: "100%",
	backgroundColor: "#dbf0f3",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}));

const MainBlock = styled(Box)(() => ({
	backgroundColor: "bisque",
	width: "80%",
	display: "flex",
	flexWrap: "wrap",
	gap: "20px",
	justifyContent: "center",
	padding: "20px",
	margin: "10px",
	borderRadius: "30px",
}));

const BlockChanes = styled(Box)(() => ({
	width: "300px",
	minHeight: "360px",
	borderRadius: "20px",
	backgroundColor: "#fff",
	padding: "10px",
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	cursor: "pointer",
}));

const Width = styled(Box)(() => ({
	width: "100%",
	height: "100vh",
	backgroundColor: "rgba(0,0,0,0.45)",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%,-50%)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const Blocks = styled(Box)(() => ({
	width: "650px",
	minHeight: "300px",
	backgroundColor: "white",
	position: "relative",
	borderRadius: "20px",
	display: "flex",
	justifyContent: "center",
	alignItems: "start",
	padding: "50px 10px 10px 10px",
}));

const InputsBlock = styled(Box)(() => ({
	width: "90%",
	display: "flex",
	flexDirection: "column",
	alignItems: "end",
	justifyContent: "start",
	gap: "20px",
}));

const TextareaBlock = styled("textarea")(() => ({
	width: "100%",
	height: "100px",
	borderRadius: "8px",
	padding: "10px",
	fontSize: "16px",
	border: "1px solid #ccc",
	resize: "vertical",
	outline: "none",
}));

const Cansel = styled(Box)(() => ({
	width: "100px",
	backgroundColor: "red",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "5px 0",
	borderRadius: "4px",
	color: "white",
	position: "absolute",
	top: "-15px",
	right: "-25px",
	cursor: "pointer",
}));
