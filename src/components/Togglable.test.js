/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-unused-vars */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import '@testing-library/jest-dom/extend-expect' 
import { render, fireEvent } from '@testing-library/react'
import Togglable from "./Togglable";
import i18n from "../i18n/index.js";


describe('<Togglable />', () => {
    let component
    
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        component = render(
            <Togglable buttonLabel="show...">
                <div>tesaa</div> 
            </Togglable>
        )
    }
    )
    test('renders its children', () => {
        component.getByText('tesaa')
    })

    test('renders its children are not visible', () => {
        const el =component.getByText('tesaa')
        expect(el.parentNode).toHaveStyle('display: none')
    })

    test('after clicking the button, children are displayed', () => {
        const button = component.getByText('show...')
        fireEvent.click(button)
        const el = component.getByText('tesaa')
        expect(el.parentNode).not.toHaveStyle('display: none')
    })
    test('toggled content can be closed', () => {
        const button = component.getByText('show...')
        fireEvent.click(button)

        const el = component.getByText('tesaa')
        expect(el.parentNode).not.toHaveStyle('display: none')


        const cancelButton = component.getByText(i18n.TOGGLABLE.CANCEL_BUTTON)
        fireEvent.click(cancelButton)

        expect(el.parentNode).toHaveStyle('display: none')

    })

})

