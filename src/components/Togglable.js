import React, { forwardRef,useState,useImperativeHandle } from 'react'
import ProTypes from 'prop-types'
import i18n from '../i18n/index.js'

const Togglable = forwardRef(({ children,buttonLabel='show'},ref) => {
    const [visible, setVisible] = new useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }


    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })


    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>
                   {buttonLabel}
                </button>
            </div>

            <div style={showWhenVisible} >
                {children}
                <button onClick={toggleVisibility}>
                    {i18n.TOGGLABLE.CANCEL_BUTTON}
                </button>
            </div>
        </div>
    )
})

Togglable.displayName='Togglable'

Togglable.propTypes = {
    buttonLabel: ProTypes.string
}



export default Togglable