import UseGithubApi from "../hooks/UseGithubApi";
import Image from "../Design/Image/Image";
import ListItem from "../Design/List/ListItem";
import List from "../Design/List/List";
import TimedLoader from "../TimedLoader/TimedLoader";
import Error from "../Design/Error/Error";

const SearchDetail = ({ username }) => {
    const { isLoading, data, error } = UseGithubApi(`https://api.github.com/users/${username}/followers`);
    
    if(isLoading) {
        return (
            <TimedLoader
                requirement={isLoading}
            />
        );
    }

    if(error) {
        return (
            <p>Er ging iets mis</p>
        )
    }

    return (
        <>
            <List className="list-flex">
                {data.map((user) => (
                    <ListItem
                        key={user.id}
                    >
                    <Image 
                        url={user.avatar_url}
                        className="avatar"
                        alt={user.login}
                    />
                    {user.login}
                </ListItem>
                ))}
            </List>
            {data.length === 0 && (
                <Error>
                    This user has no followers.
                </Error>
            )}
        </>
    )
}

export default SearchDetail;