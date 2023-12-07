import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'

import {screen, render,cleanup} from '@testing-library/react'

import {MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
expect.extend(matchers)

import Photos from '.'

describe('Photos Component',()=> {
    render (

            <Photos />
       
    )

    it('renders the Photos component with an image', () => {
        
      
        
        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();
      
        
        expect(imageElement).toHaveAttribute('src', '/freddie-mercury-71848_640.jpg');
      });
      

})
