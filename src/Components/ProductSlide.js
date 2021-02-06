import React from 'react'
import {Card, makeStyles } from '@material-ui/core'
import './Component CSS/ProductSlide.css'
import {Packages} from './Packages'

export default function ProductSlide(props) {
    const { backgroundColor, url } = props.content

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '200px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent:'center',
            marginTop: '60px',
            height:'300px'

        }
    }))

    console.log(url)


    const classes = useStyles();


    return (
        
        <Card className={classes.card} >
            <div className="pcard">
                <img src={url}/>
            
            </div>
            
        </Card>
        
    )
}

