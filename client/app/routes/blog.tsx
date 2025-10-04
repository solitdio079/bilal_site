import InfiniteEntity from "~/comps/InfiniteEntity";
import PostCard from "~/comps/PostCard";
import { serverUrl } from "~/utils/serverUrl";

export default function Blog(){
    return(<>
    <InfiniteEntity
        loaderRoute={"/postsLoader"}
        fetchMoreURL={serverUrl + "/posts/"}
        UnitEntity={PostCard}
      />
    </>)
}