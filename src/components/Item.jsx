import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    box: {
        color: "orange",
        width: "200px",
        margin: "10px",
        marginLeft:"30px",
        textAlign:"center",
        "&:hover": {
            cursor: "pointer",
        }


    }
});
const Item = ({name, completed}) => {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            {
                completed ? <h3 style={{
                        textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        {name}
                    </h3> :
                    <h3>
                        {name}
                    </h3>
            }

        </div>
    )
};

export default Item;