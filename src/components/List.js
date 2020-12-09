import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import styles from "../assets/styles.module.css";

export default class List extends React.Component {
    render() {
    const {title, date, todos} = this.props.info
    return(
            <Card>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{date}</Card.Meta>
                    <Card.Description>{todos}</Card.Description>
                </Card.Content>
            </Card>
        );
    }
}