import React from 'react'
import { Dropdown, IDropdownProps, Icon } from 'office-ui-fabric-react'
import styles from './dropdown.module.scss'

const CustomDropdown = (props: IDropdownProps) => (
  <Dropdown
    onRenderCaretDown={() => {
      return <Icon iconName="ArrowDown" className={styles.arrowDown} />
    }}
    styles={{
      label: {
        fontSize: '0.75rem',
        fontWeight: 500,
      },

      title: {
        fontSize: '0.75rem!important',
        fontWeight: 500,
        height: '1.625rem',
        lineHeight: '1.625rem',
      },
      dropdownOptionText: {
        fontSize: '0.75rem!important',
        boxShadow: 'border-box',
      },
      dropdownItem: {
        fontSize: '0.75rem!important',
        boxShadow: 'border-box',
        minHeight: '1.5rem',
      },
      dropdownItemSelected: {
        fontSize: '0.75rem!important',
        minHeight: '1.5rem',
        backgroundColor: '#e3e3e3',
      },
      root: {
        fontSize: '0.75rem',
        marginBottom: '10px',
      },
    }}
    {...props}
  />
)

export default CustomDropdown
