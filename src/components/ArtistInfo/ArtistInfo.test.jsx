import React from 'react'
import { describe, it, expect, beforeEach, afterEach,vi } from 'vitest'

import {screen, render,cleanup} from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
expect.extend(matchers)

import ArtistInfo from '.'

describe ('ArtistInfo Component' ,()=>{

    beforeEach(()=> {
        render(<ArtistInfo />)

    })

    afterEach(()=>{
        cleanup()
    })

    it('should display a heading with appropriate text', ()=>{
        const element=screen.getByRole('heading')
        expect(element).toBeInTheDocument()
    })

  
    it('should display right text in paragraphs', ()=> {
        const Paragraph1 = screen.getByText('Genre: Rock');
        const Paragraph2 = screen.getByText(/Freddie Mercury \(born Farrokh Bulsara; 5 September 1946 – 24 November 1991\) was a British singer and songwriter/);
        expect(Paragraph1).toBeInTheDocument();
        expect(Paragraph2).toBeInTheDocument();
})
  
})
