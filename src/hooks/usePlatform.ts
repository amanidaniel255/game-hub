import Platforms from "../data/Platforms"
interface Platform{
    id: number,
    name: string,
    slug: string
}
const usePlatform = ()=> ({data: Platforms,  error: null})
 export default usePlatform