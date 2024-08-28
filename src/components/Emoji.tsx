import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/arrow.png";
import thumbsUp from "../assets/like.png"
interface Props{
    rating: number
}
function Emoji({rating}: Props) {
    if (rating < 3) return null
    const emojiMap: {[key: number] : ImageProps} = {
        // 3:{src : thumbsDown, alt: "thumbs down"},
        4: {src: thumbsUp, alt: "thumbs up", boxSize: "19px"},
        5: {src:bullsEye, alt: "bulls eye", boxSize: "25px"}
    }
  return (
    <Image marginTop={1} {...emojiMap[rating]} />


)
}

export default Emoji