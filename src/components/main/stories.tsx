import Main from './index'
// informar meta dados
import { Story, Meta } from '@storybook/react/types-6-0'
import { text, withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

// render Main component
export const Basic: Story = () => (
  <Main
    title={text('title', 'React Avançado')}
    description={text(
      'description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
)
