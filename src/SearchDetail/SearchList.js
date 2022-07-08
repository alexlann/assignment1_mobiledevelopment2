import { useState, useEffect } from "react";

import UseGithubApi from "../hooks/UseGithubApi";
import ListItem from "../Design/List/ListItem";
import Image from "../Design/Image/Image";
import List from "../Design/List/List";
import Detail from "../Design/Detail/Detail";
import Error from "../Design/Error/Error";
import Container from "../Design/Container/Container";
import UserDetail from "./UserDetail";
import TimedLoader from "../TimedLoader/TimedLoader";

const GithubDetail = ({ username }) => {
    const { isLoading, data, error } = UseGithubApi(`https://api.github.com/search/users?q=${username}`);
    const [currentUser, setCurrentUser] = useState();
    
    // clear detail when searching new username
    useEffect(() => {
        setCurrentUser("");
    }, [username]);
    
    // return loader
    if(isLoading) {
        return (
            <TimedLoader
                requirement={isLoading}
            />
        );
    }

    // return error
    if(error) {
        return (
            <Error color="warning">Something went wrong.</Error>
        );
    }

    // set user for detail
    const handleEventClick = (user) => {
        setCurrentUser(user);
    }

    // clear user for detail
    const handleClose = () => {
        setCurrentUser("");
    }

    return (
        <>
            {error && (
                <Error color="warning">Something went wrong.</Error>
            )}
            {data.items.length !== 0 && (
                <>
                    <p><strong>{data.items.length} results</strong></p>
                    <Container className="container-flex">
                        <List className="list-margin-bottom">
                            {data.items.map((user) => (
                                <ListItem
                                    onClick={() => handleEventClick(user)}
                                    key={user.id}
                                    active={currentUser.login === user.login ? true : false}
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
                        {currentUser && (
                            <Detail
                                title={currentUser.login}
                                onClose={handleClose}
                            >
                                <UserDetail
                                    username={currentUser.login}
                                />
                            </Detail>
                        )}
                    </Container>
                </>
            )}
            {data.items.length === 0 && (
                <Error>
                    No search results found. Try searching something else.
                </Error>
            )}

        </>
    )
}

export default GithubDetail;