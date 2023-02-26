import { Box, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
let CardDetails = () => {
    const location = useLocation();
    return <>

        <Grid container sx={{ border: "5px solid black" }}>
            <Box width={"100%"} sx={{ backgroundColor: "black", color: "white", textAlign: "center", paddingY: "1%", boxShadow: "0 8px 6px -6px black" }}>
                <Typography variant="h5">Category: {location.state.category}</Typography>
            </Box>
            <Box display={"flex"} flexWrap="wrap" padding="2rem">

                <Grid item lg={4} xs={12} >
                    <Box >
                        <img width={"300px"} src={location.state.image} />
                    </Box>
                </Grid>
                <Grid item lg={8} xs={12} >

                    <Box sx={{ marginY: "3%" }}>
                        <Typography variant="h4">{location.state.title}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6">{location.state.description}</Typography>
                    </Box>

                    <Box sx={{ marginY: "3%" }}>
                        <Typography variant="h4">Price: {location.state.price}</Typography>
                    </Box>

                    <Box display={"flex"}>
                        <Box>
                            <Typography sx={{
                                verticalAlign: "middle",
                                display: "inline-flex"
                            }} variant="h6" className="orangeColor"><StarIcon />{location.state.rating.rate}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6">{"(" + location.state.rating.count + ")"}</Typography>
                        </Box>
                    </Box>

                </Grid>

            </Box>

        </Grid>

    </>
}
export default CardDetails;