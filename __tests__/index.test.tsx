/* globals describe, expect, it */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Layout from '../components/layouts/primary/PrimaryLayout'

/*
describe('Home', () => {
  it('renders a heading', () => {
    render(<Index />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
*/

describe('Layout page', () => {
  it('should render', () => {
    render(<Layout />)
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  })
})
