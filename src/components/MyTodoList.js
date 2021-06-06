import React from 'react'
import Task from './Task'

class MyTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 1,
                    name: 'Throw out the trash',
                    description: 'Collect all the unnecessary things. Put them in a garbage bag. Throw it out',
                    completed: true,
                },
                {
                    id: 2,
                    name: 'Prepare dinner',
                    description: 'Peel the potatoes, fry and cut the cucumber',
                    completed: false,
                },
                {
                    id: 3,
                    name: 'Go to the gym',
                    description: 'Collect water, collect a bag of things and walk to the gym',
                    completed: false,
                },
                {
                    id: 4,
                    name: 'Walk the dog',
                    description: 'Find the leash, find the dog, nuzzle the leash and go outside with the dog',
                    completed: true,
                },
                {
                    id: 5,
                    name: 'Change the wheels to summer ones',
                    description: 'Go to the garage, get replacement tires, take off the winter tires, put on the summer tires',
                    completed: false,
                },

            ]
        }
    }

    render() {
        return (
            <ul className="myTodoList">
                {this.state.tasks.map(task => (
                    <li><Task id={task.id} name={task.name} description={task.description} completed={task.completed} key={task.id} /></li>
                ))}
            </ul>
        )
    }
}

export default MyTodoList;
