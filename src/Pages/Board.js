import { AddBox, Brightness1 } from "@mui/icons-material";
import { Box, Button, Checkbox, Grid, IconButton, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { data_for_board } from '../dummyData'
import Card from "../Components/Card";
import { Group_639 } from "../assets/images";
import ImageIcon from "../Components/ImageIcon";
const onDragEnd = (result, columns, setColumns) => {
    // console.log('result, columns, setColumns', result, columns)
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]:
            {
                // name: source.droppableId,
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]:
            {
                // name: source.droppableId,
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    maxWidth: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};
function Board() {
    const [columns, setColumns] = useState(data_for_board);
    const [newId, setNewId] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [selectImage, setSelectImage] = useState(false)
    const openAddModal = () => {
        setOpenModal(true)
    }
    const [taskForm, setTaskForm] = useState({
        chip: 'Low'
    })
    const taskTypes = {
        Low: 'toDo',
        High: 'progress',
        Completed: 'done'
    }
    const saveNewTask = (e) => {
        e.preventDefault()
        let currentType = taskTypes[taskForm?.chip]
        // console.log('currentType', currentType)
        // console.log('columns', columns)
        let obj = {
            id: (newId).toString(),
            chip: taskForm?.chip,
            head: taskForm?.title,
            Task: taskForm?.task || "",
            taskImage: taskForm?.taskImage,
            comments: Math.floor(Math.random() * 30),
            files: Math.floor(Math.random() * 20),
            images: [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
        }
        let obj1 = {
            ...columns,
            [currentType]: {
                ...columns[currentType],
                items: [...columns[currentType].items, obj]
            }

        }
        setColumns(obj1)
        setTaskForm({
            chip: "Low"
        })
        setSelectImage(false)
        setOpenModal(false)

        // console.log('obj1', obj1)
    }

    const handleChangeForm = (e) => {
        setTaskForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    useEffect(() => {
        if (Object.keys(columns).length > 0) {
            let flatArr = Object.keys(columns).map((item) => columns[item].items)
            setNewId(flatArr.flatMap((it) => it)?.length + 1 || 1)
        }
    }, [columns])

    return (<>
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>

                <form onSubmit={saveNewTask}>
                    <Grid container gap={2}>
                        <Grid item container >
                            Task id : {newId}
                        </Grid>
                        <Grid item container >
                            <TextField label="Title" fullWidth size="small" required value={taskForm?.title || ''} name="title" onChange={handleChangeForm} />
                        </Grid>
                        <Grid item container >
                            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                <Checkbox checked={selectImage} aria-label="Add Task image" onChange={(e) => setSelectImage((prev) => !prev)} />
                                <span>Add Task image</span>
                            </div>
                            {selectImage ?
                                <TextField label="Task Image URL" fullWidth size="small" required value={taskForm?.taskImage || ''} type="url" name="taskImage" onChange={handleChangeForm} />
                                : <TextField label="Task" fullWidth size="small" required value={taskForm?.task || ''} name="task" onChange={handleChangeForm} />
                            }
                        </Grid>
                        <Grid item container >
                            <Select value={taskForm?.chip} onChange={handleChangeForm} name="chip" fullWidth size="small">
                                <MenuItem value="Low">LOW </MenuItem>
                                <MenuItem value="High">HIGH </MenuItem>
                                <MenuItem value="Completed">COMPLETED </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item container >
                            <Button type="submit" fullWidth size="small" variant="contained">Save task</Button>

                        </Grid>

                    </Grid>

                </form>


            </Box>
        </Modal>
        <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        // onDragStart={(result) => console.log('result', result)}
        >
            <Grid container justifyContent={'space-between'} style={{ padding: '20px', marginBottom: 90 }}  >

                {Object.entries(columns).map(([columnId, column], index1) => {

                    return <Grid container item xs={12} lg={4} sm={6} md={4} mt={2}>
                        <Grid container justifyContent={'flex-start'} alignItems={'start'} item
                            style={{
                                backgroundColor: '#F5F5F5',
                                borderRadius: 12,
                                // width: '90vw'
                                alignContent: 'start',
                                flexGrow: 1,
                                maxWidth: window.innerWidth > 600 ? '95%' : '100%',
                                overflow: 'hidden!important'
                            }}
                            key={index1}
                        >
                            <Grid item xs={12} md={12} sm={12} lg={12} container alignItems='center' p={2} justifyContent={'center'}
                            >
                                <Grid item container xs={10} md={10} sm={10} lg={10} alignItems='center' pl={2} gap={1} alignContent={'center'}>

                                    <Brightness1 style={{ color: column.color, fontSize: "10px" }} />
                                    <Typography color="black" fontWeight={500}>{column.title}</Typography>
                                    &nbsp;
                                    <IconButton style={{ background: 'lightgray', height: 19, width: 19, fontSize: 14 }}>
                                        {(column?.items?.length || 0)}
                                    </IconButton>
                                </Grid>
                                <Grid item container xs={2} md={2} sm={2} lg={2} alignItems='center' justifyContent={'flex-end'}>

                                    {
                                        index1 == 0 ?
                                            <IconButton onClick={openAddModal}>
                                                <AddBox style={{ color: 'darkviolet' }} />
                                            </IconButton>
                                            : null
                                    }
                                </Grid>
                                <Grid item xs={12} md={12} sm={12} lg={12} borderBottom={`2px solid ${column.color}`} p={1}>
                                </Grid>
                            </Grid>
                            <Droppable droppableId={columnId} key={columnId}

                            >

                                {(provided, snapshot) => {

                                    return (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver
                                                    ? "#5030E514"
                                                    : "whitesmoke",
                                                padding: 10,
                                                width: '100%',
                                                borderRadius: 8,
                                                // height: '100%',
                                            }}
                                        >
                                            {column.items.map((item, index) => {
                                                return (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={item.id}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => {
                                                            // console.log('provided', provided)
                                                            // console.log('snapshot', snapshot)

                                                            return (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{

                                                                        userSelect: "none",
                                                                        padding: 16,
                                                                        borderRadius: 12,
                                                                        margin: "0 0 8px 0",
                                                                        minHeight: "50px",
                                                                        backgroundColor: snapshot.isDragging
                                                                            ? "whitesmoke"
                                                                            : "white",
                                                                        color: "white",
                                                                        // minWidth: '90%',
                                                                        marginTop: index > 0 ? 15 : 0,
                                                                        ...provided.draggableProps.style,
                                                                        // rotate: "20deg",
                                                                        // rotate: snapshot.isDragging ? "5deg" : 'none',
                                                                        border: snapshot.isDragging ? '1px dashed darkblue' : 'none'
                                                                    }}
                                                                >
                                                                    <Card item={item} index={index} />
                                                                </div>
                                                            );
                                                        }}
                                                    </Draggable>
                                                );
                                            })}
                                            {provided.placeholder}
                                        </div>
                                    );
                                }}
                            </Droppable>
                        </Grid>
                    </Grid>
                })}
            </Grid>
        </DragDropContext >

    </>
    );
}

export default Board;
