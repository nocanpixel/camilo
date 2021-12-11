import { Grid } from "@mui/material";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { v4 as uuid } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const itemsFromBackend = [
    { id: uuid(), tech: 'Technologies', content: "JavaScript", url: "https://cdn.worldvectorlogo.com/logos/javascript-2.svg" },
    { id: uuid(), tech: 'Frontend', content: "ReactJS", url: "https://cdn.worldvectorlogo.com/logos/react-1.svg" },
    { id: uuid(), tech: 'Frontend', content: "NextJS", url: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" },
    { id: uuid(), tech: 'Technologies', content: "HTML", url: "https://cdn-icons.flaticon.com/png/512/4817/premium/4817551.png?token=exp=1639000108~hmac=8803a2424b9f0fc4dba02d5d90205b43" },
    { id: uuid(), tech: 'Technologies', content: "CSS", url: "https://cdn4.iconfinder.com/data/icons/blackicon/54/css3_icon-128.png" },
    { id: uuid(), tech: 'Technologies', content: "PHP", url: "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/php-128.png" },
    { id: uuid(), tech: 'Backend', content: "NodeJS", url: "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-128.png" },
    { id: uuid(), tech: 'Backend', content: "Laravel 8", url: "https://cdn4.iconfinder.com/data/icons/logos-3/256/laravel-128.png" },
    { id: uuid(), tech: 'Backend', content: "GraphQL", url: "https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg" },
];

const columnsFromBackend = {
    [uuid()]: {
        name: "Frontend/Fullstack",
        items: itemsFromBackend.filter((ele) => ele.tech === 'Frontend' ? (ele) : '')
    },
    [uuid()]: {
        name: "Technologies",
        items: itemsFromBackend.filter((ele) => ele.tech === 'Technologies' ? (ele) : '')
    },
    [uuid()]: {
        name: "Backend",
        items: itemsFromBackend.filter((ele) => ele.tech === 'Backend' ? (ele) : '')
    }
};
const onDragEnd = (result, columns, setColumns) => {
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
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
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

export default function Skills({ styles, loaded }) {
    const [columns, setColumns] = useState(columnsFromBackend);

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 2)) & 0xff;
          color += `00${value.toString(12)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }

    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.charAt()}`,
        };
      }
    return (
        <Grid style={{marginTop:'30px',width:'74%',margin:'auto'}} container spacing={2}>
            <Grid item xs={12} sm={12}>
            <h2>Skills( )</h2>
            <p>These are some of the technologies I have been working on. I like coding from scratch and enjoy bringing my ideas to life in the browser. <span style={{color:'white',fontWeight:'bolder'}}> Drag and drop the list below!</span></p>
                {loaded ? (

                    <div className={styles.beautyDnd}>
                        <DragDropContext
                            onDragEnd={result => onDragEnd(result, columns, setColumns)}
                        >
                            {Object.entries(columns).map(([columnId, column], index) => {
                                return (
                                    <div
                                        style={{
                                            textAlign:'center',
                                        }}
                                        key={columnId}
                                    >
                                        <h2 style={{ color: 'black' }} >{column.name}</h2>
                                        <div style={{ margin: 8 }}>
                                            <Droppable droppableId={columnId} key={columnId}>
                                                {(provided, snapshot) => {
                                                    return (
                                                        <div
                                                            {...provided.droppableProps}
                                                            ref={provided.innerRef}
                                                            style={{
                                                                background: snapshot.isDraggingOver
                                                                    ? "#14021b"
                                                                    : "black",
                                                                padding: 10,
                                                                width: '100%',
                                                                minHeight: '100px',
                                                                position: 'relative',
                                                                borderRadius:10,
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
                                                                            return (
                                                                                <div
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}
                                                                                    style={{
                                                                                        borderRadius:10,
                                                                                        userSelect: "none",
                                                                                        padding: 16,
                                                                                        margin: "0 0 8px 0",
                                                                                        minHeight: "50px",
                                                                                        backgroundColor: snapshot.isDragging
                                                                                            ? "#3f216c"
                                                                                            : "#0f1217",
                                                                                        color: "white",
                                                                                        ...provided.draggableProps.style
                                                                                    }}
                                                                                >
                                                                                    <Stack direction="row" spacing={3} style={{display: 'flex', alignItems: 'center' }}>
                                                                                        
                                                                                        <Avatar {...stringAvatar(`${item.content}`)} />
                                                                                        <span>{item.content}</span>
                                                                                    </Stack>
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
                                        </div>
                                    </div>
                                );
                            })}
                        </DragDropContext>
                    </div>
                ) : (
                    <h1>Carganding</h1>
                )}
            </Grid>
{/*             <Grid item xs={12} md={12} style={{ display: 'flex', alignItems: 'center' }}>
                <div className={styles.text__container}>
                    <h2>Technologies( )</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra lorem a rhoncus pellentesque. Proin elit nulla, tristique eget nulla vel, ullamcorper volutpat purus. Fusce elementum at orci vitae varius. Aliquam imperdiet turpis ut purus venenatis elementum. Integer lorem neque, placerat sed facilisis sit amet, cursus sit amet dui. Integer tincidunt mattis sapien eget scelerisque. Pellentesque imperdiet euismod elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                    <a className={styles.quotes}> Juan camilo Carreño</a>
                </div>
            </Grid> */}
        </Grid>
    );
};