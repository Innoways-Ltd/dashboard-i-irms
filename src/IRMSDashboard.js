import React, { useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Packery from 'packery'

const IRMSDashboard = forwardRef((props, ref) => {
  const { items } = props
  const packeryInitialized = useRef(false)
  const initializePackery = () => {
    const layout = new Packery('#draggable', {
      itemSelector: '.item',
      layoutMode: 'masonry'
    })
    packeryInitialized.current = layout
    function packeryRefreshLayoutJS() {
      setTimeout(() => {
        layout.layout()
      }, 100)
    }

    function packeryRefreshLayoutWithoutIntervalJS() {
      layout.layout()
    }

    document.addEventListener('DOMContentLoaded', packeryRefreshLayoutJS);
    window.addEventListener('resize', packeryRefreshLayoutJS);
    packeryRefreshLayoutWithoutIntervalJS()
    return () => {
      layout.destroy()
    }
  }
  const reloadItems = () => {
    setTimeout(() => {
      packeryInitialized.current.reloadItems()
      packeryInitialized.current.layout()
    }, 100)
  }
  const onDragEnd = (e) => {
    props.onDragEnd(e)
    reloadItems()
  }
  useImperativeHandle(ref, () => ({
    layout() {
      reloadItems()
    }
  }))
  useEffect(() => {
    initializePackery()
    reloadItems()
  }, [])
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="draggable">
      {(provided) => (
        <div
            className="row"
            id="draggable"
             ref={provided.innerRef}
          {...provided.droppableProps}  
        >
          {items?.map((item, index) => {
            return (
              <Draggable
                key={item?.id}
                draggableId={item?.id}
                index={index}
              >
                {(provided) => (
                  <div                   
                    item={item.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`item ${item?.itemClass}`}
                  >
                    {item?.content}
                  </div>
                )}
              </Draggable>
            )
          })}
        </div>
      )}
    </Droppable>
    </DragDropContext>
  )
})
export default IRMSDashboard