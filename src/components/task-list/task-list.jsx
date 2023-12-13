import './task-list.css'
import { useMemo } from 'react'
import Task from '../task/task'
import { useSelector } from 'react-redux'

const TaskList = () => {
    const tasks = useSelector(state => state.tasks)

    const sortedTasks = useMemo(() => tasks.sort((a, b) => {
        if (a.closed === b.closed) {
            return 0
        }

        return a.closed ? 1 : -1
    }), [tasks])

    return <section className="task-list">
        <h2 className="task-list-title">Список задач</h2>
        <ul className="task-list-list">
            {sortedTasks.length > 0 && sortedTasks.map(task => <li key={task.id}>
                <Task task={task}/>
            </li>)}
            {sortedTasks.length === 0 && <li>
                <em>Нет задач</em>
            </li>}
        </ul>
    </section>
}

export default TaskList
