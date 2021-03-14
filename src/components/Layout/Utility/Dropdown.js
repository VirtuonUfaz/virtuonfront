import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const DropdownExampleSelection = (props) => (
  <Dropdown
    placeholder={props.placeholder}
    fluid
    selection
    options={props.option}
  />
)

export default DropdownExampleSelection