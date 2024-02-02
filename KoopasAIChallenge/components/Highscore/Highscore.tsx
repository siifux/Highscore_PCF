import * as React from 'react'
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  Avatar,
  FluentProvider,
  Button
} from '@fluentui/react-components'
import './Highscore.css'
import { FC } from 'react'

export interface IHighScoreProps {
  name?: string
}

const items = [
  {
    player: {
      label: 'Tin Vu',
      photo:
        'https://media.licdn.com/dms/image/C4D03AQH443nslCONwQ/profile-displayphoto-shrink_800_800/0/1663161578498?e=1712188800&v=beta&t=zdojG2WqaiLBlXUUYiPHrM9sY-dxdSeie9Om5jYWtbE'
    },
    score: { label: '100' }
  },
  {
    player: {
      label: 'Remi ',
      photo:
        'https://media.licdn.com/dms/image/C5603AQGm0gRqmeuO1g/profile-displayphoto-shrink_800_800/0/1568199760080?e=1712188800&v=beta&t=Fy6-SlVafmVfZL8nsFDKeIyJxTG-vghe0XStJqReAws'
    },
    score: { label: '200' }
  }
]

const columns = [
  { columnKey: 'player', label: 'Player' },
  { columnKey: 'score', label: 'Highscore' }
]

export const HighScore: FC<IHighScoreProps> = (props) => {
  const [open, setOpen] = React.useState(false)
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  const onClickTrigger = () => {
    setOpen(!open)
  }

  return (
    <FluentProvider>
      <div className='button-container'>
        <Button ref={triggerRef} onClick={onClickTrigger}>
          {open ? 'Hide scores' : 'Show scores'}
        </Button>
      </div>
      {open && (
        <Table aria-label='Default table' className='scoreTable'>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHeaderCell key={column.columnKey}>{column.label}</TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TableCellLayout
                    media={
                      <Avatar
                        aria-label={item.player.label}
                        name={item.player.label}
                        image={{
                          src: item.player.photo
                        }}
                      />
                    }>
                    {item.player.label}
                  </TableCellLayout>
                </TableCell>
                <TableCell>{item.score.label}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </FluentProvider>
  )
}
