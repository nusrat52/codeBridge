import React, {useEffect} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Calendar, Arrow } from "../statics/svgs";
import { useDispatch } from "react-redux";
  import {DetailedDataAdd} from "../store/detailed/DetailedAction"
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom"
interface props {
  cardDetails:{
    id: number;
    imageUrl: string;
    title: string;
    publishedAt: string;
    summary: string;
    keyWords: {
    title:string[],
    summary:string[]
    }
  }
  
  }


const Items: React.FC<props> = ({ cardDetails }) => {
  

  const dispatch = useDispatch()
  const text = React.useRef<HTMLParagraphElement>(null)
  const title = React.useRef<HTMLDivElement>(null)
  

  const spanAdder = (str:string|undefined, keyWords:string[]):string|undefined => {
    let strMock:string|undefined=str
  
    keyWords.forEach((key) => {
      strMock=strMock?.replace(key, `<span class="bg-yellow">${key}</span>`)
    })

    return strMock
}

  useEffect(() => {
    const { keyWords } = cardDetails
     
      
     

    let t: string | undefined = title?.current?.innerText;
     
      (title.current as HTMLElement ).innerHTML=[  spanAdder(t?.slice(0, 100), keyWords.title) ].join('')    
     
    

    let p: string | undefined = text?.current?.innerText;
     
      (text.current as HTMLElement ).innerHTML=[  spanAdder(p?.slice(0, 100), keyWords.summary) , ' ','<br>',' ',  p?.slice(100)].join('')   
  })
  return (
    <Grid className='cardGrid' item xs={2} sm={4} md={4} >

       <Card sx={{ maxWidth: 400, height: 530 }}>
        <CardMedia
          component="img"
          height="217"
          image={cardDetails.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <div  className="calendar">
            <Calendar />
            <Typography
              sx={{
                color: "#363636",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: "400",
                marginLeft: "10px",
              }}
            >
             {cardDetails.publishedAt}
            </Typography>
          </div>
          <Typography
            sx={{
              color: "#363636",
              fontFamily: "Montserrat",
              marginBottom: "20px",
            }}
            ref={title}
            gutterBottom
            variant="h5"
            component="div"
          >
           {cardDetails.title}
          </Typography>
          <Typography
            className="item__text"
            ref={text}
            component='p'
          >
              {cardDetails.summary}
              </Typography>

        </CardContent>
        <CardActions>
         <Link className="anchor-none" to="/detailed">
          <Button onClick={() => {
            dispatch(DetailedDataAdd(cardDetails))
          }} className="card__link" size="small"> <span className="mr-2">Read More</span>  <Arrow/> </Button></Link>
        </CardActions>
      </Card>
      </Grid>
   );
};

export default Items;
