import {  Grid, GridItem, Show } from '@chakra-ui/react'
function App() {
  return (
    <div>
<Grid templateAreas={{
  base: `"nav" "main"`,
  lg: `"nav nav" "aside main"`
}}>
  <GridItem area="nav" bg="coral">NAV</GridItem>
  <Show above='lg'>
  <GridItem area="aside" bg="gold">Gold</GridItem>

  </Show>
  <GridItem area="main" bg="dodgerblue">Main</GridItem>

</Grid>

    </div>
  )
}

export default App