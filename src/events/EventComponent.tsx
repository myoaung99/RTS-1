import React from "react";

const EventComponent: React.FC = () => {

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

    const onDragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event)
    };

    return <div>
    <input type="text" onChange={onChangeHandler}/>
      <div draggable onDragStart={onDragHandler}>Drag Me</div>
  </div>
}

export default EventComponent;