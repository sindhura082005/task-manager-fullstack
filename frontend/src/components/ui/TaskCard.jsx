import {
Card,
CardContent,
Typography,
Chip,
Stack
} from "@mui/material";

export default function TaskCard(){

return(

<Card
sx={{borderRadius:4}}
>

<CardContent>

<Typography
variant="h6"
>

Build FastAPI Backend

</Typography>

<Typography
color="text.secondary"
>

Due Tomorrow

</Typography>

<Stack
direction="row"
spacing={1}
mt={2}
>

<Chip
label="High"
color="error"
/>

<Chip
label="Pending"
color="warning"
/>

</Stack>

</CardContent>

</Card>

)

}