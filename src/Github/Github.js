import { useState } from 'react';
import SearchList from '../SearchDetail/SearchList';
import Container from '../Design/Container/Container';
import Input from '../Design/Input/Input';
import Button from '../Design/Button/Button';
import Header from '../Design/Header/Header';
import Footer from '../Design/Footer/Footer';

const Github = () => {
    const [input, setInput] = useState("");
    const [search, setSearch] = useState(null);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {
        if(input.length >= 4) {
            setSearch(input);
        }
    }

    const handleReset = () => {
        setInput("");
        setSearch("");
    }

    return (
        <>
            <Header />
            <Container className="container-margin-left">
                <h1>Search</h1>
                <div>
                    <Input
                        value={input}
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                    <Button
                        className="btn-margin-right"
                        onClick={handleClick}
                        active={input.length >= 4 ? true : false}
                        >Search
                    </Button>
                    <Button
                        color="warning"
                        onClick={handleReset}
                        >Reset
                    </Button>
                </div>
                {search && <SearchList username={search} />}
            </Container>
            <Footer />
        </>

    )
}

export default Github;