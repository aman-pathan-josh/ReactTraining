export type TasksList = {
    id:number,
    task:string,
    status:boolean
}

export type TaskProps = {
    tasks: Array<TasksList>,
    handleComplete: Function,
    handleDelete: Function
}
