import * as React from 'react'
import { FluentProvider, Label, webLightTheme } from '@fluentui/react-components'
import { HighScore } from './components/Highscore/Highscore'

export interface IHelloWorldProps {
  name?: string
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    return (
      <FluentProvider theme={webLightTheme}>
        <HighScore />
      </FluentProvider>
    )
  }
}
