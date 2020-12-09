import React from "react";
import {
  Card,
  Container,
  Segment,
  Form,
  Divider,
  Header,
  Checkbox,
  Button,
  label,
  TextArea
} from "semantic-ui-react";
import styles from "../assets/styles.module.css";
import List from "./List";

export default class ListShower extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date: '',
            todos: '',
            lists: []
        }
    }

    addNewList = async () => {
        const {title, date, todos, lists} = this.state
        let listArr = [...lists]
        listArr.push({title,date,todos})
        await this.setState({
            lists: listArr,
            title: '',
            date: '',
            todos: ''
        })
    };

    render() {
        const {title,date,todos} = this.state
        return (
            <Card raised className = {styles.ListShower}>
                <Card.Content>
                    <Card fluid>
                        <Card.Header style = {{padding: '2.5%'}}>
                            <h2>My Lists</h2>
                        </Card.Header>
                        <Card.Content>
                            <Card.Group>
                                {this.state.lists.map(list => <List info = {list} />)}
                            </Card.Group>
                        </Card.Content>
                    </Card>
                    <Divider></Divider>
                    <Card fluid>
                        <Card.Header  style = {{padding: '2.5%'}}>
                            <h2>Add new list</h2>
                        </Card.Header>
                        <Card.Content>
                            <Form>
                                <Form.Field>
                                <label>Title</label>
                                <input placeholder = 'Title' value = {title} onChange = {(e) => this.setState({title: e.target.value})} />
                                </Form.Field>

                                <Form.Field>
                                <label>Date</label>
                                <input placeholder = 'Date' value = {date} onChange = {(e) => this.setState({date: e.target.value})} />
                                </Form.Field>

                                <Form.Field>
                                <label>To-do's</label>
                                <TextArea placeholder = 'To-dos' value = {todos} onChange = {(e) => this.setState({todos: e.target.value})} />
                                </Form.Field>

                                <Button onClick = {this.addNewList}>Submit</Button>
                            </Form>
                        </Card.Content>
                    </Card>
                </Card.Content>
            </Card>
        );
    }
}