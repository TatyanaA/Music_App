import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'

import {screen, render,cleanup} from '@testing-library/react'

import {MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
expect.extend(matchers)

import NavBar from '.'

describe('NavBar Component',()=> {
    render (
        // Its like mock router
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    )

    it('displays a navbar with 2 children' ,() => {
        const nav=screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
        // screen.debug()
        expect(nav.childNodes.length).toBe(2)
    })
})
