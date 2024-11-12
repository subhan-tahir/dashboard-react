import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
const Popover = ({popmessage}) => {
  return (

<>

<>
      {['top'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`} className="tooltip-top">
              {popmessage}
            </Tooltip>
          }
        >

          <Button variant="primary" className="popover-btn">?</Button>
        </OverlayTrigger>
      ))}
    </>

</>


)
}

export default Popover
