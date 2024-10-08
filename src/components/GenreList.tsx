import { HStack, List, ListItem,Image, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props{
    onSelectGenre: (genre: Genre) => void,
    selectedGenre : Genre | null
}
function GenreList({selectedGenre, onSelectGenre}:Props) {
  const { data, isLoading,error } = useGenres();
  if(error) return null;
  if (isLoading) return <Spinner/>
  return (
    <>
    <Heading fontSize="2xl" marginBottom={5}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
            <HStack>
                <Image boxSize="32px" objectFit="cover" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} variant="link" onClick={()=>onSelectGenre(genre) } fontSize="lg">{genre.name}</Button >
            </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
}

export default GenreList;
