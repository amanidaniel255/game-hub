import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
interface Props{
    gameQuery: GameQuery
}
function GameHeading({gameQuery}: Props) {
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`
  return (
<Heading marginY={5}>{heading}</Heading>

)
}

export default GameHeading