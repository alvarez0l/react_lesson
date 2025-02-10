import React from 'react';
const date = new Date(); const hours = date.getHours();
let styles = {};

function MainContent() {
    let result;
    if (hours > 3 && hours < 12) {
        result = 'morning';
        styles.background = "#87CEFA";
    } else if (hours >= 12 && hours < 17){
        result = 'day';
        styles.background = "#FFFACD";
    } else if (hours >= 17 && hours < 21) {
        result = 'aftermoon';
        styles.background = "#696969"; styles.color = "white";
    } else {
        result = 'night';
        styles.background = "#2F4F4F"; styles.color = "white";
    }
    return (
        <container>
            <h1 style={styles}>Good {result}!</h1>
        </container>
    )
};

export default MainContent;
