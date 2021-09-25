import React from "react";
import {Header} from "./header";
import {List} from "./list";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    box: {
        display:"flex",
        flexDirection:"column",

    },
    outerBox:{
        display:"flex",
      justifyContent:"center"
    }
});
export const Main = () => {
    const classes = useStyles();
    return(
        <div className={classes.outerBox}>
    <div className={classes.box}>
        <Header/>
        <List/>
    </div>)
    </div>)
}