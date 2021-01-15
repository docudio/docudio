import { ArcherContainer, ArcherElement } from 'react-archer'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import React from 'react'

const rootStyle = { display: 'flex', justifyContent: 'center' }
const rowStyle = { margin: '200px 0', display: 'flex', justifyContent: 'space-between' }
const boxStyle = { padding: '10px', border: '1px solid black'  }

export default function Sample1 () {
  const inputEl = React.useRef(null)
  return (
    <div style={{ height: '500px', margin: '50px' }}>
      <ArcherContainer ref={inputEl} strokeColor='red'>
        <Draggable onDrag={inputEl.current ? inputEl.current.refreshScreen : undefined}>
          <div>

              <ArcherElement
                id='root'
                relations={[
                  {
                    targetId: 'element2',
                    targetAnchor: 'top',
                    sourceAnchor: 'bottom',
                    style: { strokeDasharray: '5,5' }
                  }
                ]}
              >
                <div style={boxStyle}>System 1</div>
              </ArcherElement>
          </div>
        </Draggable>
        
        <Draggable onDrag={inputEl.current ? inputEl.current.refreshScreen : undefined}>

            <div>
              <ArcherElement
                id='element2'
                relations={[
                  {
                    targetId: 'element3',
                    targetAnchor: 'left',
                    sourceAnchor: 'right',
                    style: { strokeColor: 'blue', strokeWidth: 1 },
                    label: <div style={{ marginTop: '-20px' }}>Arrow 2</div>
                  }
                ]}
              >
                <div style={boxStyle}>System 2</div>
              </ArcherElement>
          </div>
        </Draggable>

        <Draggable onDrag={inputEl.current ? inputEl.current.refreshScreen : undefined}>
          <div >

              <ArcherElement id='element3'>
                <div style={boxStyle}>System 3</div>
              </ArcherElement>
          </div>
        </Draggable>

        <Draggable onDrag={inputEl.current ? inputEl.current.refreshScreen : undefined}>
          <div style={rootStyle}>

              <ArcherElement
                id='element4'
                relations={[
                  {
                    targetId: 'root',
                    targetAnchor: 'right',
                    sourceAnchor: 'left',
                    label: 'Arrow 3'
                  }
                ]}
              >
                <div style={boxStyle}>System 4</div>
              </ArcherElement>
          </div>

        </Draggable>
      </ArcherContainer>
    </div>
  )
}
