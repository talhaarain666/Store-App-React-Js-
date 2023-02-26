import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";

let Store = () => {

    let api = "https://fakestoreapi.com/products"
    const [data, setData] = useState([]);

    let getApiData = () => {
        axios.get(api).then((res) => {
            setData(res.data)
            // console.log(res.data)
        })

    }
    useEffect(() => {
        getApiData();
    }, [])

const navigate = useNavigate();
    return <>
        <Grid container textAlign={"center"}>

            {data.map((val, i) => {
                return <>

                    <Grid item md={6} lg={4} xs={12} xl={3} sm={6} key={i}>
                        <Box onClick={()=>navigate(`/card`,{ state: val})} padding="2rem" className="boxesShadow">
                            <Box >
                            
                                <img width={"250px"} src={val.image} />
                            </Box>
                            <Box>
                                <Typography className="textEllipsis" variant="h4">{val.title}</Typography>
                            </Box>
                            <Box>
                                <Typography className="textEllipsis" variant="h6">{val.description}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Box>
                                    <Typography variant="h6">Category: {val.category}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">Price: {val.price}</Typography>
                                </Box>
                            </Box>
                            {/* <Typography variant="h4">{val.id}</Typography> */}
                            <Box display={"flex"} justifyContent="center">
                                <Box>
                                    <Typography sx={{
                                        verticalAlign: "middle",
                                        display: "inline-flex"
                                    }} variant="p" className="orangeColor"><StarIcon />{val.rating.rate}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="p">{"(" + val.rating.count + ")"}</Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                </>
            })}

        </Grid>
    </>
}
export default Store;