import React, {useEffect} from "react";
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, TextField} from "@material-ui/core";
import Item from "./Item";


const useStyles = makeStyles({
    box: {
        display: "flex",
        flexDirection: "column",
        width: "700px",
        margin: "50px"
    },
    innerBox: {
        display: "flex",
        justifyContent:"center",
    },
    clearButton: {
        width: "200px",
        margin: "30px",
        background: "blueviolet"
    },

    submitButton: {
        marginLeft: "20px",
        background: "blueviolet"
    },
    items: {
        minHeight: "100px",
        display: "flex",
        flexDirection:"column"

    }
});

export const List = () => {
    const [allItems, setAllItems] = useState([]);
    const [item, setItem] = useState("");
    const [key, setKey] = useState(Math.random);

    const classes = useStyles();

    useEffect(()=> {
    } , [allItems])
    const clearCompleted = () => {
        setAllItems(allItems.filter(itm => !itm.completed))
    }
    const itemHandler = (value) => {
        setItem(value);
    };
    const submitHandler = () => {
        const newItem = {
            name: item,
            completed: false,
            id: key,
        }
        setAllItems([...allItems, newItem]);
        setKey(Math.random);
    }

    const setCompleted = (key) => {
        console.log(allItems);
        setAllItems(allItems.map(itm => {
            if(itm.id === key)
                itm.completed = !itm.completed;

            return itm;
        }));
        console.log("final");
        console.log(allItems);
    }

    return (
        <div className={classes.box}>
            <div className={classes.items}>
                {
                    allItems.map(itm => <div onClick={ ()=> setCompleted(itm.id)}><Item id = {itm.id} name={itm.name}
                                                                                                completed={itm.completed}/>
                    </div>)
                }
            </div>
            <div className={classes.innerBox}>
                <Button className={classes.clearButton} onClick={clearCompleted}>Clear Completed</Button>
            </div>
            <div className={classes.innerBox}>

                <TextField
                    id="name-input"
                    label="Task"
                    variant="outlined"
                    onChange={(e) => itemHandler(e.target.value)}
                />
                <Button className={classes.submitButton} onClick={submitHandler}>Submit</Button>
            </div>
        </div>
    )
}